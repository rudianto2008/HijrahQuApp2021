
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class ViewLapKeuanganGrid extends Serenity.EntityGrid<ViewLapKeuanganRow, any> {
        protected getColumnsKey() { return 'Default.ViewLapKeuangan'; }
        protected getDialogType() { return ViewLapKeuanganDialog; }
        protected getIdProperty() { return ViewLapKeuanganRow.idProperty; }
        protected getLocalTextPrefix() { return ViewLapKeuanganRow.localTextPrefix; }
        protected getService() { return ViewLapKeuanganService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}