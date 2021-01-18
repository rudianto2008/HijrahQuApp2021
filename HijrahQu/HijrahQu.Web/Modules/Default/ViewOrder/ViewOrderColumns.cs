
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.ViewOrder")]
    [BasedOnRow(typeof(Entities.ViewOrderRow), CheckNames = true)]
    public class ViewOrderColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public Int32 Quantity { get; set; }
        [EditLink]
        public String CustomerName { get; set; }
        public String Address { get; set; }
        public String Handphone { get; set; }
        public String ProductName { get; set; }
        public String NamaPengirim { get; set; }
        public String NoPengirim { get; set; }
    }
}