
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.LaporanHarian")]
    [BasedOnRow(typeof(Entities.LaporanHarianRow), CheckNames = true)]
    public class LaporanHarianColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 LaporanHarianId { get; set; }
        public DateTime Tanggal { get; set; }
        [EditLink]
        public String NamaCs { get; set; }
        public Int32 WaWeb { get; set; }
        public Int32 WaReal { get; set; }
        public Int32 WaFb { get; set; }
        public Decimal BudgetFb { get; set; }
        public Decimal CostPerRealWa { get; set; }
    }
}