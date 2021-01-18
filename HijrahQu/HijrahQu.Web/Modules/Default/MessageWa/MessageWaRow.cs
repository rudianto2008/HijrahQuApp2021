
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[MessageWa]")]
    [DisplayName("Message Wa"), InstanceName("Message Wa")]
    [ReadPermission("HijrahQu:General")]
    [ModifyPermission("HijrahQu:General")]
    [LookupScript("Default.MessageWa")]
    public sealed class MessageWaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Message Wa Id"), Identity]
        public Int32? MessageWaId
        {
            get { return Fields.MessageWaId[this]; }
            set { Fields.MessageWaId[this] = value; }
        }

        [DisplayName("Message Type"), Size(50), QuickSearch]
        public String MessageType
        {
            get { return Fields.MessageType[this]; }
            set { Fields.MessageType[this] = value; }
        }

        [DisplayName("Message Desc"), LookupInclude]
        public String MessageDesc
        {
            get { return Fields.MessageDesc[this]; }
            set { Fields.MessageDesc[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MessageWaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MessageType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MessageWaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MessageWaId;
            public StringField MessageType;
            public StringField MessageDesc;
        }
    }
}
