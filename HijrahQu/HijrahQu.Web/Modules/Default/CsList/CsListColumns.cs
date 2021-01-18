
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.CsList")]
    [BasedOnRow(typeof(Entities.CsListRow), CheckNames = true)]
    public class CsListColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CsId { get; set; }
        [EditLink]
        public String CsName { get; set; }
        public String NoHp { get; set; }
        public String IsActive { get; set; }
    }
}