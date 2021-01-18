namespace HijrahQu.Default {
    export interface SupplierRow {
        SupplierD?: number;
        SupplierName?: string;
        Handphone?: string;
        Website?: string;
        Source?: string;
    }

    export namespace SupplierRow {
        export const idProperty = 'SupplierD';
        export const nameProperty = 'SupplierName';
        export const localTextPrefix = 'Default.Supplier';
        export const lookupKey = 'Default.Supplier';

        export function getLookup(): Q.Lookup<SupplierRow> {
            return Q.getLookup<SupplierRow>('Default.Supplier');
        }

        export declare const enum Fields {
            SupplierD = "SupplierD",
            SupplierName = "SupplierName",
            Handphone = "Handphone",
            Website = "Website",
            Source = "Source"
        }
    }
}

