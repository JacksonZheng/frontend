webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.9@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset 'utf-8';\n.layout {\n  height: 100%;\n}\n.layout .logo {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.layout .logo img {\n  width: 100%;\n}\n.layout nz-content {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.layout nz-content .func {\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <nz-header>\n    <div class=\"header\" nz-row [nzType]=\"'flex'\" [nzJustify]=\"'space-between'\" [nzAlign]=\"'middle'\">\n      <div class=\"logo\" nz-col [nzSpan]=\"3\">\n        <img src=\"../assets/logo.png\" alt=\"\">\n      </div>\n      <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'horizontal'\" style=\"line-height: 64px;\">\n        <li nz-menu-item>首页</li>\n        <li nz-menu-item style=\"background-color: #3ab0e2;font-size: 15px;\">合作登录</li>\n        <li nz-menu-item>联系我们</li>\n      </ul>\n    </div>\n  </nz-header>\n  <nz-content style=\"padding:50px;background-color: white;\">\n    <div class=\"func\" nz-row [nzType]=\"'flex'\" [nzJustify]=\"'space-between'\">\n      <button nz-button [nzType]=\"'primary'\" (click)=\"addUser()\">\n        <i class=\"anticon anticon-plus\"></i>\n        <span>添加</span>\n      </button>\n      <nz-modal \n      [nzVisible]=\"isVisible\" \n      [nzTitle]=\"'新增用户'\" \n      [nzContent]=\"modalContent\" \n      (nzOnCancel)=\"handleCancel($event)\" \n      (nzOnOk)=\"_submitForm($event)\">\n        <ng-template #modalContent>\n          <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"_submitForm()\">\n            <div nz-form-item nz-row>\n              <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                <label for=\"username\" nz-form-item-required>用户名</label>\n              </div>\n              <div nz-form-control nz-col [nzSm]=\"20\" [nzXs]=\"24\">\n                <nz-input formControlName=\"username\" [nzPlaceHolder]=\"'用户名'\" [nzSize]=\"'large'\">\n                </nz-input>\n              </div>\n            </div>\n            <div nz-form-item nz-row>\n              <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                <label for=\"company\" nz-form-item-required>公司名</label>\n              </div>\n              <div nz-form-control nz-col [nzSm]=\"20\" [nzXs]=\"24\">\n                <nz-input formControlName=\"company\" [nzPlaceHolder]=\"'公司名'\" [nzSize]=\"'large'\">\n                </nz-input>\n              </div>\n            </div>\n            <div nz-form-item nz-row>\n              <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                <label for=\"realname\" nz-form-item-required>昵称</label>\n              </div>\n              <div nz-form-control nz-col [nzSm]=\"20\" [nzXs]=\"24\">\n                <nz-input formControlName=\"realname\" [nzPlaceHolder]=\"'昵称'\" [nzSize]=\"'large'\">\n                </nz-input>\n              </div>\n            </div>\n            <div nz-form-item nz-row>\n              <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                <label for=\"mail\" nz-form-item-required>邮箱</label>\n              </div>\n              <div nz-form-control nz-col [nzSm]=\"20\" [nzXs]=\"24\">\n                <nz-input formControlName=\"mail\" [nzPlaceHolder]=\"'邮箱'\" [nzSize]=\"'large'\">\n                </nz-input>\n              </div>\n            </div>\n            <div nz-form-item nz-row>\n              <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                <label for=\"privilege\" nz-form-item-required>权限</label>\n              </div>\n              <div nz-form-control nz-col [nzSm]=\"20\" [nzXs]=\"24\">\n                <nz-select formControlName=\"privilege\" [nzSize]=\"size\" [nzPlaceHolder]=\"'请选择权限'\">\n                  <nz-option *ngFor=\"let privilege of privileges\" \n                  [nzLabel]=\"privilege.label\" \n                  [nzValue]=\"privilege.value\">\n                  </nz-option>\n                </nz-select>\n              </div>\n            </div>\n            <div nz-form-item nz-row>\n              <div nz-form-label nz-col [nzSm]=\"4\" [nzXs]=\"24\">\n                <label for=\"privilege\" nz-form-item-required>权限</label>\n              </div>\n              <div nz-form-control nz-col [nzSm]=\"20\" [nzXs]=\"24\">\n                <nz-radio-group formControlName=\"state\">\n                  <label *ngFor=\"let state of states\" nz-radio [nzValue]=\"state.value\">\n                    <span>{{state.label}}</span>\n                  </label>\n                </nz-radio-group>\n              </div>\n            </div>\n          </form>\n        </ng-template>\n      </nz-modal>\n      <div class=\"search\" nz-col [nzSpan]=\"4\">\n        <nz-input \n        [nzType]=\"'search'\" \n        [nzPlaceHolder]=\"'请输入要查找的用户'\" \n        [(ngModel)]=\"_value\" \n        (nzOnSearch)=\"onSearch($event)\"></nz-input>\n      </div>\n    </div>\n    <div class=\"table\">\n      <nz-table #nzTable [nzAjaxData]=\"data\" [nzIsPagination]=\"false\">\n        <thead nz-thead>\n          <tr>\n            <th nz-th>\n              <span>用户名</span>\n            </th>\n            <th nz-th>\n              <span>昵称</span>\n            </th>\n            <th nz-th>\n              <span>Email</span>\n            </th>\n            <th nz-th>\n              <span>公司</span>\n            </th>\n            <th nz-th>\n              <span>权限</span>\n            </th>\n            <th nz-th>\n              <span>状态</span>\n            </th>\n            <th nz-th>\n              <span>动作</span>\n            </th>\n          </tr>\n        </thead>\n        <tbody nz-tbody>\n          <tr nz-tbody-tr *ngFor=\"let data of nzTable.data\">\n            <td nz-td>{{data.realname}}</td>\n            <td nz-td>{{data.username}}</td>\n            <td nz-td>{{data.mail}}</td>\n            <td nz-td>{{data.company}}</td>\n            <td nz-td>\n              <nz-tag [nzColor]=\"'#87d068'\">\n                {{data.privilege === 1? '系统设置权限': ' 帐号管理权限'}}\n              </nz-tag>\n            </td>\n            <td nz-td>\n              <nz-tag [nzColor]=\"'#2db7f5'\">\n                {{data.state === 1? '正常': '异常'}}\n              </nz-tag>\n            </td>\n            <td nz-td>\n              <span>\n                <button nz-button [nzType]=\"'primary'\" [nzShape]=\"'circle'\" (click)=\"editUser(data.id)\">\n                  <i class=\"anticon anticon-edit\"></i>\n                  <!-- <span>编辑</span> -->\n                </button>\n                <span nz-table-divider></span>\n                <button nz-button [nzType]=\"'danger'\" [nzShape]=\"'circle'\" (click)=\"removeUser(data.id)\">\n                  <i class=\"anticon anticon-delete\"></i>\n                  <!-- <span>删除</span> -->\n                </button>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n  </nz-content>\n  <nz-footer style=\"text-align: center;\">Neufact ©2018 Design By Roxas</nz-footer>\n</nz-layout>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.1@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user_model__ = __webpack_require__("../../../../../src/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../../_@angular_forms@5.2.1@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__ = __webpack_require__("../../../../_ng-zorro-antd@0.6.12@ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../../_@angular_common@5.2.1@@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../_rxjs@5.5.6@rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(http, fb, _message, confirmServ) {
        this.http = http;
        this.fb = fb;
        this._message = _message;
        this.confirmServ = confirmServ;
        this.title = 'app';
        this.isVisible = false;
        this.editStatus = false;
        this.privileges = [{
                value: 1,
                label: '系统设置权限'
            }, {
                value: 2,
                label: '帐号管理权限'
            }, {
                value: 4,
                label: '内容审核权限'
            }, {
                value: 8,
                label: '设备管理权限'
            }];
        this.states = [{
                value: 0,
                label: '正常'
            }, {
                value: 1,
                label: '禁用'
            }, {
                value: 2,
                label: '已删除'
            }];
        this.data = [
            {
                id: 1,
                username: 'John Brown',
                company: '宇造科技有限公司',
                realname: 'roxas123',
                mail: 'roxas8210@163.com',
                dept: '技术部',
                mobile: 13800138000,
                extra: 'x',
                privilege: 1,
                state: 1
            }, {
                id: 2,
                username: 'Jim Green',
                company: '宇造科技有限公司',
                realname: 'roxas325',
                mail: 'roxas8210@163.com',
                dept: '技术部',
                mobile: 13800138000,
                extra: 'x',
                privilege: 1,
                state: 1
            }, {
                id: 3,
                username: 'Joe Black',
                company: '宇造科技有限公司',
                realname: 'roxas87',
                mail: 'roxas8210@163.com',
                dept: '技术部',
                mobile: 13800138000,
                extra: 'x',
                privilege: 1,
                state: 1
            }
        ];
    }
    AppComponent.prototype.addUser = function () {
        console.log('新增用户');
        this.isVisible = true;
    };
    AppComponent.prototype.handleCancel = function (event) {
        console.log('取消', event);
        this.isVisible = false;
    };
    AppComponent.prototype.editUser = function (id) {
        var editUser = this.data.filter(function (val) { return val.id === id; });
        console.log(editUser);
        console.log(this.validateForm.value);
        this.validateForm.setValue(editUser[0]);
        console.log(this.validateForm.value);
        this.editStatus = true;
        this.isVisible = true;
    };
    AppComponent.prototype.removeUser = function (id) {
        var that = this;
        this.confirmServ.confirm({
            title: '是否删除此用户？',
            content: '点击删除后将无法恢复，请再三确认。',
            onOk: function () {
                var newData = that.data.filter(function (val) { return val.id !== id; });
                that.data = newData;
                that._message.create('success', '成功删除一位用户');
            }
        });
    };
    AppComponent.prototype._submitForm = function () {
        var _this = this;
        if (this.editStatus === true) {
            var id_1 = this.validateForm.get('id').value;
            this.data.map(function (val) {
                if (val.id === id_1) {
                    val.company = _this.validateForm.get('company').value;
                    val.dept = _this.validateForm.get('dept').value;
                    val.extra = _this.validateForm.get('extra').value;
                    val.mail = _this.validateForm.get('mail').value;
                    val.mobile = _this.validateForm.get('mobile').value;
                    val.privilege = _this.validateForm.get('privilege').value;
                    val.realname = _this.validateForm.get('realname').value;
                    val.state = _this.validateForm.get('state').value;
                    val.username = _this.validateForm.get('username').value;
                }
            });
            this.isVisible = false;
            this.editStatus = false;
            this.validateForm.setValue(new __WEBPACK_IMPORTED_MODULE_1__model_user_model__["a" /* User */]());
            this._message.create('success', '成功修改一位用户信息');
        }
        else {
            this.data.push(this.validateForm.value);
            console.log(this.validateForm.value);
            this.isVisible = false;
            this._message.create('success', '成功添加一位用户');
        }
    };
    AppComponent.prototype.onSearch = function () {
        console.log('搜索');
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userUrl = 'https://www.neufact.com/get_userlist';
        this.http.get(userUrl).map(function (v) { return v.userlist; }).subscribe(function (val) {
            console.log('所有用户', val);
            _this.data = val;
        });
        this.validateForm = this.fb.group(new __WEBPACK_IMPORTED_MODULE_1__model_user_model__["a" /* User */]());
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__["b" /* NzMessageService */],
            __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__["c" /* NzModalService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../../_@angular_platform-browser@5.2.1@@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../../_@angular_platform-browser@5.2.1@@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.1@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../../_@angular_forms@5.2.1@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../../_@angular_common@5.2.1@@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_zorro_antd__ = __webpack_require__("../../../../_ng-zorro-antd@0.6.12@ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng_zorro_antd__["a" /* NgZorroAntdModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.1@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../../_@angular_platform-browser-dynamic@5.2.1@@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/model/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.id = 0;
        this.username = '';
        this.company = '';
        this.realname = '';
        this.mail = '';
        this.dept = '';
        this.mobile = 0;
        this.extra = '';
        this.privilege = 0;
        this.state = 0;
    }
    return User;
}());



/***/ }),

/***/ "../../../../_moment@2.20.1@moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../_moment@2.20.1@moment/locale/af.js",
	"./af.js": "../../../../_moment@2.20.1@moment/locale/af.js",
	"./ar": "../../../../_moment@2.20.1@moment/locale/ar.js",
	"./ar-dz": "../../../../_moment@2.20.1@moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../_moment@2.20.1@moment/locale/ar-dz.js",
	"./ar-kw": "../../../../_moment@2.20.1@moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../_moment@2.20.1@moment/locale/ar-kw.js",
	"./ar-ly": "../../../../_moment@2.20.1@moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../_moment@2.20.1@moment/locale/ar-ly.js",
	"./ar-ma": "../../../../_moment@2.20.1@moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../_moment@2.20.1@moment/locale/ar-ma.js",
	"./ar-sa": "../../../../_moment@2.20.1@moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../_moment@2.20.1@moment/locale/ar-sa.js",
	"./ar-tn": "../../../../_moment@2.20.1@moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../_moment@2.20.1@moment/locale/ar-tn.js",
	"./ar.js": "../../../../_moment@2.20.1@moment/locale/ar.js",
	"./az": "../../../../_moment@2.20.1@moment/locale/az.js",
	"./az.js": "../../../../_moment@2.20.1@moment/locale/az.js",
	"./be": "../../../../_moment@2.20.1@moment/locale/be.js",
	"./be.js": "../../../../_moment@2.20.1@moment/locale/be.js",
	"./bg": "../../../../_moment@2.20.1@moment/locale/bg.js",
	"./bg.js": "../../../../_moment@2.20.1@moment/locale/bg.js",
	"./bm": "../../../../_moment@2.20.1@moment/locale/bm.js",
	"./bm.js": "../../../../_moment@2.20.1@moment/locale/bm.js",
	"./bn": "../../../../_moment@2.20.1@moment/locale/bn.js",
	"./bn.js": "../../../../_moment@2.20.1@moment/locale/bn.js",
	"./bo": "../../../../_moment@2.20.1@moment/locale/bo.js",
	"./bo.js": "../../../../_moment@2.20.1@moment/locale/bo.js",
	"./br": "../../../../_moment@2.20.1@moment/locale/br.js",
	"./br.js": "../../../../_moment@2.20.1@moment/locale/br.js",
	"./bs": "../../../../_moment@2.20.1@moment/locale/bs.js",
	"./bs.js": "../../../../_moment@2.20.1@moment/locale/bs.js",
	"./ca": "../../../../_moment@2.20.1@moment/locale/ca.js",
	"./ca.js": "../../../../_moment@2.20.1@moment/locale/ca.js",
	"./cs": "../../../../_moment@2.20.1@moment/locale/cs.js",
	"./cs.js": "../../../../_moment@2.20.1@moment/locale/cs.js",
	"./cv": "../../../../_moment@2.20.1@moment/locale/cv.js",
	"./cv.js": "../../../../_moment@2.20.1@moment/locale/cv.js",
	"./cy": "../../../../_moment@2.20.1@moment/locale/cy.js",
	"./cy.js": "../../../../_moment@2.20.1@moment/locale/cy.js",
	"./da": "../../../../_moment@2.20.1@moment/locale/da.js",
	"./da.js": "../../../../_moment@2.20.1@moment/locale/da.js",
	"./de": "../../../../_moment@2.20.1@moment/locale/de.js",
	"./de-at": "../../../../_moment@2.20.1@moment/locale/de-at.js",
	"./de-at.js": "../../../../_moment@2.20.1@moment/locale/de-at.js",
	"./de-ch": "../../../../_moment@2.20.1@moment/locale/de-ch.js",
	"./de-ch.js": "../../../../_moment@2.20.1@moment/locale/de-ch.js",
	"./de.js": "../../../../_moment@2.20.1@moment/locale/de.js",
	"./dv": "../../../../_moment@2.20.1@moment/locale/dv.js",
	"./dv.js": "../../../../_moment@2.20.1@moment/locale/dv.js",
	"./el": "../../../../_moment@2.20.1@moment/locale/el.js",
	"./el.js": "../../../../_moment@2.20.1@moment/locale/el.js",
	"./en-au": "../../../../_moment@2.20.1@moment/locale/en-au.js",
	"./en-au.js": "../../../../_moment@2.20.1@moment/locale/en-au.js",
	"./en-ca": "../../../../_moment@2.20.1@moment/locale/en-ca.js",
	"./en-ca.js": "../../../../_moment@2.20.1@moment/locale/en-ca.js",
	"./en-gb": "../../../../_moment@2.20.1@moment/locale/en-gb.js",
	"./en-gb.js": "../../../../_moment@2.20.1@moment/locale/en-gb.js",
	"./en-ie": "../../../../_moment@2.20.1@moment/locale/en-ie.js",
	"./en-ie.js": "../../../../_moment@2.20.1@moment/locale/en-ie.js",
	"./en-nz": "../../../../_moment@2.20.1@moment/locale/en-nz.js",
	"./en-nz.js": "../../../../_moment@2.20.1@moment/locale/en-nz.js",
	"./eo": "../../../../_moment@2.20.1@moment/locale/eo.js",
	"./eo.js": "../../../../_moment@2.20.1@moment/locale/eo.js",
	"./es": "../../../../_moment@2.20.1@moment/locale/es.js",
	"./es-do": "../../../../_moment@2.20.1@moment/locale/es-do.js",
	"./es-do.js": "../../../../_moment@2.20.1@moment/locale/es-do.js",
	"./es-us": "../../../../_moment@2.20.1@moment/locale/es-us.js",
	"./es-us.js": "../../../../_moment@2.20.1@moment/locale/es-us.js",
	"./es.js": "../../../../_moment@2.20.1@moment/locale/es.js",
	"./et": "../../../../_moment@2.20.1@moment/locale/et.js",
	"./et.js": "../../../../_moment@2.20.1@moment/locale/et.js",
	"./eu": "../../../../_moment@2.20.1@moment/locale/eu.js",
	"./eu.js": "../../../../_moment@2.20.1@moment/locale/eu.js",
	"./fa": "../../../../_moment@2.20.1@moment/locale/fa.js",
	"./fa.js": "../../../../_moment@2.20.1@moment/locale/fa.js",
	"./fi": "../../../../_moment@2.20.1@moment/locale/fi.js",
	"./fi.js": "../../../../_moment@2.20.1@moment/locale/fi.js",
	"./fo": "../../../../_moment@2.20.1@moment/locale/fo.js",
	"./fo.js": "../../../../_moment@2.20.1@moment/locale/fo.js",
	"./fr": "../../../../_moment@2.20.1@moment/locale/fr.js",
	"./fr-ca": "../../../../_moment@2.20.1@moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../_moment@2.20.1@moment/locale/fr-ca.js",
	"./fr-ch": "../../../../_moment@2.20.1@moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../_moment@2.20.1@moment/locale/fr-ch.js",
	"./fr.js": "../../../../_moment@2.20.1@moment/locale/fr.js",
	"./fy": "../../../../_moment@2.20.1@moment/locale/fy.js",
	"./fy.js": "../../../../_moment@2.20.1@moment/locale/fy.js",
	"./gd": "../../../../_moment@2.20.1@moment/locale/gd.js",
	"./gd.js": "../../../../_moment@2.20.1@moment/locale/gd.js",
	"./gl": "../../../../_moment@2.20.1@moment/locale/gl.js",
	"./gl.js": "../../../../_moment@2.20.1@moment/locale/gl.js",
	"./gom-latn": "../../../../_moment@2.20.1@moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../_moment@2.20.1@moment/locale/gom-latn.js",
	"./gu": "../../../../_moment@2.20.1@moment/locale/gu.js",
	"./gu.js": "../../../../_moment@2.20.1@moment/locale/gu.js",
	"./he": "../../../../_moment@2.20.1@moment/locale/he.js",
	"./he.js": "../../../../_moment@2.20.1@moment/locale/he.js",
	"./hi": "../../../../_moment@2.20.1@moment/locale/hi.js",
	"./hi.js": "../../../../_moment@2.20.1@moment/locale/hi.js",
	"./hr": "../../../../_moment@2.20.1@moment/locale/hr.js",
	"./hr.js": "../../../../_moment@2.20.1@moment/locale/hr.js",
	"./hu": "../../../../_moment@2.20.1@moment/locale/hu.js",
	"./hu.js": "../../../../_moment@2.20.1@moment/locale/hu.js",
	"./hy-am": "../../../../_moment@2.20.1@moment/locale/hy-am.js",
	"./hy-am.js": "../../../../_moment@2.20.1@moment/locale/hy-am.js",
	"./id": "../../../../_moment@2.20.1@moment/locale/id.js",
	"./id.js": "../../../../_moment@2.20.1@moment/locale/id.js",
	"./is": "../../../../_moment@2.20.1@moment/locale/is.js",
	"./is.js": "../../../../_moment@2.20.1@moment/locale/is.js",
	"./it": "../../../../_moment@2.20.1@moment/locale/it.js",
	"./it.js": "../../../../_moment@2.20.1@moment/locale/it.js",
	"./ja": "../../../../_moment@2.20.1@moment/locale/ja.js",
	"./ja.js": "../../../../_moment@2.20.1@moment/locale/ja.js",
	"./jv": "../../../../_moment@2.20.1@moment/locale/jv.js",
	"./jv.js": "../../../../_moment@2.20.1@moment/locale/jv.js",
	"./ka": "../../../../_moment@2.20.1@moment/locale/ka.js",
	"./ka.js": "../../../../_moment@2.20.1@moment/locale/ka.js",
	"./kk": "../../../../_moment@2.20.1@moment/locale/kk.js",
	"./kk.js": "../../../../_moment@2.20.1@moment/locale/kk.js",
	"./km": "../../../../_moment@2.20.1@moment/locale/km.js",
	"./km.js": "../../../../_moment@2.20.1@moment/locale/km.js",
	"./kn": "../../../../_moment@2.20.1@moment/locale/kn.js",
	"./kn.js": "../../../../_moment@2.20.1@moment/locale/kn.js",
	"./ko": "../../../../_moment@2.20.1@moment/locale/ko.js",
	"./ko.js": "../../../../_moment@2.20.1@moment/locale/ko.js",
	"./ky": "../../../../_moment@2.20.1@moment/locale/ky.js",
	"./ky.js": "../../../../_moment@2.20.1@moment/locale/ky.js",
	"./lb": "../../../../_moment@2.20.1@moment/locale/lb.js",
	"./lb.js": "../../../../_moment@2.20.1@moment/locale/lb.js",
	"./lo": "../../../../_moment@2.20.1@moment/locale/lo.js",
	"./lo.js": "../../../../_moment@2.20.1@moment/locale/lo.js",
	"./lt": "../../../../_moment@2.20.1@moment/locale/lt.js",
	"./lt.js": "../../../../_moment@2.20.1@moment/locale/lt.js",
	"./lv": "../../../../_moment@2.20.1@moment/locale/lv.js",
	"./lv.js": "../../../../_moment@2.20.1@moment/locale/lv.js",
	"./me": "../../../../_moment@2.20.1@moment/locale/me.js",
	"./me.js": "../../../../_moment@2.20.1@moment/locale/me.js",
	"./mi": "../../../../_moment@2.20.1@moment/locale/mi.js",
	"./mi.js": "../../../../_moment@2.20.1@moment/locale/mi.js",
	"./mk": "../../../../_moment@2.20.1@moment/locale/mk.js",
	"./mk.js": "../../../../_moment@2.20.1@moment/locale/mk.js",
	"./ml": "../../../../_moment@2.20.1@moment/locale/ml.js",
	"./ml.js": "../../../../_moment@2.20.1@moment/locale/ml.js",
	"./mr": "../../../../_moment@2.20.1@moment/locale/mr.js",
	"./mr.js": "../../../../_moment@2.20.1@moment/locale/mr.js",
	"./ms": "../../../../_moment@2.20.1@moment/locale/ms.js",
	"./ms-my": "../../../../_moment@2.20.1@moment/locale/ms-my.js",
	"./ms-my.js": "../../../../_moment@2.20.1@moment/locale/ms-my.js",
	"./ms.js": "../../../../_moment@2.20.1@moment/locale/ms.js",
	"./mt": "../../../../_moment@2.20.1@moment/locale/mt.js",
	"./mt.js": "../../../../_moment@2.20.1@moment/locale/mt.js",
	"./my": "../../../../_moment@2.20.1@moment/locale/my.js",
	"./my.js": "../../../../_moment@2.20.1@moment/locale/my.js",
	"./nb": "../../../../_moment@2.20.1@moment/locale/nb.js",
	"./nb.js": "../../../../_moment@2.20.1@moment/locale/nb.js",
	"./ne": "../../../../_moment@2.20.1@moment/locale/ne.js",
	"./ne.js": "../../../../_moment@2.20.1@moment/locale/ne.js",
	"./nl": "../../../../_moment@2.20.1@moment/locale/nl.js",
	"./nl-be": "../../../../_moment@2.20.1@moment/locale/nl-be.js",
	"./nl-be.js": "../../../../_moment@2.20.1@moment/locale/nl-be.js",
	"./nl.js": "../../../../_moment@2.20.1@moment/locale/nl.js",
	"./nn": "../../../../_moment@2.20.1@moment/locale/nn.js",
	"./nn.js": "../../../../_moment@2.20.1@moment/locale/nn.js",
	"./pa-in": "../../../../_moment@2.20.1@moment/locale/pa-in.js",
	"./pa-in.js": "../../../../_moment@2.20.1@moment/locale/pa-in.js",
	"./pl": "../../../../_moment@2.20.1@moment/locale/pl.js",
	"./pl.js": "../../../../_moment@2.20.1@moment/locale/pl.js",
	"./pt": "../../../../_moment@2.20.1@moment/locale/pt.js",
	"./pt-br": "../../../../_moment@2.20.1@moment/locale/pt-br.js",
	"./pt-br.js": "../../../../_moment@2.20.1@moment/locale/pt-br.js",
	"./pt.js": "../../../../_moment@2.20.1@moment/locale/pt.js",
	"./ro": "../../../../_moment@2.20.1@moment/locale/ro.js",
	"./ro.js": "../../../../_moment@2.20.1@moment/locale/ro.js",
	"./ru": "../../../../_moment@2.20.1@moment/locale/ru.js",
	"./ru.js": "../../../../_moment@2.20.1@moment/locale/ru.js",
	"./sd": "../../../../_moment@2.20.1@moment/locale/sd.js",
	"./sd.js": "../../../../_moment@2.20.1@moment/locale/sd.js",
	"./se": "../../../../_moment@2.20.1@moment/locale/se.js",
	"./se.js": "../../../../_moment@2.20.1@moment/locale/se.js",
	"./si": "../../../../_moment@2.20.1@moment/locale/si.js",
	"./si.js": "../../../../_moment@2.20.1@moment/locale/si.js",
	"./sk": "../../../../_moment@2.20.1@moment/locale/sk.js",
	"./sk.js": "../../../../_moment@2.20.1@moment/locale/sk.js",
	"./sl": "../../../../_moment@2.20.1@moment/locale/sl.js",
	"./sl.js": "../../../../_moment@2.20.1@moment/locale/sl.js",
	"./sq": "../../../../_moment@2.20.1@moment/locale/sq.js",
	"./sq.js": "../../../../_moment@2.20.1@moment/locale/sq.js",
	"./sr": "../../../../_moment@2.20.1@moment/locale/sr.js",
	"./sr-cyrl": "../../../../_moment@2.20.1@moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../_moment@2.20.1@moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../_moment@2.20.1@moment/locale/sr.js",
	"./ss": "../../../../_moment@2.20.1@moment/locale/ss.js",
	"./ss.js": "../../../../_moment@2.20.1@moment/locale/ss.js",
	"./sv": "../../../../_moment@2.20.1@moment/locale/sv.js",
	"./sv.js": "../../../../_moment@2.20.1@moment/locale/sv.js",
	"./sw": "../../../../_moment@2.20.1@moment/locale/sw.js",
	"./sw.js": "../../../../_moment@2.20.1@moment/locale/sw.js",
	"./ta": "../../../../_moment@2.20.1@moment/locale/ta.js",
	"./ta.js": "../../../../_moment@2.20.1@moment/locale/ta.js",
	"./te": "../../../../_moment@2.20.1@moment/locale/te.js",
	"./te.js": "../../../../_moment@2.20.1@moment/locale/te.js",
	"./tet": "../../../../_moment@2.20.1@moment/locale/tet.js",
	"./tet.js": "../../../../_moment@2.20.1@moment/locale/tet.js",
	"./th": "../../../../_moment@2.20.1@moment/locale/th.js",
	"./th.js": "../../../../_moment@2.20.1@moment/locale/th.js",
	"./tl-ph": "../../../../_moment@2.20.1@moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../_moment@2.20.1@moment/locale/tl-ph.js",
	"./tlh": "../../../../_moment@2.20.1@moment/locale/tlh.js",
	"./tlh.js": "../../../../_moment@2.20.1@moment/locale/tlh.js",
	"./tr": "../../../../_moment@2.20.1@moment/locale/tr.js",
	"./tr.js": "../../../../_moment@2.20.1@moment/locale/tr.js",
	"./tzl": "../../../../_moment@2.20.1@moment/locale/tzl.js",
	"./tzl.js": "../../../../_moment@2.20.1@moment/locale/tzl.js",
	"./tzm": "../../../../_moment@2.20.1@moment/locale/tzm.js",
	"./tzm-latn": "../../../../_moment@2.20.1@moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../_moment@2.20.1@moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../_moment@2.20.1@moment/locale/tzm.js",
	"./uk": "../../../../_moment@2.20.1@moment/locale/uk.js",
	"./uk.js": "../../../../_moment@2.20.1@moment/locale/uk.js",
	"./ur": "../../../../_moment@2.20.1@moment/locale/ur.js",
	"./ur.js": "../../../../_moment@2.20.1@moment/locale/ur.js",
	"./uz": "../../../../_moment@2.20.1@moment/locale/uz.js",
	"./uz-latn": "../../../../_moment@2.20.1@moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../_moment@2.20.1@moment/locale/uz-latn.js",
	"./uz.js": "../../../../_moment@2.20.1@moment/locale/uz.js",
	"./vi": "../../../../_moment@2.20.1@moment/locale/vi.js",
	"./vi.js": "../../../../_moment@2.20.1@moment/locale/vi.js",
	"./x-pseudo": "../../../../_moment@2.20.1@moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../_moment@2.20.1@moment/locale/x-pseudo.js",
	"./yo": "../../../../_moment@2.20.1@moment/locale/yo.js",
	"./yo.js": "../../../../_moment@2.20.1@moment/locale/yo.js",
	"./zh-cn": "../../../../_moment@2.20.1@moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../_moment@2.20.1@moment/locale/zh-cn.js",
	"./zh-hk": "../../../../_moment@2.20.1@moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../_moment@2.20.1@moment/locale/zh-hk.js",
	"./zh-tw": "../../../../_moment@2.20.1@moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../_moment@2.20.1@moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../_moment@2.20.1@moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map