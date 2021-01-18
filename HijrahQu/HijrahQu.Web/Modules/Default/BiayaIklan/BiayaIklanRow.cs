
namespace HijrahQu.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[BiayaIklan]")]
    [DisplayName("Biaya Iklan"), InstanceName("Biaya Iklan")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BiayaIklanRow : Row, IIdRow
    {
        [DisplayName("Biaya Iklan Id"), Identity]
        public Int32? BiayaIklanId
        {
            get { return Fields.BiayaIklanId[this]; }
            set { Fields.BiayaIklanId[this] = value; }
        }

        [DisplayName("Biaya Iklan"), Size(19), DisplayFormat("#,##0")]
        public Decimal? BiayaIklan
        {
            get { return Fields.BiayaIklan[this]; }
            set { Fields.BiayaIklan[this] = value; }
        }

        [DisplayName("Tanggal")]
        public DateTime? Tanggal
        {
            get { return Fields.Tanggal[this]; }
            set { Fields.Tanggal[this] = value; }
        }

        [DisplayName("Leads Dashboard")]
        public Int32? LeadsDashboard
        {
            get { return Fields.LeadsDashboard[this]; }
            set { Fields.LeadsDashboard[this] = value; }
        }

        [DisplayName("Leads Real")]
        public Int32? LeadsReal
        {
            get { return Fields.LeadsReal[this]; }
            set { Fields.LeadsReal[this] = value; }
        }

        [DisplayName("Closing CS1")]
        public Int32? ClosingCS1
        {
            get { return Fields.ClosingCS1[this]; }
            set { Fields.ClosingCS1[this] = value; }
        }


        [DisplayName("Closing CS2")]
        public Int32? ClosingCS2
        {
            get { return Fields.ClosingCS2[this]; }
            set { Fields.ClosingCS2[this] = value; }
        }

        [DisplayName("Cost Per Leads FB"), Size(19), DisplayFormat("#,##0")]
        public Decimal? CostPerLeadsFB
        {
            get { return Fields.CostPerLeadsFB[this]; }
            set { Fields.CostPerLeadsFB[this] = value; }
        }

        [DisplayName("Cost Per Leads WA"), Size(19), DisplayFormat("#,##0")]
        public Decimal? CostPerLeadsWA
        {
            get { return Fields.CostPerLeadsWA[this]; }
            set { Fields.CostPerLeadsWA[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BiayaIklanId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BiayaIklanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BiayaIklanId;
            public DecimalField BiayaIklan;
            public DateTimeField Tanggal;
            public Int32Field LeadsDashboard;
            public Int32Field LeadsReal;
            public Int32Field ClosingCS1;
            public Int32Field ClosingCS2;
            public DecimalField CostPerLeadsFB;
            public DecimalField CostPerLeadsWA;
        }
    }
}
