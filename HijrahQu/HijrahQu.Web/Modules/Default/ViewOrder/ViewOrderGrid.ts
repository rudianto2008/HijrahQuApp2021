
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class ViewOrderGrid extends Serenity.EntityGrid<ViewOrderRow, any> {
        protected getColumnsKey() { return 'Default.ViewOrder'; }
        protected getDialogType() { return ViewOrderDialog; }
        protected getIdProperty() { return ViewOrderRow.idProperty; }
        protected getLocalTextPrefix() { return ViewOrderRow.localTextPrefix; }
        protected getService() { return ViewOrderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}