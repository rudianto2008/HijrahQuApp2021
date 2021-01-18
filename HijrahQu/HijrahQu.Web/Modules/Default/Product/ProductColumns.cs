
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Product")]
    [BasedOnRow(typeof(Entities.ProductRow), CheckNames = true)]
    public class ProductColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, SortOrder(0)]
        public Int32 ProductId { get; set; }
        [EditLink, Width(200)]
        public String ProductName { get; set; }
        [Width(200)]
        public String ProductGroup { get; set; }
        [Width(200)]
        public String Description { get; set; }
        [Width(100)]
        public Decimal SalePrice { get; set; }
        [Width(100)]
        public Decimal Price { get; set; }
        [Width(200)]
        public String SupplierSupplierName { get; set; }

    }
}