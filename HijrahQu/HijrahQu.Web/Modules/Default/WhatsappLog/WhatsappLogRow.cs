
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[WhatsappLog]")]
    [DisplayName("Whatsapp Log"), InstanceName("Whatsapp Log")]
    [ReadPermission("HijrahQu:General")]
    [ModifyPermission("HijrahQu:General")]
    [LookupScript("Default.WhatsappLog")]
    public sealed class WhatsappLogRow : Row, IIdRow, INameRow
    {
        [DisplayName("Whatsapp Log Id"), Identity]
        public Int32? WhatsappLogId
        {
            get { return Fields.WhatsappLogId[this]; }
            set { Fields.WhatsappLogId[this] = value; }
        }

        [DisplayName("Order Id")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Message Type"), Size(50), QuickSearch]
        public String MessageType
        {
            get { return Fields.MessageType[this]; }
            set { Fields.MessageType[this] = value; }
        }

        [DisplayName("Sent"), Size(5)]
        public String Sent
        {
            get { return Fields.Sent[this]; }
            set { Fields.Sent[this] = value; }
        }

        [DisplayName("Message Text")]
        public String MessageText
        {
            get { return Fields.MessageText[this]; }
            set { Fields.MessageText[this] = value; }
        }

        [DisplayName("Send Date")]
        public DateTime? SendDate
        {
            get { return Fields.SendDate[this]; }
            set { Fields.SendDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.WhatsappLogId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MessageType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WhatsappLogRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WhatsappLogId;
            public Int32Field OrderId;
            public StringField MessageType;
            public StringField Sent;
            public DateTimeField SendDate;
            public StringField MessageText;
        }
    }
}
