"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var stockmarket_service_1 = require('../../shared/stockmarket.service');
var stockmarket_model_1 = require('../../shared/stockmarket.model');
var login_service_1 = require('../../shared/login.service');
var RegistrationComponent = (function () {
    function RegistrationComponent(fb, router, service, loginService) {
        this.router = router;
        this.service = service;
        this.loginService = loginService;
        this.invalidEmail = false;
        this.cookieKey = "stockmarketuser";
        this.registration = fb.group({
            'name': ['', forms_1.Validators.compose([forms_1.Validators.required, CustomValidators.stringValidator])],
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, CustomValidators.emailValidator])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, CustomValidators.passwordValidator])],
            'confirmpassword': ['', forms_1.Validators.compose([forms_1.Validators.required])],
            'gender': 'Male'
        }, { validator: CustomValidators.matchingPassword('password', 'confirmpassword') });
    }
    RegistrationComponent.prototype.onBlur = function (event) {
        if (event.target.value != '') {
            this.registration.patchValue({ name: event.target.value.trim() });
            event.target.value = event.target.value.trim();
        }
    };
    RegistrationComponent.prototype.onSubmit = function (data) {
        var _this = this;
        var user = new stockmarket_model_1.UserRegistration();
        user.userName = data.name;
        user.emailAddress = data.email;
        user.gender = data.gender == "Male" ? 0 : 1;
        user.password = data.password;
        this.service.addUser(user).subscribe(function (r) { return _this.setUser(r, user.emailAddress); });
    };
    RegistrationComponent.prototype.setUser = function (data, username) {
        if (data == null || data == undefined || data == "") {
            this.invalidEmail = true;
        }
        else {
            this.invalidEmail = false;
            this.loginService.changeLoginStatus(true, username);
            this.router.navigate(['/']);
        }
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'user-registration',
            templateUrl: 'app/user/registration/registration.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, stockmarket_service_1.StockmarketService, login_service_1.LoginService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.stringValidator = function (control) {
        return control.dirty && control.value != "" && control.value.trim() == "" ? { "invalid": true } : null;
    };
    CustomValidators.emailValidator = function (control) {
        var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return control.dirty && control.value != "" && !control.value.match(emailRegex) ? { "invalid": true } : null;
    };
    CustomValidators.passwordValidator = function (control) {
        return control.dirty && control.value != "" && control.value.trim().length < 8 ? { "invalid": true } : null;
    };
    CustomValidators.matchingPassword = function (password, confirmpassword) {
        return function (group) {
            var pass = group.controls[password].value;
            var cpass = group.controls[confirmpassword].value;
            if (pass == '' && cpass == '')
                return null;
            if (pass != cpass) {
                return {
                    invalid: true
                };
            }
        };
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=registration.component.js.map