
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Order]")]
    [DisplayName("Order"), InstanceName("Order")]
    [ReadPermission("HijrahQu:General")]
    [ModifyPermission("HijrahQu:General")]
    [LookupScript("Default.Order")]
    public sealed class OrderRow : Row, IIdRow, IInsertLogRow, IUpdateLogRow
    {
        [DisplayName("Order Id"), Column("OrderID"), PrimaryKey,  Identity, SortOrder(1, true)]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        //[DisplayName("Order Date")]
        //public DateTime? OrderDate
        //{
        //    get { return Fields.OrderDate[this]; }
        //    set { Fields.OrderDate[this] = value; }
        //}

        //[DisplayName("Order Detail Id"), Column("Order"), ForeignKey("[dbo].[OrderDetail]", "OrderID"), LeftJoin("jOrder")]
        //public Int32? OrderDetailId
        //{
        //    get { return Fields.OrderDetailId[this]; }
        //    set { Fields.OrderDetailId[this] = value; }
        //}

        //[DisplayName("Line Total"), Expression("jOrder.[Quantity] * jOrder.[Price]"), QuickSearch, DisplayFormat("#,##0")]
        //public Decimal? LineTotal
        //{
        //    get { return Fields.LineTotal[this]; }
        //    set { Fields.LineTotal[this] = value; }
        //}


        [DisplayName("Customer"), Column("CustomerID"), ForeignKey("[dbo].[Customer]", "CustomerID"), LeftJoin("jCustomer"), TextualField("CustomerCustomerName"), LookupEditor("Default.Customer", InplaceAdd = true)]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Name"), Expression("jCustomer.[CustomerName]"), QuickSearch, QuickFilter]
        public String CustomerCustomerName
        {
            get { return Fields.CustomerCustomerName[this]; }
            set { Fields.CustomerCustomerName[this] = value; }
        }

        [DisplayName("Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get { return Fields.CustomerAddress[this]; }
            set { Fields.CustomerAddress[this] = value; }
        }

        [DisplayName("Handphone"), Expression("jCustomer.[Handphone]")]
        public String CustomerHandphone
        {
            get { return Fields.CustomerHandphone[this]; }
            set { Fields.CustomerHandphone[this] = value; }
        }

        [DisplayName("Kirim"), Expression("OrderId"), Updatable(false)]
        public Int32? KirimWAInfo
        {
            get { return Fields.KirimWAInfo[this]; }
            set { Fields.KirimWAInfo[this] = value; }
        }


        [DisplayName("Resi"), Expression("OrderId"), Updatable(false)]
        public Int32? ResiWAInfo
        {
            get { return Fields.ResiWAInfo[this]; }
            set { Fields.ResiWAInfo[this] = value; }
        }

        [DisplayName("Tagih"), Expression("OrderId"), Updatable(false)]
        public Int32? TagihWAInfo
        {
            get { return Fields.TagihWAInfo[this]; }
            set { Fields.TagihWAInfo[this] = value; }
        }

        //[DisplayName("Handphone"), Expression("jCustomer.[Handphone]")]
        //public String CustomerHandphoneWATagih
        //{
        //    get { return Fields.CustomerHandphoneWATagih[this]; }
        //    set { Fields.CustomerHandphoneWATagih[this] = value; }
        //}

        [DisplayName("Status"), Column("OrderStatus"), StatusEditor, QuickFilter]
        public String OrderStatus
        {
            get { return Fields.OrderStatus[this]; }
            set { Fields.OrderStatus[this] = value; }
        }

        [DisplayName("Resi No"), QuickSearch(SearchType.Auto)]
        public String NoResi
        {
            get { return Fields.NoResi[this]; }
            set { Fields.NoResi[this] = value; }
        }

        [DisplayName("Display Name"), ReadOnly(true), QuickFilter]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }



        [DisplayName("Ongkir"), Column("Ongkir"), DisplayFormat("#,##0")]
        public Decimal? Ongkir
        {
            get { return Fields.Ongkir[this]; }
            set { Fields.Ongkir[this] = value; }
        }


        [DisplayName("Total Harga"), Column("TotalHarga"), DisplayFormat("#,##0")]
        public Decimal? TotalHarga
        {
            get { return Fields.TotalHarga[this]; }
            set { Fields.TotalHarga[this] = value; }
        }

        [DisplayName("Total Bayar"), Column("TotalBayar"), DisplayFormat("#,##0")]
        public Decimal? TotalBayar
        {
            get { return Fields.TotalBayar[this]; }
            set { Fields.TotalBayar[this] = value; }
        }

        [DisplayName("Biaya COD"), Column("BiayaCOD"), DisplayFormat("#,##0")]
        public Decimal? BiayaCOD
        {
            get { return Fields.BiayaCOD[this]; }
            set { Fields.BiayaCOD[this] = value; }
        }

        [DisplayName("Sudah Bayar")]
        public String SudahBayar
        {
            get { return Fields.SudahBayar[this]; }
            set { Fields.SudahBayar[this] = value; }
        }

        [DisplayName("Details"), MasterDetailRelation(foreignKey: "OrderID"), NotMapped]
        public List<OrderDetailRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

        //[DisplayName("File Path"), Size(500), LookupInclude, NotMapped]
        //public String FileName
        //{
        //    get { return Fields.FileName[this]; }
        //    set { Fields.FileName[this] = value; }
        //}

        [NotMapped, DisplayName("Total Record")]
        public Int32? TotalRecord
        {
            get { return Fields.TotalRecord[this]; }
            set { Fields.TotalRecord[this] = value; }
        }

        [DisplayName("Tanggal WA"), QuickFilter]
        public DateTime? TanggalWa
        {
            get { return Fields.TanggalWa[this]; }
            set { Fields.TanggalWa[this] = value; }
        }

        [DisplayName("Tanggal Closing"), QuickFilter]
        public DateTime? TanggalClosing
        {
            get { return Fields.TanggalClosing[this]; }
            set { Fields.TanggalClosing[this] = value; }
        }

        [DisplayName("Tanggal Kirim"), QuickFilter]
        public DateTime? TanggalKirim
        {
            get { return Fields.TanggalKirim[this]; }
            set { Fields.TanggalKirim[this] = value; }
        }

        [DisplayName("Tanggal Bayar"), QuickFilter]
        public DateTime? TanggalBayar
        {
            get { return Fields.TanggalBayar[this]; }
            set { Fields.TanggalBayar[this] = value; }
        }

        [DisplayName("Tanggal CS"), QuickFilter]
        public DateTime? TanggalCS
        {
            get { return Fields.TanggalCS[this]; }
            set { Fields.TanggalCS[this] = value; }
        }

        [DisplayName("Insert User Id"), LookupInclude]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Insert Date"), QuickFilter]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }


        [DisplayName("Update User Id"), LookupInclude]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Receive Date")]
        public String ReceiveDate
        {
            get { return Fields.ReceiveDate[this]; }
            set { Fields.ReceiveDate[this] = value; }
        }

        [DisplayName("Receive By")]
        public String ReceiveBy
        {
            get { return Fields.ReceiveBy[this]; }
            set { Fields.ReceiveBy[this] = value; }
        }

        [DisplayName("Receive Time")]
        public String ReceiveTime
        {
            get { return Fields.ReceiveTime[this]; }
            set { Fields.ReceiveTime[this] = value; }
        }

        [DisplayName("Kode pos")]
        public String Kodepos
        {
            get { return Fields.Kodepos[this]; }
            set { Fields.Kodepos[this] = value; }
        }

        [DisplayName("Keterangan")]
        public String Keterangan        {
            get { return Fields.Keterangan[this]; }
            set { Fields.Keterangan[this] = value; }
        }

        [DisplayName("CaraBayar"), Required, DefaultValue("COD")]
        public String CaraBayar
        {
            get { return Fields.CaraBayar[this]; }
            set { Fields.CaraBayar[this] = value; }
        }

        [DisplayName("Expedisi"), Required, DefaultValue("NINJA")]
        public String Expedisi
        {
            get { return Fields.Expedisi[this]; }
            set { Fields.Expedisi[this] = value; }
        }


        //[DisplayName("Kodepos Lengkap")]
        //public String KodeposLengkap
        //{
        //    get { return Fields.KodeposLengkap[this]; }
        //    set { Fields.KodeposLengkap[this] = value; }
        //}


        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }

        public IIdField InsertUserIdField
        {

            get { return Fields.InsertUserId; }
        }

        public DateTimeField InsertDateField
        {
            get
            {
                return Fields.InsertDate;
            }
        }

        public IIdField UpdateUserIdField
        {
            get { return Fields.UpdateUserId; }
        }

        public DateTimeField UpdateDateField
        {
            get
            {
                return Fields.UpdateDate;
            }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderId;
            //public DateTimeField OrderDate;
            public Int32Field CustomerId;

            public Int32Field KirimWAInfo;
            public Int32Field ResiWAInfo;
            public Int32Field TagihWAInfo;


            public StringField CustomerCustomerName;
            public StringField CustomerAddress;
            public StringField CustomerHandphone;
            //public StringField CustomerHandphoneWA;
            //public StringField CustomerHandphoneWAResi;
            //public StringField CustomerHandphoneWATagih;

            public StringField OrderStatus;
            public StringField NoResi;
            //public StringField FileName;
            public Int32Field TotalRecord;

            public DecimalField Ongkir;
            public DecimalField BiayaCOD;
            public DecimalField TotalHarga;
            public DecimalField TotalBayar;
            public StringField SudahBayar;

            public DateTimeField TanggalWa;
            public DateTimeField TanggalKirim;
            public DateTimeField TanggalClosing;
            public DateTimeField TanggalBayar;
            public DateTimeField TanggalCS;

            //public DateTimeField OrderDate;


            public Int32Field InsertUserId;
            public DateTimeField InsertDate;

            public Int32Field UpdateUserId;
            public DateTimeField UpdateDate;

            public StringField ReceiveDate;
            public StringField ReceiveBy;
            public StringField ReceiveTime;
            public StringField DisplayName;

            public StringField Kodepos;
            public StringField Keterangan;

            public StringField Expedisi;
            public StringField CaraBayar;

            public RowListField<OrderDetailRow> DetailList;
        }
    }
}
