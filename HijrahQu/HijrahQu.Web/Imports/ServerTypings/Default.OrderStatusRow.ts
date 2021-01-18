namespace HijrahQu.Default {
    export interface OrderStatusRow {
        OrderStatusId?: number;
        OrderStatus?: string;
    }

    export namespace OrderStatusRow {
        export const idProperty = 'OrderStatusId';
        export const nameProperty = 'OrderStatus';
        export const localTextPrefix = 'Default.OrderStatus';
        export const lookupKey = 'Default.OrderStatusLookup';

        export function getLookup(): Q.Lookup<OrderStatusRow> {
            return Q.getLookup<OrderStatusRow>('Default.OrderStatusLookup');
        }

        export declare const enum Fields {
            OrderStatusId = "OrderStatusId",
            OrderStatus = "OrderStatus"
        }
    }
}

