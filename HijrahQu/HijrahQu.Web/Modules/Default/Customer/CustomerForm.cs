
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow), CheckNames = true)]
    public class CustomerForm
    {
        [Required]
        public String CustomerName { get; set; }
        [TextAreaEditor, Required]
        public String Address { get; set; }
        [Required]
        public String Handphone { get; set; }
        [LookupEditor(typeof(Default.Entities.KodePosRow), InplaceAdd = true), DisplayName("Kode Pos"), Required]
        //[HijrahQu.Default.Editor.KodePosEditor]
        public String Kodepos { get; set; }
        [Required]
        public String Province { get; set; }
        [Required]
        public String City { get; set; }
        [Required]
        public String District { get; set; }
    }
}