namespace HijrahQu.Default {
    export namespace ViewLapKeuanganService {
        export const baseUrl = 'Default/ViewLapKeuangan';

        export declare function Create(request: Serenity.SaveRequest<ViewLapKeuanganRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ViewLapKeuanganRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewLapKeuanganRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewLapKeuanganRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/ViewLapKeuangan/Create",
            Update = "Default/ViewLapKeuangan/Update",
            Delete = "Default/ViewLapKeuangan/Delete",
            Retrieve = "Default/ViewLapKeuangan/Retrieve",
            List = "Default/ViewLapKeuangan/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ViewLapKeuanganService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

