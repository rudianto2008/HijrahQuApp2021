
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    export class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey() { return CustomerForm.formKey; }
        protected getIdProperty() { return CustomerRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
        protected getNameProperty() { return CustomerRow.nameProperty; }
        protected getService() { return CustomerService.baseUrl; }

        protected form = new CustomerForm(this.idPrefix);

        validateBeforeSave(): boolean {
            var item = OrderRow.getLookup().items.filter(x => x.CustomerHandphone == this.form.Handphone.value);
            if (item.length > 0) {
                Q.alert("No Handphone ini sudah pernah diinput, mungkin barang sudah dikirim");
                return false;
            }
          
            return super.validateBeforeSave();
        }

        protected updateInterface()
        {
            super.updateInterface();
            this.form.Kodepos.change(e => {
                if (this.form.Kodepos.value != "") {
                    KodePosRow.getLookup
                    this.form.Address.value = this.form.Address.value + ' KODEPOS:' + this.form.Kodepos.value;
                    var alamat = Q.coalesce(this.form.Kodepos.element.select2('data'), {}).text.split("-");
                    alert(Q.coalesce(this.form.Kodepos.element.select2('data'), {}).text);
                    this.form.Province.value = alamat[0];
                    this.form.District.value = alamat[1];
                    this.form.City.value = alamat[2];
                }
            });

            //if (this.form.Address.value != "") {
            //    var addr = this.form.Address.value;
            //    var addrArr = addr.split("#");
            //    if (addrArr.length == 2) {
            //        var alamat = addrArr[1].split(",");
            //        var prov = alamat[0];
            //        var city = alamat[1];
            //        var district = alamat[2];
            //        alert(prov);
            //        alert(city);
            //        alert(district);
            //        var dist = district.split("KODEPOS:");
            //        alert(dist);
            //        this.form.Province.value = prov;
            //        this.form.District.value = dist[1];
            //        this.form.City.value = city;
            //    }
            //    else {
            //        alert("Cek format Alamat");
            //    }
            
        }

        protected afterLoadEntity()
        {
          
            super.afterLoadEntity();
           
           
        }
    }
}