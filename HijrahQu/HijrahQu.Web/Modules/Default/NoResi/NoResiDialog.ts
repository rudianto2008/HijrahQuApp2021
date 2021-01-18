
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class NoResiDialog extends Serenity.EntityDialog<NoResiRow, any> {
        protected getFormKey() { return NoResiForm.formKey; }
        protected getIdProperty() { return NoResiRow.idProperty; }
        protected getLocalTextPrefix() { return NoResiRow.localTextPrefix; }
        protected getNameProperty() { return NoResiRow.nameProperty; }
        protected getService() { return NoResiService.baseUrl; }

        protected form = new NoResiForm(this.idPrefix);

    }
}