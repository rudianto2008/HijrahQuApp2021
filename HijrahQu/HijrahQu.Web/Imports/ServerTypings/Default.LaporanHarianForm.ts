namespace HijrahQu.Default {
    export interface LaporanHarianForm {
        Tanggal: Serenity.DateEditor;
        NamaCs: Serenity.StringEditor;
        WaWeb: Serenity.IntegerEditor;
        WaReal: Serenity.IntegerEditor;
        PersenWA: Serenity.DecimalEditor;
        Closing: Serenity.IntegerEditor;
        PersenClosing: Serenity.DecimalEditor;
    }

    export class LaporanHarianForm extends Serenity.PrefixedContext {
        static formKey = 'Default.LaporanHarian';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LaporanHarianForm.init)  {
                LaporanHarianForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(LaporanHarianForm, [
                    'Tanggal', w0,
                    'NamaCs', w1,
                    'WaWeb', w2,
                    'WaReal', w2,
                    'PersenWA', w3,
                    'Closing', w2,
                    'PersenClosing', w3
                ]);
            }
        }
    }
}

