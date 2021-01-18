namespace HijrahQu.Default {
    export interface LaporanHarianRow {
        LaporanHarianId?: number;
        Tanggal?: string;
        NamaCs?: string;
        WaWeb?: number;
        WaReal?: number;
        WaFb?: number;
        Closing?: number;
        BudgetFb?: number;
        CostPerRealWa?: number;
        PersenWA?: number;
        PersenClosing?: number;
    }

    export namespace LaporanHarianRow {
        export const idProperty = 'LaporanHarianId';
        export const nameProperty = 'NamaCs';
        export const localTextPrefix = 'Default.LaporanHarian';

        export declare const enum Fields {
            LaporanHarianId = "LaporanHarianId",
            Tanggal = "Tanggal",
            NamaCs = "NamaCs",
            WaWeb = "WaWeb",
            WaReal = "WaReal",
            WaFb = "WaFb",
            Closing = "Closing",
            BudgetFb = "BudgetFb",
            CostPerRealWa = "CostPerRealWa",
            PersenWA = "PersenWA",
            PersenClosing = "PersenClosing"
        }
    }
}

