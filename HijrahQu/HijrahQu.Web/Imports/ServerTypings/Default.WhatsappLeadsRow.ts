namespace HijrahQu.Default {
    export interface WhatsappLeadsRow {
        WhatsappLeadsId?: number;
        NoWhatsappCs?: string;
        NamaCs?: string;
        InsertUserId?: number;
        InsertDate?: string;
    }

    export namespace WhatsappLeadsRow {
        export const idProperty = 'WhatsappLeadsId';
        export const nameProperty = 'NoWhatsappCs';
        export const localTextPrefix = 'Default.WhatsappLeads';
        export const lookupKey = 'HijrahQu.WhatsappLead';

        export function getLookup(): Q.Lookup<WhatsappLeadsRow> {
            return Q.getLookup<WhatsappLeadsRow>('HijrahQu.WhatsappLead');
        }

        export declare const enum Fields {
            WhatsappLeadsId = "WhatsappLeadsId",
            NoWhatsappCs = "NoWhatsappCs",
            NamaCs = "NamaCs",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate"
        }
    }
}

