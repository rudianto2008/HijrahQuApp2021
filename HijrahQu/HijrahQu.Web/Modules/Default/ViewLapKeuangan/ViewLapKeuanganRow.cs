
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[ViewLapKeuangan]")]
    [DisplayName("View Lap Keuangan"), InstanceName("View Lap Keuangan")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ViewLapKeuanganRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order"), Column("OrderID")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Customer Name"), Size(50), QuickSearch]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Handphone"), Size(50)]
        public String Handphone
        {
            get { return Fields.Handphone[this]; }
            set { Fields.Handphone[this] = value; }
        }

        [DisplayName("Tanggal Bayar")]
        public DateTime? TanggalBayar
        {
            get { return Fields.TanggalBayar[this]; }
            set { Fields.TanggalBayar[this] = value; }
        }

        [DisplayName("Total Bayar"), Size(19), Scale(4)]
        public Decimal? TotalBayar
        {
            get { return Fields.TotalBayar[this]; }
            set { Fields.TotalBayar[this] = value; }
        }

        [DisplayName("Ongkir"), Size(19), Scale(4)]
        public Decimal? Ongkir
        {
            get { return Fields.Ongkir[this]; }
            set { Fields.Ongkir[this] = value; }
        }

        [DisplayName("Total Harga"), Size(19), Scale(4)]
        public Decimal? TotalHarga
        {
            get { return Fields.TotalHarga[this]; }
            set { Fields.TotalHarga[this] = value; }
        }

        [DisplayName("Tanggal Wa")]
        public DateTime? TanggalWa
        {
            get { return Fields.TanggalWa[this]; }
            set { Fields.TanggalWa[this] = value; }
        }

        [DisplayName("Biaya Iklan"), Size(1), NotNull]
        public String BiayaIklan
        {
            get { return Fields.BiayaIklan[this]; }
            set { Fields.BiayaIklan[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerName; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewLapKeuanganRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderId;
            public StringField CustomerName;
            public StringField Handphone;
            public DateTimeField TanggalBayar;
            public DecimalField TotalBayar;
            public DecimalField Ongkir;
            public DecimalField TotalHarga;
            public DateTimeField TanggalWa;
            public StringField BiayaIklan;
        }
    }
}
