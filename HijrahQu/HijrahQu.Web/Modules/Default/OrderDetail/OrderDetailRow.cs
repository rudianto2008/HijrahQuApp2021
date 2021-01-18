
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[OrderDetail]")]
    [DisplayName("Order Detail"), InstanceName("Order Detail")]
    [ReadPermission("HijrahQu:General")]
    [ModifyPermission("HijrahQu:General")]
    public sealed class OrderDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Detail Id"), Column("OrderDetailID"), Identity]
        public Int32? OrderDetailId
        {
            get { return Fields.OrderDetailId[this]; }
            set { Fields.OrderDetailId[this] = value; }
        }

        [DisplayName("Order"), Column("OrderID"), ForeignKey("[dbo].[Order]", "OrderID"), LeftJoin("jOrder")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Product"), LookupEditor("Default.Product", InplaceAdd = true), Column("ProductID"), ForeignKey("[dbo].[Product]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductName")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Quantity")]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Order Status"), Size(50), QuickSearch]
        public String OrderStatus
        {
            get { return Fields.OrderStatus[this]; }
            set { Fields.OrderStatus[this] = value; }
        }

        [DisplayName("Price"), Size(19), Scale(4), DisplayFormat("#,##0")]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Price"), Size(19), Scale(4), DisplayFormat("#,##0"), NotMapped]
        public Decimal? LineTotal
        {
            get { return Fields.LineTotal[this]; }
            set { Fields.LineTotal[this] = value; }
        }

        [DisplayName("Order Order Date"), Expression("jOrder.[OrderDate]")]
        public DateTime? OrderOrderDate
        {
            get { return Fields.OrderOrderDate[this]; }
            set { Fields.OrderOrderDate[this] = value; }
        }

        [DisplayName("Order Customer Id"), Expression("jOrder.[CustomerID]"), LookupEditor("Default.Customer", InplaceAdd = true)]
        public Int32? OrderCustomerId
        {
            get { return Fields.OrderCustomerId[this]; }
            set { Fields.OrderCustomerId[this] = value; }
        }

        //[DisplayName("Order Customer Name"), Expression("jOrder.[CustomerName]")]
        //public String OrderCustomerName
        //{
        //    get { return Fields.OrderCustomerName[this]; }
        //    set { Fields.OrderCustomerName[this] = value; }
        //}

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]"), LookupInclude, MinSelectLevel(SelectLevel.List)]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [DisplayName("Product Description"), Expression("jProduct.[Description]")]
        public String ProductDescription
        {
            get { return Fields.ProductDescription[this]; }
            set { Fields.ProductDescription[this] = value; }
        }

        [DisplayName("Product Sale Price"), Expression("jProduct.[SalePrice]"), DisplayFormat("#,##0")]
        public Decimal? ProductSalePrice
        {
            get { return Fields.ProductSalePrice[this]; }
            set { Fields.ProductSalePrice[this] = value; }
        }

        [DisplayName("Product Price"), Expression("jProduct.[Price]"), DisplayFormat("#,##0")]
        public Decimal? ProductPrice
        {
            get { return Fields.ProductPrice[this]; }
            set { Fields.ProductPrice[this] = value; }
        }

        [DisplayName("Ongkir"), Column("Ongkir"), DisplayFormat("#,##0")]
        public Decimal? Ongkir
        {
            get { return Fields.Ongkir[this]; }
            set { Fields.Ongkir[this] = value; }
        }

        [DisplayName("Total"), NotMapped, DisplayFormat("#,##0")]
        public Decimal? TotalPerItem
        {
            get { return Fields.TotalPerItem[this]; }
            set { Fields.TotalPerItem[this] = value; }
        }

        [DisplayName("Product Supplier Id"), Expression("jProduct.[SupplierID]")]
        public Int32? ProductSupplierId
        {
            get { return Fields.ProductSupplierId[this]; }
            set { Fields.ProductSupplierId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderDetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OrderStatus; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderDetailId;
            public Int32Field OrderId;
            public Int32Field ProductId;
            public Int32Field Quantity;
            public StringField OrderStatus;
            public DecimalField Price;
            public DecimalField LineTotal;
            public DecimalField Ongkir;
            public DecimalField TotalPerItem;




            public DateTimeField OrderOrderDate;
            public Int32Field OrderCustomerId;
            //public StringField OrderCustomerName;

            public StringField ProductProductName;
            public StringField ProductDescription;
            public DecimalField ProductSalePrice;
            public DecimalField ProductPrice;
            public Int32Field ProductSupplierId;
        }
    }
}
