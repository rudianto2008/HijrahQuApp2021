
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[OrderStatus]")]
    [DisplayName("Order Status"), InstanceName("Order Status")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.OrderStatusLookup")]
    public sealed class OrderStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Status Id"), Identity]
        public Int32? OrderStatusId
        {
            get { return Fields.OrderStatusId[this]; }
            set { Fields.OrderStatusId[this] = value; }
        }

        [DisplayName("Order Status"), Size(50), QuickSearch]
        public String OrderStatus
        {
            get { return Fields.OrderStatus[this]; }
            set { Fields.OrderStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderStatusId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OrderStatus; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderStatusId;
            public StringField OrderStatus;
        }
    }
}
