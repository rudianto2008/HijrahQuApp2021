
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class MessageWaGrid extends Serenity.EntityGrid<MessageWaRow, any> {
        protected getColumnsKey() { return 'Default.MessageWa'; }
        protected getDialogType() { return MessageWaDialog; }
        protected getIdProperty() { return MessageWaRow.idProperty; }
        protected getLocalTextPrefix() { return MessageWaRow.localTextPrefix; }
        protected getService() { return MessageWaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}