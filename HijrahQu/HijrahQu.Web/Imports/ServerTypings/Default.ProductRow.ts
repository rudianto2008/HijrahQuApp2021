namespace HijrahQu.Default {
    export interface ProductRow {
        ProductId?: number;
        ProductName?: string;
        Description?: string;
        SalePrice?: number;
        Price?: number;
        SupplierId?: number;
        ProductGroup?: string;
        SupplierSupplierName?: string;
        SupplierHandphone?: string;
        SupplierWebsite?: string;
        SupplierSource?: string;
    }

    export namespace ProductRow {
        export const idProperty = 'ProductId';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Default.Product';
        export const lookupKey = 'Default.Product';

        export function getLookup(): Q.Lookup<ProductRow> {
            return Q.getLookup<ProductRow>('Default.Product');
        }

        export declare const enum Fields {
            ProductId = "ProductId",
            ProductName = "ProductName",
            Description = "Description",
            SalePrice = "SalePrice",
            Price = "Price",
            SupplierId = "SupplierId",
            ProductGroup = "ProductGroup",
            SupplierSupplierName = "SupplierSupplierName",
            SupplierHandphone = "SupplierHandphone",
            SupplierWebsite = "SupplierWebsite",
            SupplierSource = "SupplierSource"
        }
    }
}

