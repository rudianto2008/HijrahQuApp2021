
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[LaporanHarian]")]
    [DisplayName("Laporan Harian"), InstanceName("Laporan Harian")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class LaporanHarianRow : Row, IIdRow, INameRow
    {
        [DisplayName("Laporan Harian Id"), Identity]
        public Int32? LaporanHarianId
        {
            get { return Fields.LaporanHarianId[this]; }
            set { Fields.LaporanHarianId[this] = value; }
        }

        [DisplayName("Tanggal")]
        public DateTime? Tanggal
        {
            get { return Fields.Tanggal[this]; }
            set { Fields.Tanggal[this] = value; }
        }

        [DisplayName("Nama Cs"), Size(50), QuickSearch]
        public String NamaCs
        {
            get { return Fields.NamaCs[this]; }
            set { Fields.NamaCs[this] = value; }
        }

        [DisplayName("Wa Web"), Column("WAWeb")]
        public Int32? WaWeb
        {
            get { return Fields.WaWeb[this]; }
            set { Fields.WaWeb[this] = value; }
        }

        [DisplayName("Wa Real"), Column("WAReal")]
        public Int32? WaReal
        {
            get { return Fields.WaReal[this]; }
            set { Fields.WaReal[this] = value; }
        }

        [DisplayName("Wa Fb"), Column("WAFb")]
        public Int32? WaFb
        {
            get { return Fields.WaFb[this]; }
            set { Fields.WaFb[this] = value; }
        }

        [DisplayName("Closing"), Column("Closing")]
        public Int32? Closing
        {
            get { return Fields.Closing[this]; }
            set { Fields.Closing[this] = value; }
        }

        [DisplayName("Budget Fb"), Column("BudgetFB"), Size(19), Scale(4)]
        public Decimal? BudgetFb
        {
            get { return Fields.BudgetFb[this]; }
            set { Fields.BudgetFb[this] = value; }
        }

        [DisplayName("Cost Per Real Wa"), Column("CostPerRealWA"), Size(19), Scale(4)]
        public Decimal? CostPerRealWa
        {
            get { return Fields.CostPerRealWa[this]; }
            set { Fields.CostPerRealWa[this] = value; }
        }

        [DisplayName("% WA"), Column("PersenWA"), Size(19), Scale(4)]
        public Decimal? PersenWA
        {
            get { return Fields.PersenWA[this]; }
            set { Fields.PersenWA[this] = value; }
        }

        [DisplayName("% Closing"), Column("PersenClosing"), Size(19), Scale(4)]
        public Decimal? PersenClosing
        {
            get { return Fields.PersenClosing[this]; }
            set { Fields.PersenClosing[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.LaporanHarianId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaCs; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LaporanHarianRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LaporanHarianId;
            public DateTimeField Tanggal;
            public StringField NamaCs;
            public Int32Field WaWeb;
            public Int32Field WaReal;
            public Int32Field WaFb;
            public Int32Field Closing;
            public DecimalField BudgetFb;
            public DecimalField CostPerRealWa;
            public DecimalField PersenWA;
            public DecimalField PersenClosing;
        }
    }
}
