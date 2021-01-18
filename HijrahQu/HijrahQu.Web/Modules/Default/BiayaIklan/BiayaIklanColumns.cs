
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.BiayaIklan")]
    [BasedOnRow(typeof(Entities.BiayaIklanRow), CheckNames = true)]
    public class BiayaIklanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BiayaIklanId { get; set; }
        [Width(150)]
        public Decimal BiayaIklan { get; set; }
        [Width(100)]
        public DateTime Tanggal { get; set; }
        [Width(150)]
        public Int32 LeadsDashboard { get; set; }
        [Width(150)]
        public Int32 LeadsReal { get; set; }
        [Width(150)]
        public Int32 ClosingCS1 { get; set; }
        [Width(150)]
        public Int32 ClosingCS2 { get; set; }
        [Width(170)]
        public Decimal CostPerLeadsFB { get; set; }
        [Width(170)]
        public Decimal CostPerLeadsWA { get; set; }
    }
}