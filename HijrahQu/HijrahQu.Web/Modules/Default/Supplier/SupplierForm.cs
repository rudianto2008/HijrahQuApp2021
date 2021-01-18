
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Supplier")]
    [BasedOnRow(typeof(Entities.SupplierRow), CheckNames = true)]
    public class SupplierForm
    {
        public String SupplierName { get; set; }
        public String Handphone { get; set; }
        public String Website { get; set; }
        public String Source { get; set; }
    }
}