
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[KodePos]")]
    [DisplayName("Kode Pos"), InstanceName("Kode Pos")]
    [ReadPermission("HijrahQu:General")]
    [ModifyPermission("HijrahQu:General")]
    [LookupScript("Default.KodePos")]
    public sealed class KodePosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Kelurahan"), Column("kelurahan"), Size(100), NotNull, QuickSearch]
        public String Kelurahan
        {
            get { return Fields.Kelurahan[this]; }
            set { Fields.Kelurahan[this] = value; }
        }

        [DisplayName("Kecamatan"), Column("kecamatan"), Size(100), NotNull]
        public String Kecamatan
        {
            get { return Fields.Kecamatan[this]; }
            set { Fields.Kecamatan[this] = value; }
        }

        [DisplayName("Kabupaten"), Column("kabupaten"), Size(100), NotNull]
        public String Kabupaten
        {
            get { return Fields.Kabupaten[this]; }
            set { Fields.Kabupaten[this] = value; }
        }

        [DisplayName("Provinsi"), Column("provinsi"), Size(100), NotNull]
        public String Provinsi
        {
            get { return Fields.Provinsi[this]; }
            set { Fields.Provinsi[this] = value; }
        }

        [DisplayName("Kodepos"), Column("kodepos"), LookupInclude, NotNull]
        public String Kodepos
        {
            get { return Fields.Kodepos[this]; }
            set { Fields.Kodepos[this] = value; }
        }
        //Provinsi + '-' + Kabupaten + '-' + Kecamatan + '-' + Kelurahan + '-' + 
        [DisplayName("KodeposLengkap"), NotMapped, Expression("Provinsi + '-' + Kabupaten + '-' + Kecamatan + '-' + Kelurahan + '-' + KodePos"), Size(5), LookupInclude]
        public String KodeposLengkap
        {
            get { return Fields.KodeposLengkap[this]; }
            set { Fields.KodeposLengkap[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Kodepos; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.KodeposLengkap; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public KodePosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Kelurahan;
            public StringField Kecamatan;
            public StringField Kabupaten;
            public StringField Provinsi;
            public StringField Kodepos;
            public StringField KodeposLengkap;
        }
    }
}
