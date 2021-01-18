namespace HijrahQu.Default {
    export interface WhatsappLogRow {
        WhatsappLogId?: number;
        OrderId?: number;
        MessageType?: string;
        Sent?: string;
        SendDate?: string;
        MessageText?: string;
    }

    export namespace WhatsappLogRow {
        export const idProperty = 'WhatsappLogId';
        export const nameProperty = 'MessageType';
        export const localTextPrefix = 'Default.WhatsappLog';
        export const lookupKey = 'Default.WhatsappLog';

        export function getLookup(): Q.Lookup<WhatsappLogRow> {
            return Q.getLookup<WhatsappLogRow>('Default.WhatsappLog');
        }

        export declare const enum Fields {
            WhatsappLogId = "WhatsappLogId",
            OrderId = "OrderId",
            MessageType = "MessageType",
            Sent = "Sent",
            SendDate = "SendDate",
            MessageText = "MessageText"
        }
    }
}

