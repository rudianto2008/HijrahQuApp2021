namespace HijrahQu.Default {
    export interface NoResiForm {
        OrderId: Serenity.IntegerEditor;
        CustomerName: Serenity.StringEditor;
        Handphone: Serenity.StringEditor;
        Expedisi: Serenity.StringEditor;
        ExpedisiService: Serenity.StringEditor;
        Destination: Serenity.StringEditor;
        Ongkir: Serenity.DecimalEditor;
    }

    export class NoResiForm extends Serenity.PrefixedContext {
        static formKey = 'Default.NoResi';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NoResiForm.init)  {
                NoResiForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(NoResiForm, [
                    'OrderId', w0,
                    'CustomerName', w1,
                    'Handphone', w1,
                    'Expedisi', w1,
                    'ExpedisiService', w1,
                    'Destination', w1,
                    'Ongkir', w2
                ]);
            }
        }
    }
}

