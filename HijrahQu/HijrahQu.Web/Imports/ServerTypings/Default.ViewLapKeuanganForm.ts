namespace HijrahQu.Default {
    export interface ViewLapKeuanganForm {
        Handphone: Serenity.StringEditor;
        TanggalBayar: Serenity.DateEditor;
        TotalBayar: Serenity.DecimalEditor;
        Ongkir: Serenity.DecimalEditor;
        TotalHarga: Serenity.DecimalEditor;
        TanggalWa: Serenity.DateEditor;
        BiayaIklan: Serenity.StringEditor;
    }

    export class ViewLapKeuanganForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ViewLapKeuangan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ViewLapKeuanganForm.init)  {
                ViewLapKeuanganForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ViewLapKeuanganForm, [
                    'Handphone', w0,
                    'TanggalBayar', w1,
                    'TotalBayar', w2,
                    'Ongkir', w2,
                    'TotalHarga', w2,
                    'TanggalWa', w1,
                    'BiayaIklan', w0
                ]);
            }
        }
    }
}

