
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.OrderImport")]
    [BasedOnRow(typeof(Entities.OrderRow), CheckNames = true)]
    public class OrderImportForm
    {
        //[FileUploadEditor, Required]
        //public String FileName { get; set; }
        [Required, DisplayName("Total Record"), IntegerEditor]
        public Int32 TotalRecord { get; set; }
    }
}