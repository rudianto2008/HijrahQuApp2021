namespace HijrahQu.Default {
    export interface NoResiRow {
        NoResiId?: number;
        OrderId?: number;
        CustomerName?: string;
        Handphone?: string;
        Expedisi?: string;
        ExpedisiService?: string;
        Destination?: string;
        NoResi?: string;
        Ongkir?: number;
        SendDate?: string;
        JNEDate?: string;
        StatusPengiriman?: string;
        NINJADate?: string;
    }

    export namespace NoResiRow {
        export const idProperty = 'NoResiId';
        export const nameProperty = 'CustomerName';
        export const localTextPrefix = 'Default.NoResi';

        export declare const enum Fields {
            NoResiId = "NoResiId",
            OrderId = "OrderId",
            CustomerName = "CustomerName",
            Handphone = "Handphone",
            Expedisi = "Expedisi",
            ExpedisiService = "ExpedisiService",
            Destination = "Destination",
            NoResi = "NoResi",
            Ongkir = "Ongkir",
            SendDate = "SendDate",
            JNEDate = "JNEDate",
            StatusPengiriman = "StatusPengiriman",
            NINJADate = "NINJADate"
        }
    }
}

