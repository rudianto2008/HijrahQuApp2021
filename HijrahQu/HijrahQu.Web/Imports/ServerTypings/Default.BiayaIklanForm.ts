namespace HijrahQu.Default {
    export interface BiayaIklanForm {
        BiayaIklan: Serenity.DecimalEditor;
        Tanggal: Serenity.DateEditor;
        LeadsDashboard: Serenity.IntegerEditor;
        LeadsReal: Serenity.IntegerEditor;
        ClosingCS1: Serenity.IntegerEditor;
        ClosingCS2: Serenity.IntegerEditor;
        CostPerLeadsFB: Serenity.DecimalEditor;
        CostPerLeadsWA: Serenity.DecimalEditor;
    }

    export class BiayaIklanForm extends Serenity.PrefixedContext {
        static formKey = 'Default.BiayaIklan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BiayaIklanForm.init)  {
                BiayaIklanForm.init = true;

                var s = Serenity;
                var w0 = s.DecimalEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(BiayaIklanForm, [
                    'BiayaIklan', w0,
                    'Tanggal', w1,
                    'LeadsDashboard', w2,
                    'LeadsReal', w2,
                    'ClosingCS1', w2,
                    'ClosingCS2', w2,
                    'CostPerLeadsFB', w0,
                    'CostPerLeadsWA', w0
                ]);
            }
        }
    }
}

