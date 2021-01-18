namespace HijrahQu.Default {
    export interface MessageWaRow {
        MessageWaId?: number;
        MessageType?: string;
        MessageDesc?: string;
    }

    export namespace MessageWaRow {
        export const idProperty = 'MessageWaId';
        export const nameProperty = 'MessageType';
        export const localTextPrefix = 'Default.MessageWa';
        export const lookupKey = 'Default.MessageWa';

        export function getLookup(): Q.Lookup<MessageWaRow> {
            return Q.getLookup<MessageWaRow>('Default.MessageWa');
        }

        export declare const enum Fields {
            MessageWaId = "MessageWaId",
            MessageType = "MessageType",
            MessageDesc = "MessageDesc"
        }
    }
}

