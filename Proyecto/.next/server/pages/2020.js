module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/2020.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/2020.js":
/*!***********************!*\
  !*** ./pages/2020.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_card3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/card3 */ "./src/components/card3.js");
/* harmony import */ var src_components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/footer */ "./src/components/footer.js");

var _jsxFileName = "D:\\Enrique G\\Documents\\Programas\\Proyecto\\pages\\2020.js";



function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "HW Mx 2020"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("body", {
        background: "https://i.postimg.cc/jjX7p5jJ/fondo-negro.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "title",
        children: "A\xF1o 2020"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "navegador",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "http://localhost:3000",
              children: "Inicio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "http://localhost:3000/anos",
              children: "A\xF1os"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "http://localhost:3000/serie",
              children: "Series"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "http://localhost:3000/STH",
              children: "STH"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "Zamac"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "flex justify-start ...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "2 Jet Z",
          description: "Serie: HW Dream Garage (01)",
          imgn: "https://static.wikia.nocookie.net/hotwheels/images/c/c8/CaseB0005.jpg/revision/latest/scale-to-width-down/572?cb=20191102163129"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "Nissan Skyline GT-R (BNR32)",
          description: "Serie: HW Turbo (01)",
          imgn: "https://static.wikia.nocookie.net/hotwheels/images/a/a7/CaseA200002.jpg/revision/latest/scale-to-width-down/611?cb=20191102020659"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "Land Rover Series III Pickup",
          description: "Serie: Baja Blazers (10)",
          imgn: "https://static.wikia.nocookie.net/hotwheels/images/8/87/S-l300-1581412686.jpg/revision/latest/scale-to-width-down/300?cb=20200211091806"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "Tooligan",
          description: "Serie: 	Experimotors (01)",
          imgn: "https://http2.mlstatic.com/D_NQ_NP_963366-MLM40575247426_012020-O.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "flex justify-start ...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "	Gotta Go",
          description: "Serie: Experimotors (02)",
          imgn: "https://i.postimg.cc/c1kmfJgn/5.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "	Bubble Matic",
          description: "Serie: Experimotors (03)",
          imgn: "https://i.postimg.cc/SKZB8hWN/6.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "Road Bandit",
          description: "Serie: HW Metro (01)",
          imgn: "https://i.postimg.cc/cHrVBbm7/7.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "	Diaper Dragger",
          description: "Serie: HW Metro (02)",
          imgn: "https://i.postimg.cc/MGKkvTfF/8.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/card3.js":
/*!*********************************!*\
  !*** ./src/components/card3.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\Enrique G\\Documents\\Programas\\Proyecto\\src\\components\\card3.js";

const Card3 = ({
  title,
  description,
  link,
  imgn
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    href: link,
    className: "card",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: [title, " \u2192"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: imgn,
      width: "150",
      height: "300"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Card3);

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\Enrique G\\Documents\\Programas\\Proyecto\\src\\components\\footer.js";

const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      target: "_blank",
      rel: "noopener noreferrer",
      children: ["Desarrollado por: ", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/vercel.svg",
        alt: "Vercel Logo",
        className: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvMjAyMC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSG9tZSIsIkNhcmQzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJpbWduIiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFJZSxTQUFTQSxJQUFULEdB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QyxpQkFBUyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBZUgsQ0FsQkQ7O0FBbUJlQSxxRUFBZixFOzs7Ozs7Ozs7OztBQ25CQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy8yMDIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy8yMDIwLmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgQ2FyZDMgZnJvbSBcInNyYy9jb21wb25lbnRzL2NhcmQzXCJcclxuaW1wb3J0IEZvb3RlciBmcm9tICdzcmMvY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5IVyBNeCAyMDIwPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICA8Ym9keSBiYWNrZ3JvdW5kPVwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvampYN3A1akovZm9uZG8tbmVncm8ucG5nXCI+PC9ib2R5PlxyXG5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICBBw7FvIDIwMjBcclxuICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cIm5hdmVnYWRvclwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiPkluaWNpbzwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2Fub3NcIj5Bw7FvczwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcmllXCI+U2VyaWVzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvU1RIXCI+U1RIPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+WmFtYWM8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IC4uLlwiPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCIyIEpldCBaXCJ9IGRlc2NyaXB0aW9uPXtcIlNlcmllOiBIVyBEcmVhbSBHYXJhZ2UgKDAxKVwifWltZ249e1wiaHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L2hvdHdoZWVscy9pbWFnZXMvYy9jOC9DYXNlQjAwMDUuanBnL3JldmlzaW9uL2xhdGVzdC9zY2FsZS10by13aWR0aC1kb3duLzU3Mj9jYj0yMDE5MTEwMjE2MzEyOVwifSAvPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCJOaXNzYW4gU2t5bGluZSBHVC1SIChCTlIzMilcIn0gZGVzY3JpcHRpb249e1wiU2VyaWU6IEhXIFR1cmJvICgwMSlcIn1pbWduPXtcImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9ob3R3aGVlbHMvaW1hZ2VzL2EvYTcvQ2FzZUEyMDAwMDIuanBnL3JldmlzaW9uL2xhdGVzdC9zY2FsZS10by13aWR0aC1kb3duLzYxMT9jYj0yMDE5MTEwMjAyMDY1OVwifSAvPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCJMYW5kIFJvdmVyIFNlcmllcyBJSUkgUGlja3VwXCJ9IGRlc2NyaXB0aW9uPXtcIlNlcmllOiBCYWphIEJsYXplcnMgKDEwKVwifWltZ249e1wiaHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L2hvdHdoZWVscy9pbWFnZXMvOC84Ny9TLWwzMDAtMTU4MTQxMjY4Ni5qcGcvcmV2aXNpb24vbGF0ZXN0L3NjYWxlLXRvLXdpZHRoLWRvd24vMzAwP2NiPTIwMjAwMjExMDkxODA2XCJ9IC8+XHJcbiAgICAgICAgPENhcmQzIHRpdGxlPXtcIlRvb2xpZ2FuXCJ9IGRlc2NyaXB0aW9uPXtcIlNlcmllOiBcdEV4cGVyaW1vdG9ycyAoMDEpXCJ9aW1nbj17XCJodHRwczovL2h0dHAyLm1sc3RhdGljLmNvbS9EX05RX05QXzk2MzM2Ni1NTE00MDU3NTI0NzQyNl8wMTIwMjAtTy5qcGdcIn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IC4uLlwiPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCJcdEdvdHRhIEdvXCJ9IGRlc2NyaXB0aW9uPXtcIlNlcmllOiBFeHBlcmltb3RvcnMgKDAyKVwifWltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvYzFrbWZKZ24vNS5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiXHRCdWJibGUgTWF0aWNcIn0gZGVzY3JpcHRpb249e1wiU2VyaWU6IEV4cGVyaW1vdG9ycyAoMDMpXCJ9aW1nbj17XCJodHRwczovL2kucG9zdGltZy5jYy9TS1pCOGhXTi82LmpwZ1wifSAvPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCJSb2FkIEJhbmRpdFwifSBkZXNjcmlwdGlvbj17XCJTZXJpZTogSFcgTWV0cm8gKDAxKVwifWltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvY0hyVkJibTcvNy5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiXHREaWFwZXIgRHJhZ2dlclwifSBkZXNjcmlwdGlvbj17XCJTZXJpZTogSFcgTWV0cm8gKDAyKVwifWltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvTUdLa3ZUZkYvOC5qcGdcIn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPEZvb3RlciAvPlxyXG5cclxuICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsImNvbnN0IENhcmQzID0gKHt0aXRsZSwgZGVzY3JpcHRpb24sIGxpbmssIGltZ259KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGEgaHJlZj17bGlua30gY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIDxoMz57dGl0bGV9ICZyYXJyOzwvaDM+XHJcbiAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8aW1nIHNyYz17aW1nbn0gd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCIzMDBcIj48L2ltZz5cclxuICAgICAgPC9hPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQzOyAiLCJjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgID5cclxuICAgICAgICBEZXNhcnJvbGxhZG8gcG9yOiB7JyAnfVxyXG4gICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICApXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=