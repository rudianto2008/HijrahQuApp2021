
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class ViewLapPenjualanGrid extends Serenity.EntityGrid<ViewLapPenjualanRow, any> {
        protected getColumnsKey() { return 'Default.ViewLapPenjualan'; }
        protected getDialogType() { return ViewLapPenjualanDialog; }
        protected getIdProperty() { return ViewLapPenjualanRow.idProperty; }
        protected getLocalTextPrefix() { return ViewLapPenjualanRow.localTextPrefix; }
        protected getService() { return ViewLapPenjualanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}