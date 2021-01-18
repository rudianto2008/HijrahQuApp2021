
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.KodePos")]
    [BasedOnRow(typeof(Entities.KodePosRow), CheckNames = true)]
    public class KodePosForm
    {
        public String Kelurahan { get; set; }
        public String Kecamatan { get; set; }
        public String Kabupaten { get; set; }
        public String Provinsi { get; set; }
        public String Kodepos { get; set; }
    }
}