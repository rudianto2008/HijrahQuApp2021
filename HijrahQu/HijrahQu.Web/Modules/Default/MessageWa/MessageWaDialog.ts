
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class MessageWaDialog extends Serenity.EntityDialog<MessageWaRow, any> {
        protected getFormKey() { return MessageWaForm.formKey; }
        protected getIdProperty() { return MessageWaRow.idProperty; }
        protected getLocalTextPrefix() { return MessageWaRow.localTextPrefix; }
        protected getNameProperty() { return MessageWaRow.nameProperty; }
        protected getService() { return MessageWaService.baseUrl; }

        protected form = new MessageWaForm(this.idPrefix);

    }
}