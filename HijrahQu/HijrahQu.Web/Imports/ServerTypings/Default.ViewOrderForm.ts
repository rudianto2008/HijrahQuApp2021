namespace HijrahQu.Default {
    export interface ViewOrderForm {
        OrderDate: Serenity.DateEditor;
        Quantity: Serenity.IntegerEditor;
        CustomerName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Handphone: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        NamaPengirim: Serenity.StringEditor;
        NoPengirim: Serenity.StringEditor;
    }

    export class ViewOrderForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ViewOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ViewOrderForm.init)  {
                ViewOrderForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;

                Q.initFormType(ViewOrderForm, [
                    'OrderDate', w0,
                    'Quantity', w1,
                    'CustomerName', w2,
                    'Address', w2,
                    'Handphone', w2,
                    'ProductName', w2,
                    'NamaPengirim', w2,
                    'NoPengirim', w2
                ]);
            }
        }
    }
}

