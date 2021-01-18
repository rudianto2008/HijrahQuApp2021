
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[NoResi]")]
    [DisplayName("No Resi"), InstanceName("No Resi")]
    [ReadPermission("HijrahQu:General")]
    [ModifyPermission("HijrahQu:General")]
    public sealed class NoResiRow : Row, IIdRow, INameRow
    {
        [DisplayName("No Resi Id"), Identity]
        public Int32? NoResiId
        {
            get { return Fields.NoResiId[this]; }
            set { Fields.NoResiId[this] = value; }
        }

        [DisplayName("Order Id")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("No Resi"), Size(50), QuickSearch]
        public String NoResi
        {
            get { return Fields.NoResi[this]; }
            set { Fields.NoResi[this] = value; }
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

        [DisplayName("Expedisi"), Size(20)]
        public String Expedisi
        {
            get { return Fields.Expedisi[this]; }
            set { Fields.Expedisi[this] = value; }
        }

        [DisplayName("Status Pengiriman"), Size(20)]
        public String StatusPengiriman
        {
            get { return Fields.StatusPengiriman[this]; }
            set { Fields.StatusPengiriman[this] = value; }
        }

        [DisplayName("Expedisi Service"), Size(50)]
        public String ExpedisiService
        {
            get { return Fields.ExpedisiService[this]; }
            set { Fields.ExpedisiService[this] = value; }
        }

        [DisplayName("Destination"), Size(500)]
        public String Destination
        {
            get { return Fields.Destination[this]; }
            set { Fields.Destination[this] = value; }
        }

        [DisplayName("Ongkir"), Size(19), Scale(4)]
        public Decimal? Ongkir
        {
            get { return Fields.Ongkir[this]; }
            set { Fields.Ongkir[this] = value; }
        }

        [DisplayName("Send Date"), Size(500)]
        public String SendDate
        {
            get { return Fields.SendDate[this]; }
            set { Fields.SendDate[this] = value; }
        }

        [DisplayName("NINJA Date"), Size(500)]
        public String NINJADate
        {
            get { return Fields.NINJADate[this]; }
            set { Fields.NINJADate[this] = value; }
        }

        [DisplayName("JNE Date")]
        public DateTime? JNEDate
        {
            get { return Fields.JNEDate[this]; }
            set { Fields.JNEDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.NoResiId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NoResiRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field NoResiId;
            public Int32Field OrderId;
            public StringField CustomerName;
            public StringField Handphone;
            public StringField Expedisi;
            public StringField ExpedisiService;
            public StringField Destination;
            public StringField NoResi;
            public DecimalField Ongkir;
            public StringField SendDate;
            public DateTimeField JNEDate;
            public StringField StatusPengiriman;
            public StringField NINJADate;
        }
    }
}
