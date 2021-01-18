namespace HijrahQu.Default {
    export interface OrderImportForm {
        TotalRecord: Serenity.IntegerEditor;
    }

    export class OrderImportForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OrderImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderImportForm.init)  {
                OrderImportForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(OrderImportForm, [
                    'TotalRecord', w0
                ]);
            }
        }
    }
}

