

namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Editor;

    [FormScript("Default.NoResiUpload")]
    [BasedOnRow(typeof(Entities.NoResiRow))]
    public class NoResiUploadForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
        [Required, DisplayName("Expedisi"), ExpedisiEditor, DefaultValue("NINJA")]
        public String Expedisi { get; set; }
        [Required, DisplayName("Total Record"), IntegerEditor]
        public String TotalRecord { get; set; }
    }
}