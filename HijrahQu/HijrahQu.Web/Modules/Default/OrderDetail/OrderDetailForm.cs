
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.OrderDetail")]
    [BasedOnRow(typeof(Entities.OrderDetailRow), CheckNames = true)]
    public class OrderDetailForm
    {
        [Category("Order Information")]
        //public Int32 OrderId { get; set; }
        //public Int32 OrderCustomerId { get; set; }
        public Int32 ProductId { get; set; }
        [DefaultValue("1")]
        public Int32 Quantity { get; set; }
        [ReadOnly(true), DecimalEditor(AllowNegatives = false, Decimals = 2)]
        public Decimal Price { get; set; }
        //[DecimalEditor(AllowNegatives = false, Decimals = 2)]
        //public Decimal Ongkir { get; set; }
        [ReadOnly(true), DecimalEditor(AllowNegatives = false, Decimals = 2)]
        public Decimal TotalPerItem { get; set; }
        [ReadOnly(true), Visible(false)]
        public String OrderStatus { get; set; }
    }
}