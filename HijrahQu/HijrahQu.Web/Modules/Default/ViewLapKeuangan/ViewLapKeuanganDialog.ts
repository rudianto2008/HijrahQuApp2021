
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class ViewLapKeuanganDialog extends Serenity.EntityDialog<ViewLapKeuanganRow, any> {
        protected getFormKey() { return ViewLapKeuanganForm.formKey; }
        protected getIdProperty() { return ViewLapKeuanganRow.idProperty; }
        protected getLocalTextPrefix() { return ViewLapKeuanganRow.localTextPrefix; }
        protected getNameProperty() { return ViewLapKeuanganRow.nameProperty; }
        protected getService() { return ViewLapKeuanganService.baseUrl; }

        protected form = new ViewLapKeuanganForm(this.idPrefix);

    }
}