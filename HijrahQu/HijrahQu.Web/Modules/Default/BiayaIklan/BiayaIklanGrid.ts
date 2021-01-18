
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class BiayaIklanGrid extends Serenity.EntityGrid<BiayaIklanRow, any> {
        protected getColumnsKey() { return 'Default.BiayaIklan'; }
        protected getDialogType() { return BiayaIklanDialog; }
        protected getIdProperty() { return BiayaIklanRow.idProperty; }
        protected getLocalTextPrefix() { return BiayaIklanRow.localTextPrefix; }
        protected getService() { return BiayaIklanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}