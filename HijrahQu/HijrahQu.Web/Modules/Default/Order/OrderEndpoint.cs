
namespace HijrahQu.Default.Endpoints
{
    using Entities;
    using Microsoft.Reporting.WebForms;
    using OfficeOpenXml;
    using Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Configuration;
    using System.Data;
    using System.Data.Linq;
    using System.Globalization;
    using System.IO;
    using System.Web.Mvc;
    using MyRepository = Repositories.OrderRepository;
    using MyRow = Entities.OrderRow;
    using System.Linq;
    using Excel = Microsoft.Office.Interop.Excel;
    using System.Web.Script.Serialization;
    using System.Net;
    using Newtonsoft.Json;
    using System.Net.Http;
    using System.Text;

    [RoutePrefix("Services/Default/Order"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class OrderController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }


        [HttpPost]
        public ExcelMassUploadImportResponse ExcelImport(IUnitOfWork uow, ExcelMassUploadImportRequest request)
        {

            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var response = new ExcelMassUploadImportResponse();
            response.ErrorList = new List<string>();

            // Get batch of row number/index
            var numberList = request.TotalRecord;

            var p = MyRow.Fields;


            /////////////////////////////////////////////////////////////
            //ITEM INFO UPLOAD
            /////////////////////////////////////////////////////////////
            var wsItemInfo = ep.Workbook.Worksheets[1];
            for (var currRow = 2; currRow <= (numberList + 2); currRow++)
            {
                try
                {
                    var order = new MyRow();
                    try
                    {
                        order.CustomerCustomerName = wsItemInfo.Cells[currRow, 1].Value.ToString();
                        order.CustomerHandphone = wsItemInfo.Cells[currRow, 2].Value.ToString();
                        order.CustomerAddress = wsItemInfo.Cells[currRow, 3].Value.ToString();
                        order.OrderStatus = "New Order";
                        new OrderRepository().Create(uow, new SaveRequest<MyRow>() { Entity = order });
                        response.Inserted = response.Inserted + 1;
                    }
                    catch (Exception ex)
                    {
                        throw new Exception(ex.Message);
                    }
                }
                catch (Exception x)
                {
                    string msg = "Row:" + currRow.ToString() + " - " + x.Message;
                    response.ErrorList.Add(x.Message);
                }
            }
            return response;
        }

        [HttpPost]
        public FileContentResult CreateJOB(IDbConnection connection, ExcelMassUploadImportRequest request)
        {
            request.CheckNotNull();
            if (request.IdExport == null) throw new ValidationError("Batch Id Cannot NULL");
            var template = Server.MapPath(ConfigurationManager.AppSettings["JOBTemplate"].ToString());
            var filename = "JOB_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx";
            var templateFile = new System.IO.FileInfo(template);
            var stream = new MemoryStream();

            using (var package = new ExcelPackage(templateFile, false))
            {

                var workbook = package.Workbook;
                var worksheet = package.Workbook.Worksheets[1];
                var fields = MyRow.Fields;

                string[] idAll = request.IdExport[0].Split(new char[] { ',' });
                int idxData = 1;
                int idxCol = 2;
                foreach (string id in idAll)
                {
                    HijrahquDataContext ctx = new HijrahquDataContext();
                    List<ViewOrder> order = ctx.ViewOrders.Where(x => x.OrderID == int.Parse(id)).ToList();
                    //string cells = "";
                    worksheet.Cells["A" + idxCol.ToString()].Value = order[0].NamaPengirim;
                    worksheet.Cells["B" + idxCol.ToString()].Value = "TAMBUN UTARA, BEKASI";
                    worksheet.Cells["E" + idxCol.ToString()].Value = order[0].NamaPengirim;
                    worksheet.Cells["F" + idxCol.ToString()].Value = "0877-8090-1125";
                    worksheet.Cells["G" + idxCol.ToString()].Value = order[0].CustomerName;
                    worksheet.Cells["H" + idxCol.ToString()].Value = order[0].Address;
                    worksheet.Cells["I" + idxCol.ToString()].Value = order[0].CustomerName;
                    worksheet.Cells["L" + idxCol.ToString()].Value = order[0].CustomerName;
                    worksheet.Cells["M" + idxCol.ToString()].Value = order[0].Handphone;
                    worksheet.Cells["N" + idxCol.ToString()].Value = "1";
                    worksheet.Cells["O" + idxCol.ToString()].Value = "1";
                    worksheet.Cells["P" + idxCol.ToString()].Value = "BUKU SYAMAIL MUHAMMADIYAH";
                    idxData++;
                    idxCol++;
                }
                return ExcelContentResult.Create(package.GetAsByteArray(), filename);
            }
        }

        [HttpPost]
        public ExcelMassUploadImportResponse SynchResi(IUnitOfWork uow, ExcelMassUploadImportRequest request)
        {

            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var response = new ExcelMassUploadImportResponse();
            response.ErrorList = new List<string>();

            // Get batch of row number/index
            var numberList = request.TotalRecord;

            var p = MyRow.Fields;

            int receivedCount = 0;

            /////////////////////////////////////////////////////////////
            //ITEM INFO UPLOAD
            /////////////////////////////////////////////////////////////
            var wsItemInfo = ep.Workbook.Worksheets[1];
            if (request.Expedisi == "JNE")
            {
                for (var currRow = 4; currRow <= (numberList + 4); currRow++)
                {
                    try
                    {
                        var noResi = new NoResiRow();
                        try
                        {
                            var dateCode = DateTime.Parse(wsItemInfo.Cells[currRow, 4].Value.ToString()).Year.ToString() +
                                DateTime.Parse(wsItemInfo.Cells[currRow, 4].Value.ToString()).Month.ToString() +
                                DateTime.Parse(wsItemInfo.Cells[currRow, 4].Value.ToString()).Day.ToString();
                            noResi.CustomerName = wsItemInfo.Cells[currRow, 11].Value.ToString();
                            noResi.Handphone = "";
                            noResi.Expedisi = "JNE";
                            noResi.ExpedisiService = wsItemInfo.Cells[currRow, 5].Value.ToString();
                            noResi.Destination = wsItemInfo.Cells[currRow, 8].Value.ToString();
                            noResi.Ongkir = decimal.Parse(wsItemInfo.Cells[currRow, 12].Value.ToString());
                            noResi.NoResi = "0" + wsItemInfo.Cells[currRow, 3].Value.ToString();
                            noResi.SendDate = dateCode + "_" + noResi.CustomerName.Trim();
                            noResi.JNEDate = DateTime.Parse(wsItemInfo.Cells[currRow, 4].Value.ToString());
                        }
                        catch (Exception ex)
                        {
                            throw new Exception(ex.Message);
                        }

                        ListRequest req = new ListRequest();
                        req.EqualityFilter = new Dictionary<string, object>
                    {
                        { "CustomerName", noResi.CustomerName },
                        { "OrderStatus", "Printed" }
                    };

                        var cust = new ViewOrderRepository().List(uow.Connection, req);

                        if (cust.Entities.Count > 0)
                        {
                            RetrieveRequest retReq = new RetrieveRequest();
                            retReq.EntityId = cust.Entities[0].OrderId;
                            var order = new OrderRepository().Retrieve(uow.Connection, retReq);
                            order.Entity.NoResi = noResi.NoResi;
                            order.Entity.OrderStatus = "Delivery";
                            order.Entity.Ongkir = noResi.Ongkir;
                            new OrderRepository().Update(uow, new SaveRequest<OrderRow>()
                            { EntityId = order.Entity.OrderId, Entity = order.Entity });
                            new NoResiRepository().Create(uow, new SaveRequest<NoResiRow>() { Entity = noResi });
                            receivedCount++;
                        }
                    }
                    catch (Exception x)
                    {
                        string msg = "Row:" + currRow.ToString() + " - " + x.Message;
                        response.ErrorList.Add(x.Message);
                    }
                }
            }
            else
            {
                for (var currRow = 2; currRow <= (numberList); currRow++)
                {
                    try
                    {
                        var noResi = new NoResiRow();
                        try
                        {
                            //var dateCode = DateTime.Parse(wsItemInfo.Cells[currRow, 8].Value.ToString()).Year.ToString() +
                            //    //DateTime.Parse(wsItemInfo.Cells[currRow, 8].Value.ToString()).Month.ToString() +
                            //    //DateTime.Parse(wsItemInfo.Cells[currRow, 8].Value.ToString()).Day.ToString();
                            noResi.CustomerName = wsItemInfo.Cells[currRow, 6].Value.ToString();
                            noResi.Handphone = wsItemInfo.Cells[currRow, 7].Value.ToString();
                            noResi.Expedisi = request.Expedisi;
                            noResi.ExpedisiService ="Standart";
                            //noResi.Destination = wsItemInfo.Cells[currRow, 8].Value.ToString();
                            //noResi.Ongkir = decimal.Parse(wsItemInfo.Cells[currRow, 12].Value.ToString());
                            noResi.NoResi = wsItemInfo.Cells[currRow, 1].Value.ToString();
                            noResi.SendDate = wsItemInfo.Cells[currRow, 8].Value.ToString();
                            noResi.NINJADate = wsItemInfo.Cells[currRow, 2].Value.ToString();
                            noResi.StatusPengiriman = wsItemInfo.Cells[currRow, 3].Value.ToString();
                        }
                        catch (Exception ex)
                        {
                            throw new Exception(ex.Message);
                        }

                        ListRequest req = new ListRequest();
                        req.EqualityFilter = new Dictionary<string, object>
                        {
                            { "Handphone", noResi.Handphone.Replace("+", "") },
                            { "OrderStatus", "Printed" }
                        };

                        var cust = new ViewOrderRepository().List(uow.Connection, req);

                        ListRequest req1 = new ListRequest();
                        req1.EqualityFilter = new Dictionary<string, object>
                        {
                            { "Handphone", noResi.Handphone.Replace("+", "") },
                            { "OrderStatus", "NewOrder" }
                        };

                        var cust1 = new ViewOrderRepository().List(uow.Connection, req1);


                        if (cust.Entities.Count > 0)
                        {
                            RetrieveRequest retReq = new RetrieveRequest();
                            retReq.EntityId = cust.Entities[0].OrderId;
                            var order = new OrderRepository().Retrieve(uow.Connection, retReq);
                            order.Entity.NoResi = noResi.NoResi;
                            if (noResi.StatusPengiriman == "Lengkap")
                            {
                                order.Entity.OrderStatus = "Received";
                            }
                            //order.Entity.Ongkir = noResi.Ongkir;
                            new OrderRepository().Update(uow, new SaveRequest<OrderRow>()
                            {
                                EntityId = order.Entity.OrderId,
                                Entity = order.Entity
                            });
                            new NoResiRepository().Create(uow, new SaveRequest<NoResiRow>() { Entity = noResi });
                            receivedCount++;
                        }

                        if (cust1.Entities.Count > 0)
                        {
                            RetrieveRequest retReq = new RetrieveRequest();
                            retReq.EntityId = cust1.Entities[0].OrderId;
                            var order = new OrderRepository().Retrieve(uow.Connection, retReq);
                            order.Entity.NoResi = noResi.NoResi;
                            if (noResi.StatusPengiriman == "Lengkap")
                            {
                                order.Entity.OrderStatus = "Received";
                            }
                            //order.Entity.Ongkir = noResi.Ongkir;
                            new OrderRepository().Update(uow, new SaveRequest<OrderRow>()
                            {
                                EntityId = order.Entity.OrderId,
                                Entity = order.Entity
                            });
                            new NoResiRepository().Create(uow, new SaveRequest<NoResiRow>() { Entity = noResi });
                            receivedCount++;
                        }
                    }
                    catch (Exception x)
                    {
                        string msg = "Row:" + currRow.ToString() + " - " + x.Message;
                        response.ErrorList.Add(x.Message);
                    }
                }
            }
            response.Inserted = receivedCount;
            return response;
        }

        [HttpPost]
        public ExcelMassUploadImportResponse UploadDataClosing(IUnitOfWork uow, ExcelMassUploadImportRequest request)
        {

            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var response = new ExcelMassUploadImportResponse();
            response.ErrorList = new List<string>();

            // Get batch of row number/index
            var numberList = request.TotalRecord;

            var p = MyRow.Fields;

            int receivedCount = 0;

            /////////////////////////////////////////////////////////////
            //ITEM INFO UPLOAD
            /////////////////////////////////////////////////////////////
            var wsItemInfo = ep.Workbook.Worksheets[1];
            for (var currRow = 4; currRow <= (numberList + 4); currRow++)
            {
                try
                {
                    var odr = new OrderRow();
                    try
                    {
                        CustomerRow custNew = new CustomerRow();
                        custNew.CustomerName = wsItemInfo.Cells[currRow, 2].Value.ToString();
                        custNew.Address = "Bekasi";
                        SaveResponse savedCust = new CustomerRepository().Create(uow, new SaveRequest<CustomerRow>() { Entity = custNew  });
                        odr.CustomerId = int.Parse(savedCust.EntityId.ToString());
                        odr.Ongkir = 9000;
                        odr.OrderStatus = "NewOrder";
                        odr.DetailList = new List<OrderDetailRow>();
                        odr.DetailList.Add(new OrderDetailRow() { ProductId = 1, Quantity = 1, Price = 125000 });
                        SaveResponse savedOdr = new OrderRepository().Create(uow, new SaveRequest<OrderRow>() { Entity = odr });

                    }
                    catch (Exception ex)
                    {
                        throw new Exception(ex.Message);
                    }
                }
                catch (Exception x)
                {
                    string msg = "Row:" + currRow.ToString() + " - " + x.Message;
                    response.ErrorList.Add(x.Message);
                }
            }
            response.Inserted = receivedCount;
            return response;
        }



        [HttpPost]
        public MessageRespons CloseOrder(IUnitOfWork uow, ExcelMassUploadImportRequest request)
        {
            MessageRespons responseaction = new MessageRespons();
            request.CheckNotNull();
            if (request.IdExport == null) throw new ValidationError("Data harus dipilih");
            {
                string[] idAll = request.IdExport[0].Split(new char[] { ',' });
                foreach (string id in idAll)
                {
                    HijrahquDataContext ctx = new HijrahquDataContext();
                    Order ord = ctx.Orders.FirstOrDefault(x => x.OrderID == int.Parse(id));
                    if (ord.OrderStatus == "Complete" && ord.TanggalBayar != null)
                    {
                        ord.OrderStatus = "Close";
                        ctx.SubmitChanges();
                    }
                }
            }
            responseaction.message = "OK";
            return responseaction;
        }

         
        



        [HttpPost]
        public FileContentResult LaporanPenjualan(IDbConnection connection, ExcelMassUploadImportRequest request)
        {
            request.CheckNotNull();
            if (request.IdExport == null) throw new ValidationError("Batch Id Cannot NULL");
            var template = Server.MapPath(ConfigurationManager.AppSettings["LapPenjualan"].ToString());
            var filename = "LapPenjualan_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx";
            var templateFile = new System.IO.FileInfo(template);
            var stream = new MemoryStream();

            using (var package = new ExcelPackage(templateFile, false))
            {

                var workbook = package.Workbook;
                var worksheet = package.Workbook.Worksheets[1];
                var fields = MyRow.Fields;

                string[] idAll = request.IdExport[0].Split(new char[] { ',' });
                int idxData = 1;
                int idxCol = 4;
                foreach (string id in idAll)
                {
                    HijrahquDataContext ctx = new HijrahquDataContext();
                    List<ViewLapPenjualan> order = ctx.ViewLapPenjualans.Where(x => x.OrderID == int.Parse(id)).ToList();
                    //string cells = "";
                    worksheet.Cells["B" + idxCol.ToString()].Value = idxData.ToString();
                    worksheet.Cells["C" + idxCol.ToString()].Value = "#" + order[0].OrderID.ToString();
                    worksheet.Cells["D" + idxCol.ToString()].Value = order[0].CustomerName;
                    worksheet.Cells["E" + idxCol.ToString()].Value = order[0].Handphone;
                    worksheet.Cells["F" + idxCol.ToString()].Value = "1";
                    worksheet.Cells["G" + idxCol.ToString()].Value = "1";
                    worksheet.Cells["H" + idxCol.ToString()].Value = "1";
                    worksheet.Cells["I" + idxCol.ToString()].Value = "1";
                    worksheet.Cells["J" + idxCol.ToString()].Value = order[0].Ongkir;
                    worksheet.Cells["K" + idxCol.ToString()].Value = 125000 + order[0].Ongkir;
                    worksheet.Cells["L" + idxCol.ToString()].Value = order[0].TanggalWa;
                    worksheet.Cells["M" + idxCol.ToString()].Value = order[0].TanggalClosing;
                    worksheet.Cells["N" + idxCol.ToString()].Value = order[0].TanggalKirim;
                    worksheet.Cells["O" + idxCol.ToString()].Value = order[0].TanggalBayar;
                    worksheet.Cells["P" + idxCol.ToString()].Value = order[0].TanggalCS;
                    idxData++;
                    idxCol++;
                }
                return ExcelContentResult.Create(package.GetAsByteArray(), filename);
            }
        }

       

        [HttpPost]
        public FileContentResult ExportDataJX(IDbConnection connection, ExcelMassUploadImportRequest request)
        {
            request.CheckNotNull();
            if (request.IdExport == null) throw new ValidationError("Batch Id Cannot NULL");
            var template = Server.MapPath(ConfigurationManager.AppSettings["TEMPLATEJX"].ToString());
            var filename = "JXAWB_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx";
            var templateFile = new System.IO.FileInfo(template);
            var stream = new MemoryStream();

            using (var package = new ExcelPackage(templateFile, false))
            {

                var workbook = package.Workbook;
                var worksheet = package.Workbook.Worksheets[1];
                var fields = MyRow.Fields;

                string[] idAll = request.IdExport[0].Split(new char[] { ',' });
                int idxData = 1;
                int idxCol = 2;
                foreach (string id in idAll)
                {
                    HijrahquDataContext ctx = new HijrahquDataContext();
                    List<ViewOrder> order = ctx.ViewOrders.Where(x => x.OrderID == int.Parse(id)).ToList();
                    //string cells = "";
                    worksheet.Cells["A" + idxCol.ToString()].Value = "#" + order[0].OrderID.ToString();
                    worksheet.Cells["B" + idxCol.ToString()].Value = order[0].NamaPengirim;
                    worksheet.Cells["C" + idxCol.ToString()].Value = order[0].NoPengirim;
                    worksheet.Cells["D" + idxCol.ToString()].Value = "JAWA BARAT";
                    worksheet.Cells["E" + idxCol.ToString()].Value = "BEKASI";
                    worksheet.Cells["F" + idxCol.ToString()].Value = "INDONESIA";
                    worksheet.Cells["G" + idxCol.ToString()].Value = "RUKO HIJRAHQU, JALAN RAYA KARANG SATRIA TAMBUN UTARA BEKASI";
                    worksheet.Cells["H" + idxCol.ToString()].Value = order[0].CustomerName;
                    worksheet.Cells["I" + idxCol.ToString()].Value = order[0].Handphone;
                    //PROVINCE
                    //worksheet.Cells["J" + idxCol.ToString()].Value = order[0].TanggalWa;
                    //CITY
                    //worksheet.Cells["K" + idxCol.ToString()].Value = order[0].TanggalClosing;
                    //COUNTRY
                    worksheet.Cells["L" + idxCol.ToString()].Value = "INDONESIA";
                    worksheet.Cells["M" + idxCol.ToString()].Value = order[0].Address;
                    worksheet.Cells["N" + idxCol.ToString()].Value = "PAKET BUKU";
                    worksheet.Cells["O" + idxCol.ToString()].Value = "1";
                    worksheet.Cells["P" + idxCol.ToString()].Value = "1";
                    worksheet.Cells["Q" + idxCol.ToString()].Value = "COD";
                    worksheet.Cells["R" + idxCol.ToString()].Value = "COD";
                    idxData++;
                    idxCol++;
                }
                return ExcelContentResult.Create(package.GetAsByteArray(), filename);
            }
        }

        [HttpPost]
        public FileContentResult ExportDataNINJA(IDbConnection connection, ExcelMassUploadImportRequest request)
        {
            request.CheckNotNull();
            if (request.IdExport == null) throw new ValidationError("Batch Id Cannot NULL");
            var template = Server.MapPath(ConfigurationManager.AppSettings["TEMPLATENINJA"].ToString());
            var filename = "NINJAAWB_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx";
            var templateFile = new System.IO.FileInfo(template);
            var stream = new MemoryStream();

            using (var package = new ExcelPackage(templateFile, false))
            {

                var workbook = package.Workbook;
                var worksheet = package.Workbook.Worksheets[1];
                var fields = MyRow.Fields;

                string[] idAll = request.IdExport[0].Split(new char[] { ',' });
                int idxData = 1;
                int idxCol = 2;
                foreach (string id in idAll)
                {
                    HijrahquDataContext ctx = new HijrahquDataContext();
                    List<ViewOrder> order = ctx.ViewOrders.Where(x => x.OrderID == int.Parse(id)).ToList();
                    //string cells = "";
                    if (order.Count > 0)
                    {
                        worksheet.Cells["A" + idxCol.ToString()].Value = order[0].OrderID.ToString();
                        worksheet.Cells["B" + idxCol.ToString()].Value = order[0].CustomerName;
                        worksheet.Cells["C" + idxCol.ToString()].Value = order[0].Address;
                        //worksheet.Cells["D" + idxCol.ToString()].Value = "JAWA BARAT";
                        worksheet.Cells["E" + idxCol.ToString()].Value = order[0].District;
                        worksheet.Cells["F" + idxCol.ToString()].Value = order[0].City;
                        worksheet.Cells["G" + idxCol.ToString()].Value = order[0].Province;
                        //worksheet.Cells["H" + idxCol.ToString()].Value = order[0].CustomerName;
                        worksheet.Cells["I" + idxCol.ToString()].Value = order[0].Handphone;
                        //PROVINCE
                        worksheet.Cells["J" + idxCol.ToString()].Value = order[0].KodePos;
                        //CITY
                        worksheet.Cells["K" + idxCol.ToString()].Value = (DateTime.Now.AddDays(1)).ToString("yyyy-MM-dd");
                        //COUNTRY
                        //worksheet.Cells["L" + idxCol.ToString()].Value = "INDONESIA";
                        worksheet.Cells["M" + idxCol.ToString()].Value = 1;
                        worksheet.Cells["N" + idxCol.ToString()].Value = "Standard";
                        worksheet.Cells["O" + idxCol.ToString()].Value = order[0].OrderID.ToString();
                        string keterangan = order[0].Keterangan;
                        string intruksi = "UNTUK KURIR MOHON AMANAH DALAM MELAKUKAN PENGANTARAN (HARAP LAKUKAN SESUAI SOP)";
                        keterangan += intruksi;
                        worksheet.Cells["P" + idxCol.ToString()].Value = keterangan;
                        worksheet.Cells["Q" + idxCol.ToString()].Value = "TRUE";
                        worksheet.Cells["R" + idxCol.ToString()].Value = order[0].TotalBayar.ToString();
                        idxData++;
                        idxCol++;
                    }
                }
                return ExcelContentResult.Create(package.GetAsByteArray(), filename);
            }
        }


        [HttpPost]
        public FileContentResult Printlabel(IUnitOfWork uow, ExcelMassUploadImportRequest request)
        {
            request.CheckNotNull();
            if (request.IdExport == null) throw new ValidationError("Batch Id Cannot NULL");
            var template = Server.MapPath(ConfigurationManager.AppSettings["LabelTemplate"].ToString());
            var filename = "CustomerList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx";
            var templateFile = new System.IO.FileInfo(template);
            var stream = new MemoryStream();

            using (var package = new ExcelPackage(templateFile, false))
            {

                var workbook = package.Workbook;
                var worksheet = package.Workbook.Worksheets[1];
                var fields = MyRow.Fields;

                string[] idAll = request.IdExport[0].Split(new char[] { ',' });
                int idxData = 1;
                int idxCol = 2;
                foreach (string id in idAll)
                {
                    RetrieveRequest retReq = new RetrieveRequest();
                    retReq.EntityId = id;
                    var ord = new OrderRepository().Retrieve(uow.Connection, retReq);

                    HijrahquDataContext ctx = new HijrahquDataContext();
                    List<ViewOrder> order = ctx.ViewOrders.Where(x => x.OrderID == int.Parse(id)).ToList();//int.Parse("15")).ToList();
                    string cells = "";
                    if (order[0].OrderStatus == "NewOrder")
                    {
                        if (idxData == 1)
                        {
                            cells = "D";
                            worksheet.Cells[cells + "6"].Value = order[0].CustomerName;
                            worksheet.Cells[cells + "7"].Value = order[0].Handphone;
                            worksheet.Cells[cells + "8"].Value = order[0].Address;
                            worksheet.Cells["H3"].Value = "#" + order[0].OrderID.ToString();
                        };

                        if (idxData == 2)
                        {
                            cells = "D";
                            worksheet.Cells[cells + "21"].Value = order[0].CustomerName;
                            worksheet.Cells[cells + "22"].Value = order[0].Handphone;
                            worksheet.Cells[cells + "23"].Value = order[0].Address;
                            worksheet.Cells["H18"].Value = "#" + order[0].OrderID.ToString();
                        };

                        if (idxData == 3)
                        {
                            cells = "D";
                            worksheet.Cells[cells + "36"].Value = order[0].CustomerName;
                            worksheet.Cells[cells + "37"].Value = order[0].Handphone;
                            worksheet.Cells[cells + "38"].Value = order[0].Address;
                            worksheet.Cells["H33"].Value = "#" + order[0].OrderID.ToString();
                        };

                        if (idxData == 4)
                        {
                            cells = "D";
                            worksheet.Cells[cells + "51"].Value = order[0].CustomerName;
                            worksheet.Cells[cells + "52"].Value = order[0].Handphone;
                            worksheet.Cells[cells + "53"].Value = order[0].Address;
                            worksheet.Cells["H48"].Value = "#" + order[0].OrderID.ToString();
                        };

                        if (idxData == 5)
                        {
                            cells = "K";
                            worksheet.Cells[cells + "6"].Value = order[0].CustomerName;
                            worksheet.Cells[cells + "7"].Value = order[0].Handphone;
                            worksheet.Cells[cells + "8"].Value = order[0].Address;
                            worksheet.Cells["O3"].Value = "#" + order[0].OrderID.ToString();
                        };

                        if (idxData == 6)
                        {
                            cells = "K";
                            worksheet.Cells[cells + "21"].Value = order[0].CustomerName;
                            worksheet.Cells[cells + "22"].Value = order[0].Handphone;
                            worksheet.Cells[cells + "23"].Value = order[0].Address;
                            worksheet.Cells["O18"].Value = "#" + order[0].OrderID.ToString();
                        };

                        if (idxData == 7)
                        {
                            cells = "K";
                            worksheet.Cells[cells + "36"].Value = order[0].CustomerName;
                            worksheet.Cells[cells + "37"].Value = order[0].Handphone;
                            worksheet.Cells[cells + "38"].Value = order[0].Address;
                            worksheet.Cells["O33"].Value = "#" + order[0].OrderID.ToString();
                        };

                        if (idxData == 8)
                        {
                            cells = "K";
                            worksheet.Cells[cells + "51"].Value = order[0].CustomerName;
                            worksheet.Cells[cells + "52"].Value = order[0].Handphone;
                            worksheet.Cells[cells + "53"].Value = order[0].Address;
                            worksheet.Cells["O48"].Value = "#" + order[0].OrderID.ToString();
                        };

                        ord.Entity.OrderStatus = "Printed";
                        new OrderRepository().Update(uow, new SaveRequest<MyRow> { Entity = ord.Entity, EntityId = ord.Entity.OrderId });
                    }

                    idxData++;
                    idxCol++;
                }
                return ExcelContentResult.Create(package.GetAsByteArray(), filename);
            }

        }

        //public static class ConvertData
        //{
        //    public static DataTable ToDataTable<T>(this IList<T> data)
        //    {
        //        PropertyDescriptorCollection properties =
        //            TypeDescriptor.GetProperties(typeof(T));
        //        DataTable table = new DataTable();
        //        foreach (PropertyDescriptor prop in properties)
        //            table.Columns.Add(prop.Name, Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType);
        //        foreach (T item in data)
        //        {
        //            DataRow row = table.NewRow();
        //            foreach (PropertyDescriptor prop in properties)
        //                row[prop.Name] = prop.GetValue(item) ?? DBNull.Value;
        //            table.Rows.Add(row);
        //        }
        //        return table;
        //    }
        //}


        //        var client = new RestClient("https://www.waboxapp.com/api/send/chat");
        //        var request = new RestRequest(Method.POST);
        //        request.AddHeader("content-type", "application/x-www-form-urlencoded"); 
        //request.AddParameter("application/x-www-form-urlencoded", "token=my-test-api-key&uid=12025550123&to=12025550193&custom_uid=msg-1502&text=Hello+world%21", ParameterType.RequestBody); 
        //IRestResponse response = client.Execute(request);

        [HttpPost]
        public MessageRespons sendNotif(IUnitOfWork uow, ParamRequest requestaction)
        {
            MessageRespons responseaction = new MessageRespons();
            var msg = string.Empty;
            var order = new OrderRow();
            var waLog = new List<WhatsappLogRow>();
            if (requestaction.messageType == "Informasi Kirim")
            {
                msg = new MessageWaRepository().Retrieve(uow.Connection, new RetrieveRequest() { EntityId = 1 }).Entity.MessageDesc;
                order = new OrderRepository().Retrieve(uow.Connection, new RetrieveRequest() { EntityId = requestaction.orderId }).Entity;
                msg = msg.Replace("[Nama]", order.CustomerCustomerName);
                msg = msg.Replace("[NoOrder]", order.OrderId.ToString());
                msg = msg.Replace("[Alamat]", order.CustomerAddress);
                msg = msg.Replace("[HP]", order.CustomerHandphone);

                new WhatsappLogRepository().Create(uow, new SaveRequest<WhatsappLogRow>()
                {
                    Entity = new WhatsappLogRow() { MessageType = "Informasi Kirim", OrderId = requestaction.orderId, Sent = "No", MessageText = msg }
                });
            }

            if (requestaction.messageType == "Informasi Resi")
            {
            
                msg = new MessageWaRepository().Retrieve(uow.Connection, new RetrieveRequest() { EntityId = 2 }).Entity.MessageDesc;
                order = new OrderRepository().Retrieve(uow.Connection, new RetrieveRequest() { EntityId = requestaction.orderId }).Entity;
                msg = msg.Replace("[Nama]", order.CustomerCustomerName);
                msg = msg.Replace("[NoOrder]", order.OrderId.ToString());
                msg = msg.Replace("[Alamat]", order.CustomerAddress);
                msg = msg.Replace("[HP]", order.CustomerHandphone);
                msg = msg.Replace("[NORESI]", order.CustomerHandphone);

                new WhatsappLogRepository().Create(uow, new SaveRequest<WhatsappLogRow>()
                {
                    Entity = new WhatsappLogRow(){ MessageType = "Informasi Resi", OrderId = requestaction.orderId, Sent = "No", MessageText = msg }
                });
           
            }

            if (requestaction.messageType == "Informasi Tagih")
            {
                msg = new MessageWaRepository().Retrieve(uow.Connection, new RetrieveRequest() { EntityId = 3 }).Entity.MessageDesc;
                order = new OrderRepository().Retrieve(uow.Connection, new RetrieveRequest() { EntityId = requestaction.orderId }).Entity;
                msg = msg.Replace("[Nama]", order.CustomerCustomerName);
                msg = msg.Replace("[NoOrder]", order.OrderId.ToString());
                msg = msg.Replace("[Alamat]", order.CustomerAddress);
                msg = msg.Replace("[HP]", order.CustomerHandphone);

                new WhatsappLogRepository().Create(uow, new SaveRequest<WhatsappLogRow>()
                {
                    Entity = new WhatsappLogRow() { MessageType = "Informasi Tagih", OrderId = requestaction.orderId, Sent = "No", MessageText = msg }
                });
            }

            //if (msg != string.Empty)
            //{

            //    string URL = "http://api.woo-wa.com/v2.0/send-message";
            //    WebRequest request = WebRequest.Create(URL);
            //    request.Method = "POST";
            //    request.ContentType = "application/x-www-form-urlencoded";
            //    string postData = "domain=basic.woo-wa.com&license=5c357854b7314&wa_number=6281908924400&text=" + msg;
            //    //postData += "&gambar=https://hijrahqu.com/wp-content/uploads/2019/05/upside-down-arrow-md-nj8l5kchwcs62ekzzig1o1icptd26ks63coohbg2q2.png";
            //    byte[] byteArray = Encoding.UTF8.GetBytes(postData);
            //    request.ContentLength = byteArray.Length;
            //    Stream dataStream = request.GetRequestStream();
            //    dataStream.Write(byteArray, 0, byteArray.Length);
            //    dataStream.Close();

            //    WebResponse response = request.GetResponse();

            //    dataStream = response.GetResponseStream();
            //    StreamReader reader = new StreamReader(dataStream);
            //    string responseFromServer = reader.ReadToEnd();

            //    //Example result = Newtonsoft.Json.JsonConvert.DeserializeObject<Example>(responseFromServer);
            //    responseaction.message = "okeh";
            //}
            responseaction.message = "Data Tersimpan";
            return responseaction;
        }


        [HttpPost]
        public MessageRespons UpdateStatusReceived(IUnitOfWork uow, ParamRequest requestaction)
        {
            MessageRespons responseaction = new MessageRespons();
            //string[] idAll = requestaction.IdExport.Split(new char[] { ',' });
            int receivedCount = 0;

            foreach (string id in requestaction.IdExport)
            {
                var obj = new ParamRequest();
                RetrieveRequest retReq = new RetrieveRequest();
                retReq.EntityId = id;
                var ord = new OrderRepository().Retrieve(uow.Connection, retReq);
                if (ord.Entity.OrderStatus == "Delivery" && ord.Entity.NoResi != "")
                {
                    string URL = "https://api.rajaongkir.com/basic/waybill";
                    requestaction.waybill = ord.Entity.NoResi;
                    WebRequest request = WebRequest.Create(URL);
                    request.Method = "POST";
                    request.ContentType = "application/x-www-form-urlencoded";
                    request.Headers.Add("key", "4baeeab924c8e261d4397e79a1d52fb6");
                    string postData = "waybill=" + requestaction.waybill + "&courier=jne";
                    byte[] byteArray = Encoding.UTF8.GetBytes(postData);
                    request.ContentLength = byteArray.Length;
                    Stream dataStream = request.GetRequestStream();
                    dataStream.Write(byteArray, 0, byteArray.Length);
                    dataStream.Close();

                    WebResponse response = request.GetResponse();
                    responseaction.message = ((HttpWebResponse)response).StatusDescription;

                    dataStream = response.GetResponseStream();
                    StreamReader reader = new StreamReader(dataStream);
                    string responseFromServer = reader.ReadToEnd();

                    Example result = Newtonsoft.Json.JsonConvert.DeserializeObject<Example>(responseFromServer);
                    if (result.rajaongkir != null)
                    {
                        if (result.rajaongkir.result != null)
                        {
                            if (result.rajaongkir.result.delivered)
                            {
                                ord.Entity.OrderStatus = "Received";
                                ord.Entity.ReceiveBy = result.rajaongkir.result.delivery_status.pod_receiver;
                                ord.Entity.ReceiveDate = result.rajaongkir.result.delivery_status.pod_date;
                                ord.Entity.ReceiveTime = result.rajaongkir.result.delivery_status.pod_time;
                                new OrderRepository().Update(uow, new SaveRequest<MyRow> { Entity = ord.Entity, EntityId = ord.Entity.OrderId });
                                receivedCount++;
                            }
                        }
                    }
                    reader.Close();
                    response.Close();
                }
            }
            if (receivedCount > 0)
            {
                responseaction.message = receivedCount.ToString() + " paket Alhamdulillah sudah sampai.";
            }
            else
            {
                responseaction.message = "Belom ada paket yang sampai!! Sabar ya...";
            }

            //generalResponse response = new generalResponse();
            //HttpWebRequest request = (HttpWebRequest)WebRequest.Create(URL);
            //request.Method = "POST";
            //request.ContentType = "application/x-www-form-urlencoded";
            //request.ContentLength = Data.Length;
            //using (Stream webStream = request.GetRequestStream())
            //using (StreamWriter requestWriter = new StreamWriter(webStream, System.Text.Encoding.ASCII))
            //{
            //    requestWriter.Write(Data);
            //}
            //WebResponse webResponse = request.GetResponse();
            //using (Stream webStream = webResponse.GetResponseStream() ?? Stream.Null)
            //using (StreamReader responseReader = new StreamReader(webStream))
            //{
            //    res = responseReader.ReadToEnd();
            //    dynamic json1 = JsonConvert.DeserializeObject(res);
            //    responseaction.message = "sukses";
            //}
            return responseaction;
        }


        public class MessageRespons : ServiceResponse
        {
            public string message { get; set; }
        }

        public class ParamRequest : ServiceRequest
        {
            public string messageType { get; set; }
            public string courier { get; set; }
            public string waybill { get; set; }
            public string key { get; set; }
            public int orderId { get; set; }
            public List<string> IdExport { get; set; }
        }

        public class ExcelMassUploadImportResponse : ServiceResponse
        {
            public Int64 Inserted { get; set; }
            public Int64 Updated { get; set; }
            public List<string> ErrorList { get; set; }
            public List<OrderRow> ECRFTrackerList { get; set; }
        }

        public class ExcelMassUploadImportRequest : ServiceRequest
        {
            public List<string> IdExport { get; set; }
            public String FileName { get; set; }
            public List<string> RowNumberList { get; set; }
            public String UploadName { get; set; }
            public DateTime ImportDate { get; set; }
            public string OriginalFileName { get; set; }
            public int TotalRecord { get; set; }
            public int DataField { get; set; }
            public string Expedisi { get; set; }
        }
    }
}

