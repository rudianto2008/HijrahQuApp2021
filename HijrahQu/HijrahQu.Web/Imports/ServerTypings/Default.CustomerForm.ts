namespace HijrahQu.Default {
    export interface CustomerForm {
        CustomerName: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        Handphone: Serenity.StringEditor;
        Kodepos: Serenity.LookupEditor;
        Province: Serenity.StringEditor;
        City: Serenity.StringEditor;
        District: Serenity.StringEditor;
    }

    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Customer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerForm.init)  {
                CustomerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(CustomerForm, [
                    'CustomerName', w0,
                    'Address', w1,
                    'Handphone', w0,
                    'Kodepos', w2,
                    'Province', w0,
                    'City', w0,
                    'District', w0
                ]);
            }
        }
    }
}

