
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.KodePos")]
    [BasedOnRow(typeof(Entities.KodePosRow), CheckNames = true)]
    public class KodePosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Kelurahan { get; set; }
        public String Kecamatan { get; set; }
        public String Kabupaten { get; set; }
        public String Provinsi { get; set; }
        public String Kodepos { get; set; }
    }
}