
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class WhatsappLeadsGrid extends Serenity.EntityGrid<WhatsappLeadsRow, any> {
        protected getColumnsKey() { return 'Default.WhatsappLeads'; }
        protected getDialogType() { return WhatsappLeadsDialog; }
        protected getIdProperty() { return WhatsappLeadsRow.idProperty; }
        protected getLocalTextPrefix() { return WhatsappLeadsRow.localTextPrefix; }
        protected getService() { return WhatsappLeadsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {
            var button = super.getButtons();
            button = [];
            return button;
        }
    }
}