
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class WhatsappLogGrid extends Serenity.EntityGrid<WhatsappLogRow, any> {
        protected getColumnsKey() { return 'Default.WhatsappLog'; }
        protected getDialogType() { return WhatsappLogDialog; }
        protected getIdProperty() { return WhatsappLogRow.idProperty; }
        protected getLocalTextPrefix() { return WhatsappLogRow.localTextPrefix; }
        protected getService() { return WhatsappLogService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}