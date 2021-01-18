﻿
namespace HijrahQu.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.OrderStatus")]
    [BasedOnRow(typeof(Entities.OrderStatusRow), CheckNames = true)]
    public class OrderStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OrderStatusId { get; set; }
        [EditLink]
        public String OrderStatus { get; set; }
    }
}