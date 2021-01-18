namespace HijrahQu.Default {
    export interface KodePosForm {
        Kelurahan: Serenity.StringEditor;
        Kecamatan: Serenity.StringEditor;
        Kabupaten: Serenity.StringEditor;
        Provinsi: Serenity.StringEditor;
        Kodepos: Serenity.StringEditor;
    }

    export class KodePosForm extends Serenity.PrefixedContext {
        static formKey = 'Default.KodePos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!KodePosForm.init)  {
                KodePosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(KodePosForm, [
                    'Kelurahan', w0,
                    'Kecamatan', w0,
                    'Kabupaten', w0,
                    'Provinsi', w0,
                    'Kodepos', w0
                ]);
            }
        }
    }
}

