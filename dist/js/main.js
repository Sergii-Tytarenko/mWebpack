/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../\u0000#src/js/functions/bodylock.js":
/*!*****************************************!*\
  !*** ../ #src/js/functions/bodylock.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ body_lock)
/* harmony export */ });
/* BodyLock
-----------------------------------------------------------------------------*/
function body_lock(delay) {
  var unlock = true;
  var body = document.querySelector("body");

  if (body.classList.contains("lock")) {
    body_lock_remove(delay);
  } else {
    body_lock_add(delay);
  }

  function body_lock_remove(delay) {
    var body = document.querySelector("body");

    if (unlock) {
      var lock_padding = document.querySelectorAll(".lp");
      setTimeout(function () {
        for (var index = 0; index < lock_padding.length; index++) {
          var el = lock_padding[index];
          el.style.paddingRight = "0px";
        }

        body.style.paddingRight = "0px";
        body.classList.remove("lock");
      }, delay);
      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, delay);
    }
  }

  function body_lock_add(delay) {
    var body = document.querySelector("body");

    if (unlock) {
      var lock_padding = document.querySelectorAll(".lp");

      for (var index = 0; index < lock_padding.length; index++) {
        var el = lock_padding[index];
        el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
      }

      body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
      body.classList.add("lock");
      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, delay);
    }
  }
}

/***/ }),

/***/ "../node_modules/normalize.css/normalize.css":
/*!***************************************************!*\
  !*** ../node_modules/normalize.css/normalize.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../\u0000#src/scss/style.scss":
/*!********************************!*\
  !*** ../ #src/scss/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../\u0000#src/img/bg.png":
/*!***************************!*\
  !*** ../ #src/img/bg.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bg.png";

/***/ }),

/***/ "../\u0000#src/img/desk.jpg":
/*!*****************************!*\
  !*** ../ #src/img/desk.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/desk.jpg";

/***/ }),

/***/ "../\u0000#src/img/pn.png":
/*!***************************!*\
  !*** ../ #src/img/pn.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pn.png";

/***/ }),

/***/ "../\u0000#src/img/sv.svg":
/*!***************************!*\
  !*** ../ #src/img/sv.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sv.svg";

/***/ }),

/***/ "../\u0000#src/img/webpack.png":
/*!********************************!*\
  !*** ../ #src/img/webpack.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/webpack.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ../ #src/js/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "../\u0000#src/scss/style.scss");
/* harmony import */ var _functions_bodylock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/bodylock */ "../\u0000#src/js/functions/bodylock.js");
/* harmony import */ var _img_webpack_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/webpack.png */ "../\u0000#src/img/webpack.png");
/* harmony import */ var _img_bg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/bg.png */ "../\u0000#src/img/bg.png");
/* harmony import */ var _img_desk_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/desk.jpg */ "../\u0000#src/img/desk.jpg");
/* harmony import */ var _img_pn_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/pn.png */ "../\u0000#src/img/pn.png");
/* harmony import */ var _img_sv_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/sv.svg */ "../\u0000#src/img/sv.svg");



console.log('hello world');




 // require.context("../img/", true, /\.(png|svg|jpg|gif)$/);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map