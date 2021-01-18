
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Product]")]
    [DisplayName("Product"), InstanceName("Product")]
    [ReadPermission("HijrahQu:General")]
    [ModifyPermission("HijrahQu:General")]
    [LookupScript("Default.Product")]
    public sealed class ProductRow : Row, IIdRow, INameRow
    {
        [DisplayName("Product Id"), Column("ProductID"), Identity, LookupInclude]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Product Name"), Size(50), QuickSearch, LookupInclude]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Description"), Size(500)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Sale Price"), Size(19), Scale(4), LookupInclude, DisplayFormat("#,##0"), AlignRight]
        public Decimal? SalePrice
        {
            get { return Fields.SalePrice[this]; }
            set { Fields.SalePrice[this] = value; }
        }

        [DisplayName("Price"), Size(19), Scale(4), LookupInclude, DisplayFormat("#,##0"), AlignRight]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Supplier"), LookupEditor("Default.Supplier", InplaceAdd = true), Column("SupplierID"), ForeignKey("[dbo].[Supplier]", "SupplierD"), LeftJoin("jSupplier"), TextualField("SupplierSupplierName")]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Supplier Supplier Name"), Expression("jSupplier.[SupplierName]")]
        public String SupplierSupplierName
        {
            get { return Fields.SupplierSupplierName[this]; }
            set { Fields.SupplierSupplierName[this] = value; }
        }

        [DisplayName("Supplier Handphone"), Expression("jSupplier.[Handphone]")]
        public String SupplierHandphone
        {
            get { return Fields.SupplierHandphone[this]; }
            set { Fields.SupplierHandphone[this] = value; }
        }

        [DisplayName("Supplier Website"), Expression("jSupplier.[Website]")]
        public String SupplierWebsite
        {
            get { return Fields.SupplierWebsite[this]; }
            set { Fields.SupplierWebsite[this] = value; }
        }

        [DisplayName("Supplier Source"), Expression("jSupplier.[Source]")]
        public String SupplierSource
        {
            get { return Fields.SupplierSource[this]; }
            set { Fields.SupplierSource[this] = value; }
        }

        [DisplayName("Product Group")]
        public String ProductGroup
        {
            get { return Fields.ProductGroup[this]; }
            set { Fields.ProductGroup[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductId;
            public StringField ProductName;
            public StringField Description;
            public DecimalField SalePrice;
            public DecimalField Price;
            public Int32Field SupplierId;
            public StringField ProductGroup;


            public StringField SupplierSupplierName;
            public StringField SupplierHandphone;
            public StringField SupplierWebsite;
            public StringField SupplierSource;
        }
    }
}
