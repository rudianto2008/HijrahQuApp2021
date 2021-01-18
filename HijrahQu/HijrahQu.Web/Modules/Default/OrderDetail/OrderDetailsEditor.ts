/// <reference path="../../Common/Helpers/GridEditorBase.ts" />


namespace HijrahQu.Default {
    @Serenity.Decorators.registerClass()
    export class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailRow> {
        protected getColumnsKey() { return "Default.OrderDetail"; }
        protected getDialogType() { return OrderDetailDialog; }
        protected getLocalTextPrefix() { return OrderDetailRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();
            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
            //this.view.setSummaryOptions({
            //    aggregators: [
            //        new Slick.Aggregators.Sum(fld.Quantity),
            //        new Slick.Aggregators.Sum(fld.LineTotal)
            //    ]
            //});

            return grid;
        }

        validateEntity(row, id) {
            row.ProductId = Q.toId(row.ProductId);

            var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductId === row.ProductId);
            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('This product is already in order!');
                return false;
            }
            row.ProductProductName = ProductRow.getLookup().itemById[row.ProductId].ProductName;
            row.LineTotal = (row.Quantity || 0) * (row.Price || 0);
            return true;
        }
    }
}