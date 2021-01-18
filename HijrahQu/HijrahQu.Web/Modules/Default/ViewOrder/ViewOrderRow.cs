
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[ViewOrder]")]
    [DisplayName("View Order"), InstanceName("View Order")]
    [ReadPermission("HijrahQu:General")]
    [ModifyPermission("HijrahQu:General")]
    [LookupScript("Default.ViewOrder")]
    public sealed class ViewOrderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Id"), Column("OrderID"), NotNull, LookupInclude]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Order Date"), LookupInclude]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayName("Quantity"), LookupInclude]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Customer Name"), Size(50), QuickSearch, LookupInclude]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Address"), Size(500), LookupInclude]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Handphone"), Size(50), LookupInclude]
        public String Handphone
        {
            get { return Fields.Handphone[this]; }
            set { Fields.Handphone[this] = value; }
        }

        [DisplayName("Product Name"), Size(50)]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Nama Pengirim"), Size(18), NotNull]
        public String NamaPengirim
        {
            get { return Fields.NamaPengirim[this]; }
            set { Fields.NamaPengirim[this] = value; }
        }

        [DisplayName("No Pengirim"), Size(12), NotNull]
        public String NoPengirim
        {
            get { return Fields.NoPengirim[this]; }
            set { Fields.NoPengirim[this] = value; }
        }

        [DisplayName("No Resi"), Size(12), NotNull, LookupInclude]
        public String NoResi
        {
            get { return Fields.NoResi[this]; }
            set { Fields.NoResi[this] = value; }
        }

        [DisplayName("Ongkir"), Size(12), NotNull, LookupInclude, DisplayFormat("#,##0")]
        public Decimal? Ongkir
        {
            get { return Fields.Ongkir[this]; }
            set { Fields.Ongkir[this] = value; }
        }

        [DisplayName("Total Harga"), Size(12), NotNull, LookupInclude, DisplayFormat("#,##0")]
        public Decimal? TotalHarga
        {
            get { return Fields.TotalHarga[this]; }
            set { Fields.TotalHarga[this] = value; }
        }

        [DisplayName("Total Bayar"), Size(12), NotNull, LookupInclude, DisplayFormat("#,##0")]
        public Decimal? TotalBayar
        {
            get { return Fields.TotalBayar[this]; }
            set { Fields.TotalBayar[this] = value; }
        }

        [DisplayName("Order Status"), Size(12), NotNull, LookupInclude]
        public String OrderStatus
        {
            get { return Fields.OrderStatus[this]; }
            set { Fields.OrderStatus[this] = value; }
        }

        [DisplayName("Receive Date"), LookupInclude, DateFormatter(DisplayFormat = "dd-MM-yyyy")]
        public String ReceiveDate
        {
            get { return Fields.ReceiveDate[this]; }
            set { Fields.ReceiveDate[this] = value; }
        }

        [DisplayName("Receive By"), LookupInclude]
        public String ReceiveBy
        {
            get { return Fields.ReceiveBy[this]; }
            set { Fields.ReceiveBy[this] = value; }
        }

        [DisplayName("Receive Time"), LookupInclude]
        public String ReceiveTime
        {
            get { return Fields.ReceiveTime[this]; }
            set { Fields.ReceiveTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewOrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderId;
            public DateTimeField OrderDate;
            public Int32Field Quantity;
            public StringField CustomerName;
            public StringField Address;
            public StringField Handphone;
            public StringField ProductName;
            public StringField NamaPengirim;
            public StringField NoPengirim;
            public StringField NoResi;

            public DecimalField Ongkir;
            public DecimalField TotalHarga;
            public DecimalField TotalBayar;

            public StringField ReceiveDate;
            public StringField ReceiveBy;
            public StringField ReceiveTime;

            public StringField OrderStatus;

        }
    }
}
