
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class LaporanHarianGrid extends Serenity.EntityGrid<LaporanHarianRow, any> {
        protected getColumnsKey() { return 'Default.LaporanHarian'; }
        protected getDialogType() { return LaporanHarianDialog; }
        protected getIdProperty() { return LaporanHarianRow.idProperty; }
        protected getLocalTextPrefix() { return LaporanHarianRow.localTextPrefix; }
        protected getService() { return LaporanHarianService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}