var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'DisplayName';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var BiayaIklanForm = /** @class */ (function (_super) {
            __extends(BiayaIklanForm, _super);
            function BiayaIklanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BiayaIklanForm.init) {
                    BiayaIklanForm.init = true;
                    var s = Serenity;
                    var w0 = s.DecimalEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(BiayaIklanForm, [
                        'BiayaIklan', w0,
                        'Tanggal', w1,
                        'LeadsDashboard', w2,
                        'LeadsReal', w2,
                        'ClosingCS1', w2,
                        'ClosingCS2', w2,
                        'CostPerLeadsFB', w0,
                        'CostPerLeadsWA', w0
                    ]);
                }
                return _this;
            }
            BiayaIklanForm.formKey = 'Default.BiayaIklan';
            return BiayaIklanForm;
        }(Serenity.PrefixedContext));
        Default.BiayaIklanForm = BiayaIklanForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var BiayaIklanRow;
        (function (BiayaIklanRow) {
            BiayaIklanRow.idProperty = 'BiayaIklanId';
            BiayaIklanRow.localTextPrefix = 'Default.BiayaIklan';
        })(BiayaIklanRow = Default.BiayaIklanRow || (Default.BiayaIklanRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var BiayaIklanService;
        (function (BiayaIklanService) {
            BiayaIklanService.baseUrl = 'Default/BiayaIklan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BiayaIklanService[x] = function (r, s, o) {
                    return Q.serviceRequest(BiayaIklanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BiayaIklanService = Default.BiayaIklanService || (Default.BiayaIklanService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ClosingUploadForm = /** @class */ (function (_super) {
            __extends(ClosingUploadForm, _super);
            function ClosingUploadForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ClosingUploadForm.init) {
                    ClosingUploadForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(ClosingUploadForm, [
                        'FileName', w0,
                        'TotalRecord', w1
                    ]);
                }
                return _this;
            }
            ClosingUploadForm.formKey = 'Default.ClosingUpload';
            return ClosingUploadForm;
        }(Serenity.PrefixedContext));
        Default.ClosingUploadForm = ClosingUploadForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var CsListForm = /** @class */ (function (_super) {
            __extends(CsListForm, _super);
            function CsListForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CsListForm.init) {
                    CsListForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CsListForm, [
                        'CsName', w0,
                        'NoHp', w0,
                        'IsActive', w0
                    ]);
                }
                return _this;
            }
            CsListForm.formKey = 'Default.CsList';
            return CsListForm;
        }(Serenity.PrefixedContext));
        Default.CsListForm = CsListForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var CsListRow;
        (function (CsListRow) {
            CsListRow.idProperty = 'CsId';
            CsListRow.nameProperty = 'CsName';
            CsListRow.localTextPrefix = 'Default.CsList';
            CsListRow.lookupKey = 'HijrahQu.CSList';
            function getLookup() {
                return Q.getLookup('HijrahQu.CSList');
            }
            CsListRow.getLookup = getLookup;
        })(CsListRow = Default.CsListRow || (Default.CsListRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var CsListService;
        (function (CsListService) {
            CsListService.baseUrl = 'Default/CsList';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CsListService[x] = function (r, s, o) {
                    return Q.serviceRequest(CsListService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CsListService = Default.CsListService || (Default.CsListService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.LookupEditor;
                    Q.initFormType(CustomerForm, [
                        'CustomerName', w0,
                        'Address', w1,
                        'Handphone', w0,
                        'Kodepos', w2,
                        'Province', w0,
                        'City', w0,
                        'District', w0
                    ]);
                }
                return _this;
            }
            CustomerForm.formKey = 'Default.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Default.CustomerForm = CustomerForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'CustomerId';
            CustomerRow.nameProperty = 'CustomerName';
            CustomerRow.localTextPrefix = 'Default.Customer';
            CustomerRow.lookupKey = 'Default.Customer';
            function getLookup() {
                return Q.getLookup('Default.Customer');
            }
            CustomerRow.getLookup = getLookup;
        })(CustomerRow = Default.CustomerRow || (Default.CustomerRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Default/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Default.CustomerService || (Default.CustomerService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var KodePosForm = /** @class */ (function (_super) {
            __extends(KodePosForm, _super);
            function KodePosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!KodePosForm.init) {
                    KodePosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(KodePosForm, [
                        'Kelurahan', w0,
                        'Kecamatan', w0,
                        'Kabupaten', w0,
                        'Provinsi', w0,
                        'Kodepos', w0
                    ]);
                }
                return _this;
            }
            KodePosForm.formKey = 'Default.KodePos';
            return KodePosForm;
        }(Serenity.PrefixedContext));
        Default.KodePosForm = KodePosForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var KodePosRow;
        (function (KodePosRow) {
            KodePosRow.idProperty = 'Kodepos';
            KodePosRow.nameProperty = 'KodeposLengkap';
            KodePosRow.localTextPrefix = 'Default.KodePos';
            KodePosRow.lookupKey = 'Default.KodePos';
            function getLookup() {
                return Q.getLookup('Default.KodePos');
            }
            KodePosRow.getLookup = getLookup;
        })(KodePosRow = Default.KodePosRow || (Default.KodePosRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var KodePosService;
        (function (KodePosService) {
            KodePosService.baseUrl = 'Default/KodePos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                KodePosService[x] = function (r, s, o) {
                    return Q.serviceRequest(KodePosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(KodePosService = Default.KodePosService || (Default.KodePosService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var LaporanHarianForm = /** @class */ (function (_super) {
            __extends(LaporanHarianForm, _super);
            function LaporanHarianForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LaporanHarianForm.init) {
                    LaporanHarianForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(LaporanHarianForm, [
                        'Tanggal', w0,
                        'NamaCs', w1,
                        'WaWeb', w2,
                        'WaReal', w2,
                        'PersenWA', w3,
                        'Closing', w2,
                        'PersenClosing', w3
                    ]);
                }
                return _this;
            }
            LaporanHarianForm.formKey = 'Default.LaporanHarian';
            return LaporanHarianForm;
        }(Serenity.PrefixedContext));
        Default.LaporanHarianForm = LaporanHarianForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var LaporanHarianRow;
        (function (LaporanHarianRow) {
            LaporanHarianRow.idProperty = 'LaporanHarianId';
            LaporanHarianRow.nameProperty = 'NamaCs';
            LaporanHarianRow.localTextPrefix = 'Default.LaporanHarian';
        })(LaporanHarianRow = Default.LaporanHarianRow || (Default.LaporanHarianRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var LaporanHarianService;
        (function (LaporanHarianService) {
            LaporanHarianService.baseUrl = 'Default/LaporanHarian';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LaporanHarianService[x] = function (r, s, o) {
                    return Q.serviceRequest(LaporanHarianService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LaporanHarianService = Default.LaporanHarianService || (Default.LaporanHarianService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var MessageWaForm = /** @class */ (function (_super) {
            __extends(MessageWaForm, _super);
            function MessageWaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MessageWaForm.init) {
                    MessageWaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(MessageWaForm, [
                        'MessageType', w0,
                        'MessageDesc', w1
                    ]);
                }
                return _this;
            }
            MessageWaForm.formKey = 'Default.MessageWa';
            return MessageWaForm;
        }(Serenity.PrefixedContext));
        Default.MessageWaForm = MessageWaForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var MessageWaRow;
        (function (MessageWaRow) {
            MessageWaRow.idProperty = 'MessageWaId';
            MessageWaRow.nameProperty = 'MessageType';
            MessageWaRow.localTextPrefix = 'Default.MessageWa';
            MessageWaRow.lookupKey = 'Default.MessageWa';
            function getLookup() {
                return Q.getLookup('Default.MessageWa');
            }
            MessageWaRow.getLookup = getLookup;
        })(MessageWaRow = Default.MessageWaRow || (Default.MessageWaRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var MessageWaService;
        (function (MessageWaService) {
            MessageWaService.baseUrl = 'Default/MessageWa';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MessageWaService[x] = function (r, s, o) {
                    return Q.serviceRequest(MessageWaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MessageWaService = Default.MessageWaService || (Default.MessageWaService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var NoResiForm = /** @class */ (function (_super) {
            __extends(NoResiForm, _super);
            function NoResiForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NoResiForm.init) {
                    NoResiForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(NoResiForm, [
                        'OrderId', w0,
                        'CustomerName', w1,
                        'Handphone', w1,
                        'Expedisi', w1,
                        'ExpedisiService', w1,
                        'Destination', w1,
                        'Ongkir', w2
                    ]);
                }
                return _this;
            }
            NoResiForm.formKey = 'Default.NoResi';
            return NoResiForm;
        }(Serenity.PrefixedContext));
        Default.NoResiForm = NoResiForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var NoResiRow;
        (function (NoResiRow) {
            NoResiRow.idProperty = 'NoResiId';
            NoResiRow.nameProperty = 'CustomerName';
            NoResiRow.localTextPrefix = 'Default.NoResi';
        })(NoResiRow = Default.NoResiRow || (Default.NoResiRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var NoResiService;
        (function (NoResiService) {
            NoResiService.baseUrl = 'Default/NoResi';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NoResiService[x] = function (r, s, o) {
                    return Q.serviceRequest(NoResiService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NoResiService = Default.NoResiService || (Default.NoResiService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var NoResiUploadForm = /** @class */ (function (_super) {
            __extends(NoResiUploadForm, _super);
            function NoResiUploadForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NoResiUploadForm.init) {
                    NoResiUploadForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    var w1 = Default.Editor.ExpedisiEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(NoResiUploadForm, [
                        'FileName', w0,
                        'Expedisi', w1,
                        'TotalRecord', w2
                    ]);
                }
                return _this;
            }
            NoResiUploadForm.formKey = 'Default.NoResiUpload';
            return NoResiUploadForm;
        }(Serenity.PrefixedContext));
        Default.NoResiUploadForm = NoResiUploadForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderDetailForm = /** @class */ (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderDetailForm.init) {
                    OrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(OrderDetailForm, [
                        'ProductId', w0,
                        'Quantity', w1,
                        'Price', w2,
                        'TotalPerItem', w2,
                        'OrderStatus', w3
                    ]);
                }
                return _this;
            }
            OrderDetailForm.formKey = 'Default.OrderDetail';
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        Default.OrderDetailForm = OrderDetailForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'OrderDetailId';
            OrderDetailRow.nameProperty = 'OrderStatus';
            OrderDetailRow.localTextPrefix = 'Default.OrderDetail';
        })(OrderDetailRow = Default.OrderDetailRow || (Default.OrderDetailRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Default/OrderDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderDetailService = Default.OrderDetailService || (Default.OrderDetailService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderForm = /** @class */ (function (_super) {
            __extends(OrderForm, _super);
            function OrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderForm.init) {
                    OrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.StringEditor;
                    var w3 = Default.StatusEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = Default.CaraBayarEditor;
                    var w6 = Default.ExpedisiEditor;
                    var w7 = s.DateEditor;
                    var w8 = Default.OrderDetailsEditor;
                    Q.initFormType(OrderForm, [
                        'CustomerId', w0,
                        'CustomerAddress', w1,
                        'CustomerHandphone', w2,
                        'NoResi', w2,
                        'OrderStatus', w3,
                        'Ongkir', w4,
                        'BiayaCOD', w4,
                        'TotalBayar', w4,
                        'CaraBayar', w5,
                        'Expedisi', w6,
                        'TanggalWa', w7,
                        'TanggalKirim', w7,
                        'TanggalClosing', w7,
                        'TanggalBayar', w7,
                        'TanggalCS', w7,
                        'DisplayName', w2,
                        'Keterangan', w2,
                        'DetailList', w8
                    ]);
                }
                return _this;
            }
            OrderForm.formKey = 'Default.Order';
            return OrderForm;
        }(Serenity.PrefixedContext));
        Default.OrderForm = OrderForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderImportForm = /** @class */ (function (_super) {
            __extends(OrderImportForm, _super);
            function OrderImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderImportForm.init) {
                    OrderImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(OrderImportForm, [
                        'TotalRecord', w0
                    ]);
                }
                return _this;
            }
            OrderImportForm.formKey = 'Default.OrderImport';
            return OrderImportForm;
        }(Serenity.PrefixedContext));
        Default.OrderImportForm = OrderImportForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.idProperty = 'OrderId';
            OrderRow.localTextPrefix = 'Default.Order';
            OrderRow.lookupKey = 'Default.Order';
            function getLookup() {
                return Q.getLookup('Default.Order');
            }
            OrderRow.getLookup = getLookup;
        })(OrderRow = Default.OrderRow || (Default.OrderRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderService;
        (function (OrderService) {
            OrderService.baseUrl = 'Default/Order';
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
            ].forEach(function (x) {
                OrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderService = Default.OrderService || (Default.OrderService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderStatusForm = /** @class */ (function (_super) {
            __extends(OrderStatusForm, _super);
            function OrderStatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderStatusForm.init) {
                    OrderStatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(OrderStatusForm, [
                        'OrderStatus', w0
                    ]);
                }
                return _this;
            }
            OrderStatusForm.formKey = 'Default.OrderStatus';
            return OrderStatusForm;
        }(Serenity.PrefixedContext));
        Default.OrderStatusForm = OrderStatusForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderStatusRow;
        (function (OrderStatusRow) {
            OrderStatusRow.idProperty = 'OrderStatusId';
            OrderStatusRow.nameProperty = 'OrderStatus';
            OrderStatusRow.localTextPrefix = 'Default.OrderStatus';
            OrderStatusRow.lookupKey = 'Default.OrderStatusLookup';
            function getLookup() {
                return Q.getLookup('Default.OrderStatusLookup');
            }
            OrderStatusRow.getLookup = getLookup;
        })(OrderStatusRow = Default.OrderStatusRow || (Default.OrderStatusRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderStatusService;
        (function (OrderStatusService) {
            OrderStatusService.baseUrl = 'Default/OrderStatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderStatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderStatusService = Default.OrderStatusService || (Default.OrderStatusService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ProductForm = /** @class */ (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductForm.init) {
                    ProductForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.LookupEditor;
                    Q.initFormType(ProductForm, [
                        'ProductName', w0,
                        'Description', w0,
                        'SalePrice', w1,
                        'Price', w1,
                        'SupplierId', w2
                    ]);
                }
                return _this;
            }
            ProductForm.formKey = 'Default.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Default.ProductForm = ProductForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductId';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'Default.Product';
            ProductRow.lookupKey = 'Default.Product';
            function getLookup() {
                return Q.getLookup('Default.Product');
            }
            ProductRow.getLookup = getLookup;
        })(ProductRow = Default.ProductRow || (Default.ProductRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Default/Product';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductService = Default.ProductService || (Default.ProductService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var SupplierForm = /** @class */ (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierForm.init) {
                    SupplierForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SupplierForm, [
                        'SupplierName', w0,
                        'Handphone', w0,
                        'Website', w0,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            SupplierForm.formKey = 'Default.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Default.SupplierForm = SupplierForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierD';
            SupplierRow.nameProperty = 'SupplierName';
            SupplierRow.localTextPrefix = 'Default.Supplier';
            SupplierRow.lookupKey = 'Default.Supplier';
            function getLookup() {
                return Q.getLookup('Default.Supplier');
            }
            SupplierRow.getLookup = getLookup;
        })(SupplierRow = Default.SupplierRow || (Default.SupplierRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Default/Supplier';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SupplierService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierService = Default.SupplierService || (Default.SupplierService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewLapKeuanganForm = /** @class */ (function (_super) {
            __extends(ViewLapKeuanganForm, _super);
            function ViewLapKeuanganForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ViewLapKeuanganForm.init) {
                    ViewLapKeuanganForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(ViewLapKeuanganForm, [
                        'Handphone', w0,
                        'TanggalBayar', w1,
                        'TotalBayar', w2,
                        'Ongkir', w2,
                        'TotalHarga', w2,
                        'TanggalWa', w1,
                        'BiayaIklan', w0
                    ]);
                }
                return _this;
            }
            ViewLapKeuanganForm.formKey = 'Default.ViewLapKeuangan';
            return ViewLapKeuanganForm;
        }(Serenity.PrefixedContext));
        Default.ViewLapKeuanganForm = ViewLapKeuanganForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewLapKeuanganRow;
        (function (ViewLapKeuanganRow) {
            ViewLapKeuanganRow.idProperty = 'CustomerName';
            ViewLapKeuanganRow.nameProperty = 'CustomerName';
            ViewLapKeuanganRow.localTextPrefix = 'Default.ViewLapKeuangan';
        })(ViewLapKeuanganRow = Default.ViewLapKeuanganRow || (Default.ViewLapKeuanganRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewLapKeuanganService;
        (function (ViewLapKeuanganService) {
            ViewLapKeuanganService.baseUrl = 'Default/ViewLapKeuangan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ViewLapKeuanganService[x] = function (r, s, o) {
                    return Q.serviceRequest(ViewLapKeuanganService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ViewLapKeuanganService = Default.ViewLapKeuanganService || (Default.ViewLapKeuanganService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewLapPenjualanForm = /** @class */ (function (_super) {
            __extends(ViewLapPenjualanForm, _super);
            function ViewLapPenjualanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ViewLapPenjualanForm.init) {
                    ViewLapPenjualanForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(ViewLapPenjualanForm, [
                        'OrderDate', w0,
                        'CustomerName', w1,
                        'Address', w1,
                        'Handphone', w1,
                        'TotalHarga', w2,
                        'Ongkir', w2,
                        'TotalBayar', w2,
                        'TanggalWa', w0,
                        'TanggalKirim', w0,
                        'TanggalBayar', w0,
                        'TanggalCs', w0
                    ]);
                }
                return _this;
            }
            ViewLapPenjualanForm.formKey = 'Default.ViewLapPenjualan';
            return ViewLapPenjualanForm;
        }(Serenity.PrefixedContext));
        Default.ViewLapPenjualanForm = ViewLapPenjualanForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewLapPenjualanRow;
        (function (ViewLapPenjualanRow) {
            ViewLapPenjualanRow.idProperty = 'OrderId';
            ViewLapPenjualanRow.nameProperty = 'CustomerName';
            ViewLapPenjualanRow.localTextPrefix = 'Default.ViewLapPenjualan';
        })(ViewLapPenjualanRow = Default.ViewLapPenjualanRow || (Default.ViewLapPenjualanRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewLapPenjualanService;
        (function (ViewLapPenjualanService) {
            ViewLapPenjualanService.baseUrl = 'Default/ViewLapPenjualan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ViewLapPenjualanService[x] = function (r, s, o) {
                    return Q.serviceRequest(ViewLapPenjualanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ViewLapPenjualanService = Default.ViewLapPenjualanService || (Default.ViewLapPenjualanService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewOrderForm = /** @class */ (function (_super) {
            __extends(ViewOrderForm, _super);
            function ViewOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ViewOrderForm.init) {
                    ViewOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    Q.initFormType(ViewOrderForm, [
                        'OrderDate', w0,
                        'Quantity', w1,
                        'CustomerName', w2,
                        'Address', w2,
                        'Handphone', w2,
                        'ProductName', w2,
                        'NamaPengirim', w2,
                        'NoPengirim', w2
                    ]);
                }
                return _this;
            }
            ViewOrderForm.formKey = 'Default.ViewOrder';
            return ViewOrderForm;
        }(Serenity.PrefixedContext));
        Default.ViewOrderForm = ViewOrderForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewOrderRow;
        (function (ViewOrderRow) {
            ViewOrderRow.idProperty = 'OrderId';
            ViewOrderRow.nameProperty = 'CustomerName';
            ViewOrderRow.localTextPrefix = 'Default.ViewOrder';
            ViewOrderRow.lookupKey = 'Default.ViewOrder';
            function getLookup() {
                return Q.getLookup('Default.ViewOrder');
            }
            ViewOrderRow.getLookup = getLookup;
        })(ViewOrderRow = Default.ViewOrderRow || (Default.ViewOrderRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewOrderService;
        (function (ViewOrderService) {
            ViewOrderService.baseUrl = 'Default/ViewOrder';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ViewOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(ViewOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ViewOrderService = Default.ViewOrderService || (Default.ViewOrderService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var WhatsappLeadsForm = /** @class */ (function (_super) {
            __extends(WhatsappLeadsForm, _super);
            function WhatsappLeadsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!WhatsappLeadsForm.init) {
                    WhatsappLeadsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(WhatsappLeadsForm, [
                        'NoWhatsappCs', w0,
                        'NamaCs', w1,
                        'InsertUserId', w2,
                        'InsertDate', w3
                    ]);
                }
                return _this;
            }
            WhatsappLeadsForm.formKey = 'Default.WhatsappLeads';
            return WhatsappLeadsForm;
        }(Serenity.PrefixedContext));
        Default.WhatsappLeadsForm = WhatsappLeadsForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var WhatsappLeadsRow;
        (function (WhatsappLeadsRow) {
            WhatsappLeadsRow.idProperty = 'WhatsappLeadsId';
            WhatsappLeadsRow.nameProperty = 'NoWhatsappCs';
            WhatsappLeadsRow.localTextPrefix = 'Default.WhatsappLeads';
            WhatsappLeadsRow.lookupKey = 'HijrahQu.WhatsappLead';
            function getLookup() {
                return Q.getLookup('HijrahQu.WhatsappLead');
            }
            WhatsappLeadsRow.getLookup = getLookup;
        })(WhatsappLeadsRow = Default.WhatsappLeadsRow || (Default.WhatsappLeadsRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var WhatsappLeadsService;
        (function (WhatsappLeadsService) {
            WhatsappLeadsService.baseUrl = 'Default/WhatsappLeads';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WhatsappLeadsService[x] = function (r, s, o) {
                    return Q.serviceRequest(WhatsappLeadsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WhatsappLeadsService = Default.WhatsappLeadsService || (Default.WhatsappLeadsService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var WhatsappLogForm = /** @class */ (function (_super) {
            __extends(WhatsappLogForm, _super);
            function WhatsappLogForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!WhatsappLogForm.init) {
                    WhatsappLogForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(WhatsappLogForm, [
                        'OrderId', w0,
                        'MessageType', w1,
                        'Sent', w1,
                        'SendDate', w2
                    ]);
                }
                return _this;
            }
            WhatsappLogForm.formKey = 'Default.WhatsappLog';
            return WhatsappLogForm;
        }(Serenity.PrefixedContext));
        Default.WhatsappLogForm = WhatsappLogForm;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var WhatsappLogRow;
        (function (WhatsappLogRow) {
            WhatsappLogRow.idProperty = 'WhatsappLogId';
            WhatsappLogRow.nameProperty = 'MessageType';
            WhatsappLogRow.localTextPrefix = 'Default.WhatsappLog';
            WhatsappLogRow.lookupKey = 'Default.WhatsappLog';
            function getLookup() {
                return Q.getLookup('Default.WhatsappLog');
            }
            WhatsappLogRow.getLookup = getLookup;
        })(WhatsappLogRow = Default.WhatsappLogRow || (Default.WhatsappLogRow = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var WhatsappLogService;
        (function (WhatsappLogService) {
            WhatsappLogService.baseUrl = 'Default/WhatsappLog';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WhatsappLogService[x] = function (r, s, o) {
                    return Q.serviceRequest(WhatsappLogService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WhatsappLogService = Default.WhatsappLogService || (Default.WhatsappLogService = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = HijrahQu.Membership || (HijrahQu.Membership = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = HijrahQu.Membership || (HijrahQu.Membership = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = HijrahQu.Membership || (HijrahQu.Membership = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = HijrahQu.Membership || (HijrahQu.Membership = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = HijrahQu.Membership || (HijrahQu.Membership = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Texts;
    (function (Texts) {
        HijrahQu['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Default: { BiayaIklan: { BiayaIklan: 1, BiayaIklanId: 1, ClosingCS1: 1, ClosingCS2: 1, CostPerLeadsFB: 1, CostPerLeadsWA: 1, LeadsDashboard: 1, LeadsReal: 1, Tanggal: 1 }, CsList: { CsId: 1, CsName: 1, IsActive: 1, NoHp: 1 }, Customer: { Address: 1, City: 1, CustomerId: 1, CustomerName: 1, District: 1, Handphone: 1, InsertDate: 1, InsertUserId: 1, Kodepos: 1, Province: 1, UpdateDate: 1, UpdateUserId: 1 }, KodePos: { Id: 1, Kabupaten: 1, Kecamatan: 1, Kelurahan: 1, Kodepos: 1, KodeposLengkap: 1, Provinsi: 1 }, LaporanHarian: { BudgetFb: 1, Closing: 1, CostPerRealWa: 1, LaporanHarianId: 1, NamaCs: 1, PersenClosing: 1, PersenWA: 1, Tanggal: 1, WaFb: 1, WaReal: 1, WaWeb: 1 }, MessageWa: { MessageDesc: 1, MessageType: 1, MessageWaId: 1 }, NoResi: { CustomerName: 1, Destination: 1, Expedisi: 1, ExpedisiService: 1, Handphone: 1, JNEDate: 1, NINJADate: 1, NoResi: 1, NoResiId: 1, Ongkir: 1, OrderId: 1, SendDate: 1, StatusPengiriman: 1 }, Order: { BiayaCOD: 1, CaraBayar: 1, CustomerAddress: 1, CustomerCustomerName: 1, CustomerHandphone: 1, CustomerId: 1, DetailList: 1, DisplayName: 1, Expedisi: 1, InsertDate: 1, InsertUserId: 1, Keterangan: 1, KirimWAInfo: 1, Kodepos: 1, NoResi: 1, Ongkir: 1, OrderId: 1, OrderStatus: 1, ReceiveBy: 1, ReceiveDate: 1, ReceiveTime: 1, ResiWAInfo: 1, SudahBayar: 1, TagihWAInfo: 1, TanggalBayar: 1, TanggalCS: 1, TanggalClosing: 1, TanggalKirim: 1, TanggalWa: 1, TotalBayar: 1, TotalHarga: 1, TotalRecord: 1, UpdateDate: 1, UpdateUserId: 1 }, OrderDetail: { LineTotal: 1, Ongkir: 1, OrderCustomerId: 1, OrderDetailId: 1, OrderId: 1, OrderOrderDate: 1, OrderStatus: 1, Price: 1, ProductDescription: 1, ProductId: 1, ProductPrice: 1, ProductProductName: 1, ProductSalePrice: 1, ProductSupplierId: 1, Quantity: 1, TotalPerItem: 1 }, OrderStatus: { OrderStatus: 1, OrderStatusId: 1 }, Product: { Description: 1, Price: 1, ProductGroup: 1, ProductId: 1, ProductName: 1, SalePrice: 1, SupplierHandphone: 1, SupplierId: 1, SupplierSource: 1, SupplierSupplierName: 1, SupplierWebsite: 1 }, Supplier: { Handphone: 1, Source: 1, SupplierD: 1, SupplierName: 1, Website: 1 }, ViewLapKeuangan: { BiayaIklan: 1, CustomerName: 1, Handphone: 1, Ongkir: 1, OrderId: 1, TanggalBayar: 1, TanggalWa: 1, TotalBayar: 1, TotalHarga: 1 }, ViewLapPenjualan: { Address: 1, CustomerName: 1, Handphone: 1, Ongkir: 1, OrderDate: 1, OrderId: 1, TanggalBayar: 1, TanggalCs: 1, TanggalKirim: 1, TanggalWa: 1, TotalBayar: 1, TotalHarga: 1 }, ViewOrder: { Address: 1, CustomerName: 1, Handphone: 1, NamaPengirim: 1, NoPengirim: 1, NoResi: 1, Ongkir: 1, OrderDate: 1, OrderId: 1, OrderStatus: 1, ProductName: 1, Quantity: 1, ReceiveBy: 1, ReceiveDate: 1, ReceiveTime: 1, TotalBayar: 1, TotalHarga: 1 }, WhatsappLeads: { InsertDate: 1, InsertUserId: 1, NamaCs: 1, NoWhatsappCs: 1, WhatsappLeadsId: 1 }, WhatsappLog: { MessageText: 1, MessageType: 1, OrderId: 1, SendDate: 1, Sent: 1, WhatsappLogId: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = HijrahQu.Texts || (HijrahQu.Texts = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = HijrahQu.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = HijrahQu.LanguageList || (HijrahQu.LanguageList = {}));
})(HijrahQu || (HijrahQu = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var HijrahQu;
(function (HijrahQu) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('HijrahQu');
        Serenity.EntityDialog.defaultLanguageList = HijrahQu.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = HijrahQu.ScriptInitialization || (HijrahQu.ScriptInitialization = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var StatusEditor = /** @class */ (function (_super) {
            __extends(StatusEditor, _super);
            function StatusEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("NewOrder", "New Order");
                _this.addOption("Printed", "Printed");
                _this.addOption("Delivery", "Delivery");
                _this.addOption("Received", "Received");
                _this.addOption("Complete", "Complete");
                _this.addOption("Close", "Close");
                return _this;
            }
            StatusEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
            ], StatusEditor);
            return StatusEditor;
        }(Serenity.Select2Editor));
        Default.StatusEditor = StatusEditor;
        var CaraBayarEditor = /** @class */ (function (_super) {
            __extends(CaraBayarEditor, _super);
            function CaraBayarEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("Cash On Delivery", "Cash On Delivery");
                _this.addOption("TRANSFER", "TRANSFER");
                return _this;
            }
            CaraBayarEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
            ], CaraBayarEditor);
            return CaraBayarEditor;
        }(Serenity.Select2Editor));
        Default.CaraBayarEditor = CaraBayarEditor;
        var ExpedisiEditor = /** @class */ (function (_super) {
            __extends(ExpedisiEditor, _super);
            function ExpedisiEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("NINJA", "NINJA");
                _this.addOption("JNE", "JNE");
                _this.addOption("JNT", "JNT");
                _this.addOption("SICEPAT", "SICEPAT");
                _this.addOption("TIKI", "TIKI");
                return _this;
            }
            ExpedisiEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
            ], ExpedisiEditor);
            return ExpedisiEditor;
        }(Serenity.Select2Editor));
        Default.ExpedisiEditor = ExpedisiEditor;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = HijrahQu.Administration || (HijrahQu.Administration = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    HijrahQu.BasicProgressDialog = BasicProgressDialog;
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new HijrahQu.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = HijrahQu.DialogUtils || (HijrahQu.DialogUtils = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                console.log('grideditorbase');
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    HijrahQu.StaticTextBlock = StaticTextBlock;
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = HijrahQu.Common || (HijrahQu.Common = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var BiayaIklanDialog = /** @class */ (function (_super) {
            __extends(BiayaIklanDialog, _super);
            function BiayaIklanDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.BiayaIklanForm(_this.idPrefix);
                return _this;
            }
            BiayaIklanDialog.prototype.getFormKey = function () { return Default.BiayaIklanForm.formKey; };
            BiayaIklanDialog.prototype.getIdProperty = function () { return Default.BiayaIklanRow.idProperty; };
            BiayaIklanDialog.prototype.getLocalTextPrefix = function () { return Default.BiayaIklanRow.localTextPrefix; };
            BiayaIklanDialog.prototype.getService = function () { return Default.BiayaIklanService.baseUrl; };
            BiayaIklanDialog.prototype.updateInterface = function () {
                var _this = this;
                _super.prototype.updateInterface.call(this);
                this.form.LeadsDashboard.change(function (e) {
                    _this.form.CostPerLeadsFB.value = _this.form.BiayaIklan.value / _this.form.LeadsDashboard.value;
                });
                this.form.BiayaIklan.change(function (e) {
                    _this.form.CostPerLeadsFB.value = _this.form.BiayaIklan.value / _this.form.LeadsDashboard.value;
                    _this.form.CostPerLeadsWA.value = _this.form.BiayaIklan.value / _this.form.LeadsReal.value;
                });
                this.form.LeadsReal.change(function (e) {
                    _this.form.CostPerLeadsWA.value = _this.form.BiayaIklan.value / _this.form.LeadsReal.value;
                });
            };
            BiayaIklanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BiayaIklanDialog);
            return BiayaIklanDialog;
        }(Serenity.EntityDialog));
        Default.BiayaIklanDialog = BiayaIklanDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var BiayaIklanGrid = /** @class */ (function (_super) {
            __extends(BiayaIklanGrid, _super);
            function BiayaIklanGrid(container) {
                return _super.call(this, container) || this;
            }
            BiayaIklanGrid.prototype.getColumnsKey = function () { return 'Default.BiayaIklan'; };
            BiayaIklanGrid.prototype.getDialogType = function () { return Default.BiayaIklanDialog; };
            BiayaIklanGrid.prototype.getIdProperty = function () { return Default.BiayaIklanRow.idProperty; };
            BiayaIklanGrid.prototype.getLocalTextPrefix = function () { return Default.BiayaIklanRow.localTextPrefix; };
            BiayaIklanGrid.prototype.getService = function () { return Default.BiayaIklanService.baseUrl; };
            BiayaIklanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BiayaIklanGrid);
            return BiayaIklanGrid;
        }(Serenity.EntityGrid));
        Default.BiayaIklanGrid = BiayaIklanGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var CsListDialog = /** @class */ (function (_super) {
            __extends(CsListDialog, _super);
            function CsListDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CsListForm(_this.idPrefix);
                return _this;
            }
            CsListDialog.prototype.getFormKey = function () { return Default.CsListForm.formKey; };
            CsListDialog.prototype.getIdProperty = function () { return Default.CsListRow.idProperty; };
            CsListDialog.prototype.getLocalTextPrefix = function () { return Default.CsListRow.localTextPrefix; };
            CsListDialog.prototype.getNameProperty = function () { return Default.CsListRow.nameProperty; };
            CsListDialog.prototype.getService = function () { return Default.CsListService.baseUrl; };
            CsListDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CsListDialog);
            return CsListDialog;
        }(Serenity.EntityDialog));
        Default.CsListDialog = CsListDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var CsListGrid = /** @class */ (function (_super) {
            __extends(CsListGrid, _super);
            function CsListGrid(container) {
                return _super.call(this, container) || this;
            }
            CsListGrid.prototype.getColumnsKey = function () { return 'Default.CsList'; };
            CsListGrid.prototype.getDialogType = function () { return Default.CsListDialog; };
            CsListGrid.prototype.getIdProperty = function () { return Default.CsListRow.idProperty; };
            CsListGrid.prototype.getLocalTextPrefix = function () { return Default.CsListRow.localTextPrefix; };
            CsListGrid.prototype.getService = function () { return Default.CsListService.baseUrl; };
            CsListGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CsListGrid);
            return CsListGrid;
        }(Serenity.EntityGrid));
        Default.CsListGrid = CsListGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CustomerForm(_this.idPrefix);
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Default.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Default.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Default.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Default.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Default.CustomerService.baseUrl; };
            CustomerDialog.prototype.validateBeforeSave = function () {
                var _this = this;
                var item = Default.OrderRow.getLookup().items.filter(function (x) { return x.CustomerHandphone == _this.form.Handphone.value; });
                if (item.length > 0) {
                    Q.alert("No Handphone ini sudah pernah diinput, mungkin barang sudah dikirim");
                    return false;
                }
                return _super.prototype.validateBeforeSave.call(this);
            };
            CustomerDialog.prototype.updateInterface = function () {
                var _this = this;
                _super.prototype.updateInterface.call(this);
                this.form.Kodepos.change(function (e) {
                    if (_this.form.Kodepos.value != "") {
                        Default.KodePosRow.getLookup;
                        _this.form.Address.value = _this.form.Address.value + ' KODEPOS:' + _this.form.Kodepos.value;
                        var alamat = Q.coalesce(_this.form.Kodepos.element.select2('data'), {}).text.split("-");
                        alert(Q.coalesce(_this.form.Kodepos.element.select2('data'), {}).text);
                        _this.form.Province.value = alamat[0];
                        _this.form.District.value = alamat[1];
                        _this.form.City.value = alamat[2];
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
            };
            CustomerDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Default.CustomerDialog = CustomerDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return 'Default.Customer'; };
            CustomerGrid.prototype.getDialogType = function () { return Default.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Default.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Default.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Default.CustomerService.baseUrl; };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Default.CustomerGrid = CustomerGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var UserDisplayNameFormatterByUserId = /** @class */ (function () {
            function UserDisplayNameFormatterByUserId() {
            }
            UserDisplayNameFormatterByUserId.prototype.format = function (ctx) {
                var byId = HijrahQu.Administration.UserRow.getLookup().itemById;
                if (byId[ctx.value] != null) {
                    return byId[ctx.value].DisplayName;
                }
                else {
                    return ctx.value;
                }
            };
            UserDisplayNameFormatterByUserId = __decorate([
                Serenity.Decorators.registerFormatter()
            ], UserDisplayNameFormatterByUserId);
            return UserDisplayNameFormatterByUserId;
        }());
        Default.UserDisplayNameFormatterByUserId = UserDisplayNameFormatterByUserId;
        var OrderStatusFormatter = /** @class */ (function () {
            function OrderStatusFormatter() {
            }
            OrderStatusFormatter.prototype.format = function (ctx) {
                var classStatus = '';
                switch (ctx.value) {
                    case "NewOrder":
                        classStatus = 'label label-primary';
                        break;
                    case "Printed":
                        classStatus = 'label label-default';
                        break;
                    case "In Progress":
                        classStatus = 'label label-default';
                        break;
                    case "Delivery":
                        classStatus = 'label label-warning';
                        break;
                    case "Received":
                        classStatus = 'label label-primary';
                        break;
                    case "Complete":
                        classStatus = 'label label-success';
                        break;
                    case "Close":
                        classStatus = 'label label-success';
                        break;
                }
                return '<span class="' + classStatus + '">' + Q.htmlEncode(ctx.value) + '</span>';
            };
            OrderStatusFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], OrderStatusFormatter);
            return OrderStatusFormatter;
        }());
        Default.OrderStatusFormatter = OrderStatusFormatter;
        var NoResiFormatter = /** @class */ (function () {
            function NoResiFormatter() {
            }
            NoResiFormatter.prototype.format = function (ctx) {
                if (ctx.value != undefined) {
                    return "<a href='https://track.aftership.com/jne/" + ctx.value + "'>" + ctx.value + "</a>";
                }
            };
            NoResiFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], NoResiFormatter);
            return NoResiFormatter;
        }());
        Default.NoResiFormatter = NoResiFormatter;
        var InfoKirimFormatter = /** @class */ (function () {
            function InfoKirimFormatter() {
            }
            InfoKirimFormatter.prototype.format = function (ctx) {
                console.log(ctx.value);
                console.log("sss");
                var z = Default.MessageWaRow.getLookup().itemById;
                var msg = z[1].MessageDesc;
                var orders = Default.ViewOrderRow.getLookup().items.filter(function (x) { return x.OrderId == ctx.value; });
                if (orders != null) {
                    if (orders != undefined) {
                        if (orders.length > 0) {
                            var order = orders[0];
                            msg = msg.replace("[NoOrder]", "#" + ctx.value);
                            msg = msg.replace("[Nama]", order.CustomerName);
                            msg = msg.replace("[Alamat]", order.Address);
                            msg = msg.replace("[HP]", order.Handphone);
                            if (ctx.value != undefined) {
                                var url = "<a href='https://api.whatsapp.com/send?phone=" + order.Handphone + "&text=" + encodeURI(msg) + "'>" + "WA Kirim" + "</a>";
                                return url;
                            }
                        }
                    }
                }
            };
            InfoKirimFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], InfoKirimFormatter);
            return InfoKirimFormatter;
        }());
        Default.InfoKirimFormatter = InfoKirimFormatter;
        var InfoResiFormatter = /** @class */ (function () {
            function InfoResiFormatter() {
            }
            InfoResiFormatter.prototype.format = function (ctx) {
                var z = Default.MessageWaRow.getLookup().itemById;
                var msg = z[2].MessageDesc;
                var orders = Default.ViewOrderRow.getLookup().items.filter(function (x) { return x.OrderId == ctx.value; });
                if (orders != null) {
                    if (orders != undefined) {
                        if (orders.length > 0) {
                            var order = orders[0];
                            msg = msg.replace("[NoOrder]", "#" + ctx.value);
                            msg = msg.replace("[Nama]", order.CustomerName);
                            msg = msg.replace("[Alamat]", order.Address);
                            msg = msg.replace("[HP]", order.Handphone);
                            msg = msg.replace("[NORESI]", order.NoResi);
                            if (ctx.value != undefined) {
                                var url = "<a href='https://api.whatsapp.com/send?phone=" + order.Handphone + "&text=" + encodeURI(msg) + "'>" + "WA Resi" + "</a>";
                                return url;
                            }
                        }
                    }
                }
            };
            InfoResiFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], InfoResiFormatter);
            return InfoResiFormatter;
        }());
        Default.InfoResiFormatter = InfoResiFormatter;
        var InfoTagihFormatter = /** @class */ (function () {
            function InfoTagihFormatter() {
            }
            InfoTagihFormatter.prototype.format = function (ctx) {
                var z = Default.MessageWaRow.getLookup().itemById;
                var msg = z[3].MessageDesc;
                var orders = Default.ViewOrderRow.getLookup().items.filter(function (x) { return x.OrderId == ctx.value; });
                if (orders != null) {
                    if (orders != undefined) {
                        if (orders.length > 0) {
                            var order = orders[0];
                            var totalHarga = order.TotalHarga + order.Ongkir;
                            msg = msg.replace("[NoOrder]", "#" + ctx.value);
                            msg = msg.replace("[Nama]", order.CustomerName);
                            msg = msg.replace("[ONGKIR]", order.Ongkir.toString());
                            //msg = msg.replace("[TOTALHARGA]", order.TotalHarga.toString());
                            msg = msg.replace("[JUMLAH]", totalHarga.toString());
                            msg = msg.replace("[RECEIVEDATE]", order.ReceiveDate);
                            msg = msg.replace("[RECEIVEBY]", order.ReceiveBy);
                            msg = msg.replace("[RECEIVETIME]", order.ReceiveTime);
                            //msg = msg.replace("[TOTALBAYAR]", (order.Ongkir + order.TotalHarga).toString());
                            if (ctx.value != undefined) {
                                var url = "<a href='https://api.whatsapp.com/send?phone=" + order.Handphone + "&text=" + encodeURI(msg) + "'>" + "WA Tagih" + "</a>";
                                return url;
                            }
                        }
                    }
                }
            };
            InfoTagihFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], InfoTagihFormatter);
            return InfoTagihFormatter;
        }());
        Default.InfoTagihFormatter = InfoTagihFormatter;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var KodePosDialog = /** @class */ (function (_super) {
            __extends(KodePosDialog, _super);
            function KodePosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.KodePosForm(_this.idPrefix);
                return _this;
            }
            KodePosDialog.prototype.getFormKey = function () { return Default.KodePosForm.formKey; };
            KodePosDialog.prototype.getIdProperty = function () { return Default.KodePosRow.idProperty; };
            KodePosDialog.prototype.getLocalTextPrefix = function () { return Default.KodePosRow.localTextPrefix; };
            KodePosDialog.prototype.getNameProperty = function () { return Default.KodePosRow.nameProperty; };
            KodePosDialog.prototype.getService = function () { return Default.KodePosService.baseUrl; };
            KodePosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], KodePosDialog);
            return KodePosDialog;
        }(Serenity.EntityDialog));
        Default.KodePosDialog = KodePosDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var Editor;
        (function (Editor) {
            var KodePosEditor = /** @class */ (function (_super) {
                __extends(KodePosEditor, _super);
                function KodePosEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    var items = Default.KodePosRow.getLookup().items;
                    for (var i = 1; i <= items.length; i++) {
                        // add option accepts a key (id) value and display text value
                        _this.addOption(items[i].Kodepos, items[i].KodeposLengkap);
                    }
                    return _this;
                }
                KodePosEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], KodePosEditor);
                return KodePosEditor;
            }(Serenity.Select2Editor));
            Editor.KodePosEditor = KodePosEditor;
            var ExpedisiEditor = /** @class */ (function (_super) {
                __extends(ExpedisiEditor, _super);
                function ExpedisiEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("NINJA", "NINJA");
                    _this.addOption("JNE", "JNE");
                    _this.addOption("JX", "JX");
                    return _this;
                }
                ExpedisiEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], ExpedisiEditor);
                return ExpedisiEditor;
            }(Serenity.Select2Editor));
            Editor.ExpedisiEditor = ExpedisiEditor;
        })(Editor = Default.Editor || (Default.Editor = {}));
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var KodePosGrid = /** @class */ (function (_super) {
            __extends(KodePosGrid, _super);
            function KodePosGrid(container) {
                return _super.call(this, container) || this;
            }
            KodePosGrid.prototype.getColumnsKey = function () { return 'Default.KodePos'; };
            KodePosGrid.prototype.getDialogType = function () { return Default.KodePosDialog; };
            KodePosGrid.prototype.getIdProperty = function () { return Default.KodePosRow.idProperty; };
            KodePosGrid.prototype.getLocalTextPrefix = function () { return Default.KodePosRow.localTextPrefix; };
            KodePosGrid.prototype.getService = function () { return Default.KodePosService.baseUrl; };
            KodePosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], KodePosGrid);
            return KodePosGrid;
        }(Serenity.EntityGrid));
        Default.KodePosGrid = KodePosGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var LaporanHarianDialog = /** @class */ (function (_super) {
            __extends(LaporanHarianDialog, _super);
            function LaporanHarianDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.LaporanHarianForm(_this.idPrefix);
                return _this;
            }
            LaporanHarianDialog.prototype.getFormKey = function () { return Default.LaporanHarianForm.formKey; };
            LaporanHarianDialog.prototype.getIdProperty = function () { return Default.LaporanHarianRow.idProperty; };
            LaporanHarianDialog.prototype.getLocalTextPrefix = function () { return Default.LaporanHarianRow.localTextPrefix; };
            LaporanHarianDialog.prototype.getNameProperty = function () { return Default.LaporanHarianRow.nameProperty; };
            LaporanHarianDialog.prototype.getService = function () { return Default.LaporanHarianService.baseUrl; };
            LaporanHarianDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    this.form.NamaCs.value = HijrahQu.Authorization.userDefinition.Username;
                }
            };
            LaporanHarianDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LaporanHarianDialog);
            return LaporanHarianDialog;
        }(Serenity.EntityDialog));
        Default.LaporanHarianDialog = LaporanHarianDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var LaporanHarianGrid = /** @class */ (function (_super) {
            __extends(LaporanHarianGrid, _super);
            function LaporanHarianGrid(container) {
                return _super.call(this, container) || this;
            }
            LaporanHarianGrid.prototype.getColumnsKey = function () { return 'Default.LaporanHarian'; };
            LaporanHarianGrid.prototype.getDialogType = function () { return Default.LaporanHarianDialog; };
            LaporanHarianGrid.prototype.getIdProperty = function () { return Default.LaporanHarianRow.idProperty; };
            LaporanHarianGrid.prototype.getLocalTextPrefix = function () { return Default.LaporanHarianRow.localTextPrefix; };
            LaporanHarianGrid.prototype.getService = function () { return Default.LaporanHarianService.baseUrl; };
            LaporanHarianGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LaporanHarianGrid);
            return LaporanHarianGrid;
        }(Serenity.EntityGrid));
        Default.LaporanHarianGrid = LaporanHarianGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var MessageWaDialog = /** @class */ (function (_super) {
            __extends(MessageWaDialog, _super);
            function MessageWaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.MessageWaForm(_this.idPrefix);
                return _this;
            }
            MessageWaDialog.prototype.getFormKey = function () { return Default.MessageWaForm.formKey; };
            MessageWaDialog.prototype.getIdProperty = function () { return Default.MessageWaRow.idProperty; };
            MessageWaDialog.prototype.getLocalTextPrefix = function () { return Default.MessageWaRow.localTextPrefix; };
            MessageWaDialog.prototype.getNameProperty = function () { return Default.MessageWaRow.nameProperty; };
            MessageWaDialog.prototype.getService = function () { return Default.MessageWaService.baseUrl; };
            MessageWaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MessageWaDialog);
            return MessageWaDialog;
        }(Serenity.EntityDialog));
        Default.MessageWaDialog = MessageWaDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var MessageWaGrid = /** @class */ (function (_super) {
            __extends(MessageWaGrid, _super);
            function MessageWaGrid(container) {
                return _super.call(this, container) || this;
            }
            MessageWaGrid.prototype.getColumnsKey = function () { return 'Default.MessageWa'; };
            MessageWaGrid.prototype.getDialogType = function () { return Default.MessageWaDialog; };
            MessageWaGrid.prototype.getIdProperty = function () { return Default.MessageWaRow.idProperty; };
            MessageWaGrid.prototype.getLocalTextPrefix = function () { return Default.MessageWaRow.localTextPrefix; };
            MessageWaGrid.prototype.getService = function () { return Default.MessageWaService.baseUrl; };
            MessageWaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MessageWaGrid);
            return MessageWaGrid;
        }(Serenity.EntityGrid));
        Default.MessageWaGrid = MessageWaGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var NoResiDialog = /** @class */ (function (_super) {
            __extends(NoResiDialog, _super);
            function NoResiDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.NoResiForm(_this.idPrefix);
                return _this;
            }
            NoResiDialog.prototype.getFormKey = function () { return Default.NoResiForm.formKey; };
            NoResiDialog.prototype.getIdProperty = function () { return Default.NoResiRow.idProperty; };
            NoResiDialog.prototype.getLocalTextPrefix = function () { return Default.NoResiRow.localTextPrefix; };
            NoResiDialog.prototype.getNameProperty = function () { return Default.NoResiRow.nameProperty; };
            NoResiDialog.prototype.getService = function () { return Default.NoResiService.baseUrl; };
            NoResiDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoResiDialog);
            return NoResiDialog;
        }(Serenity.EntityDialog));
        Default.NoResiDialog = NoResiDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var NoResiGrid = /** @class */ (function (_super) {
            __extends(NoResiGrid, _super);
            function NoResiGrid(container) {
                return _super.call(this, container) || this;
            }
            NoResiGrid.prototype.getColumnsKey = function () { return 'Default.NoResi'; };
            NoResiGrid.prototype.getDialogType = function () { return Default.NoResiDialog; };
            NoResiGrid.prototype.getIdProperty = function () { return Default.NoResiRow.idProperty; };
            NoResiGrid.prototype.getLocalTextPrefix = function () { return Default.NoResiRow.localTextPrefix; };
            NoResiGrid.prototype.getService = function () { return Default.NoResiService.baseUrl; };
            NoResiGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NoResiGrid);
            return NoResiGrid;
        }(Serenity.EntityGrid));
        Default.NoResiGrid = NoResiGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var NoResiUploadDialog = /** @class */ (function (_super) {
            __extends(NoResiUploadDialog, _super);
            function NoResiUploadDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.rowCount = 0;
                _this.productType = '';
                _this.fileName = '';
                _this.getToolbarButtons();
                _this.form = new Default.NoResiUploadForm(_this.idPrefix);
                _this.countImport = 0;
                _this.dataFieldId = opt.DataField;
                return _this;
            }
            NoResiUploadDialog.prototype.getDialogTitle = function () {
                return "Upload No Resi";
            };
            NoResiUploadDialog.prototype.getDialogButtons = function () {
                var _this = this;
                var buttons = [
                    {
                        text: 'Submit',
                        class: 'Upload No Resi',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            _this.ecrfListToUpload = null;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            Default.OrderService.SynchResi({
                                DataField: _this.dataFieldId,
                                TotalRecord: _this.form.TotalRecord.value,
                                FileName: _this.form.FileName.value.Filename,
                                Expedisi: _this.form.Expedisi.value
                            }, function (response) {
                                if (response.Error != null || response.Error == "") {
                                    Q.notifyError(response.Error.Message);
                                }
                                else {
                                    Q.notifySuccess("Alhamdulillah " + response.Inserted + " data berhasil di update");
                                    //window.location.reload(true);
                                }
                            }, { async: false });
                        },
                    },
                    {
                        text: 'Cancel',
                        class: 'cancel-btn-excel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return buttons;
            };
            NoResiUploadDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], NoResiUploadDialog);
            return NoResiUploadDialog;
        }(Serenity.PropertyDialog));
        Default.NoResiUploadDialog = NoResiUploadDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ClosingUploadDialog = /** @class */ (function (_super) {
            __extends(ClosingUploadDialog, _super);
            function ClosingUploadDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.rowCount = 0;
                _this.productType = '';
                _this.fileName = '';
                _this.getToolbarButtons();
                _this.form = new Default.ClosingUploadForm(_this.idPrefix);
                _this.countImport = 0;
                _this.dataFieldId = opt.DataField;
                return _this;
            }
            ClosingUploadDialog.prototype.getDialogTitle = function () {
                return "Upload No Resi";
            };
            ClosingUploadDialog.prototype.getDialogButtons = function () {
                var _this = this;
                var buttons = [
                    {
                        text: 'Submit',
                        class: 'Upload Data Closing',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            _this.ecrfListToUpload = null;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            Default.OrderService.UploadDataClosing({
                                DataField: _this.dataFieldId,
                                TotalRecord: _this.form.TotalRecord.value,
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                if (response.Error != null || response.Error == "") {
                                    Q.notifyError(response.Error.Message);
                                }
                                else {
                                    Q.notifySuccess("Alhamdulillah " + response.Inserted + " data berhasil di update");
                                    //window.location.reload(true);
                                }
                            }, { async: false });
                        },
                    },
                    {
                        text: 'Cancel',
                        class: 'cancel-btn-excel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return buttons;
            };
            ClosingUploadDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ClosingUploadDialog);
            return ClosingUploadDialog;
        }(Serenity.PropertyDialog));
        Default.ClosingUploadDialog = ClosingUploadDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var FileOrderDialog = /** @class */ (function (_super) {
            __extends(FileOrderDialog, _super);
            function FileOrderDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.rowCount = 0;
                _this.productType = '';
                _this.fileName = '';
                _this.getToolbarButtons();
                _this.form = new Default.OrderImportForm(_this.idPrefix);
                _this.countImport = 0;
                return _this;
            }
            FileOrderDialog.prototype.getDialogTitle = function () {
                return "Excel Mass Update";
            };
            FileOrderDialog.prototype.getDialogButtons = function () {
                var _this = this;
                var buttons = [
                    {
                        text: 'Submit',
                        class: 'import-btn-excel',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            _this.ecrfListToUpload = null;
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
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return buttons;
            };
            FileOrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], FileOrderDialog);
            return FileOrderDialog;
        }(Serenity.PropertyDialog));
        Default.FileOrderDialog = FileOrderDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderDialog = /** @class */ (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.OrderForm(_this.idPrefix);
                return _this;
            }
            OrderDialog.prototype.getFormKey = function () { return Default.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Default.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Default.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getService = function () { return Default.OrderService.baseUrl; };
            OrderDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    //this.form.OrderDate.valueAsDate = new Date();
                    this.form.TanggalWa.valueAsDate = new Date();
                    this.form.TanggalClosing.valueAsDate = new Date();
                    this.form.TanggalKirim.valueAsDate = new Date();
                    this.form.OrderStatus.value = "NewOrder";
                    Serenity.EditorUtils.setReadOnly(this.form.NoResi, true);
                    this.form.DisplayName.value = HijrahQu.Authorization.userDefinition.DisplayName;
                }
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.NoResi, false);
                }
                this.form.CustomerId.changeSelect2(function (e) {
                    var row = Default.CustomerRow.getLookup().itemById[_this.form.CustomerId.value];
                    _this.form.CustomerAddress.value = row.Address;
                    _this.form.CustomerHandphone.value = row.Handphone;
                });
                //this.form.Kodepos.change(e => {
                //    if (this.form.Kodepos.value != "") {
                //        this.form.CustomerAddress.value = this.form.CustomerAddress.value + ' KODEPOS:' + this.form.Kodepos.value;
                //        this.entity.CustomerAddress = this.form.CustomerAddress.value;
                //    }
                //});
                this.form.CustomerId.change(function (e) {
                    var CustomerId = Q.toId(_this.form.CustomerId.value);
                    if (CustomerId != null) {
                        _this.form.CustomerAddress.value = Default.CustomerRow.getLookup().itemById[CustomerId].Address;
                        _this.form.CustomerHandphone.value = Default.CustomerRow.getLookup().itemById[CustomerId].Handphone;
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
            };
            OrderDialog.prototype.validateBeforeSave = function () {
                if (this.form.NoResi.value != "" && this.form.OrderStatus.value == "Printed") {
                    this.form.OrderStatus.value = "Delivery";
                }
                if (this.form.TanggalBayar.value != null && this.form.NoResi.value != "") {
                    this.form.OrderStatus.value = "Complete";
                }
                //if (this.form.Kodepos.value != "") {
                //    CustomerService.Update({ EntityId: this.form.CustomerId.value, Entity: { Address: this.form.CustomerAddress.value } });
                //}
                return _super.prototype.validateBeforeSave.call(this);
            };
            OrderDialog.prototype.onSaveSuccess = function (res) {
                _super.prototype.onSaveSuccess.call(this, res);
                if (this.isNew()) {
                    Default.OrderService.sendNotif({
                        orderid: res.EntityId, messageType: "Informasi Kirim"
                    }, function (response) {
                        if (response.Error != null || response.Error == "") {
                            Q.notifyError(response.Error.Message);
                        }
                        else {
                            Q.alert(response.message);
                        }
                    }, { async: false });
                }
                if (this.isEditMode()) {
                    if (this.form.NoResi.value != "") {
                        var waLog = Default.WhatsappLogRow.getLookup().items.filter(function (x) { return x.MessageType == "Informasi Resi" && x.OrderId == res.EntityId; });
                        if (waLog.length == 0) {
                            Default.OrderService.sendNotif({
                                orderid: res.EntityId, messageType: "Informasi Resi"
                            }, function (response) {
                                if (response.Error != null || response.Error == "") {
                                    Q.notifyError(response.Error.Message);
                                }
                            }, { async: false });
                        }
                    }
                }
            };
            OrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], OrderDialog);
            return OrderDialog;
        }(Serenity.EntityDialog));
        Default.OrderDialog = OrderDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderGrid = /** @class */ (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderGrid.prototype.getColumnsKey = function () { return 'Default.Order'; };
            OrderGrid.prototype.getDialogType = function () { return Default.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Default.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Default.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Default.OrderService.baseUrl; };
            OrderGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            OrderGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                //Cek Admin Divisi
                if (!HijrahQu.Authorization.userDefinition.IsAdmin) {
                    var userId = 0;
                    if (HijrahQu.Authorization.userDefinition.Username == "putri") {
                        userId = 2;
                    }
                    if (HijrahQu.Authorization.userDefinition.Username == "novi") {
                        userId = 3;
                    }
                    if (HijrahQu.Authorization.userDefinition.Username == "fayiz") {
                        userId = 6;
                    }
                    var request = this.view.params;
                    request.Criteria = Serenity.Criteria.and(request.Criteria, [['InsertUserId'], '=', userId]);
                }
                return true;
            };
            OrderGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                //columns[0].cssClass = "checklist";
                //Q.first(columns, x => x.field == HijrahQu.Default.OrderRow.Fields.NoResi.toString()).format =
                //    ctx => `<a href="https://track.aftership.com/jne/" class="site-link">${Q.htmlEncode(ctx.value)}</a>`;
                return columns;
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var button = _super.prototype.getButtons.call(this);
                button.push({
                    title: "Print Label",
                    cssClass: 'grid-export-button',
                    icon: 'fa fa-print text-red',
                    onClick: function () {
                        if (_this.rowSelection.getSelectedKeys().length > 0) {
                            var data = _this.rowSelection.getSelectedKeys();
                            Q.postToUrl({
                                url: '~/Services/Default/Order/PrintLabel/',
                                params: { IdExport: data },
                                target: '_blank'
                            });
                        }
                        else {
                            Q.alert("No data selected");
                        }
                    }
                });
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
                if (HijrahQu.Authorization.userDefinition.IsAdmin) {
                    button.push({
                        title: "Close Order",
                        cssClass: 'grid-export-button',
                        icon: 'fa fa-upload text-green',
                        onClick: function () {
                            if (_this.rowSelection.getSelectedKeys().length > 0) {
                                var data = _this.rowSelection.getSelectedKeys();
                                Default.OrderService.CloseOrder({
                                    IdExport: data
                                }, function (response) {
                                    if (response.Error != null || response.Error == "") {
                                        Q.notifySuccess("Close Order Success");
                                        window.location.reload(true);
                                    }
                                    else {
                                        Q.alert(response.message);
                                    }
                                }, { async: false });
                            }
                            else {
                                Q.alert("No data selected");
                            }
                        }
                    });
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
                    onClick: function () {
                        if (_this.rowSelection.getSelectedKeys().length > 0) {
                            var data = _this.rowSelection.getSelectedKeys();
                            Q.postToUrl({
                                url: '~/Services/Default/Order/ExportDataNINJA/',
                                params: { IdExport: data },
                                target: '_blank'
                            });
                        }
                        else {
                            Q.alert("No data selected");
                        }
                    }
                });
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
            };
            OrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderGrid);
            return OrderGrid;
        }(Serenity.EntityGrid));
        Default.OrderGrid = OrderGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderImportDialog = /** @class */ (function (_super) {
            __extends(OrderImportDialog, _super);
            function OrderImportDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ViewOrderForm(_this.idPrefix);
                return _this;
            }
            OrderImportDialog.prototype.getFormKey = function () { return Default.ViewOrderForm.formKey; };
            OrderImportDialog.prototype.getIdProperty = function () { return Default.ViewOrderRow.idProperty; };
            OrderImportDialog.prototype.getLocalTextPrefix = function () { return Default.ViewOrderRow.localTextPrefix; };
            OrderImportDialog.prototype.getNameProperty = function () { return Default.ViewOrderRow.nameProperty; };
            OrderImportDialog.prototype.getService = function () { return Default.ViewOrderService.baseUrl; };
            OrderImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderImportDialog);
            return OrderImportDialog;
        }(Serenity.EntityDialog));
        Default.OrderImportDialog = OrderImportDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderDetailDialog = /** @class */ (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.OrderDetailForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        _this.form.Price.value = Default.ProductRow.getLookup().itemById[productID].Price;
                        console.log(Default.ProductRow.getLookup().itemById[productID].Price);
                    }
                });
                _this.form.Quantity.change(function (e) {
                    _this.form.TotalPerItem.value = _this.form.Quantity.value * _this.form.Price.value;
                });
                return _this;
                //this.form.Discount.addValidationRule(this.uniqueName, e => {
                //    var price = this.form.UnitPrice.value;
                //    var quantity = this.form.Quantity.value;
                //    var discount = this.form.Discount.value;
                //    if (price != null && quantity != null && discount != null &&
                //        discount > 0 && discount >= price * quantity) {
                //        return "Discount can't be higher than total price!";
                //    }
                //});
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Default.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getIdProperty = function () { return Default.OrderDetailRow.idProperty; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Default.OrderDetailRow.localTextPrefix; };
            OrderDetailDialog.prototype.getNameProperty = function () { return Default.OrderDetailRow.nameProperty; };
            OrderDetailDialog.prototype.getService = function () { return Default.OrderDetailService.baseUrl; };
            OrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailDialog);
            return OrderDetailDialog;
        }(HijrahQu.Common.GridEditorDialog));
        Default.OrderDetailDialog = OrderDetailDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderDetailGrid = /** @class */ (function (_super) {
            __extends(OrderDetailGrid, _super);
            function OrderDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailGrid.prototype.getColumnsKey = function () { return 'Default.OrderDetail'; };
            OrderDetailGrid.prototype.getDialogType = function () { return Default.OrderDetailDialog; };
            OrderDetailGrid.prototype.getIdProperty = function () { return Default.OrderDetailRow.idProperty; };
            OrderDetailGrid.prototype.getLocalTextPrefix = function () { return Default.OrderDetailRow.localTextPrefix; };
            OrderDetailGrid.prototype.getService = function () { return Default.OrderDetailService.baseUrl; };
            OrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailGrid);
            return OrderDetailGrid;
        }(Serenity.EntityGrid));
        Default.OrderDetailGrid = OrderDetailGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderDetailsEditor = /** @class */ (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Default.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Default.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Default.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                //this.view.setSummaryOptions({
                //    aggregators: [
                //        new Slick.Aggregators.Sum(fld.Quantity),
                //        new Slick.Aggregators.Sum(fld.LineTotal)
                //    ]
                //});
                return grid;
            };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductId = Q.toId(row.ProductId);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductId === row.ProductId; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order!');
                    return false;
                }
                row.ProductProductName = Default.ProductRow.getLookup().itemById[row.ProductId].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.Price || 0);
                return true;
            };
            OrderDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsEditor);
            return OrderDetailsEditor;
        }(HijrahQu.Common.GridEditorBase));
        Default.OrderDetailsEditor = OrderDetailsEditor;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderStatusDialog = /** @class */ (function (_super) {
            __extends(OrderStatusDialog, _super);
            function OrderStatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.OrderStatusForm(_this.idPrefix);
                return _this;
            }
            OrderStatusDialog.prototype.getFormKey = function () { return Default.OrderStatusForm.formKey; };
            OrderStatusDialog.prototype.getIdProperty = function () { return Default.OrderStatusRow.idProperty; };
            OrderStatusDialog.prototype.getLocalTextPrefix = function () { return Default.OrderStatusRow.localTextPrefix; };
            OrderStatusDialog.prototype.getNameProperty = function () { return Default.OrderStatusRow.nameProperty; };
            OrderStatusDialog.prototype.getService = function () { return Default.OrderStatusService.baseUrl; };
            OrderStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderStatusDialog);
            return OrderStatusDialog;
        }(Serenity.EntityDialog));
        Default.OrderStatusDialog = OrderStatusDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var OrderStatusGrid = /** @class */ (function (_super) {
            __extends(OrderStatusGrid, _super);
            function OrderStatusGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderStatusGrid.prototype.getColumnsKey = function () { return 'Default.OrderStatus'; };
            OrderStatusGrid.prototype.getDialogType = function () { return Default.OrderStatusDialog; };
            OrderStatusGrid.prototype.getIdProperty = function () { return Default.OrderStatusRow.idProperty; };
            OrderStatusGrid.prototype.getLocalTextPrefix = function () { return Default.OrderStatusRow.localTextPrefix; };
            OrderStatusGrid.prototype.getService = function () { return Default.OrderStatusService.baseUrl; };
            OrderStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderStatusGrid);
            return OrderStatusGrid;
        }(Serenity.EntityGrid));
        Default.OrderStatusGrid = OrderStatusGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ProductDialog = /** @class */ (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Default.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Default.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Default.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Default.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Default.ProductService.baseUrl; };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Default.ProductDialog = ProductDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ProductGrid = /** @class */ (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return 'Default.Product'; };
            ProductGrid.prototype.getDialogType = function () { return Default.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Default.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Default.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Default.ProductService.baseUrl; };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Default.ProductGrid = ProductGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var SupplierDialog = /** @class */ (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.SupplierForm(_this.idPrefix);
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Default.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Default.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Default.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Default.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Default.SupplierService.baseUrl; };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Default.SupplierDialog = SupplierDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var SupplierGrid = /** @class */ (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return 'Default.Supplier'; };
            SupplierGrid.prototype.getDialogType = function () { return Default.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Default.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Default.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Default.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Default.SupplierGrid = SupplierGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewLapKeuanganDialog = /** @class */ (function (_super) {
            __extends(ViewLapKeuanganDialog, _super);
            function ViewLapKeuanganDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ViewLapKeuanganForm(_this.idPrefix);
                return _this;
            }
            ViewLapKeuanganDialog.prototype.getFormKey = function () { return Default.ViewLapKeuanganForm.formKey; };
            ViewLapKeuanganDialog.prototype.getIdProperty = function () { return Default.ViewLapKeuanganRow.idProperty; };
            ViewLapKeuanganDialog.prototype.getLocalTextPrefix = function () { return Default.ViewLapKeuanganRow.localTextPrefix; };
            ViewLapKeuanganDialog.prototype.getNameProperty = function () { return Default.ViewLapKeuanganRow.nameProperty; };
            ViewLapKeuanganDialog.prototype.getService = function () { return Default.ViewLapKeuanganService.baseUrl; };
            ViewLapKeuanganDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewLapKeuanganDialog);
            return ViewLapKeuanganDialog;
        }(Serenity.EntityDialog));
        Default.ViewLapKeuanganDialog = ViewLapKeuanganDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewLapKeuanganGrid = /** @class */ (function (_super) {
            __extends(ViewLapKeuanganGrid, _super);
            function ViewLapKeuanganGrid(container) {
                return _super.call(this, container) || this;
            }
            ViewLapKeuanganGrid.prototype.getColumnsKey = function () { return 'Default.ViewLapKeuangan'; };
            ViewLapKeuanganGrid.prototype.getDialogType = function () { return Default.ViewLapKeuanganDialog; };
            ViewLapKeuanganGrid.prototype.getIdProperty = function () { return Default.ViewLapKeuanganRow.idProperty; };
            ViewLapKeuanganGrid.prototype.getLocalTextPrefix = function () { return Default.ViewLapKeuanganRow.localTextPrefix; };
            ViewLapKeuanganGrid.prototype.getService = function () { return Default.ViewLapKeuanganService.baseUrl; };
            ViewLapKeuanganGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewLapKeuanganGrid);
            return ViewLapKeuanganGrid;
        }(Serenity.EntityGrid));
        Default.ViewLapKeuanganGrid = ViewLapKeuanganGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewLapPenjualanDialog = /** @class */ (function (_super) {
            __extends(ViewLapPenjualanDialog, _super);
            function ViewLapPenjualanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ViewLapPenjualanForm(_this.idPrefix);
                return _this;
            }
            ViewLapPenjualanDialog.prototype.getFormKey = function () { return Default.ViewLapPenjualanForm.formKey; };
            ViewLapPenjualanDialog.prototype.getIdProperty = function () { return Default.ViewLapPenjualanRow.idProperty; };
            ViewLapPenjualanDialog.prototype.getLocalTextPrefix = function () { return Default.ViewLapPenjualanRow.localTextPrefix; };
            ViewLapPenjualanDialog.prototype.getNameProperty = function () { return Default.ViewLapPenjualanRow.nameProperty; };
            ViewLapPenjualanDialog.prototype.getService = function () { return Default.ViewLapPenjualanService.baseUrl; };
            ViewLapPenjualanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewLapPenjualanDialog);
            return ViewLapPenjualanDialog;
        }(Serenity.EntityDialog));
        Default.ViewLapPenjualanDialog = ViewLapPenjualanDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewLapPenjualanGrid = /** @class */ (function (_super) {
            __extends(ViewLapPenjualanGrid, _super);
            function ViewLapPenjualanGrid(container) {
                return _super.call(this, container) || this;
            }
            ViewLapPenjualanGrid.prototype.getColumnsKey = function () { return 'Default.ViewLapPenjualan'; };
            ViewLapPenjualanGrid.prototype.getDialogType = function () { return Default.ViewLapPenjualanDialog; };
            ViewLapPenjualanGrid.prototype.getIdProperty = function () { return Default.ViewLapPenjualanRow.idProperty; };
            ViewLapPenjualanGrid.prototype.getLocalTextPrefix = function () { return Default.ViewLapPenjualanRow.localTextPrefix; };
            ViewLapPenjualanGrid.prototype.getService = function () { return Default.ViewLapPenjualanService.baseUrl; };
            ViewLapPenjualanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewLapPenjualanGrid);
            return ViewLapPenjualanGrid;
        }(Serenity.EntityGrid));
        Default.ViewLapPenjualanGrid = ViewLapPenjualanGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewOrderDialog = /** @class */ (function (_super) {
            __extends(ViewOrderDialog, _super);
            function ViewOrderDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ViewOrderForm(_this.idPrefix);
                return _this;
            }
            ViewOrderDialog.prototype.getFormKey = function () { return Default.ViewOrderForm.formKey; };
            ViewOrderDialog.prototype.getIdProperty = function () { return Default.ViewOrderRow.idProperty; };
            ViewOrderDialog.prototype.getLocalTextPrefix = function () { return Default.ViewOrderRow.localTextPrefix; };
            ViewOrderDialog.prototype.getNameProperty = function () { return Default.ViewOrderRow.nameProperty; };
            ViewOrderDialog.prototype.getService = function () { return Default.ViewOrderService.baseUrl; };
            ViewOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewOrderDialog);
            return ViewOrderDialog;
        }(Serenity.EntityDialog));
        Default.ViewOrderDialog = ViewOrderDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var ViewOrderGrid = /** @class */ (function (_super) {
            __extends(ViewOrderGrid, _super);
            function ViewOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            ViewOrderGrid.prototype.getColumnsKey = function () { return 'Default.ViewOrder'; };
            ViewOrderGrid.prototype.getDialogType = function () { return Default.ViewOrderDialog; };
            ViewOrderGrid.prototype.getIdProperty = function () { return Default.ViewOrderRow.idProperty; };
            ViewOrderGrid.prototype.getLocalTextPrefix = function () { return Default.ViewOrderRow.localTextPrefix; };
            ViewOrderGrid.prototype.getService = function () { return Default.ViewOrderService.baseUrl; };
            ViewOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewOrderGrid);
            return ViewOrderGrid;
        }(Serenity.EntityGrid));
        Default.ViewOrderGrid = ViewOrderGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var WhatsappLeadsDialog = /** @class */ (function (_super) {
            __extends(WhatsappLeadsDialog, _super);
            function WhatsappLeadsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.WhatsappLeadsForm(_this.idPrefix);
                return _this;
            }
            WhatsappLeadsDialog.prototype.getFormKey = function () { return Default.WhatsappLeadsForm.formKey; };
            WhatsappLeadsDialog.prototype.getIdProperty = function () { return Default.WhatsappLeadsRow.idProperty; };
            WhatsappLeadsDialog.prototype.getLocalTextPrefix = function () { return Default.WhatsappLeadsRow.localTextPrefix; };
            WhatsappLeadsDialog.prototype.getNameProperty = function () { return Default.WhatsappLeadsRow.nameProperty; };
            WhatsappLeadsDialog.prototype.getService = function () { return Default.WhatsappLeadsService.baseUrl; };
            WhatsappLeadsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WhatsappLeadsDialog);
            return WhatsappLeadsDialog;
        }(Serenity.EntityDialog));
        Default.WhatsappLeadsDialog = WhatsappLeadsDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var WhatsappLeadsGrid = /** @class */ (function (_super) {
            __extends(WhatsappLeadsGrid, _super);
            function WhatsappLeadsGrid(container) {
                return _super.call(this, container) || this;
            }
            WhatsappLeadsGrid.prototype.getColumnsKey = function () { return 'Default.WhatsappLeads'; };
            WhatsappLeadsGrid.prototype.getDialogType = function () { return Default.WhatsappLeadsDialog; };
            WhatsappLeadsGrid.prototype.getIdProperty = function () { return Default.WhatsappLeadsRow.idProperty; };
            WhatsappLeadsGrid.prototype.getLocalTextPrefix = function () { return Default.WhatsappLeadsRow.localTextPrefix; };
            WhatsappLeadsGrid.prototype.getService = function () { return Default.WhatsappLeadsService.baseUrl; };
            WhatsappLeadsGrid.prototype.getButtons = function () {
                var button = _super.prototype.getButtons.call(this);
                button = [];
                return button;
            };
            WhatsappLeadsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WhatsappLeadsGrid);
            return WhatsappLeadsGrid;
        }(Serenity.EntityGrid));
        Default.WhatsappLeadsGrid = WhatsappLeadsGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var WhatsappLogDialog = /** @class */ (function (_super) {
            __extends(WhatsappLogDialog, _super);
            function WhatsappLogDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.WhatsappLogForm(_this.idPrefix);
                return _this;
            }
            WhatsappLogDialog.prototype.getFormKey = function () { return Default.WhatsappLogForm.formKey; };
            WhatsappLogDialog.prototype.getIdProperty = function () { return Default.WhatsappLogRow.idProperty; };
            WhatsappLogDialog.prototype.getLocalTextPrefix = function () { return Default.WhatsappLogRow.localTextPrefix; };
            WhatsappLogDialog.prototype.getNameProperty = function () { return Default.WhatsappLogRow.nameProperty; };
            WhatsappLogDialog.prototype.getService = function () { return Default.WhatsappLogService.baseUrl; };
            WhatsappLogDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WhatsappLogDialog);
            return WhatsappLogDialog;
        }(Serenity.EntityDialog));
        Default.WhatsappLogDialog = WhatsappLogDialog;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Default;
    (function (Default) {
        var WhatsappLogGrid = /** @class */ (function (_super) {
            __extends(WhatsappLogGrid, _super);
            function WhatsappLogGrid(container) {
                return _super.call(this, container) || this;
            }
            WhatsappLogGrid.prototype.getColumnsKey = function () { return 'Default.WhatsappLog'; };
            WhatsappLogGrid.prototype.getDialogType = function () { return Default.WhatsappLogDialog; };
            WhatsappLogGrid.prototype.getIdProperty = function () { return Default.WhatsappLogRow.idProperty; };
            WhatsappLogGrid.prototype.getLocalTextPrefix = function () { return Default.WhatsappLogRow.localTextPrefix; };
            WhatsappLogGrid.prototype.getService = function () { return Default.WhatsappLogService.baseUrl; };
            WhatsappLogGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WhatsappLogGrid);
            return WhatsappLogGrid;
        }(Serenity.EntityGrid));
        Default.WhatsappLogGrid = WhatsappLogGrid;
    })(Default = HijrahQu.Default || (HijrahQu.Default = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = HijrahQu.Authorization || (HijrahQu.Authorization = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = HijrahQu.Membership || (HijrahQu.Membership = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = HijrahQu.Membership || (HijrahQu.Membership = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = HijrahQu.Membership || (HijrahQu.Membership = {}));
})(HijrahQu || (HijrahQu = {}));
var HijrahQu;
(function (HijrahQu) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = HijrahQu.Membership || (HijrahQu.Membership = {}));
})(HijrahQu || (HijrahQu = {}));
//# sourceMappingURL=HijrahQu.Web.js.map