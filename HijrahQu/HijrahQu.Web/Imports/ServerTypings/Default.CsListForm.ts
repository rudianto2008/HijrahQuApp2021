namespace HijrahQu.Default {
    export interface CsListForm {
        CsName: Serenity.StringEditor;
        NoHp: Serenity.StringEditor;
        IsActive: Serenity.StringEditor;
    }

    export class CsListForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CsList';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CsListForm.init)  {
                CsListForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CsListForm, [
                    'CsName', w0,
                    'NoHp', w0,
                    'IsActive', w0
                ]);
            }
        }
    }
}

