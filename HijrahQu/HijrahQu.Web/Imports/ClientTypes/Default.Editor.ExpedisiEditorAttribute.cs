using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace HijrahQu.Default.Editor
{
    public partial class ExpedisiEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "HijrahQu.Default.Editor.ExpedisiEditor";

        public ExpedisiEditorAttribute()
            : base(Key)
        {
        }
    }
}

