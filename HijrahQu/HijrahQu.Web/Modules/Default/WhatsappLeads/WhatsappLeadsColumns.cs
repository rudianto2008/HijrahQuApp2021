
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.WhatsappLeads")]
    [BasedOnRow(typeof(Entities.WhatsappLeadsRow), CheckNames = true)]
    public class WhatsappLeadsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 WhatsappLeadsId { get; set; }
        [EditLink]
        public String NoWhatsappCs { get; set; }
        public String NamaCs { get; set; }
        [SortOrder(1, true),Width(200), DateTimeFormatter(DisplayFormat = "dd-MM-yyyy hh:mm:ss")]
        public DateTime InsertDate { get; set; }
    }
}