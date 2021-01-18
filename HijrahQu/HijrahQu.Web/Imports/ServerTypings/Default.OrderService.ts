namespace HijrahQu.Default {
    export namespace OrderService {
        export const baseUrl = 'Default/Order';

        export declare function Create(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: ExcelMassUploadImportRequest, onSuccess?: (response: ExcelMassUploadImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SynchResi(request: ExcelMassUploadImportRequest, onSuccess?: (response: ExcelMassUploadImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UploadDataClosing(request: ExcelMassUploadImportRequest, onSuccess?: (response: ExcelMassUploadImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CloseOrder(request: ExcelMassUploadImportRequest, onSuccess?: (response: MessageRespons) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function sendNotif(request: ParamRequest, onSuccess?: (response: MessageRespons) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UpdateStatusReceived(request: ParamRequest, onSuccess?: (response: MessageRespons) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/Order/Create",
            Update = "Default/Order/Update",
            Delete = "Default/Order/Delete",
            Retrieve = "Default/Order/Retrieve",
            List = "Default/Order/List",
            ExcelImport = "Default/Order/ExcelImport",
            SynchResi = "Default/Order/SynchResi",
            UploadDataClosing = "Default/Order/UploadDataClosing",
            CloseOrder = "Default/Order/CloseOrder",
            sendNotif = "Default/Order/sendNotif",
            UpdateStatusReceived = "Default/Order/UpdateStatusReceived"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ExcelImport', 
            'SynchResi', 
            'UploadDataClosing', 
            'CloseOrder', 
            'sendNotif', 
            'UpdateStatusReceived'
        ].forEach(x => {
            (<any>OrderService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

