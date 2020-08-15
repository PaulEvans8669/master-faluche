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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_main_choice_main_choice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-choice/main-choice.component */ "./src/app/components/main-choice/main-choice.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_quiz_signification_quiz_signification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quiz-signification/quiz-signification.component */ "./src/app/components/quiz-signification/quiz-signification.component.ts");
/* harmony import */ var _components_circulaires_circulaires_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/circulaires/circulaires.component */ "./src/app/components/circulaires/circulaires.component.ts");








const routes = [
    { path: '', component: _components_main_choice_main_choice_component__WEBPACK_IMPORTED_MODULE_2__["MainChoiceComponent"] },
    { path: 'quizNom', component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__["QuizComponent"] },
    { path: 'quizSignification', component: _components_quiz_signification_quiz_signification_component__WEBPACK_IMPORTED_MODULE_4__["QuizSignificationComponent"] },
    { path: 'circu', component: _components_circulaires_circulaires_component__WEBPACK_IMPORTED_MODULE_5__["CirculairesComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






const _c0 = function () { return ["circu"]; };
class AppComponent {
    constructor() {
        this.title = 'master-faluche';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 2, consts: [["color", "primary", 2, "position", "fixed", "z-index", "99"], ["mat-flat-button", "", "color", "primary", "routerLink", ""], ["mat-flat-button", "", "color", "primary", "skipLocationChange", "", 3, "routerLink"], [2, "margin-left", "15px"], [1, "example-spacer"], ["id", "main-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Circulaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["#main-container[_ngcontent-%COMP%] {\r\n  padding: 10% 10% 0 10%;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  #main-container[_ngcontent-%COMP%] {\r\n    padding-top: 20%\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMCUgMTAlIDAgMTAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgI21haW4tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMCVcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_choice_main_choice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main-choice/main-choice.component */ "./src/app/components/main-choice/main-choice.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _components_quiz_signification_quiz_signification_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/quiz-signification/quiz-signification.component */ "./src/app/components/quiz-signification/quiz-signification.component.ts");
/* harmony import */ var _components_circulaires_circulaires_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/circulaires/circulaires.component */ "./src/app/components/circulaires/circulaires.component.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _modules_material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_main_choice_main_choice_component__WEBPACK_IMPORTED_MODULE_9__["MainChoiceComponent"],
        _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_11__["QuizComponent"],
        _components_quiz_signification_quiz_signification_component__WEBPACK_IMPORTED_MODULE_14__["QuizSignificationComponent"],
        _components_circulaires_circulaires_component__WEBPACK_IMPORTED_MODULE_15__["CirculairesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _modules_material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _components_main_choice_main_choice_component__WEBPACK_IMPORTED_MODULE_9__["MainChoiceComponent"],
                    _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_11__["QuizComponent"],
                    _components_quiz_signification_quiz_signification_component__WEBPACK_IMPORTED_MODULE_14__["QuizSignificationComponent"],
                    _components_circulaires_circulaires_component__WEBPACK_IMPORTED_MODULE_15__["CirculairesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _modules_material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/circulaires/circulaires.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/circulaires/circulaires.component.ts ***!
  \*****************************************************************/
/*! exports provided: CirculairesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirculairesComponent", function() { return CirculairesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _lib_coloring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/coloring */ "./src/lib/coloring.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function CirculairesComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Fili\u00E8re");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CirculairesComponent_th_2_Template_input_keyup_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CirculairesComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r9.libelle);
} }
function CirculairesComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Couleur de circulaire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "font-dark": a0, "font-light": a1, "text-col-alone": a2 }; };
const _c1 = function (a0) { return { "width": a0 }; };
function CirculairesComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", element_r10.hex1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](17, _c0, element_r10.font_color1 === "dark", element_r10.font_color1 !== "dark", element_r10.hex1 === element_r10.hex2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 11, element_r10.col1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", element_r10.hex2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", element_r10.font_color1 === "dark" ? "font-dark" : "font-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 13, element_r10.col2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", element_r10.font_color === "dark" ? "font-dark" : "font-light")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c1, _r11.clientWidth + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 15, element_r10.couleur.toLowerCase().includes("satin") ? "satin" : "velours"), " ");
} }
function CirculairesComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
} }
function CirculairesComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
} }
const _c2 = function () { return ["libelle", "circu"]; };
class CirculairesComponent {
    constructor(http) {
        this.http = http;
    }
    getJSON() {
        return this.http.get('assets/data/circulaires.json');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]((yield this.getJSON().toPromise()).filter(x => x.hex1 !== null && x.hex2 !== null).map(x => {
                x.col1_l = Object(_lib_coloring__WEBPACK_IMPORTED_MODULE_2__["HEXToHSL"])(x.hex1).l;
                x.col2_l = Object(_lib_coloring__WEBPACK_IMPORTED_MODULE_2__["HEXToHSL"])(x.hex2).l;
                const cols = x.couleur.split(' & ');
                console.log(cols);
                x.col1 = cols[0].toLowerCase().replace('satin', '').replace('velours', '').trim();
                x.font_color1 = x.col1_l > 50 ? 'dark' : 'light';
                if (cols.length > 1) {
                    x.col2 = cols[1].toLowerCase().replace('satin', '').replace('velours', '').trim();
                    x.font_color2 = x.col1_2 > 50 ? 'dark' : 'light';
                }
                x.font_color = (x.col1_l + x.col1_l) / 2 > 50 ? 'dark' : 'light';
                return x;
            }));
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this._data.filter = filterValue.trim().toLowerCase();
        this._data.filterPredicate = (data, filter) => {
            return data.libelle.toLowerCase().includes(filter);
        };
    }
}
CirculairesComponent.ɵfac = function CirculairesComponent_Factory(t) { return new (t || CirculairesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
CirculairesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CirculairesComponent, selectors: [["app-circulaires"]], viewQuery: function CirculairesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 9, vars: 5, consts: [["mat-table", "", 1, "mat-elevation-z8", "circu-table", 2, "margin-bottom", "10%", 3, "dataSource"], ["matColumnDef", "libelle"], ["mat-header-cell", "", "style", "width: 30%", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "circu"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "circu-table-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "width", "30%"], [2, "float", "left"], [2, "float", "right"], ["matInput", "", 3, "keyup"], ["input", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "colors"], ["colors", ""], [1, "coul"], [1, "text-col", "text-col-first", 3, "ngClass"], [1, "text-col", 3, "ngClass"], [1, "circu-text", 3, "ngClass", "ngStyle"], ["mat-header-row", ""], ["mat-row", "", 1, "circu-table-row"]], template: function CirculairesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CirculairesComponent_th_2_Template, 9, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CirculairesComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CirculairesComponent_th_5_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CirculairesComponent_td_6_Template, 14, 23, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CirculairesComponent_tr_7_Template, 1, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CirculairesComponent_tr_8_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx._data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c2));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"]], styles: [".circu-table[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.circu-table-row[_ngcontent-%COMP%]{\r\n  min-height: 100px;\r\n  height: 10vh;\r\n  max-height: 150px;\r\n}\r\n\r\n.coul[_ngcontent-%COMP%]{\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%] {\r\n  height: auto;\r\n}\r\n\r\n.mat-cell[_ngcontent-%COMP%]:first-of-type {\r\n  padding: 24px;\r\n}\r\n\r\n.circu-text[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  padding: 20px 0;\r\n  margin: 0;\r\n  font-size: 20px;\r\n  letter-spacing: 25px;\r\n  font-style: italic;\r\n  position: absolute;\r\n}\r\n\r\n.font-dark[_ngcontent-%COMP%]{\r\ncolor: rgba(0, 0, 0, 0.75)\r\n}\r\n\r\n.font-light[_ngcontent-%COMP%]{\r\ncolor: rgba(255, 255, 255, 0.75)\r\n}\r\n\r\n.text-col[_ngcontent-%COMP%]:not(.text-col-first){\r\n  float: left;\r\n}\r\n\r\n.text-col[_ngcontent-%COMP%]{\r\n  padding-top: 5px;\r\n  padding-left: 8px;\r\n}\r\n\r\n.colors[_ngcontent-%COMP%]{\r\nfloat: left;\r\nwidth: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .circu-text[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    letter-spacing: 5px;\r\n  }\r\n}\r\n\r\n.text-col-alone[_ngcontent-%COMP%]{\r\n  padding-top: 21px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaXJjdWxhaXJlcy9jaXJjdWxhaXJlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0VBQ1QsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0FBQ0EsV0FBVztBQUNYLFdBQVc7QUFDWDs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaXJjdWxhaXJlcy9jaXJjdWxhaXJlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmN1LXRhYmxle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2lyY3UtdGFibGUtcm93e1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIGhlaWdodDogMTB2aDtcclxuICBtYXgtaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmNvdWx7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LXJvdyB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuLmNpcmN1LXRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAyNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5mb250LWRhcmt7XHJcbmNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpXHJcbn1cclxuXHJcbi5mb250LWxpZ2h0e1xyXG5jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KVxyXG59XHJcblxyXG4udGV4dC1jb2w6bm90KC50ZXh0LWNvbC1maXJzdCl7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi50ZXh0LWNvbHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG4uY29sb3Jze1xyXG5mbG9hdDogbGVmdDtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNpcmN1LXRleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQtY29sLWFsb25le1xyXG4gIHBhZGRpbmctdG9wOiAyMXB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CirculairesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-circulaires',
                templateUrl: './circulaires.component.html',
                styleUrls: ['./circulaires.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/main-choice/main-choice.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/main-choice/main-choice.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainChoiceComponent", function() { return MainChoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _enums_game_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/game-mode.enum */ "./src/app/enums/game-mode.enum.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function () { return ["quizNom"]; };
const _c1 = function () { return ["quizSignification"]; };
class MainChoiceComponent {
    constructor() {
        this.gModes = _enums_game_mode_enum__WEBPACK_IMPORTED_MODULE_1__["GameMode"];
    }
    ngOnInit() {
    }
    setMode(mode) {
        sessionStorage.setItem('mode', mode);
    }
}
MainChoiceComponent.ɵfac = function MainChoiceComponent_Factory(t) { return new (t || MainChoiceComponent)(); };
MainChoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainChoiceComponent, selectors: [["app-main-choice"]], decls: 25, vars: 4, consts: [[1, "mat-elevation-z5"], ["mat-button", "", "mat-raised-button", "", "color", "primary", "skipLocationChange", "", 3, "routerLink", "click"]], template: function MainChoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nom des insignes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Le quiz du sympathisant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Quizz tr\u00E8s imple permettant d'apprendre le nom des diff\u00E9rents insignes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Tr\u00E8s facile. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainChoiceComponent_Template_button_click_12_listener() { return ctx.setMode(ctx.gModes.zen); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "D\u00E9marrer le quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "M\u00E9li M\u00E9looooooo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Quiz global qui porte sur diff\u00E9rents \u00E9l\u00E9ments de la faluche");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Quizz plus compliqu\u00E9 que le pr\u00E9c\u00E9dent et li\u00E9 \u00E0 l'apprentissage des diff\u00E9rentes significations d'insignes, et autres \u00E9l\u00E9ments de la faluche. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainChoiceComponent_Template_button_click_23_listener() { return ctx.setMode(ctx.gModes.zen); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "D\u00E9marrer le quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".mat-card[_ngcontent-%COMP%]{\r\n  margin: 0 15% 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNob2ljZS9tYWluLWNob2ljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNob2ljZS9tYWluLWNob2ljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJke1xyXG4gIG1hcmdpbjogMCAxNSUgNSU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainChoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-choice',
                templateUrl: './main-choice.component.html',
                styleUrls: ['./main-choice.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/quiz-signification/quiz-signification.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/quiz-signification/quiz-signification.component.ts ***!
  \*******************************************************************************/
/*! exports provided: QuizSignificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizSignificationComponent", function() { return QuizSignificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");







const _c0 = ["answer"];
function QuizSignificationComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Ton taux de r\u00E9ussite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-progress-bar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx_r5.correctAnswers / ctx_r5.totalQuestions));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r5.correctAnswers / ctx_r5.totalQuestions * 100);
} }
function QuizSignificationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizSignificationComponent_div_0_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.checkAnswer([$event, ctx_r6.answers[0]]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizSignificationComponent_div_0_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.checkAnswer([$event, ctx_r8.answers[1]]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizSignificationComponent_div_0_Template_button_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.checkAnswer([$event, ctx_r9.answers[2]]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizSignificationComponent_div_0_Template_button_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.checkAnswer([$event, ctx_r10.answers[3]]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, QuizSignificationComponent_div_0_div_20_Template, 7, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, ctx_r0.theme));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.answers[0][ctx_r0.keyAnswer]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.answers[1][ctx_r0.keyAnswer]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.answers[2][ctx_r0.keyAnswer]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.answers[3][ctx_r0.keyAnswer]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.totalQuestions > 0);
} }
class QuizSignificationComponent {
    constructor(http) {
        this.http = http;
        this.ready = false;
        this.totalQuestions = 0;
        this.correctAnswers = 0;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bacs = (yield this.getJSON('assets/data/bacs.json').toPromise());
            this.circulaires = (yield this.getJSON('assets/data/circulaires.json').toPromise());
            this.filieres = (yield this.getJSON('assets/data/filieres.json').toPromise());
            this.officiels = (yield this.getJSON('assets/data/officiels.json').toPromise());
            this.newQuestion();
            this.ready = true;
        });
    }
    newQuestion() {
        this.resetButtons();
        const l1 = this.bacs.length;
        const l2 = l1 + this.circulaires.length;
        const l3 = l2 + this.filieres.length;
        const l4 = l3 + this.officiels.length;
        const rand = Math.floor(Math.random() * l4);
        if (rand < l1) {
            this.newQuestionBac();
        }
        else if (rand < l2) {
            this.newQuestionCirculaire();
        }
        else if (rand < l3) {
            this.newQuestionFiliere();
        }
        else {
            this.newQuestionOfficiel();
        }
    }
    getJSON(url) {
        return this.http.get(url);
    }
    checkAnswer(data) {
        const target = (data[0].path[0].tagName.toLowerCase() === 'span') ? data[0].path[1] : data[0].path[0];
        target.style.backgroundColor = 'rgba(244, 67, 54, 0.5)';
        const answer = data[1];
        this.showAnswer();
        if (answer === this.answers[this.correctIndex]) {
            this.correctAnswers++;
        }
        this.totalQuestions++;
        setTimeout(() => {
            this.newQuestion();
        }, 1250);
    }
    showAnswer() {
        const btns = this.answerButtons.toArray();
        btns.forEach(b => b.disabled = true);
        btns[this.correctIndex]._elementRef.nativeElement.style.backgroundColor = 'rgba(62,207,19, 0.5)';
    }
    resetButtons() {
        const btns = this.answerButtons.toArray();
        btns.forEach(b => {
            b.disabled = false;
            b._elementRef.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });
    }
    pickRandom(arr) {
        this.answers = [];
        while (this.answers.length < 4) {
            const el = arr[Math.floor(Math.random() * arr.length)];
            if (!this.answers.find(x => x === el)) {
                this.answers.push(el);
            }
        }
        this.correctIndex = Math.floor(Math.random() * this.answers.length);
        console.log(this.answers);
        console.log(this.correctIndex);
    }
    newQuestionBac() {
        this.theme = 'Insigne de bac';
        this.pickRandom(this.bacs);
        if (Math.floor(Math.random() * 2)) {
            this.question = 'Quelle insigne représente: ' + this.answers[this.correctIndex].libelle + ' ?';
            this.keyAnswer = 'insigne';
        }
        else {
            this.question = 'Quel bac représente l\'insigne: ' + this.answers[this.correctIndex].insigne + ' ?';
            this.keyAnswer = 'libelle';
        }
    }
    newQuestionCirculaire() {
        this.theme = 'Couleur de circulaire';
        this.pickRandom(this.circulaires);
        if (Math.floor(Math.random() * 2)) {
            this.question = 'Quelle fillière est représentée par la couleur de circulaire suivante: '
                + this.answers[this.correctIndex].couleur + ' ?';
            this.keyAnswer = 'libelle';
        }
        else {
            this.question = 'Quelle couleur de circulaire représente la filière suivante : '
                + this.answers[this.correctIndex].libelle + ' ?';
            this.keyAnswer = 'couleur';
        }
    }
    newQuestionFiliere() {
        this.theme = 'Insigne de filière';
        this.pickRandom(this.filieres);
        if (Math.floor(Math.random() * 2)) {
            this.question = 'Quelle filière est représentée par l\'insigne de circulaire suivant : '
                + this.answers[this.correctIndex].insigne + ' ?';
            this.keyAnswer = 'libelle';
        }
        else {
            this.question = 'Quelle insigne de circulaire représente la filière suivante : '
                + this.answers[this.correctIndex].libelle + ' ?';
            this.keyAnswer = 'insigne';
        }
    }
    newQuestionOfficiel() {
        this.theme = 'Insigne de partie officielle';
        this.pickRandom(this.officiels);
        if (Math.floor(Math.random() * 2)) {
            this.question = 'Que représente l\'insigne suivant : '
                + this.answers[this.correctIndex].insigne + ' ?';
            this.keyAnswer = 'libelle';
        }
        else {
            this.question = 'Le terme \'' + this.answers[this.correctIndex].libelle + '\' est représenté par ?';
            this.keyAnswer = 'insigne';
        }
    }
}
QuizSignificationComponent.ɵfac = function QuizSignificationComponent_Factory(t) { return new (t || QuizSignificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
QuizSignificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuizSignificationComponent, selectors: [["app-quiz-signification"]], viewQuery: function QuizSignificationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.answerButtons = _t);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "question"], ["id", "answers-container"], ["mat-stroked-button", "", "color", "primary", 1, "answer", 3, "click"], ["answer", ""], ["id", "info", 4, "ngIf"], ["id", "info"], ["mode", "determinate", 3, "value"]], template: function QuizSignificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, QuizSignificationComponent_div_0_Template, 21, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ready);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["PercentPipe"]], styles: ["#answers-container[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  column-gap: 2%;\r\n  row-gap: 20%;\r\n  padding-bottom: 30px;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  #answers-container[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    row-gap: 5%;\r\n  }\r\n}\r\n#question[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-bottom: 5%;\r\n}\r\n#question[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 200px\r\n}\r\n.answer[_ngcontent-%COMP%] {\r\n  min-height: 65px;\r\n  white-space: normal;\r\n  line-height: 150%;\r\n}\r\n#info[_ngcontent-%COMP%] {\r\n  margin-top: 5%\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6LXNpZ25pZmljYXRpb24vcXVpei1zaWduaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQixXQUFXO0VBQ2I7QUFDRjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0U7QUFDRjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1aXotc2lnbmlmaWNhdGlvbi9xdWl6LXNpZ25pZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhbnN3ZXJzLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBjb2x1bW4tZ2FwOiAyJTtcclxuICByb3ctZ2FwOiAyMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICNhbnN3ZXJzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIHJvdy1nYXA6IDUlO1xyXG4gIH1cclxufVxyXG5cclxuI3F1ZXN0aW9ue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuI3F1ZXN0aW9uIGltZ3tcclxuICBoZWlnaHQ6IDIwMHB4XHJcbn1cclxuXHJcbi5hbnN3ZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDY1cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMTUwJTtcclxufVxyXG5cclxuI2luZm8ge1xyXG4gIG1hcmdpbi10b3A6IDUlXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuizSignificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-quiz-signification',
                templateUrl: './quiz-signification.component.html',
                styleUrls: ['./quiz-signification.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, { answerButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['answer']
        }] }); })();


/***/ }),

/***/ "./src/app/components/quiz/quiz.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.ts ***!
  \***************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");






const _c0 = ["answer"];
function QuizComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ton taux de r\u00E9ussite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-progress-bar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r5.correctAnswers / ctx_r5.totalQuestions));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.correctAnswers / ctx_r5.totalQuestions * 100);
} }
function QuizComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nommer cette insigne :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_0_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.checkAnswer([$event, ctx_r6.answers[0]]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_0_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.checkAnswer([$event, ctx_r8.answers[1]]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_0_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.checkAnswer([$event, ctx_r9.answers[2]]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_0_Template_button_click_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.checkAnswer([$event, ctx_r10.answers[3]]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, QuizComponent_div_0_div_18_Template, 7, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/insignes/", ctx_r0.answers[ctx_r0.correctIndex].src, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.answers[0].nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.answers[1].nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.answers[2].nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.answers[3].nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.totalQuestions > 0);
} }
class QuizComponent {
    constructor(http) {
        this.http = http;
        // tslint:disable-next-line:variable-name
        this._jsonURL = 'assets/insignes/insignes.json';
        this.answers = [];
        this.ready = false;
        this.correctAnswers = 0;
        this.totalQuestions = 0;
        this.getJSON().subscribe(data => {
            // tslint:disable-next-line:variable-name
            this._data = data.filter(x => x.src);
            this.newQuestion();
            this.ready = true;
        });
    }
    ngOnInit() {
    }
    getJSON() {
        return this.http.get(this._jsonURL);
    }
    newQuestion() {
        this.resetButtons();
        this.answers = [];
        while (this.answers.length < 4) {
            const el = this._data[Math.floor(Math.random() * this._data.length)];
            if (!this.answers.find(x => x.nom === el.nom)) {
                this.answers.push(el);
            }
        }
        this.correctIndex = Math.floor(Math.random() * this.answers.length);
    }
    checkAnswer(data) {
        alert('1');
        alert(JSON.stringify(data));
        const target = (data[0].path[0].tagName.toLowerCase() === 'span') ? data[0].path[1] : data[0].path[0];
        alert('2');
        alert(target !== undefined);
        target.style.backgroundColor = 'rgba(244, 67, 54, 0.5)';
        const answer = data[1];
        alert('3');
        alert(JSON.stringify(answer));
        this.showAnswer();
        alert('4');
        if (answer === this.answers[this.correctIndex]) {
            this.correctAnswers++;
        }
        this.totalQuestions++;
        setTimeout(() => {
            this.newQuestion();
        }, 1250);
    }
    showAnswer() {
        const btns = this.answerButtons.toArray();
        alert('3.1');
        alert(btns.length);
        btns.forEach(b => b.disabled = true);
        btns[this.correctIndex]._elementRef.nativeElement.style.backgroundColor = 'rgba(62,207,19, 0.5)';
    }
    resetButtons() {
        const btns = this.answerButtons.toArray();
        btns.forEach(b => {
            b.disabled = false;
            b._elementRef.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });
    }
}
QuizComponent.ɵfac = function QuizComponent_Factory(t) { return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizComponent, selectors: [["app-quiz"]], viewQuery: function QuizComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.answerButtons = _t);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "question"], [3, "src"], ["id", "answers-container"], ["mat-stroked-button", "", "color", "primary", 1, "answer", 3, "click"], ["answer", ""], ["id", "info", 4, "ngIf"], ["id", "info"], ["mode", "determinate", 3, "value"]], template: function QuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuizComponent_div_0_Template, 19, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ready);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"]], styles: ["#answers-container[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  column-gap: 2%;\r\n  row-gap: 20%;\r\n  padding-bottom: 30px;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  #answers-container[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    row-gap: 5%;\r\n  }\r\n}\r\n#question[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-bottom: 5%;\r\n}\r\n#question[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 200px\r\n}\r\n.answer[_ngcontent-%COMP%] {\r\n  min-height: 65px;\r\n  white-space: normal;\r\n  line-height: 150%;\r\n}\r\n#info[_ngcontent-%COMP%] {\r\n  margin-top: 5%\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLFdBQVc7RUFDYjtBQUNGO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRTtBQUNGO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYW5zd2Vycy1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgY29sdW1uLWdhcDogMiU7XHJcbiAgcm93LWdhcDogMjAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAjYW5zd2Vycy1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICByb3ctZ2FwOiA1JTtcclxuICB9XHJcbn1cclxuXHJcbiNxdWVzdGlvbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbiNxdWVzdGlvbiBpbWd7XHJcbiAgaGVpZ2h0OiAyMDBweFxyXG59XHJcblxyXG4uYW5zd2VyIHtcclxuICBtaW4taGVpZ2h0OiA2NXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbn1cclxuXHJcbiNpbmZvIHtcclxuICBtYXJnaW4tdG9wOiA1JVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiz',
                templateUrl: './quiz.component.html',
                styleUrls: ['./quiz.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { answerButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['answer']
        }] }); })();


/***/ }),

/***/ "./src/app/enums/game-mode.enum.ts":
/*!*****************************************!*\
  !*** ./src/app/enums/game-mode.enum.ts ***!
  \*****************************************/
/*! exports provided: GameMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMode", function() { return GameMode; });
var GameMode;
(function (GameMode) {
    GameMode["zen"] = "zen";
    GameMode["time_1"] = "time_1";
})(GameMode || (GameMode = {}));


/***/ }),

/***/ "./src/app/modules/material/material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
































const material = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_30__["MatTreeModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            material
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_30__["MatTreeModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_30__["MatTreeModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_30__["MatTreeModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    material
                ],
                exports: [
                    material
                ],
            }]
    }], null, null); })();


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
const environment = {
    production: false
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

/***/ "./src/lib/coloring.ts":
/*!*****************************!*\
  !*** ./src/lib/coloring.ts ***!
  \*****************************/
/*! exports provided: HEXToRGB, RGBToHEX, HSLToRGB, RGBToHSL, enlightenHEX, darkenHEX, HEXToHSL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEXToRGB", function() { return HEXToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBToHEX", function() { return RGBToHEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSLToRGB", function() { return HSLToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBToHSL", function() { return RGBToHSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enlightenHEX", function() { return enlightenHEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkenHEX", function() { return darkenHEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEXToHSL", function() { return HEXToHSL; });
// tslint:disable:variable-name
function HEXToRGB(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
        return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function RGBToHEX(r, g, b) {
    // tslint:disable-next-line:no-bitwise
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function HSLToRGB(h, s, l) {
    // Must be fractions of 1
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;
    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return { r, g, b };
}
function RGBToHSL(r, g, b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;
    // Find greatest and smallest channel values
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;
    // Calculate hue
    // No difference
    if (delta === 0) {
        h = 0;
    }
    // Red is max
    else if (cmax === r) {
        h = ((g - b) / delta) % 6;
    }
    // Green is max
    else if (cmax === g) {
        h = (b - r) / delta + 2;
    }
    // Blue is max
    else {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    // Make negative hues positive behind 360°
    if (h < 0) {
        h += 360;
    }
    // Calculate lightness
    l = (cmax + cmin) / 2;
    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return { h, s, l };
}
function enlightenHEX(hex) {
    const rgb = HEXToRGB(hex);
    const hsl = RGBToHSL(rgb.r, rgb.g, rgb.b);
    const rgb_light = HSLToRGB(hsl.h, hsl.s, Math.sqrt(hsl.l) * 10);
    return RGBToHEX(rgb_light.r, rgb_light.g, rgb_light.b);
}
function darkenHEX(hex) {
    const rgb = HEXToRGB(hex);
    const hsl = RGBToHSL(rgb.r, rgb.g, rgb.b);
    const dark_l = Math.pow(hsl.l, 2) / 100 - 5;
    const rgb_dark = HSLToRGB(hsl.h, hsl.s, dark_l < 0 ? 0 : dark_l);
    return RGBToHEX(rgb_dark.r, rgb_dark.g, rgb_dark.b);
}
function HEXToHSL(hex) {
    const rgb = HEXToRGB(hex);
    return RGBToHSL(rgb.r, rgb.g, rgb.b);
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Paul\Desktop\master-faluche\master-faluche\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map