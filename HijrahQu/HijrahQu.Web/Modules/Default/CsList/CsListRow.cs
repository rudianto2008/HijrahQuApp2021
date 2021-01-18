
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[CSList]")]
    [DisplayName("Cs List"), InstanceName("Cs List")]
    [ReadPermission("HijrahQu:General")]
    [ModifyPermission("HijrahQu:General")]
    [LookupScript("HijrahQu.CSList")]
    public sealed class CsListRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cs Id"), Column("CSId"), Identity]
        public Int32? CsId
        {
            get { return Fields.CsId[this]; }
            set { Fields.CsId[this] = value; }
        }

        [DisplayName("Cs Name"), Column("CSName"), Size(50), QuickSearch]
        public String CsName
        {
            get { return Fields.CsName[this]; }
            set { Fields.CsName[this] = value; }
        }

        [DisplayName("No Hp"), Size(50)]
        public String NoHp
        {
            get { return Fields.NoHp[this]; }
            set { Fields.NoHp[this] = value; }
        }

        [DisplayName("Is Active"), Size(3)]
        public String IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CsId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CsName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CsListRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CsId;
            public StringField CsName;
            public StringField NoHp;
            public StringField IsActive;
        }
    }
}
