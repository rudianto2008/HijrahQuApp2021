
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.WhatsappLog")]
    [BasedOnRow(typeof(Entities.WhatsappLogRow), CheckNames = true)]
    public class WhatsappLogColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 WhatsappLogId { get; set; }
        public Int32 OrderId { get; set; }
        [EditLink]
        public String MessageType { get; set; }
        public String Sent { get; set; }
        public DateTime SendDate { get; set; }
    }
}