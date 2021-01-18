
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.LaporanHarian")]
    [BasedOnRow(typeof(Entities.LaporanHarianRow), CheckNames = true)]
    public class LaporanHarianForm
    {
    //    [HalfWidth]
        public DateTime Tanggal { get; set; }
        [ReadOnly(true), DisplayName("CS")]
        public String NamaCs { get; set; }
        [HalfWidth, DisplayName("Whatsapp Web")]
        public Int32 WaWeb { get; set; }
        [HalfWidth, DisplayName("Whatsapp")]
        public Int32 WaReal { get; set; }
        [HalfWidth, DisplayName("% Whatsapp")]
        public Decimal PersenWA { get; set; }
        [HalfWidth, DisplayName("Closing")]
        public Int32 Closing { get; set; }
        [HalfWidth, DisplayName("% Closing")]
        public Decimal PersenClosing { get; set; }
        //public Int32 WaFb { get; set; }
        //public Decimal BudgetFb { get; set; }
        //public Decimal CostPerRealWa { get; set; }
    }
}