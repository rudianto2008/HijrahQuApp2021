namespace HijrahQu.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Default {

            namespace BiayaIklan {
                export const BiayaIklan: string;
                export const BiayaIklanId: string;
                export const ClosingCS1: string;
                export const ClosingCS2: string;
                export const CostPerLeadsFB: string;
                export const CostPerLeadsWA: string;
                export const LeadsDashboard: string;
                export const LeadsReal: string;
                export const Tanggal: string;
            }

            namespace CsList {
                export const CsId: string;
                export const CsName: string;
                export const IsActive: string;
                export const NoHp: string;
            }

            namespace Customer {
                export const Address: string;
                export const City: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const District: string;
                export const Handphone: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Kodepos: string;
                export const Province: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace KodePos {
                export const Id: string;
                export const Kabupaten: string;
                export const Kecamatan: string;
                export const Kelurahan: string;
                export const Kodepos: string;
                export const KodeposLengkap: string;
                export const Provinsi: string;
            }

            namespace LaporanHarian {
                export const BudgetFb: string;
                export const Closing: string;
                export const CostPerRealWa: string;
                export const LaporanHarianId: string;
                export const NamaCs: string;
                export const PersenClosing: string;
                export const PersenWA: string;
                export const Tanggal: string;
                export const WaFb: string;
                export const WaReal: string;
                export const WaWeb: string;
            }

            namespace MessageWa {
                export const MessageDesc: string;
                export const MessageType: string;
                export const MessageWaId: string;
            }

            namespace NoResi {
                export const CustomerName: string;
                export const Destination: string;
                export const Expedisi: string;
                export const ExpedisiService: string;
                export const Handphone: string;
                export const JNEDate: string;
                export const NINJADate: string;
                export const NoResi: string;
                export const NoResiId: string;
                export const Ongkir: string;
                export const OrderId: string;
                export const SendDate: string;
                export const StatusPengiriman: string;
            }

            namespace Order {
                export const BiayaCOD: string;
                export const CaraBayar: string;
                export const CustomerAddress: string;
                export const CustomerCustomerName: string;
                export const CustomerHandphone: string;
                export const CustomerId: string;
                export const DetailList: string;
                export const DisplayName: string;
                export const Expedisi: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Keterangan: string;
                export const KirimWAInfo: string;
                export const Kodepos: string;
                export const NoResi: string;
                export const Ongkir: string;
                export const OrderId: string;
                export const OrderStatus: string;
                export const ReceiveBy: string;
                export const ReceiveDate: string;
                export const ReceiveTime: string;
                export const ResiWAInfo: string;
                export const SudahBayar: string;
                export const TagihWAInfo: string;
                export const TanggalBayar: string;
                export const TanggalCS: string;
                export const TanggalClosing: string;
                export const TanggalKirim: string;
                export const TanggalWa: string;
                export const TotalBayar: string;
                export const TotalHarga: string;
                export const TotalRecord: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace OrderDetail {
                export const LineTotal: string;
                export const Ongkir: string;
                export const OrderCustomerId: string;
                export const OrderDetailId: string;
                export const OrderId: string;
                export const OrderOrderDate: string;
                export const OrderStatus: string;
                export const Price: string;
                export const ProductDescription: string;
                export const ProductId: string;
                export const ProductPrice: string;
                export const ProductProductName: string;
                export const ProductSalePrice: string;
                export const ProductSupplierId: string;
                export const Quantity: string;
                export const TotalPerItem: string;
            }

            namespace OrderStatus {
                export const OrderStatus: string;
                export const OrderStatusId: string;
            }

            namespace Product {
                export const Description: string;
                export const Price: string;
                export const ProductGroup: string;
                export const ProductId: string;
                export const ProductName: string;
                export const SalePrice: string;
                export const SupplierHandphone: string;
                export const SupplierId: string;
                export const SupplierSource: string;
                export const SupplierSupplierName: string;
                export const SupplierWebsite: string;
            }

            namespace Supplier {
                export const Handphone: string;
                export const Source: string;
                export const SupplierD: string;
                export const SupplierName: string;
                export const Website: string;
            }

            namespace ViewLapKeuangan {
                export const BiayaIklan: string;
                export const CustomerName: string;
                export const Handphone: string;
                export const Ongkir: string;
                export const OrderId: string;
                export const TanggalBayar: string;
                export const TanggalWa: string;
                export const TotalBayar: string;
                export const TotalHarga: string;
            }

            namespace ViewLapPenjualan {
                export const Address: string;
                export const CustomerName: string;
                export const Handphone: string;
                export const Ongkir: string;
                export const OrderDate: string;
                export const OrderId: string;
                export const TanggalBayar: string;
                export const TanggalCs: string;
                export const TanggalKirim: string;
                export const TanggalWa: string;
                export const TotalBayar: string;
                export const TotalHarga: string;
            }

            namespace ViewOrder {
                export const Address: string;
                export const CustomerName: string;
                export const Handphone: string;
                export const NamaPengirim: string;
                export const NoPengirim: string;
                export const NoResi: string;
                export const Ongkir: string;
                export const OrderDate: string;
                export const OrderId: string;
                export const OrderStatus: string;
                export const ProductName: string;
                export const Quantity: string;
                export const ReceiveBy: string;
                export const ReceiveDate: string;
                export const ReceiveTime: string;
                export const TotalBayar: string;
                export const TotalHarga: string;
            }

            namespace WhatsappLeads {
                export const InsertDate: string;
                export const InsertUserId: string;
                export const NamaCs: string;
                export const NoWhatsappCs: string;
                export const WhatsappLeadsId: string;
            }

            namespace WhatsappLog {
                export const MessageText: string;
                export const MessageType: string;
                export const OrderId: string;
                export const SendDate: string;
                export const Sent: string;
                export const WhatsappLogId: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    HijrahQu['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Default:{BiayaIklan:{BiayaIklan:1,BiayaIklanId:1,ClosingCS1:1,ClosingCS2:1,CostPerLeadsFB:1,CostPerLeadsWA:1,LeadsDashboard:1,LeadsReal:1,Tanggal:1},CsList:{CsId:1,CsName:1,IsActive:1,NoHp:1},Customer:{Address:1,City:1,CustomerId:1,CustomerName:1,District:1,Handphone:1,InsertDate:1,InsertUserId:1,Kodepos:1,Province:1,UpdateDate:1,UpdateUserId:1},KodePos:{Id:1,Kabupaten:1,Kecamatan:1,Kelurahan:1,Kodepos:1,KodeposLengkap:1,Provinsi:1},LaporanHarian:{BudgetFb:1,Closing:1,CostPerRealWa:1,LaporanHarianId:1,NamaCs:1,PersenClosing:1,PersenWA:1,Tanggal:1,WaFb:1,WaReal:1,WaWeb:1},MessageWa:{MessageDesc:1,MessageType:1,MessageWaId:1},NoResi:{CustomerName:1,Destination:1,Expedisi:1,ExpedisiService:1,Handphone:1,JNEDate:1,NINJADate:1,NoResi:1,NoResiId:1,Ongkir:1,OrderId:1,SendDate:1,StatusPengiriman:1},Order:{BiayaCOD:1,CaraBayar:1,CustomerAddress:1,CustomerCustomerName:1,CustomerHandphone:1,CustomerId:1,DetailList:1,DisplayName:1,Expedisi:1,InsertDate:1,InsertUserId:1,Keterangan:1,KirimWAInfo:1,Kodepos:1,NoResi:1,Ongkir:1,OrderId:1,OrderStatus:1,ReceiveBy:1,ReceiveDate:1,ReceiveTime:1,ResiWAInfo:1,SudahBayar:1,TagihWAInfo:1,TanggalBayar:1,TanggalCS:1,TanggalClosing:1,TanggalKirim:1,TanggalWa:1,TotalBayar:1,TotalHarga:1,TotalRecord:1,UpdateDate:1,UpdateUserId:1},OrderDetail:{LineTotal:1,Ongkir:1,OrderCustomerId:1,OrderDetailId:1,OrderId:1,OrderOrderDate:1,OrderStatus:1,Price:1,ProductDescription:1,ProductId:1,ProductPrice:1,ProductProductName:1,ProductSalePrice:1,ProductSupplierId:1,Quantity:1,TotalPerItem:1},OrderStatus:{OrderStatus:1,OrderStatusId:1},Product:{Description:1,Price:1,ProductGroup:1,ProductId:1,ProductName:1,SalePrice:1,SupplierHandphone:1,SupplierId:1,SupplierSource:1,SupplierSupplierName:1,SupplierWebsite:1},Supplier:{Handphone:1,Source:1,SupplierD:1,SupplierName:1,Website:1},ViewLapKeuangan:{BiayaIklan:1,CustomerName:1,Handphone:1,Ongkir:1,OrderId:1,TanggalBayar:1,TanggalWa:1,TotalBayar:1,TotalHarga:1},ViewLapPenjualan:{Address:1,CustomerName:1,Handphone:1,Ongkir:1,OrderDate:1,OrderId:1,TanggalBayar:1,TanggalCs:1,TanggalKirim:1,TanggalWa:1,TotalBayar:1,TotalHarga:1},ViewOrder:{Address:1,CustomerName:1,Handphone:1,NamaPengirim:1,NoPengirim:1,NoResi:1,Ongkir:1,OrderDate:1,OrderId:1,OrderStatus:1,ProductName:1,Quantity:1,ReceiveBy:1,ReceiveDate:1,ReceiveTime:1,TotalBayar:1,TotalHarga:1},WhatsappLeads:{InsertDate:1,InsertUserId:1,NamaCs:1,NoWhatsappCs:1,WhatsappLeadsId:1},WhatsappLog:{MessageText:1,MessageType:1,OrderId:1,SendDate:1,Sent:1,WhatsappLogId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

