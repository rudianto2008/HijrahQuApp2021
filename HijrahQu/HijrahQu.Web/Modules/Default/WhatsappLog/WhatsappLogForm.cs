
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.WhatsappLog")]
    [BasedOnRow(typeof(Entities.WhatsappLogRow), CheckNames = true)]
    public class WhatsappLogForm
    {
        public Int32 OrderId { get; set; }
        public String MessageType { get; set; }
        public String Sent { get; set; }
        public DateTime SendDate { get; set; }
    }
}