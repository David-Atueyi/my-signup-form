/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   email: () => (/* binding */ email),\n/* harmony export */   paWordRegex: () => (/* binding */ paWordRegex),\n/* harmony export */   passWord: () => (/* binding */ passWord),\n/* harmony export */   regex: () => (/* binding */ regex)\n/* harmony export */ });\n/* harmony import */ var _checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checks */ \"./src/checks.ts\");\n/* harmony import */ var _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gettingHtmlElements */ \"./src/gettingHtmlElements.ts\");\n\n\n//\n// global variables\nlet firstName;\nlet lastName;\nlet email;\nlet passWord;\nlet regex = /^[a-zA-Z0-9_-]+@[a-zA-z0-9-]+\\.[a-z]{2,4}$/;\nlet paWordRegex = /^[a-zA-Z0-9_-]{3,20}$/;\n//\n//\nconst handleFirstNameInput = (event) => {\n    const usersFistName = event.target;\n    firstName = usersFistName.value;\n};\nconst handleLastNameInput = (event) => {\n    const usersLastName = event.target;\n    lastName = usersLastName.value;\n};\nconst handleEmailInput = (event) => {\n    const usersEmail = event.target;\n    email = usersEmail.value;\n};\n//\n//\nconst handlePswordInput = (event) => {\n    const usersPsword = event.target;\n    passWord = usersPsword.value;\n};\n//\nconst handleShowPassword = () => {\n    if ((_gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem.type) == \"password\") {\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem.type = \"text\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.showPassWordElem.innerText = \"Hide Password\";\n    }\n    else {\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem.type = \"password\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.showPassWordElem.innerText = \"Show Password\";\n    }\n};\n//\nconst handleButton = () => {\n    (0,_checks__WEBPACK_IMPORTED_MODULE_0__.fnameCheck)();\n    (0,_checks__WEBPACK_IMPORTED_MODULE_0__.lnameCheck)();\n    (0,_checks__WEBPACK_IMPORTED_MODULE_0__.emailCheck)();\n    (0,_checks__WEBPACK_IMPORTED_MODULE_0__.passwordCheck)();\n};\n//\n// EventListener\n_gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.firstNameInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.firstNameInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.firstNameInputElem.addEventListener(\"change\", handleFirstNameInput);\n_gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lastNameInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lastNameInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lastNameInputElem.addEventListener(\"change\", handleLastNameInput);\n_gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailInputElem.addEventListener(\"change\", handleEmailInput);\n_gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem.addEventListener(\"change\", handlePswordInput);\n_gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.showPassWordElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.showPassWordElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.showPassWordElem.addEventListener(\"click\", handleShowPassword);\n_gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.buttonElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.buttonElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.buttonElem.addEventListener(\"click\", handleButton);\n\n\n//# sourceURL=webpack://learning_javascript_and_typescript/./src/app.ts?");

/***/ }),

/***/ "./src/checks.ts":
/*!***********************!*\
  !*** ./src/checks.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   emailCheck: () => (/* binding */ emailCheck),\n/* harmony export */   fnameCheck: () => (/* binding */ fnameCheck),\n/* harmony export */   lnameCheck: () => (/* binding */ lnameCheck),\n/* harmony export */   passwordCheck: () => (/* binding */ passwordCheck)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n/* harmony import */ var _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gettingHtmlElements */ \"./src/gettingHtmlElements.ts\");\n\n\n//conditions\nconst fnameCheck = () => {\n    if (!(_gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.firstNameInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.firstNameInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.firstNameInputElem.value)) {\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.firstNameInputElem.style.border = \"3px solid hsl(0, 100%, 74%)\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.firstNameInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.firstNameInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.firstNameInputElem.setAttribute(\"placeholder\", \"\");\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.fnameErrorMessage.style.display = \"block\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.fnameErrorIcon.style.visibility = \"visible\";\n    }\n    else {\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.firstNameInputElem.style.border = \"3px solid hsl(154, 59%, 51%)\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.fnameErrorMessage.style.display = \"none\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.fnameErrorIcon.style.visibility = \"hidden\";\n    }\n};\n//\nconst lnameCheck = () => {\n    if (!(_gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lastNameInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lastNameInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lastNameInputElem.value)) {\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lastNameInputElem.style.border = \"3px solid hsl(0, 100%, 74%)\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lastNameInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lastNameInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lastNameInputElem.setAttribute(\"placeholder\", \"\");\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lnameErrorMessage.style.display = \"block\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lnameErrorIcon.style.visibility = \"visible\";\n    }\n    else {\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lastNameInputElem.style.border = \"3px solid hsl(154, 59%, 51%)\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lnameErrorMessage.style.display = \"none\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.lnameErrorIcon.style.visibility = \"hidden\";\n    }\n};\n//\nconst emailCheck = () => {\n    if (_app__WEBPACK_IMPORTED_MODULE_0__.regex.test(_app__WEBPACK_IMPORTED_MODULE_0__.email)) {\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailInputElem.style.border = \"3px solid hsl(154, 59%, 51%)\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailErrorMessage.style.display = \"none\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailErrorIcon.style.visibility = \"hidden\";\n    }\n    else {\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailInputElem.style.border = \"3px solid hsl(0, 100%, 74%)\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailInputElem.setAttribute(\"placeholder\", \"example@email.com\");\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailInputElem.setAttribute(\"class\", \"email-input\");\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailErrorMessage.style.display = \"block\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.emailErrorIcon.style.visibility = \"visible\";\n    }\n};\n//\nconst passwordCheck = () => {\n    if (!(_gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem.value)) {\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem.style.border = \"3px solid hsl(0, 100%, 74%)\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem.setAttribute(\"placeholder\", \"\");\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordErrorMessage.style.display = \"block\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordErrorIcon.style.visibility = \"visible\";\n    }\n    else if (_app__WEBPACK_IMPORTED_MODULE_0__.paWordRegex.test(_app__WEBPACK_IMPORTED_MODULE_0__.passWord)) {\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem.style.border = \"3px solid hsl(154, 59%, 51%)\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordErrorMessage.style.display = \"none\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordErrorIcon.style.visibility = \"hidden\";\n    }\n    else {\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem.style.border = \"3px solid hsl(0, 100%, 74%)\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem === null || _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem === void 0 ? void 0 : _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordInputElem.setAttribute(\"placeholder\", \"\");\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordErrorMessage.style.display = \"block\";\n        _gettingHtmlElements__WEBPACK_IMPORTED_MODULE_1__.passwordErrorIcon.style.visibility = \"visible\";\n    }\n};\n\n\n//# sourceURL=webpack://learning_javascript_and_typescript/./src/checks.ts?");

/***/ }),

/***/ "./src/gettingHtmlElements.ts":
/*!************************************!*\
  !*** ./src/gettingHtmlElements.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonElem: () => (/* binding */ buttonElem),\n/* harmony export */   emailErrorIcon: () => (/* binding */ emailErrorIcon),\n/* harmony export */   emailErrorMessage: () => (/* binding */ emailErrorMessage),\n/* harmony export */   emailInputElem: () => (/* binding */ emailInputElem),\n/* harmony export */   firstNameInputElem: () => (/* binding */ firstNameInputElem),\n/* harmony export */   fnameErrorIcon: () => (/* binding */ fnameErrorIcon),\n/* harmony export */   fnameErrorMessage: () => (/* binding */ fnameErrorMessage),\n/* harmony export */   lastNameInputElem: () => (/* binding */ lastNameInputElem),\n/* harmony export */   lnameErrorIcon: () => (/* binding */ lnameErrorIcon),\n/* harmony export */   lnameErrorMessage: () => (/* binding */ lnameErrorMessage),\n/* harmony export */   passwordErrorIcon: () => (/* binding */ passwordErrorIcon),\n/* harmony export */   passwordErrorMessage: () => (/* binding */ passwordErrorMessage),\n/* harmony export */   passwordInputElem: () => (/* binding */ passwordInputElem),\n/* harmony export */   showPassWordElem: () => (/* binding */ showPassWordElem)\n/* harmony export */ });\n// getting the html elements\nconst firstNameInputElem = document.querySelector(\"#fname\");\n//\nconst fnameErrorMessage = document.querySelector(\".fname_error_message\");\n//\nconst fnameErrorIcon = document.querySelector(\".fname_error_icon\");\n//\nconst lastNameInputElem = document.querySelector(\"#lname\");\n//\nconst lnameErrorMessage = document.querySelector(\".lname_error_message\");\n//\nconst lnameErrorIcon = document.querySelector(\".lname_error_icon\");\n//\nconst emailInputElem = document.querySelector(\"#email\");\n//\nconst emailErrorMessage = document.querySelector(\".email_error_message\");\n//\nconst emailErrorIcon = document.querySelector(\".email_error_icon\");\n//\nconst passwordInputElem = document.querySelector(\"#psword\");\n//\nconst passwordErrorMessage = document.querySelector(\".password_error_message\");\n//\nconst passwordErrorIcon = document.querySelector(\".password_error_icon\");\n//\nconst showPassWordElem = document.querySelector(\".show_password\");\n//\nconst buttonElem = document.querySelector(\"button\");\n\n\n//# sourceURL=webpack://learning_javascript_and_typescript/./src/gettingHtmlElements.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;