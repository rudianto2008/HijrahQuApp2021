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
        CaraBayar: CaraBayarEditor;
        Expedisi: ExpedisiEditor;
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
                var w5 = CaraBayarEditor;
                var w6 = ExpedisiEditor;
                var w7 = s.DateEditor;
                var w8 = OrderDetailsEditor;

                Q.initFormType(OrderForm, [
                    'CustomerId', w0,
                    'CustomerAddress', w1,
                    'CustomerHandphone', w2,
                    'NoResi', w2,
                    'OrderStatus', w3,
                    'Ongkir', w4,
                    'BiayaCOD', w4,
                    'TotalBayar', w4,
                    'CaraBayar', w5,
                    'Expedisi', w6,
                    'TanggalWa', w7,
                    'TanggalKirim', w7,
                    'TanggalClosing', w7,
                    'TanggalBayar', w7,
                    'TanggalCS', w7,
                    'DisplayName', w2,
                    'Keterangan', w2,
                    'DetailList', w8
                ]);
            }
        }
    }
}

