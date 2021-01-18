

namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.ClosingUpload")]
    [BasedOnRow(typeof(Entities.NoResiRow))]
    public class ClosingUploadForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
        [Required, DisplayName("Total Record"), IntegerEditor]
        public String TotalRecord { get; set; }
    }
}