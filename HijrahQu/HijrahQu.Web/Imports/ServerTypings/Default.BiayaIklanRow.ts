namespace HijrahQu.Default {
    export interface BiayaIklanRow {
        BiayaIklanId?: number;
        BiayaIklan?: number;
        Tanggal?: string;
        LeadsDashboard?: number;
        LeadsReal?: number;
        ClosingCS1?: number;
        ClosingCS2?: number;
        CostPerLeadsFB?: number;
        CostPerLeadsWA?: number;
    }

    export namespace BiayaIklanRow {
        export const idProperty = 'BiayaIklanId';
        export const localTextPrefix = 'Default.BiayaIklan';

        export declare const enum Fields {
            BiayaIklanId = "BiayaIklanId",
            BiayaIklan = "BiayaIklan",
            Tanggal = "Tanggal",
            LeadsDashboard = "LeadsDashboard",
            LeadsReal = "LeadsReal",
            ClosingCS1 = "ClosingCS1",
            ClosingCS2 = "ClosingCS2",
            CostPerLeadsFB = "CostPerLeadsFB",
            CostPerLeadsWA = "CostPerLeadsWA"
        }
    }
}

