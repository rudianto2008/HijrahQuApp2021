
namespace HijrahQu.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()

    export class FileOrderDialog extends Serenity.PropertyDialog<any, any> {

        private form: OrderImportForm;
        private row: OrderRow;
        private countImport: number;
        public grid: OrderGrid;

        constructor(opt: any) {
            super(opt);
            this.getToolbarButtons();
            this.form = new OrderImportForm(this.idPrefix);
            this.countImport = 0;
        }

        protected getDialogTitle(): string {
            return "Excel Mass Update";
        }

        private rowCount: number = 0;
        private productType: string = '';
        private fileName: string = '';
        private ecrfListToUpload: OrderRow[];
        private fileFormValue: string;

        protected getDialogButtons(): Serenity.DialogButton[] {
            var buttons = [
                {
                    text: 'Submit',
                    class: 'import-btn-excel',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        this.ecrfListToUpload = null;

                        //if (this.form.FileName.value == null ||
                        //    Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                        //    Q.notifyError("Please select a file!");
                        //    return;
                        //}
                        //OrderService.ExcelImport({
                        //    TotalRecord: this.form.TotalRecord.value,
                        //    FileName: this.form.FileName.value.Filename
                        //}, response => {
                        //    //Q.serviceCall({ service: PticoloappMassupdateService.baseUrl + "/DeleteAll" });
                        //    if (response.Error != null || response.Error == "") {
                        //        Q.notifyError(response.Error.Message);
                        //    }
                        //    else {
                        //        window.location.reload(true);
                        //        //jQuery('send-button-synch').removeClass("disabled");
                        //    }
                        //},
                        //    { async: false });
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