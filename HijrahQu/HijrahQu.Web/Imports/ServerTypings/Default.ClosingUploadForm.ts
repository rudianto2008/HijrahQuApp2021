namespace HijrahQu.Default {
    export interface ClosingUploadForm {
        FileName: Serenity.ImageUploadEditor;
        TotalRecord: Serenity.IntegerEditor;
    }

    export class ClosingUploadForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ClosingUpload';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClosingUploadForm.init)  {
                ClosingUploadForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ClosingUploadForm, [
                    'FileName', w0,
                    'TotalRecord', w1
                ]);
            }
        }
    }
}

