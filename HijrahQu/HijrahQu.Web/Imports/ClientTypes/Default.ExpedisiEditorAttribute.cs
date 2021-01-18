using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace HijrahQu.Default
{
    public partial class ExpedisiEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "HijrahQu.Default.ExpedisiEditor";

        public ExpedisiEditorAttribute()
            : base(Key)
        {
        }
    }
}

