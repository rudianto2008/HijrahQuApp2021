namespace HijrahQu.Default {
    export interface WhatsappLogForm {
        OrderId: Serenity.IntegerEditor;
        MessageType: Serenity.StringEditor;
        Sent: Serenity.StringEditor;
        SendDate: Serenity.DateEditor;
    }

    export class WhatsappLogForm extends Serenity.PrefixedContext {
        static formKey = 'Default.WhatsappLog';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WhatsappLogForm.init)  {
                WhatsappLogForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(WhatsappLogForm, [
                    'OrderId', w0,
                    'MessageType', w1,
                    'Sent', w1,
                    'SendDate', w2
                ]);
            }
        }
    }
}

