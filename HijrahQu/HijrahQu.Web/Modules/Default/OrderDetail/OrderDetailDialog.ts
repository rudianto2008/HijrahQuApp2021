
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()

    export class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
        protected getFormKey() { return OrderDetailForm.formKey; }
        protected getIdProperty() { return OrderDetailRow.idProperty; }
        protected getLocalTextPrefix() { return OrderDetailRow.localTextPrefix; }
        protected getNameProperty() { return OrderDetailRow.nameProperty; }
        protected getService() { return OrderDetailService.baseUrl; }

        protected form = new OrderDetailForm(this.idPrefix);

        constructor() {
            super();
            this.form.ProductId.changeSelect2(e => {
                var productID = Q.toId(this.form.ProductId.value);
                if (productID != null) {
                    this.form.Price.value = ProductRow.getLookup().itemById[productID].Price;
                    console.log(ProductRow.getLookup().itemById[productID].Price);
                }
            });

            this.form.Quantity.change(e => {
                this.form.TotalPerItem.value = this.form.Quantity.value * this.form.Price.value;
            });
            
            //this.form.Discount.addValidationRule(this.uniqueName, e => {
            //    var price = this.form.UnitPrice.value;
            //    var quantity = this.form.Quantity.value;
            //    var discount = this.form.Discount.value;
            //    if (price != null && quantity != null && discount != null &&
            //        discount > 0 && discount >= price * quantity) {
            //        return "Discount can't be higher than total price!";
            //    }
            //});
        }
    }

}
