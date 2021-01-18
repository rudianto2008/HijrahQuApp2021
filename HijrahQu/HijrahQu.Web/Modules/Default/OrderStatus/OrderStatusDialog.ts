
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class OrderStatusDialog extends Serenity.EntityDialog<OrderStatusRow, any> {
        protected getFormKey() { return OrderStatusForm.formKey; }
        protected getIdProperty() { return OrderStatusRow.idProperty; }
        protected getLocalTextPrefix() { return OrderStatusRow.localTextPrefix; }
        protected getNameProperty() { return OrderStatusRow.nameProperty; }
        protected getService() { return OrderStatusService.baseUrl; }

        protected form = new OrderStatusForm(this.idPrefix);

    }
}