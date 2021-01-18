namespace HijrahQu.Default {
    export interface ViewLapKeuanganRow {
        OrderId?: number;
        CustomerName?: string;
        Handphone?: string;
        TanggalBayar?: string;
        TotalBayar?: number;
        Ongkir?: number;
        TotalHarga?: number;
        TanggalWa?: string;
        BiayaIklan?: string;
    }

    export namespace ViewLapKeuanganRow {
        export const idProperty = 'CustomerName';
        export const nameProperty = 'CustomerName';
        export const localTextPrefix = 'Default.ViewLapKeuangan';

        export declare const enum Fields {
            OrderId = "OrderId",
            CustomerName = "CustomerName",
            Handphone = "Handphone",
            TanggalBayar = "TanggalBayar",
            TotalBayar = "TotalBayar",
            Ongkir = "Ongkir",
            TotalHarga = "TotalHarga",
            TanggalWa = "TanggalWa",
            BiayaIklan = "BiayaIklan"
        }
    }
}

