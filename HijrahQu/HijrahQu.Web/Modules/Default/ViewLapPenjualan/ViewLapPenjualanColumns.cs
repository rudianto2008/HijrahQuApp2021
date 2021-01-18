
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.ViewLapPenjualan")]
    [BasedOnRow(typeof(Entities.ViewLapPenjualanRow), CheckNames = true)]
    public class ViewLapPenjualanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        [EditLink]
        public String CustomerName { get; set; }
        public String Address { get; set; }
        public String Handphone { get; set; }
        public Decimal TotalHarga { get; set; }
        public Decimal Ongkir { get; set; }
        public Decimal TotalBayar { get; set; }
        public DateTime TanggalWa { get; set; }
        public DateTime TanggalKirim { get; set; }
        public DateTime TanggalBayar { get; set; }
        public DateTime TanggalCs { get; set; }
    }
}