
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Supplier]")]
    [DisplayName("Supplier"), InstanceName("Supplier")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Supplier")]
    public sealed class SupplierRow : Row, IIdRow, INameRow
    {
        [DisplayName("Supplier D"), Identity, LookupInclude]
        public Int32? SupplierD
        {
            get { return Fields.SupplierD[this]; }
            set { Fields.SupplierD[this] = value; }
        }

        [DisplayName("Supplier Name"), Size(50), QuickSearch, LookupInclude]
        public String SupplierName
        {
            get { return Fields.SupplierName[this]; }
            set { Fields.SupplierName[this] = value; }
        }

        [DisplayName("Handphone"), Size(500)]
        public String Handphone
        {
            get { return Fields.Handphone[this]; }
            set { Fields.Handphone[this] = value; }
        }

        [DisplayName("Website"), Size(200)]
        public String Website
        {
            get { return Fields.Website[this]; }
            set { Fields.Website[this] = value; }
        }

        [DisplayName("Source"), Size(50)]
        public String Source
        {
            get { return Fields.Source[this]; }
            set { Fields.Source[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SupplierD; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SupplierName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SupplierRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SupplierD;
            public StringField SupplierName;
            public StringField Handphone;
            public StringField Website;
            public StringField Source;
        }
    }
}
