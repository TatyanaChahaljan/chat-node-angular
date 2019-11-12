(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <app-chat-component></app-chat-component>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Chat box </h2>\n\n<div fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">\n    <form [formGroup]=\"messageForm\">\n        <div fxLayout=\"row\" fxLayoutGap=\"40px\" fxLayoutAlign=\"start center\">\n            <mat-form-field>\n                <input placeholder=\"Type message\"\n                       id=\"message\"\n                       formControlName=\"message\"\n                       name=\"message\"\n                       matInput\n                       value=\"\"\n                       type=\"text\">\n            </mat-form-field>\n            <button type=\"submit\"\n                    [disabled]=\"messageForm.invalid\"\n                    (click)=\"sendMessage()\"\n                    mat-raised-button>Send message\n            </button>\n        </div>\n    </form>\n</div>\n\n<div fxLayout=\"row\" fxLayoutGap=\"40px\">\n    <mat-list role=\"list\" *ngIf=\"connects\">\n        <mat-list-item *ngFor=\"let connect of connects\">\n            <ng-container *ngIf=\"connect.type === 'new-user'; else elseBlock\">\n                <i> {{connect.name}}\n                    <small>join the chat..</small>\n                </i>\n            </ng-container>\n            <ng-template #elseBlock>\n                <i style=\"color: red\"> {{connect.name}}\n                    <small>left the chat..</small>\n                </i>\n            </ng-template>\n        </mat-list-item>\n    </mat-list>\n    <mat-list role=\"list\" *ngIf=\"messages\">\n        <mat-list-item *ngFor=\"let message of messages\">\n            <small>Time: {{message.time}}, user: {{message.user}}:</small> &nbsp;\n            <span [ngStyle]=\"{'color': message.color}\"> {{message.message}} </span>\n        </mat-list-item>\n    </mat-list>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog/prompt-dialog.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog/prompt-dialog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"promptForm\" (ngSubmit)=\"submit()\">\n    <mat-dialog-content>\n        <mat-form-field>\n            <input placeholder=\"What's your name?\"\n                   type=\"text\"\n                   id=\"name\"\n                   formControlName=\"name\"\n                   matInput\n                   value=\"\">\n        </mat-form-field>\n    </mat-dialog-content>\n    <mat-dialog-actions align=\"center\">\n        <button mat-raised-button (click)=\"onNoClick()\">No Thanks</button>\n        <button type=\"submit\" [disabled]=\"promptForm.invalid\" mat-raised-button [mat-dialog-close]=\"name\"\n                cdkFocusInitial>Ok\n        </button>\n    </mat-dialog-actions>\n</form>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dialog_prompt_dialog_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog/prompt-dialog.module */ "./src/app/dialog/prompt-dialog.module.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _dialog_prompt_dialog_module__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogModule"],
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__["ChatModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _dialog_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog/prompt-dialog.component */ "./src/app/dialog/prompt-dialog.component.ts");






var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, dialog, fb) {
        this.chatService = chatService;
        this.dialog = dialog;
        this.fb = fb;
        this.messages = [];
        this.connects = [];
        this.subscriptions = [];
        this.color = "#" + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        this.messageForm = this.fb.group({
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ChatComponent.prototype.sendMessage = function () {
        this.chatService.sendMessage({
            message: this.messageForm.get('message').value,
            user: this.userName,
            color: this.color
        });
        this.messageForm.reset();
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showModal();
        this.subscriptions.push(this.chatService.userDisconnect().subscribe(function (socketData) {
            if (!socketData) {
                return;
            }
            var type = socketData.type, data = socketData.data;
            _this.connects.push({ type: type, name: "" + data.name });
        }), this.chatService.getMessages().subscribe(function (socketData) {
            var data = socketData.data;
            _this.messages.push(data);
        }), this.chatService.getUser().subscribe(function (socketData) {
            if (!socketData) {
                return;
            }
            var data = socketData.data, type = socketData.type;
            _this.connects.push({ type: type, name: "" + data.name });
        }));
    };
    ChatComponent.prototype.showModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_5__["PromptDialogComponent"], {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (data) {
            _this.userName = data || 'guest';
            _this.chatService.userConnect(_this.userName);
        });
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ChatComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-component',
            template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html"),
        })
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");







var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"]
            ],
            providers: [],
            exports: [_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"]],
            imports: [
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexModule"]
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/dialog/prompt-dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/dialog/prompt-dialog.component.ts ***!
  \***************************************************/
/*! exports provided: PromptDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptDialogComponent", function() { return PromptDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var PromptDialogComponent = /** @class */ (function () {
    function PromptDialogComponent(data, dialogRef, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.name = '';
        this.promptForm = this.fb.group({ name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]] });
    }
    PromptDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PromptDialogComponent.prototype.submit = function () {
        this.dialogRef.close(this.promptForm.get('name').value);
    };
    PromptDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    PromptDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prompt-dialog',
            template: __webpack_require__(/*! raw-loader!./prompt-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog/prompt-dialog.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], PromptDialogComponent);
    return PromptDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/prompt-dialog.module.ts":
/*!************************************************!*\
  !*** ./src/app/dialog/prompt-dialog.module.ts ***!
  \************************************************/
/*! exports provided: ConfirmDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModule", function() { return ConfirmDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _prompt_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prompt-dialog.component */ "./src/app/dialog/prompt-dialog.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");







var ConfirmDialogModule = /** @class */ (function () {
    function ConfirmDialogModule() {
    }
    ConfirmDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_5__["PromptDialogComponent"]],
            entryComponents: [_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_5__["PromptDialogComponent"]],
            imports: [
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ]
        })
    ], ConfirmDialogModule);
    return ConfirmDialogModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");






var ChatService = /** @class */ (function () {
    function ChatService() {
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    ChatService.prototype.sendMessage = function (data) {
        this.socket.emit(_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].ADD_MESSAGE, data);
    };
    ChatService.prototype.userConnect = function (username) {
        this.socket.emit(_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].USER_CONNECT, username);
    };
    ChatService.prototype.userDisconnect = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on(_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].DISCONNECT, function (data) {
                observer.next(data);
            });
        });
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on(_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].NEW_MESSAGE, function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
    };
    ChatService.prototype.getUser = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on(_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].NEW_USER, function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' })
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
var constants = {
    DISCONNECT: 'disconnect',
    USER_CONNECT: 'user-connect',
    ADD_MESSAGE: 'add-message',
    NEW_USER: 'new-user',
    NEW_MESSAGE: 'new-message',
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    url: 'http://localhost:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/chat-node-angular/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map