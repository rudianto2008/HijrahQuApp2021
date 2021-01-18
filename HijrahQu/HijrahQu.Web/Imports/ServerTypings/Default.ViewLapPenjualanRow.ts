namespace HijrahQu.Default {
    export interface ViewLapPenjualanRow {
        OrderId?: number;
        OrderDate?: string;
        CustomerName?: string;
        Address?: string;
        Handphone?: string;
        TotalHarga?: number;
        Ongkir?: number;
        TotalBayar?: number;
        TanggalWa?: string;
        TanggalKirim?: string;
        TanggalBayar?: string;
        TanggalCs?: string;
    }

    export namespace ViewLapPenjualanRow {
        export const idProperty = 'OrderId';
        export const nameProperty = 'CustomerName';
        export const localTextPrefix = 'Default.ViewLapPenjualan';

        export declare const enum Fields {
            OrderId = "OrderId",
            OrderDate = "OrderDate",
            CustomerName = "CustomerName",
            Address = "Address",
            Handphone = "Handphone",
            TotalHarga = "TotalHarga",
            Ongkir = "Ongkir",
            TotalBayar = "TotalBayar",
            TanggalWa = "TanggalWa",
            TanggalKirim = "TanggalKirim",
            TanggalBayar = "TanggalBayar",
            TanggalCs = "TanggalCs"
        }
    }
}

