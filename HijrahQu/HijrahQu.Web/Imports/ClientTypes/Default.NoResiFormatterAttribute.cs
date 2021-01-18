using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace HijrahQu.Default
{
    public partial class NoResiFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "HijrahQu.Default.NoResiFormatter";

        public NoResiFormatterAttribute()
            : base(Key)
        {
        }
    }
}

