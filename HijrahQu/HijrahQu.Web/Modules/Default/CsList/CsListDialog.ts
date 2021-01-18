
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class CsListDialog extends Serenity.EntityDialog<CsListRow, any> {
        protected getFormKey() { return CsListForm.formKey; }
        protected getIdProperty() { return CsListRow.idProperty; }
        protected getLocalTextPrefix() { return CsListRow.localTextPrefix; }
        protected getNameProperty() { return CsListRow.nameProperty; }
        protected getService() { return CsListService.baseUrl; }

        protected form = new CsListForm(this.idPrefix);

    }
}