using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }

        }

        public static class Default
        {
            public static class BiayaIklan
            {
                public const string BiayaIklanIndex = "~/Modules/Default/BiayaIklan/BiayaIklanIndex.cshtml";
            }

            public static class CsList
            {
                public const string CsListIndex = "~/Modules/Default/CsList/CsListIndex.cshtml";
            }

            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Default/Customer/CustomerIndex.cshtml";
            }

            public static class KodePos
            {
                public const string KodePosIndex = "~/Modules/Default/KodePos/KodePosIndex.cshtml";
            }

            public static class LaporanHarian
            {
                public const string LaporanHarianIndex = "~/Modules/Default/LaporanHarian/LaporanHarianIndex.cshtml";
            }

            public static class MessageWa
            {
                public const string MessageWaIndex = "~/Modules/Default/MessageWa/MessageWaIndex.cshtml";
            }

            public static class NoResi
            {
                public const string NoResiIndex = "~/Modules/Default/NoResi/NoResiIndex.cshtml";
            }

            public static class Order
            {
                public const string OrderIndex = "~/Modules/Default/Order/OrderIndex.cshtml";
            }

            public static class OrderDetail
            {
                public const string OrderDetailIndex = "~/Modules/Default/OrderDetail/OrderDetailIndex.cshtml";
            }

            public static class OrderStatus
            {
                public const string OrderStatusIndex = "~/Modules/Default/OrderStatus/OrderStatusIndex.cshtml";
            }

            public static class Product
            {
                public const string ProductIndex = "~/Modules/Default/Product/ProductIndex.cshtml";
            }

            public static class Supplier
            {
                public const string SupplierIndex = "~/Modules/Default/Supplier/SupplierIndex.cshtml";
            }

            public static class ViewLapKeuangan
            {
                public const string ViewLapKeuanganIndex = "~/Modules/Default/ViewLapKeuangan/ViewLapKeuanganIndex.cshtml";
            }

            public static class ViewLapPenjualan
            {
                public const string ViewLapPenjualanIndex = "~/Modules/Default/ViewLapPenjualan/ViewLapPenjualanIndex.cshtml";
            }

            public static class ViewOrder
            {
                public const string ViewOrderIndex = "~/Modules/Default/ViewOrder/ViewOrderIndex.cshtml";
            }

            public static class WhatsappLeads
            {
                public const string WhatsappLeadsIndex = "~/Modules/Default/WhatsappLeads/WhatsappLeadsIndex.cshtml";
            }

            public static class WhatsappLog
            {
                public const string WhatsappLogIndex = "~/Modules/Default/WhatsappLog/WhatsappLogIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }
    }
}

