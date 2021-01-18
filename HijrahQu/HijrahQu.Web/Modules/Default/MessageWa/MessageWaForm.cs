
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.MessageWa")]
    [BasedOnRow(typeof(Entities.MessageWaRow), CheckNames = true)]
    public class MessageWaForm
    {
        public String MessageType { get; set; }
        [TextAreaEditor(Rows = 10)]
        public String MessageDesc { get; set; }
    }
}