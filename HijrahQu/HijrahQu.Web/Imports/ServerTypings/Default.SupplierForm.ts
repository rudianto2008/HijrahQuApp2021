namespace HijrahQu.Default {
    export interface SupplierForm {
        SupplierName: Serenity.StringEditor;
        Handphone: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        Source: Serenity.StringEditor;
    }

    export class SupplierForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Supplier';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SupplierForm.init)  {
                SupplierForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SupplierForm, [
                    'SupplierName', w0,
                    'Handphone', w0,
                    'Website', w0,
                    'Source', w0
                ]);
            }
        }
    }
}

