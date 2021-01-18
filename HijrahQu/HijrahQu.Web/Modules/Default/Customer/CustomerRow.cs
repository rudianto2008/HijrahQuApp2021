
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Customer]")]
    [DisplayName("Customer"), InstanceName("Customer")]
    [ReadPermission("HijrahQu:General")]
    [ModifyPermission("HijrahQu:General")]
    [LookupScript("Default.Customer")]
    public sealed class CustomerRow : Row, IIdRow, INameRow, IInsertLogRow, IUpdateLogRow
    {
        [DisplayName("Customer Id"), Column("CustomerID"), Identity, LookupInclude]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
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

        [DisplayName("Kode pos"), LookupInclude]
        public String Kodepos
        {
            get { return Fields.Kodepos[this]; }
            set { Fields.Kodepos[this] = value; }
        }

        [DisplayName("Province"), LookupInclude]
        public String Province
        {
            get { return Fields.Province[this]; }
            set { Fields.Province[this] = value; }
        }

        [DisplayName("City"), LookupInclude]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("District"), LookupInclude]
        public String District
        {
            get { return Fields.District[this]; }
            set { Fields.District[this] = value; }
        }

        [DisplayName("Handphone"), Size(50), LookupInclude]
        public String Handphone
        {
            get { return Fields.Handphone[this]; }
            set { Fields.Handphone[this] = value; }
        }

        [DisplayName("Insert User Id"), LookupInclude]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Insert Date")]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CustomerId;
            public StringField CustomerName;
            public StringField Address;
            public StringField Handphone;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;

            public Int32Field UpdateUserId;
            public DateTimeField UpdateDate;

            public StringField Kodepos;
            public StringField Province;
            public StringField City;
            public StringField District;

        }
    }
}
