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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.formObject = void 0;\r\n/**\r\n * @param html form\r\n * @returns object of the form with their id as their attribute {name:inputvalue}\r\n */\r\nconst formObject = (form) => {\r\n    let inputs = form.querySelectorAll('input');\r\n    let values = {};\r\n    inputs.forEach(input => {\r\n        values[input.id] = input.value;\r\n    });\r\n    return values;\r\n};\r\nexports.formObject = formObject;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvRG9tL2Zvcm1zLnRzPzY0OTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7OztHQUdHO0FBQ0ksTUFBTSxVQUFVLEdBQUMsQ0FBQyxJQUFvQixFQUFDLEVBQUU7SUFDNUMsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztJQUN6QyxJQUFJLE1BQU0sR0FBd0IsRUFBRTtJQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUs7SUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU07QUFDakIsQ0FBQztBQVBZLGtCQUFVLGNBT3RCIiwiZmlsZSI6Ii4vc3JjL0RvbS9mb3Jtcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAcGFyYW0gaHRtbCBmb3JtIFxyXG4gKiBAcmV0dXJucyBvYmplY3Qgb2YgdGhlIGZvcm0gd2l0aCB0aGVpciBpZCBhcyB0aGVpciBhdHRyaWJ1dGUge25hbWU6aW5wdXR2YWx1ZX1cclxuICovXHJcbmV4cG9ydCBjb25zdCBmb3JtT2JqZWN0PShmb3JtOkhUTUxGb3JtRWxlbWVudCk9PntcclxuICAgIGxldCBpbnB1dHM9Zm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXHJcbiAgICBsZXQgdmFsdWVzOntbcHJvcDpzdHJpbmddOnN0cmluZ309e31cclxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICB2YWx1ZXNbaW5wdXQuaWRdPWlucHV0LnZhbHVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB2YWx1ZXNcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Dom/forms.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst forms_1 = __webpack_require__(/*! ./Dom/forms */ \"./src/Dom/forms.ts\");\r\nconst form = document.querySelector('#register');\r\nform.addEventListener('submit', e => {\r\n    e.preventDefault();\r\n    const student = forms_1.formObject(form);\r\n    console.log(student);\r\n});\r\nlet timer;\r\nlet input = document.querySelector('input');\r\ninput.addEventListener('input', e => {\r\n    if (input.matches('[data-color]')) {\r\n        clearTimeout(timer);\r\n        timer = setTimeout(() => {\r\n            document.documentElement.style.setProperty(`--color-${input.dataset.color}`, input.value);\r\n        }, 100);\r\n    }\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZFQUFzQztBQUd0QyxNQUFNLElBQUksR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBcUI7QUFDbEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBQyxDQUFDLEdBQUU7SUFDOUIsQ0FBQyxDQUFDLGNBQWMsRUFBRTtJQUNuQixNQUFNLE9BQU8sR0FBQyxrQkFBVSxDQUFDLElBQUksQ0FBQztJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUN2QixDQUFDLENBQUM7QUFDRixJQUFJLEtBQVMsQ0FBQztBQUNkLElBQUksS0FBSyxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFFO0FBQzFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFFbEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFHO1FBQ2xDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUN0QixRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RixDQUFDLEVBQUUsR0FBRyxDQUFDO0tBQ1I7QUFDSCxDQUFDLENBQUMiLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Zvcm1PYmplY3R9IGZyb20gJy4vRG9tL2Zvcm1zJ1xyXG5pbXBvcnQgeyBtYXRjaFN0cmluZyB9IGZyb20gJy4vVXRpbGl0eS9zZWFyY2gnXHJcblxyXG5jb25zdCBmb3JtPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3RlcicpISBhcyBIVE1MRm9ybUVsZW1lbnRcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLGU9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICBjb25zdCBzdHVkZW50PWZvcm1PYmplY3QoZm9ybSlcclxuICAgY29uc29sZS5sb2coc3R1ZGVudClcclxufSlcclxubGV0IHRpbWVyOmFueTtcclxubGV0IGlucHV0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykhXHJcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XHJcbiAgXHJcbiAgaWYoIGlucHV0Lm1hdGNoZXMoJ1tkYXRhLWNvbG9yXScpICkge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShgLS1jb2xvci0ke2lucHV0LmRhdGFzZXQuY29sb3J9YCwgaW5wdXQudmFsdWUpO1xyXG4gICAgfSwgMTAwKVxyXG4gIH1cclxufSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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