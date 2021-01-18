
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class LaporanHarianDialog extends Serenity.EntityDialog<LaporanHarianRow, any> {
        protected getFormKey() { return LaporanHarianForm.formKey; }
        protected getIdProperty() { return LaporanHarianRow.idProperty; }
        protected getLocalTextPrefix() { return LaporanHarianRow.localTextPrefix; }
        protected getNameProperty() { return LaporanHarianRow.nameProperty; }
        protected getService() { return LaporanHarianService.baseUrl; }

        protected form = new LaporanHarianForm(this.idPrefix);

        constructor() {
            super();
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (this.isNew()) {
                this.form.NamaCs.value = Authorization.userDefinition.Username;
            }
        }

    }
}