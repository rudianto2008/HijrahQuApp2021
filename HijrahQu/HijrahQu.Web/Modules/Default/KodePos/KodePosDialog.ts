
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class KodePosDialog extends Serenity.EntityDialog<KodePosRow, any> {
        protected getFormKey() { return KodePosForm.formKey; }
        protected getIdProperty() { return KodePosRow.idProperty; }
        protected getLocalTextPrefix() { return KodePosRow.localTextPrefix; }
        protected getNameProperty() { return KodePosRow.nameProperty; }
        protected getService() { return KodePosService.baseUrl; }

        protected form = new KodePosForm(this.idPrefix);

    }
}