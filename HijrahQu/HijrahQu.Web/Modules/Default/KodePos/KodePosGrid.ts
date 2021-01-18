
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class KodePosGrid extends Serenity.EntityGrid<KodePosRow, any> {
        protected getColumnsKey() { return 'Default.KodePos'; }
        protected getDialogType() { return KodePosDialog; }
        protected getIdProperty() { return KodePosRow.idProperty; }
        protected getLocalTextPrefix() { return KodePosRow.localTextPrefix; }
        protected getService() { return KodePosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}