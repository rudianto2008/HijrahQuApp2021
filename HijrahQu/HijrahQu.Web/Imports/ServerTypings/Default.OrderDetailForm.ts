namespace HijrahQu.Default {
    export interface OrderDetailForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        TotalPerItem: Serenity.DecimalEditor;
        OrderStatus: Serenity.StringEditor;
    }

    export class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OrderDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderDetailForm.init)  {
                OrderDetailForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;

                Q.initFormType(OrderDetailForm, [
                    'ProductId', w0,
                    'Quantity', w1,
                    'Price', w2,
                    'TotalPerItem', w2,
                    'OrderStatus', w3
                ]);
            }
        }
    }
}

