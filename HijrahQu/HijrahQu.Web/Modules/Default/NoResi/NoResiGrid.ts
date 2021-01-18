
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class NoResiGrid extends Serenity.EntityGrid<NoResiRow, any> {
        protected getColumnsKey() { return 'Default.NoResi'; }
        protected getDialogType() { return NoResiDialog; }
        protected getIdProperty() { return NoResiRow.idProperty; }
        protected getLocalTextPrefix() { return NoResiRow.localTextPrefix; }
        protected getService() { return NoResiService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}