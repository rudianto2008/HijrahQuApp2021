
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.MessageWa")]
    [BasedOnRow(typeof(Entities.MessageWaRow), CheckNames = true)]
    public class MessageWaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MessageWaId { get; set; }
        [EditLink]
        public String MessageType { get; set; }
        public String MessageDesc { get; set; }
    }
}