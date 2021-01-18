using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace HijrahQu.Default
{
    public partial class InfoResiFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "HijrahQu.Default.InfoResiFormatter";

        public InfoResiFormatterAttribute()
            : base(Key)
        {
        }
    }
}

