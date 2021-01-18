namespace HijrahQu.Default {
    export interface OrderRow {
        OrderId?: number;
        CustomerId?: number;
        KirimWAInfo?: number;
        ResiWAInfo?: number;
        TagihWAInfo?: number;
        CustomerCustomerName?: string;
        CustomerAddress?: string;
        CustomerHandphone?: string;
        OrderStatus?: string;
        NoResi?: string;
        TotalRecord?: number;
        Ongkir?: number;
        BiayaCOD?: number;
        TotalHarga?: number;
        TotalBayar?: number;
        SudahBayar?: string;
        TanggalWa?: string;
        TanggalKirim?: string;
        TanggalClosing?: string;
        TanggalBayar?: string;
        TanggalCS?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        ReceiveDate?: string;
        ReceiveBy?: string;
        ReceiveTime?: string;
        DisplayName?: string;
        Kodepos?: string;
        Keterangan?: string;
        Expedisi?: string;
        CaraBayar?: string;
        DetailList?: OrderDetailRow[];
    }

    export namespace OrderRow {
        export const idProperty = 'OrderId';
        export const localTextPrefix = 'Default.Order';
        export const lookupKey = 'Default.Order';

        export function getLookup(): Q.Lookup<OrderRow> {
            return Q.getLookup<OrderRow>('Default.Order');
        }

        export declare const enum Fields {
            OrderId = "OrderId",
            CustomerId = "CustomerId",
            KirimWAInfo = "KirimWAInfo",
            ResiWAInfo = "ResiWAInfo",
            TagihWAInfo = "TagihWAInfo",
            CustomerCustomerName = "CustomerCustomerName",
            CustomerAddress = "CustomerAddress",
            CustomerHandphone = "CustomerHandphone",
            OrderStatus = "OrderStatus",
            NoResi = "NoResi",
            TotalRecord = "TotalRecord",
            Ongkir = "Ongkir",
            BiayaCOD = "BiayaCOD",
            TotalHarga = "TotalHarga",
            TotalBayar = "TotalBayar",
            SudahBayar = "SudahBayar",
            TanggalWa = "TanggalWa",
            TanggalKirim = "TanggalKirim",
            TanggalClosing = "TanggalClosing",
            TanggalBayar = "TanggalBayar",
            TanggalCS = "TanggalCS",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            ReceiveDate = "ReceiveDate",
            ReceiveBy = "ReceiveBy",
            ReceiveTime = "ReceiveTime",
            DisplayName = "DisplayName",
            Kodepos = "Kodepos",
            Keterangan = "Keterangan",
            Expedisi = "Expedisi",
            CaraBayar = "CaraBayar",
            DetailList = "DetailList"
        }
    }
}

