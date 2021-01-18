namespace HijrahQu.Default {
    export interface CsListRow {
        CsId?: number;
        CsName?: string;
        NoHp?: string;
        IsActive?: string;
    }

    export namespace CsListRow {
        export const idProperty = 'CsId';
        export const nameProperty = 'CsName';
        export const localTextPrefix = 'Default.CsList';
        export const lookupKey = 'HijrahQu.CSList';

        export function getLookup(): Q.Lookup<CsListRow> {
            return Q.getLookup<CsListRow>('HijrahQu.CSList');
        }

        export declare const enum Fields {
            CsId = "CsId",
            CsName = "CsName",
            NoHp = "NoHp",
            IsActive = "IsActive"
        }
    }
}

