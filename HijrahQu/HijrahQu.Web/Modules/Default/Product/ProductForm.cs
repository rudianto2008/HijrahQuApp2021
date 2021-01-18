
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Product")]
    [BasedOnRow(typeof(Entities.ProductRow), CheckNames = true)]
    public class ProductForm
    {
        public String ProductName { get; set; }
        public String Description { get; set; }
        public Decimal SalePrice { get; set; }
        public Decimal Price { get; set; }
        public Int32 SupplierId { get; set; }
    }
}