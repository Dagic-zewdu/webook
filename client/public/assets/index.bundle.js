/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Dom/forms.ts":
/*!**************************!*\
  !*** ./src/Dom/forms.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.formObject = void 0;\r\nconst formObject = (form) => {\r\n    let inputs = form.querySelectorAll('input');\r\n    let values = {};\r\n    inputs.forEach(input => {\r\n        values[input.id] = input.value;\r\n    });\r\n    return values;\r\n};\r\nexports.formObject = formObject;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvRG9tL2Zvcm1zLnRzPzY0OTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxVQUFVLEdBQUMsQ0FBQyxJQUFvQixFQUFJLEVBQUU7SUFDL0MsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztJQUN6QyxJQUFJLE1BQU0sR0FBd0IsRUFBRTtJQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUs7SUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU07QUFDakIsQ0FBQztBQVBZLGtCQUFVLGNBT3RCIiwiZmlsZSI6Ii4vc3JjL0RvbS9mb3Jtcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmb3JtT2JqZWN0PShmb3JtOkhUTUxGb3JtRWxlbWVudCk6e309PntcclxuICAgIGxldCBpbnB1dHM9Zm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXHJcbiAgICBsZXQgdmFsdWVzOntbcHJvcDpzdHJpbmddOnN0cmluZ309e31cclxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICB2YWx1ZXNbaW5wdXQuaWRdPWlucHV0LnZhbHVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB2YWx1ZXNcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Dom/forms.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst forms_1 = __webpack_require__(/*! ./Dom/forms */ \"./src/Dom/forms.ts\");\r\nconst form = document.querySelector('#register');\r\nform.addEventListener('submit', e => {\r\n    e.preventDefault();\r\n    const student = forms_1.formObject(form);\r\n    console.log(student);\r\n});\r\nconsole.log(\"I am dagic\");\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZFQUFzQztBQUN0QyxNQUFNLElBQUksR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBcUI7QUFDbEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBQyxDQUFDLEdBQUU7SUFDOUIsQ0FBQyxDQUFDLGNBQWMsRUFBRTtJQUNuQixNQUFNLE9BQU8sR0FBQyxrQkFBVSxDQUFDLElBQUksQ0FBQztJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUN2QixDQUFDLENBQUM7QUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Zm9ybU9iamVjdH0gZnJvbSAnLi9Eb20vZm9ybXMnXHJcbmNvbnN0IGZvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZ2lzdGVyJykhIGFzIEhUTUxGb3JtRWxlbWVudFxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsZT0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgIGNvbnN0IHN0dWRlbnQ9Zm9ybU9iamVjdChmb3JtKVxyXG4gICBjb25zb2xlLmxvZyhzdHVkZW50KVxyXG59KVxyXG5jb25zb2xlLmxvZyhcIkkgYW0gZGFnaWNcIikiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;