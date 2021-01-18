
namespace HijrahQu.Default {
    import fld = HijrahQu.Default.OrderRow.Fields;

    @Serenity.Decorators.registerClass()
    export class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey() { return 'Default.Order'; }
        protected getDialogType() { return OrderDialog; }
        protected getIdProperty() { return OrderRow.idProperty; }
        protected getLocalTextPrefix() { return OrderRow.localTextPrefix; }
        protected getService() { return OrderService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected onViewSubmit() {
            if (!super.onViewSubmit()) {
                return false;
            }

            //Cek Admin Divisi
            if (!Authorization.userDefinition.IsAdmin) {
                var userId = 0;
                if (Authorization.userDefinition.Username == "putri") {
                    userId = 2;
                }
                if (Authorization.userDefinition.Username == "novi") {
                    userId = 3;
                }
                if (Authorization.userDefinition.Username == "fayiz") {
                    userId = 6;
                }
                var request = this.view.params as Serenity.ListRequest;
                request.Criteria = Serenity.Criteria.and(request.Criteria,
                    [['InsertUserId'], '=', userId]);
            }
            return true;
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            //columns[0].cssClass = "checklist";

            //Q.first(columns, x => x.field == HijrahQu.Default.OrderRow.Fields.NoResi.toString()).format =
            //    ctx => `<a href="https://track.aftership.com/jne/" class="site-link">${Q.htmlEncode(ctx.value)}</a>`;
            return columns;
        }

        protected getButtons(): Serenity.ToolButton[] {
            var button = super.getButtons();
            button.push({
                title: "Print Label",
                cssClass: 'grid-export-button',
                icon: 'fa fa-print text-red',
                onClick: () => {
                    if (this.rowSelection.getSelectedKeys().length > 0) {
                        var data = this.rowSelection.getSelectedKeys();
                        Q.postToUrl({
                            url: '~/Services/Default/Order/PrintLabel/', //+ (options.download ? 'Download' : 'Render'),
                            params: { IdExport: data },
                            target: '_blank'
                        });
                    }
                    else {
                        Q.alert("No data selected");
                    }
                }
            })

            //button.push({
            //    title: "Upload No Resi",
            //    cssClass: 'grid-export-button',
            //    icon: 'fa fa-upload text-green',
            //    onClick: () => {
            //        var dialog = new NoResiUploadDialog({ DataField: 1 }); //EcrfMassUploadExcelImportDialog();
            //        dialog.element.on('dialogclose', () => {
            //            this.refresh();
            //            dialog = null;
            //        });
            //        dialog.dialogOpen();
            //    }
            //})

            //button.push({
            //    title: "Upload Data Closing",
            //    cssClass: 'grid-export-button',
            //    icon: 'fa fa-upload text-green',
            //    onClick: () => {
            //        var dialog = new ClosingUploadDialog({ DataField: 1 }); //EcrfMassUploadExcelImportDialog();
            //        dialog.element.on('dialogclose', () => {
            //            this.refresh();
            //            dialog = null;
            //        });
            //        dialog.dialogOpen();
            //    }
            //})


            //button.push({
            //    title: "Synch JNE",
            //    cssClass: 'grid-export-button',
            //    icon: 'fa fa-refresh text-blue',
            //    onClick: () => {
            //        if (this.rowSelection.getSelectedKeys().length > 0) {
            //            var data = this.rowSelection.getSelectedKeys();
            //            OrderService.UpdateStatusReceived({
            //                IdExport: data
            //            }, response => {
            //                if (response.Error != null || response.Error == "") {
            //                    Q.notifyError(response.Error.Message);
            //                }
            //                else {
            //                    Q.alert(response.message);
            //                    //window.location.reload(true);
            //                }
            //            },
            //            { async: false });
            //        }
            //        else {
            //            Q.alert("No data selected");
            //        }
            //    }
            //})


            //button.push({
            //    title: "Tagih",
            //    cssClass: 'grid-export-button',
            //    icon: 'fa fa-refresh text-blue',
            //    onClick: () => {
            //        if (this.rowSelection.getSelectedKeys().length > 0) {
            //            var data = this.rowSelection.getSelectedKeys();
            //            OrderService.sendNotif({
            //            }, response => {
            //                if (response.Error != null || response.Error == "") {
            //                    Q.notifyError(response.Error.Message);
            //                }
            //                else {
            //                    Q.alert(response.message);
            //                    //window.location.reload(true);
            //                }
            //            },
            //                { async: false });
            //        }
            //        else {
            //            Q.alert("No data selected");
            //        }
            //    }
            //})

            if (Authorization.userDefinition.IsAdmin) {
                button.push({
                    title: "Close Order",
                    cssClass: 'grid-export-button',
                    icon: 'fa fa-upload text-green',
                    onClick: () => {
                        if (this.rowSelection.getSelectedKeys().length > 0) {
                            var data = this.rowSelection.getSelectedKeys();
                            OrderService.CloseOrder({
                                IdExport: data
                            }, response => {
                                if (response.Error != null || response.Error == "") {
                                    Q.notifySuccess("Close Order Success");
                                    window.location.reload(true);
                                }
                                else {
                                    Q.alert(response.message);
                                }
                            },
                                { async: false });
                        }
                        else {
                            Q.alert("No data selected");
                        }
                    }
                })
            }
           
            //button.push({
            //    title: "JNE Online Booking",
            //    cssClass: 'grid-export-button',
            //    icon: 'fa fa-file-excel-o text-green',
            //    onClick: () => {
            //        if (this.rowSelection.getSelectedKeys().length > 0) {
            //            var data = this.rowSelection.getSelectedKeys();
            //            Q.postToUrl({
            //                url: '~/Services/Default/Order/CreateJOB/', //+ (options.download ? 'Download' : 'Render'),
            //                params: { IdExport: data },
            //                target: '_blank'
            //            });
            //        }
            //        else {
            //            Q.alert("No data selected");
            //        }
            //    }
            //})


            //button.push({
            //    title: "Laporan Penjualan",
            //    cssClass: 'grid-export-button',
            //    icon: 'fa fa-calendar-o text-yellow',
            //    onClick: () => {
            //        if (this.rowSelection.getSelectedKeys().length > 0) {
            //            var data = this.rowSelection.getSelectedKeys();
            //            Q.postToUrl({
            //                url: '~/Services/Default/Order/LaporanPenjualan/', //+ (options.download ? 'Download' : 'Render'),
            //                params: { IdExport: data },
            //                target: '_blank'
            //            });
            //        }
            //        else {
            //            Q.alert("No data selected");
            //        }
            //    }
            //})

            button.push({
                title: "Export Ninja",
                cssClass: 'grid-export-button',
                icon: 'fa fa-calendar-o text-yellow',
                onClick: () => {
                    if (this.rowSelection.getSelectedKeys().length > 0) {
                        var data = this.rowSelection.getSelectedKeys();
                        Q.postToUrl({
                            url: '~/Services/Default/Order/ExportDataNINJA/', //+ (options.download ? 'Download' : 'Render'),
                            params: { IdExport: data },
                            target: '_blank'
                        });
                    }
                    else {
                        Q.alert("No data selected");
                    }
                }
            })

            //button.push({
            //    title: "Export JX",
            //    cssClass: 'grid-export-button',
            //    icon: 'fa fa-calendar-o text-yellow',
            //    onClick: () => {
            //        if (this.rowSelection.getSelectedKeys().length > 0) {
            //            var data = this.rowSelection.getSelectedKeys();
            //            Q.postToUrl({
            //                url: '~/Services/Default/Order/ExportDataJX/', //+ (options.download ? 'Download' : 'Render'),
            //                params: { IdExport: data },
            //                target: '_blank'
            //            });
            //        }
            //        else {
            //            Q.alert("No data selected");
            //        }
            //    }
            //})
              
           
            return button;
        }
    }
}