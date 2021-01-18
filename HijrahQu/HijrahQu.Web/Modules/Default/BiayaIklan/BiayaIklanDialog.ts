
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class BiayaIklanDialog extends Serenity.EntityDialog<BiayaIklanRow, any> {
        protected getFormKey() { return BiayaIklanForm.formKey; }
        protected getIdProperty() { return BiayaIklanRow.idProperty; }
        protected getLocalTextPrefix() { return BiayaIklanRow.localTextPrefix; }
        protected getService() { return BiayaIklanService.baseUrl; }

        protected form = new BiayaIklanForm(this.idPrefix);

        constructor() {
            super();
        }


        updateInterface() {
            super.updateInterface();
            this.form.LeadsDashboard.change(e => {
                this.form.CostPerLeadsFB.value = this.form.BiayaIklan.value / this.form.LeadsDashboard.value;
            });
            this.form.BiayaIklan.change(e => {
                this.form.CostPerLeadsFB.value = this.form.BiayaIklan.value / this.form.LeadsDashboard.value;
                this.form.CostPerLeadsWA.value = this.form.BiayaIklan.value / this.form.LeadsReal.value;
            });
            this.form.LeadsReal.change(e => {
                this.form.CostPerLeadsWA.value = this.form.BiayaIklan.value / this.form.LeadsReal.value;
            });
        }
    }
}