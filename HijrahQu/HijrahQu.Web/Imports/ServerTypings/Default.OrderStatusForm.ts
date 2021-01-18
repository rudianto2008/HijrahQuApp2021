﻿namespace HijrahQu.Default {
    export interface OrderStatusForm {
        OrderStatus: Serenity.StringEditor;
    }

    export class OrderStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OrderStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderStatusForm.init)  {
                OrderStatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(OrderStatusForm, [
                    'OrderStatus', w0
                ]);
            }
        }
    }
}

