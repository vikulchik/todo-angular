(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vikulchik/Documents/todo/my-todo/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "G1N2":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_todo_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/todo.services */ "mAVS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0, a1) { return { "new": a0, "done": a1 }; };
function TodoComponent_section_5_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_section_5_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const todo_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.deleteTodo(todo_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", todo_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 4, todo_r2.createdAt, "dd MMMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, todo_r2.status === "new", todo_r2.status === "done"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", todo_r2.status, " ");
} }
function TodoComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodoComponent_section_5_li_2_Template, 7, 10, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_section_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.filterByStatusDone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter by status done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_section_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.filterByStatusNew(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Filter by status new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_section_5_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sort by date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_section_5_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.sortByNew(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u2191");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_section_5_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.sortByOld(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u2193");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodoComponent_section_5_Template_input_change_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.filterByTitle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.todos);
} }
class TodoComponent {
    constructor(todoService) {
        this.todoService = todoService;
        this.newTodo = '';
    }
    filterByStatusNew() {
        this.todos = this.todoService.filterByStatusNew();
    }
    filterByStatusDone() {
        this.todos = this.todoService.filterByStatusDone();
    }
    sortByNew() {
        this.todos = this.todoService.sortByNew();
    }
    sortByOld() {
        this.todos = this.todoService.sortByOld();
    }
    reset() {
        this.todos = this.todoService.getAll();
    }
    create() {
        const title = this.newTodo.trim();
        if (title) {
            this.todoService.create(title);
            this.newTodo = '';
        }
    }
    deleteTodo(id) {
        this.todoService.changeStatus(id);
    }
    filterByTitle(event) {
        this.todos = this.todoService.filterByTitle(event.target.value);
    }
    ngOnInit() {
        this.todos = this.todoService.getAll();
    }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_todo_services__WEBPACK_IMPORTED_MODULE_1__["TodoServices"])); };
TodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoComponent, selectors: [["app-todo"]], decls: 6, vars: 2, consts: [[1, "my-todos"], ["action", "#", 1, "add-new-todo"], ["type", "text", "placeholder", "add new todo", "name", "new todo", 1, "add-new-todo__field", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "add-new-todo__btn", 3, "click"], ["class", "my-todo", 4, "ngIf"], [1, "my-todo"], [1, "todo-list"], ["class", "todo-list__item", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "filterBtn", 3, "click"], ["action", "#", 1, "add-new-todo", "filter-form"], ["type", "text", "placeholder", "search by title", "name", "search title", 1, "add-new-todo__field", 3, "change"], [1, "todo-list__item", 3, "click"], [1, "todo-list__date"], [3, "ngClass"]], template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoComponent_Template_input_ngModelChange_2_listener($event) { return ctx.newTodo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_Template_button_click_3_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodoComponent_section_5_Template, 18, 1, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newTodo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.todos.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["li[_ngcontent-%COMP%] {\n  list-style-type: decimal;\n}\n\n.my-todos[_ngcontent-%COMP%] {\n  width: 40%;\n  background: #ffffff;\n  padding: 10px;\n  text-align: center;\n}\n\n.todo-list[_ngcontent-%COMP%] {\n  padding: 20px 50px;\n  position: relative;\n}\n\n.todo-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 21px;\n  font-weight: bold;\n  display: inline-block;\n  padding: 0 5px;\n  color: #fff;\n}\n\n.done[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.new[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.todo-list__item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.todo-list__item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.add-new-todo__field[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  padding: 10px;\n  font-family: \"Titillium Web\", sans-serif;\n}\n\n.add-new-todo__btn[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.add-new-todo__field[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Titillium Web\", sans-serif;\n  font-size: 16px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 0;\n  background: #000;\n  color: #fff;\n  font-size: 16px;\n  width: auto;\n  padding: 10px;\n  font-family: \"Titillium Web\", sans-serif;\n}\n\n.filterBtn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-top: 10px;\n}\n\n.todo-list[_ngcontent-%COMP%]   .todo-list__date[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.filter-form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoidG9kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xufVxuXG4ubXktdG9kb3Mge1xuICB3aWR0aDogNDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b2RvLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvZG8tbGlzdF9faXRlbSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDIxcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLm5ldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnRvZG8tbGlzdF9faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50b2RvLWxpc3RfX2l0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGQtbmV3LXRvZG9fX2ZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xufVxuXG4uYWRkLW5ldy10b2RvX19idG4ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5hZGQtbmV3LXRvZG9fX2ZpZWxkOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbn1cblxuLmZpbHRlckJ0biB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRvZG8tbGlzdCAudG9kby1saXN0X19kYXRlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZpbHRlci1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo/todo.component */ "G1N2");


class AppComponent {
    constructor() {
        this.title = 'my-todo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-todo");
    } }, directives: [_todo_todo_component__WEBPACK_IMPORTED_MODULE_1__["TodoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo/todo.component */ "G1N2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _todo_todo_component__WEBPACK_IMPORTED_MODULE_2__["TodoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();


/***/ }),

/***/ "mAVS":
/*!************************************************!*\
  !*** ./src/app/todo/services/todo.services.ts ***!
  \************************************************/
/*! exports provided: Status, TodoServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoServices", function() { return TodoServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var Status;
(function (Status) {
    Status["NEW"] = "new";
    Status["DONE"] = "done";
})(Status || (Status = {}));
class TodoServices {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('Todo') || '[]');
    }
    getAll() {
        return this.todos;
    }
    filterByStatusDone() {
        return this.todos.filter(status => {
            return status.status === Status.DONE;
        });
    }
    filterByStatusNew() {
        return this.todos.filter(status => {
            return status.status === Status.NEW;
        });
    }
    create(title) {
        this.todos.push({
            id: this.todos.length + 1,
            title,
            status: Status.NEW,
            createdAt: new Date()
        });
        localStorage.setItem('Todo', JSON.stringify(this.todos));
    }
    changeStatus(id) {
        const founded = this.todos.find((item) => {
            return item.id === id;
        });
        if (founded) {
            founded.status = Status.DONE;
        }
    }
    sortByNew() {
        const cloned = [...this.todos];
        return cloned.sort((a, b) => {
            return new Date(a.createdAt) - new Date(b.createdAt);
        });
    }
    sortByOld() {
        const cloned = [...this.todos];
        return cloned.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
    }
    filterByTitle(title) {
        return this.todos.filter(todo => {
            return todo.title.toLowerCase().includes(title.toLowerCase().trim());
        });
    }
}
TodoServices.ɵfac = function TodoServices_Factory(t) { return new (t || TodoServices)(); };
TodoServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoServices, factory: TodoServices.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
