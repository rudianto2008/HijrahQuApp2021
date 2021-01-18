namespace HijrahQu.Default {
    export interface ProductForm {
        ProductName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        SalePrice: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        SupplierId: Serenity.LookupEditor;
    }

    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Product';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductForm.init)  {
                ProductForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(ProductForm, [
                    'ProductName', w0,
                    'Description', w0,
                    'SalePrice', w1,
                    'Price', w1,
                    'SupplierId', w2
                ]);
            }
        }
    }
}

