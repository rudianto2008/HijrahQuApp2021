
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class CsListGrid extends Serenity.EntityGrid<CsListRow, any> {
        protected getColumnsKey() { return 'Default.CsList'; }
        protected getDialogType() { return CsListDialog; }
        protected getIdProperty() { return CsListRow.idProperty; }
        protected getLocalTextPrefix() { return CsListRow.localTextPrefix; }
        protected getService() { return CsListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}