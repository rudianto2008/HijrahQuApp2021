
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.CsList")]
    [BasedOnRow(typeof(Entities.CsListRow), CheckNames = true)]
    public class CsListForm
    {
        public String CsName { get; set; }
        public String NoHp { get; set; }
        public String IsActive { get; set; }
    }
}