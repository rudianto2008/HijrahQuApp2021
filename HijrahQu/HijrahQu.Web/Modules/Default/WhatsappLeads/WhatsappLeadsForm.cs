
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.WhatsappLeads")]
    [BasedOnRow(typeof(Entities.WhatsappLeadsRow), CheckNames = true)]
    public class WhatsappLeadsForm
    {
        public String NoWhatsappCs { get; set; }
        public String NamaCs { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
    }
}