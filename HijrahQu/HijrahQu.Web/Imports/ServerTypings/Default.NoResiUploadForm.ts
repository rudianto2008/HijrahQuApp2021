namespace HijrahQu.Default {
    export interface NoResiUploadForm {
        FileName: Serenity.ImageUploadEditor;
        Expedisi: Default.Editor.ExpedisiEditor;
        TotalRecord: Serenity.IntegerEditor;
    }

    export class NoResiUploadForm extends Serenity.PrefixedContext {
        static formKey = 'Default.NoResiUpload';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NoResiUploadForm.init)  {
                NoResiUploadForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;
                var w1 = Default.Editor.ExpedisiEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(NoResiUploadForm, [
                    'FileName', w0,
                    'Expedisi', w1,
                    'TotalRecord', w2
                ]);
            }
        }
    }
}

