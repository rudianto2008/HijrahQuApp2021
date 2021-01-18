
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class OrderImportDialog extends Serenity.EntityDialog<ViewOrderRow, any> {
        protected getFormKey() { return ViewOrderForm.formKey; }
        protected getIdProperty() { return ViewOrderRow.idProperty; }
        protected getLocalTextPrefix() { return ViewOrderRow.localTextPrefix; }
        protected getNameProperty() { return ViewOrderRow.nameProperty; }
        protected getService() { return ViewOrderService.baseUrl; }

        protected form = new ViewOrderForm(this.idPrefix);

    }
}