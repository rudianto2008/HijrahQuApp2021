
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Order")]
    [BasedOnRow(typeof(Entities.OrderRow), CheckNames = true)]
    public class OrderColumns
    {
        [Width(75), OrderStatusFormatter]
        public String OrderStatus { get; set; }
        [Width(50), DisplayName("ID"), AlignRight, EditLink]
        public Int32 OrderId { get; set; }
        [Width(150), EditLink]
        public String CustomerCustomerName { get; set; }
        //[Width(120), NoResiFormatter]
        //public String NoResi { get; set; }
        //[Width(100), InfoKirimFormatter, DisplayName("Kirim")]
        //public Int32 KirimWAInfo { get; set; }
        //[Width(75), InfoKirimFormatter, DisplayName("Kirim")]
        //public String CustomerHandphoneWA { get; set; }
        //[Width(100), InfoResiFormatter, DisplayName("Resi")]
        //public Int32 ResiWAInfo { get; set; }
        //[Width(100), InfoTagihFormatter, DisplayName("Tagih")]
        //public Int32 TagihWAInfo { get; set; }
       
        
        
        //[Width(300)]
        //public String CustomerAddress { get; set; }
        [Width(150)]
        public String CustomerHandphone { get; set; }
        [Width(50), DisplayName("CS")]
        public String DisplayName { get; set; }

        //[Width(150)]
        //public Decimal LineTotal { get; set; }
        [Width(200)]
        public DateTime InsertDate { get; set; }
        [Width(120)]
        public DateTime TanggalWa { get; set; }
        [Width(120)]
        public DateTime TanggalKirim { get; set; }
        [Width(120)]
        public DateTime TanggalClosing { get; set; }
        [Width(120)]
        public DateTime TanggalBayar { get; set; }
        [Width(120)]
        public DateTime TanggalCS { get; set; }
      

    }
}