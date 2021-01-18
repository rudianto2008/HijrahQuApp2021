
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.BiayaIklan")]
    [BasedOnRow(typeof(Entities.BiayaIklanRow), CheckNames = true)]
    public class BiayaIklanForm
    {
        public Decimal BiayaIklan { get; set; }
        public DateTime Tanggal { get; set; }
        public Int32 LeadsDashboard { get; set; }
        public Int32 LeadsReal { get; set; }
        public Int32 ClosingCS1 { get; set; }
        public Int32 ClosingCS2 { get; set; }
        public Decimal CostPerLeadsFB { get; set; }
        public Decimal CostPerLeadsWA { get; set; }
    }
}