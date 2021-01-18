namespace HijrahQu.Default {
    export interface KodePosRow {
        Id?: number;
        Kelurahan?: string;
        Kecamatan?: string;
        Kabupaten?: string;
        Provinsi?: string;
        Kodepos?: string;
        KodeposLengkap?: string;
    }

    export namespace KodePosRow {
        export const idProperty = 'Kodepos';
        export const nameProperty = 'KodeposLengkap';
        export const localTextPrefix = 'Default.KodePos';
        export const lookupKey = 'Default.KodePos';

        export function getLookup(): Q.Lookup<KodePosRow> {
            return Q.getLookup<KodePosRow>('Default.KodePos');
        }

        export declare const enum Fields {
            Id = "Id",
            Kelurahan = "Kelurahan",
            Kecamatan = "Kecamatan",
            Kabupaten = "Kabupaten",
            Provinsi = "Provinsi",
            Kodepos = "Kodepos",
            KodeposLengkap = "KodeposLengkap"
        }
    }
}

