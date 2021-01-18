
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class WhatsappLogDialog extends Serenity.EntityDialog<WhatsappLogRow, any> {
        protected getFormKey() { return WhatsappLogForm.formKey; }
        protected getIdProperty() { return WhatsappLogRow.idProperty; }
        protected getLocalTextPrefix() { return WhatsappLogRow.localTextPrefix; }
        protected getNameProperty() { return WhatsappLogRow.nameProperty; }
        protected getService() { return WhatsappLogService.baseUrl; }

        protected form = new WhatsappLogForm(this.idPrefix);

    }
}