namespace HijrahQu.Default {
    export interface OrderForm {
        CustomerId: Serenity.LookupEditor;
        CustomerAddress: Serenity.TextAreaEditor;
        CustomerHandphone: Serenity.StringEditor;
        NoResi: Serenity.StringEditor;
        OrderStatus: StatusEditor;
        Ongkir: Serenity.DecimalEditor;
        BiayaCOD: Serenity.DecimalEditor;
        TotalBayar: Serenity.DecimalEditor;
        CaraBayar: Serenity.StringEditor;
        Expedisi: Serenity.StringEditor;
        TanggalWa: Serenity.DateEditor;
        TanggalKirim: Serenity.DateEditor;
        TanggalClosing: Serenity.DateEditor;
        TanggalBayar: Serenity.DateEditor;
        TanggalCS: Serenity.DateEditor;
        DisplayName: Serenity.StringEditor;
        Keterangan: Serenity.StringEditor;
        DetailList: OrderDetailsEditor;
    }

    export class OrderForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Order';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderForm.init)  {
                OrderForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.StringEditor;
                var w3 = StatusEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.DateEditor;
                var w6 = OrderDetailsEditor;

                Q.initFormType(OrderForm, [
                    'CustomerId', w0,
                    'CustomerAddress', w1,
                    'CustomerHandphone', w2,
                    'NoResi', w2,
                    'OrderStatus', w3,
                    'Ongkir', w4,
                    'BiayaCOD', w4,
                    'TotalBayar', w4,
                    'CaraBayar', w2,
                    'Expedisi', w2,
                    'TanggalWa', w5,
                    'TanggalKirim', w5,
                    'TanggalClosing', w5,
                    'TanggalBayar', w5,
                    'TanggalCS', w5,
                    'DisplayName', w2,
                    'Keterangan', w2,
                    'DetailList', w6
                ]);
            }
        }
    }
}

