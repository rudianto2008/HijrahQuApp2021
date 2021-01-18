
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[ViewLapPenjualan]")]
    [DisplayName("View Lap Penjualan"), InstanceName("View Lap Penjualan")]
    [ReadPermission("HijrahQu:General")]
    [ModifyPermission("HijrahQu:General")]
    public sealed class ViewLapPenjualanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Id"), Column("OrderID"), NotNull]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Order Date")]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayName("Customer Name"), Size(50), QuickSearch]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Address"), Size(500)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Handphone"), Size(50)]
        public String Handphone
        {
            get { return Fields.Handphone[this]; }
            set { Fields.Handphone[this] = value; }
        }

        [DisplayName("Total Harga"), Size(19), Scale(4)]
        public Decimal? TotalHarga
        {
            get { return Fields.TotalHarga[this]; }
            set { Fields.TotalHarga[this] = value; }
        }

        [DisplayName("Ongkir"), Size(19), Scale(4)]
        public Decimal? Ongkir
        {
            get { return Fields.Ongkir[this]; }
            set { Fields.Ongkir[this] = value; }
        }

        [DisplayName("Total Bayar"), Size(19), Scale(4)]
        public Decimal? TotalBayar
        {
            get { return Fields.TotalBayar[this]; }
            set { Fields.TotalBayar[this] = value; }
        }

        [DisplayName("Tanggal Wa")]
        public DateTime? TanggalWa
        {
            get { return Fields.TanggalWa[this]; }
            set { Fields.TanggalWa[this] = value; }
        }

        [DisplayName("Tanggal Kirim")]
        public DateTime? TanggalKirim
        {
            get { return Fields.TanggalKirim[this]; }
            set { Fields.TanggalKirim[this] = value; }
        }

        [DisplayName("Tanggal Bayar")]
        public DateTime? TanggalBayar
        {
            get { return Fields.TanggalBayar[this]; }
            set { Fields.TanggalBayar[this] = value; }
        }

        [DisplayName("Tanggal Cs"), Column("TanggalCS")]
        public DateTime? TanggalCs
        {
            get { return Fields.TanggalCs[this]; }
            set { Fields.TanggalCs[this] = value; }
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

        public ViewLapPenjualanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderId;
            public DateTimeField OrderDate;
            public StringField CustomerName;
            public StringField Address;
            public StringField Handphone;
            public DecimalField TotalHarga;
            public DecimalField Ongkir;
            public DecimalField TotalBayar;
            public DateTimeField TanggalWa;
            public DateTimeField TanggalKirim;
            public DateTimeField TanggalBayar;
            public DateTimeField TanggalCs;
        }
    }
}
