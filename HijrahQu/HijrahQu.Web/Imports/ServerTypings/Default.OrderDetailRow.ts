namespace HijrahQu.Default {
    export interface OrderDetailRow {
        OrderDetailId?: number;
        OrderId?: number;
        ProductId?: number;
        Quantity?: number;
        OrderStatus?: string;
        Price?: number;
        LineTotal?: number;
        Ongkir?: number;
        TotalPerItem?: number;
        OrderOrderDate?: string;
        OrderCustomerId?: number;
        ProductProductName?: string;
        ProductDescription?: string;
        ProductSalePrice?: number;
        ProductPrice?: number;
        ProductSupplierId?: number;
    }

    export namespace OrderDetailRow {
        export const idProperty = 'OrderDetailId';
        export const nameProperty = 'OrderStatus';
        export const localTextPrefix = 'Default.OrderDetail';

        export declare const enum Fields {
            OrderDetailId = "OrderDetailId",
            OrderId = "OrderId",
            ProductId = "ProductId",
            Quantity = "Quantity",
            OrderStatus = "OrderStatus",
            Price = "Price",
            LineTotal = "LineTotal",
            Ongkir = "Ongkir",
            TotalPerItem = "TotalPerItem",
            OrderOrderDate = "OrderOrderDate",
            OrderCustomerId = "OrderCustomerId",
            ProductProductName = "ProductProductName",
            ProductDescription = "ProductDescription",
            ProductSalePrice = "ProductSalePrice",
            ProductPrice = "ProductPrice",
            ProductSupplierId = "ProductSupplierId"
        }
    }
}

