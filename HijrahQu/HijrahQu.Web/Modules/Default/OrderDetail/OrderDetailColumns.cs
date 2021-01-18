
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.OrderDetail")]
    [BasedOnRow(typeof(Entities.OrderDetailRow), CheckNames = true)]
    public class OrderDetailColumns
    {
        [EditLink, Width(300), DisplayName("Product Name")]
        public String ProductProductName { get; set; }
        [Width(100)]
        public Int32 Quantity { get; set; }
        [AlignRight, Width(100)]
        public Decimal Price { get; set; }
        [AlignRight, Width(100), DisplayName("Total Price")]
        public Decimal LineTotal { get; set; }
    }
}