namespace HijrahQu.Default {
    export interface MessageWaForm {
        MessageType: Serenity.StringEditor;
        MessageDesc: Serenity.TextAreaEditor;
    }

    export class MessageWaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.MessageWa';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MessageWaForm.init)  {
                MessageWaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(MessageWaForm, [
                    'MessageType', w0,
                    'MessageDesc', w1
                ]);
            }
        }
    }
}

