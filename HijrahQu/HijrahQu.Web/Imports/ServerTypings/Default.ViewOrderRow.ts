namespace HijrahQu.Default {
    export interface ViewOrderRow {
        OrderId?: number;
        OrderDate?: string;
        Quantity?: number;
        CustomerName?: string;
        Address?: string;
        Handphone?: string;
        ProductName?: string;
        NamaPengirim?: string;
        NoPengirim?: string;
        NoResi?: string;
        Ongkir?: number;
        TotalHarga?: number;
        TotalBayar?: number;
        ReceiveDate?: string;
        ReceiveBy?: string;
        ReceiveTime?: string;
        OrderStatus?: string;
    }

    export namespace ViewOrderRow {
        export const idProperty = 'OrderId';
        export const nameProperty = 'CustomerName';
        export const localTextPrefix = 'Default.ViewOrder';
        export const lookupKey = 'Default.ViewOrder';

        export function getLookup(): Q.Lookup<ViewOrderRow> {
            return Q.getLookup<ViewOrderRow>('Default.ViewOrder');
        }

        export declare const enum Fields {
            OrderId = "OrderId",
            OrderDate = "OrderDate",
            Quantity = "Quantity",
            CustomerName = "CustomerName",
            Address = "Address",
            Handphone = "Handphone",
            ProductName = "ProductName",
            NamaPengirim = "NamaPengirim",
            NoPengirim = "NoPengirim",
            NoResi = "NoResi",
            Ongkir = "Ongkir",
            TotalHarga = "TotalHarga",
            TotalBayar = "TotalBayar",
            ReceiveDate = "ReceiveDate",
            ReceiveBy = "ReceiveBy",
            ReceiveTime = "ReceiveTime",
            OrderStatus = "OrderStatus"
        }
    }
}

