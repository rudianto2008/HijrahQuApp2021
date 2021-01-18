using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace HijrahQu.Default
{
    public partial class InfoTagihFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "HijrahQu.Default.InfoTagihFormatter";

        public InfoTagihFormatterAttribute()
            : base(Key)
        {
        }
    }
}

