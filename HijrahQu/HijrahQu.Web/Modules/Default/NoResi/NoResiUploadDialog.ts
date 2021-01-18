

namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()

    export class NoResiUploadDialog extends Serenity.PropertyDialog<any, any> {

        private form: NoResiUploadForm;
        private countImport: number;
        public ecrfgrid: NoResiGrid;
        public dataFieldId: number;

        constructor(opt: any) {
            super(opt);
            this.getToolbarButtons();
            this.form = new NoResiUploadForm(this.idPrefix);
            this.countImport = 0;
            this.dataFieldId = opt.DataField;
        }

        protected getDialogTitle(): string {
            return "Upload No Resi";
        }

        private rowCount: number = 0;
        private productType: string = '';
        private fileName: string = '';
        private ecrfListToUpload: NoResiRow[];
        private fileFormValue: string;

        protected getDialogButtons(): Serenity.DialogButton[] {
            var buttons = [
                {
                    text: 'Submit',
                    class: 'Upload No Resi',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        this.ecrfListToUpload = null;

                        if (this.form.FileName.value == null ||
                            Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                            Q.notifyError("Please select a file!");
                            return;
                        }
                        OrderService.SynchResi({
                            DataField: this.dataFieldId,
                            TotalRecord: this.form.TotalRecord.value,
                            FileName: this.form.FileName.value.Filename,
                            Expedisi: this.form.Expedisi.value
                        }, response => {
                            if (response.Error != null || response.Error == "") {
                                Q.notifyError(response.Error.Message);
                            }
                            else {
                                Q.notifySuccess("Alhamdulillah " + response.Inserted + " data berhasil di update");
                                //window.location.reload(true);
                            }
                        },
                            { async: false });
                    },
                },
                {
                    text: 'Cancel',
                    class: 'cancel-btn-excel',
                    click: () => this.dialogClose()
                }
            ];
            return buttons;
        }

    }
}