
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class WhatsappLeadsDialog extends Serenity.EntityDialog<WhatsappLeadsRow, any> {
        protected getFormKey() { return WhatsappLeadsForm.formKey; }
        protected getIdProperty() { return WhatsappLeadsRow.idProperty; }
        protected getLocalTextPrefix() { return WhatsappLeadsRow.localTextPrefix; }
        protected getNameProperty() { return WhatsappLeadsRow.nameProperty; }
        protected getService() { return WhatsappLeadsService.baseUrl; }

        protected form = new WhatsappLeadsForm(this.idPrefix);

    }
}