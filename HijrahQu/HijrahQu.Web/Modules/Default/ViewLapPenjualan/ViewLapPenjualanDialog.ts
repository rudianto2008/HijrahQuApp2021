
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class ViewLapPenjualanDialog extends Serenity.EntityDialog<ViewLapPenjualanRow, any> {
        protected getFormKey() { return ViewLapPenjualanForm.formKey; }
        protected getIdProperty() { return ViewLapPenjualanRow.idProperty; }
        protected getLocalTextPrefix() { return ViewLapPenjualanRow.localTextPrefix; }
        protected getNameProperty() { return ViewLapPenjualanRow.nameProperty; }
        protected getService() { return ViewLapPenjualanService.baseUrl; }

        protected form = new ViewLapPenjualanForm(this.idPrefix);

    }
}