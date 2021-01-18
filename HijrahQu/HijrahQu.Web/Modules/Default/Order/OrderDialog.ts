
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        protected getFormKey() { return OrderForm.formKey; }
        protected getIdProperty() { return OrderRow.idProperty; }
        protected getLocalTextPrefix() { return OrderRow.localTextPrefix; }
        protected getService() { return OrderService.baseUrl; }

        protected form = new OrderForm(this.idPrefix);

        constructor() {
            super();
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
           
            if (this.isNew()) {
                //this.form.OrderDate.valueAsDate = new Date();
                this.form.TanggalWa.valueAsDate = new Date();
                this.form.TanggalClosing.valueAsDate = new Date();
                this.form.TanggalKirim.valueAsDate = new Date();
                this.form.OrderStatus.value = "NewOrder";
                Serenity.EditorUtils.setReadOnly(this.form.NoResi, true);
                this.form.DisplayName.value = Authorization.userDefinition.DisplayName;
            }

            if (this.isEditMode())
            {
                Serenity.EditorUtils.setReadOnly(this.form.NoResi, false);
            }

            this.form.CustomerId.changeSelect2(e => {
                var row = CustomerRow.getLookup().itemById[this.form.CustomerId.value];
                this.form.CustomerAddress.value = row.Address;
                this.form.CustomerHandphone.value = row.Handphone;
            });

            //this.form.Kodepos.change(e => {
            //    if (this.form.Kodepos.value != "") {
            //        this.form.CustomerAddress.value = this.form.CustomerAddress.value + ' KODEPOS:' + this.form.Kodepos.value;
            //        this.entity.CustomerAddress = this.form.CustomerAddress.value;
            //    }
            //});

            this.form.CustomerId.change(e => {
                var CustomerId = Q.toId(this.form.CustomerId.value);
                if (CustomerId != null) {
                    this.form.CustomerAddress.value = CustomerRow.getLookup().itemById[CustomerId].Address;
                    this.form.CustomerHandphone.value = CustomerRow.getLookup().itemById[CustomerId].Handphone;
                     
                }
            });

            //this.form.Ongkir.change(e => {
            //    this.form.TotalBayar.value = this.form.Ongkir.value + this.form.TotalHarga.value;
            //});

            //this.form.TotalHarga.change(e => {
            //    this.form.TotalBayar.value = this.form.Ongkir.value + this.form.TotalHarga.value;
            //});

            if (this.form.OrderStatus.value == "Close") {
                this.applyChangesButton.hide();
                this.saveAndCloseButton.hide();
                Serenity.EditorUtils.setReadonly(this.element.find(".editor"), true);
                this.deleteButton.hide();
            }
        }

        validateBeforeSave(): boolean {
            if (this.form.NoResi.value != "" && this.form.OrderStatus.value == "Printed")
            {
                this.form.OrderStatus.value = "Delivery";
            }
            if (this.form.TanggalBayar.value != null && this.form.NoResi.value != "") {
                this.form.OrderStatus.value = "Complete";
            }
            //if (this.form.Kodepos.value != "") {
            //    CustomerService.Update({ EntityId: this.form.CustomerId.value, Entity: { Address: this.form.CustomerAddress.value } });
            //}
            return super.validateBeforeSave();
        }

        onSaveSuccess(res: Serenity.SaveResponse) {
            super.onSaveSuccess(res);
            if (this.isNew()) {
                OrderService.sendNotif({
                    orderid: res.EntityId, messageType: "Informasi Kirim"
                }, response => {
                    if (response.Error != null || response.Error == "") {
                        Q.notifyError(response.Error.Message);
                    }
                    else {
                        Q.alert(response.message);
                    }
                },
                    { async: false });
            }
            if (this.isEditMode()) {
                if (this.form.NoResi.value != "") {
                    var waLog = WhatsappLogRow.getLookup().items.filter(x => x.MessageType == "Informasi Resi" && x.OrderId == res.EntityId);
                    if (waLog.length == 0) {
                        OrderService.sendNotif({
                            orderid: res.EntityId, messageType: "Informasi Resi"
                        }, response => {
                            if (response.Error != null || response.Error == "") {
                                Q.notifyError(response.Error.Message);
                            }
                        },
                            { async: false });
                    }
                }
            }
        }
    }
}