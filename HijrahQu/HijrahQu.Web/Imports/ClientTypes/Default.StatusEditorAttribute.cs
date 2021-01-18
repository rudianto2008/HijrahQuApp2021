using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace HijrahQu.Default
{
    public partial class StatusEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "HijrahQu.Default.StatusEditor";

        public StatusEditorAttribute()
            : base(Key)
        {
        }
    }
}

