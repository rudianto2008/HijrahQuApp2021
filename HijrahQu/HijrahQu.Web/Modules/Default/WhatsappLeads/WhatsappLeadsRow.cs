
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[WhatsappLeads]")]
    [DisplayName("Whatsapp Leads"), InstanceName("Whatsapp Leads")]
    [ReadPermission("HijrahQu:General")]
    [ModifyPermission("HijrahQu:General")]
    [LookupScript("HijrahQu.WhatsappLead")]
    public sealed class WhatsappLeadsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Whatsapp Leads Id"), Identity]
        public Int32? WhatsappLeadsId
        {
            get { return Fields.WhatsappLeadsId[this]; }
            set { Fields.WhatsappLeadsId[this] = value; }
        }

        [DisplayName("No Whatsapp Cs"), Column("NoWhatsappCS"), Size(50), QuickSearch]
        public String NoWhatsappCs
        {
            get { return Fields.NoWhatsappCs[this]; }
            set { Fields.NoWhatsappCs[this] = value; }
        }

        [DisplayName("Nama Cs"), Column("NamaCS"), Size(50), QuickSearch, LookupEditor(typeof(CsListRow))]
        public String NamaCs
        {
            get { return Fields.NamaCs[this]; }
            set { Fields.NamaCs[this] = value; }
        }

        [DisplayName("Insert User Id")]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.WhatsappLeadsId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NoWhatsappCs; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WhatsappLeadsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WhatsappLeadsId;
            public StringField NoWhatsappCs;
            public StringField NamaCs;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
        }
    }
}
