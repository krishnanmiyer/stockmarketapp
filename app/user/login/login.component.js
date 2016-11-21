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
var LoginComponent = (function () {
    function LoginComponent(fb, route, router, service, loginService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.loginService = loginService;
        this.invalidEmail = false;
        this.login = fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, CustomValidators.emailValidator])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, CustomValidators.passwordValidator])] });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.logout(params['status'] || ''); });
    };
    LoginComponent.prototype.logout = function (data) {
        if (data == 'out') {
            this.loginService.changeLoginStatus(false);
            this.router.navigate(['/']);
        }
    };
    LoginComponent.prototype.onBlur = function (event) {
        if (event.target.value != '') {
            this.login.patchValue({ name: event.target.value.trim() });
            event.target.value = event.target.value.trim();
        }
    };
    LoginComponent.prototype.onSubmit = function (data) {
        var _this = this;
        var user = new stockmarket_model_1.Userlogin();
        user.username = data.email;
        user.password = data.password;
        this.service.login(user).subscribe(function (r) { return _this.setUser(r, user.username); });
    };
    LoginComponent.prototype.setUser = function (data, email) {
        if (data == null || data == undefined || data == "") {
            this.invalidEmail = true;
        }
        else {
            this.invalidEmail = false;
            this.loginService.changeLoginStatus(true, email);
            this.router.navigate(['/home']);
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'user-login',
            templateUrl: 'app/user/login/login.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, stockmarket_service_1.StockmarketService, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.emailValidator = function (control) {
        var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return control.dirty && control.value != "" && !control.value.match(emailRegex) ? { "invalid": true } : null;
    };
    CustomValidators.passwordValidator = function (control) {
        return control.dirty && control.value != "" && control.value.trim().length < 1 ? { "invalid": true } : null;
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=login.component.js.map