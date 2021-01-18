namespace HijrahQu.Default {
    export interface CustomerRow {
        CustomerId?: number;
        CustomerName?: string;
        Address?: string;
        Handphone?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        Kodepos?: string;
        Province?: string;
        City?: string;
        District?: string;
    }

    export namespace CustomerRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'CustomerName';
        export const localTextPrefix = 'Default.Customer';
        export const lookupKey = 'Default.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('Default.Customer');
        }

        export declare const enum Fields {
            CustomerId = "CustomerId",
            CustomerName = "CustomerName",
            Address = "Address",
            Handphone = "Handphone",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            Kodepos = "Kodepos",
            Province = "Province",
            City = "City",
            District = "District"
        }
    }
}

