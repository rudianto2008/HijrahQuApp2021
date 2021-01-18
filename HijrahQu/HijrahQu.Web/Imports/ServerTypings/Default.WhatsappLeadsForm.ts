namespace HijrahQu.Default {
    export interface WhatsappLeadsForm {
        NoWhatsappCs: Serenity.StringEditor;
        NamaCs: Serenity.LookupEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
    }

    export class WhatsappLeadsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.WhatsappLeads';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WhatsappLeadsForm.init)  {
                WhatsappLeadsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateEditor;

                Q.initFormType(WhatsappLeadsForm, [
                    'NoWhatsappCs', w0,
                    'NamaCs', w1,
                    'InsertUserId', w2,
                    'InsertDate', w3
                ]);
            }
        }
    }
}

