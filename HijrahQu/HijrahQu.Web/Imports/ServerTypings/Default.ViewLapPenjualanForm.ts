namespace HijrahQu.Default {
    export interface ViewLapPenjualanForm {
        OrderDate: Serenity.DateEditor;
        CustomerName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Handphone: Serenity.StringEditor;
        TotalHarga: Serenity.DecimalEditor;
        Ongkir: Serenity.DecimalEditor;
        TotalBayar: Serenity.DecimalEditor;
        TanggalWa: Serenity.DateEditor;
        TanggalKirim: Serenity.DateEditor;
        TanggalBayar: Serenity.DateEditor;
        TanggalCs: Serenity.DateEditor;
    }

    export class ViewLapPenjualanForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ViewLapPenjualan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ViewLapPenjualanForm.init)  {
                ViewLapPenjualanForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ViewLapPenjualanForm, [
                    'OrderDate', w0,
                    'CustomerName', w1,
                    'Address', w1,
                    'Handphone', w1,
                    'TotalHarga', w2,
                    'Ongkir', w2,
                    'TotalBayar', w2,
                    'TanggalWa', w0,
                    'TanggalKirim', w0,
                    'TanggalBayar', w0,
                    'TanggalCs', w0
                ]);
            }
        }
    }
}

