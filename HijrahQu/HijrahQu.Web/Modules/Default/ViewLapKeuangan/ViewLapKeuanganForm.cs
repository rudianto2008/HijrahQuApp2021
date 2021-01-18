
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.ViewLapKeuangan")]
    [BasedOnRow(typeof(Entities.ViewLapKeuanganRow), CheckNames = true)]
    public class ViewLapKeuanganForm
    {
        public String Handphone { get; set; }
        public DateTime TanggalBayar { get; set; }
        public Decimal TotalBayar { get; set; }
        public Decimal Ongkir { get; set; }
        public Decimal TotalHarga { get; set; }
        public DateTime TanggalWa { get; set; }
        public String BiayaIklan { get; set; }
    }
}