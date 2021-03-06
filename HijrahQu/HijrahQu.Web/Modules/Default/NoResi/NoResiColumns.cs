﻿
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.NoResi")]
    [BasedOnRow(typeof(Entities.NoResiRow), CheckNames = true)]
    public class NoResiColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 NoResiId { get; set; }
        public Int32 OrderId { get; set; }
        [EditLink]
        public String CustomerName { get; set; }
        public String Handphone { get; set; }
        public String Expedisi { get; set; }
        public String ExpedisiService { get; set; }
        public String Destination { get; set; }
        public Decimal Ongkir { get; set; }
    }
}