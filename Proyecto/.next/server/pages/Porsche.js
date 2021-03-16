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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Porsche.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Porsche.js":
/*!**************************!*\
  !*** ./pages/Porsche.js ***!
  \**************************/
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

var _jsxFileName = "D:\\Enrique G\\Documents\\Programas\\Proyecto\\pages\\Porsche.js";



function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "HW Mx Porsche"
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
        children: "Porsche"
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
              href: "http://localhost:3000/Zamac",
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
          title: "01 - 89 Porsche 944 Turbo",
          imgn: "https://static.wikia.nocookie.net/hotwheels/images/e/ef/2020_Porsche_-_01.05_-_%2784_Porsche_944_Turbo_01.jpg/revision/latest/scale-to-width-down/1000?cb=20200826200020"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "01 - 89 Porsche 944 Turbo",
          imgn: "https://static.wikia.nocookie.net/hotwheels/images/4/45/2020_Porsche_-_01.05_-_%2784_Porsche_944_Turbo_09.jpg/revision/latest/scale-to-width-down/1000?cb=20200826201432"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "02 - 96 Porsche Carrera",
          imgn: "https://static.wikia.nocookie.net/hotwheels/images/7/7d/996CARR.jpg/revision/latest/scale-to-width-down/466?cb=20200719205209"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "02 - 96 Porsche Carrera",
          imgn: "https://static.wikia.nocookie.net/hotwheels/images/a/ad/News660004.jpg/revision/latest/scale-to-width-down/548?cb=20191103134815"
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
          title: "02 - 96 Porsche Carrera",
          imgn: "https://static.wikia.nocookie.net/hotwheels/images/9/9e/2020_Porsche_-_02.05_-_%2796_Porsche_Carrera_01.jpg/revision/latest/scale-to-width-down/1000?cb=20200826185659"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "03 - Porsche Panamera Turbo S E-Hybrid Sport Turismo",
          imgn: "https://static.wikia.nocookie.net/hotwheels/images/3/3a/GHF19_-_Porsche_Panamera_Turbo_S_E-Hybrid_Sport_Turismo_Carded-1.jpg/revision/latest/scale-to-width-down/1000?cb=20210115183408"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "03 - Porsche Panamera Turbo S E-Hybrid Sport Turismo",
          imgn: "https://static.wikia.nocookie.net/hotwheels/images/c/c9/2205.JPG/revision/latest/scale-to-width-down/1000?cb=20191109071245"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "04 - Porsche 917 LH",
          imgn: "https://static.wikia.nocookie.net/hotwheels/images/6/6a/2203.JPG/revision/latest/scale-to-width-down/1000?cb=20191109065537"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "flex justify-start ...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "04 - Porsche 917 LH (Zamac)",
          imgn: "https://static.wikia.nocookie.net/hotwheels/images/a/a1/Porsche_917_LH.jpg/revision/latest/scale-to-width-down/549?cb=20191104023505"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "05 - Porsche 918 Spyder",
          imgn: "https://static.wikia.nocookie.net/hotwheels/images/1/1c/2020_Porsche_-_05.05_-_Porsche_918_Spyder_01.jpg/revision/latest/scale-to-width-down/1000?cb=20200826202013"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "05 - Porsche 918 Spyder (STH)",
          imgn: "https://i.postimg.cc/x8FrvPvN/Porsche-918.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUG9yc2NoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSG9tZSIsIkNhcmQzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJpbWduIiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFJZSxTQUFTQSxJQUFU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QSwyQkFDQTtBQUNFLFVBQUksRUFBQyx3R0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBR0UsU0FBRyxFQUFDLHFCQUhOO0FBQUEsdUNBS3FCLEdBTHJCLGVBTUU7QUFBSyxXQUFHLEVBQUMsYUFBVDtBQUF1QixXQUFHLEVBQUMsYUFBM0I7QUFBeUMsaUJBQVMsRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQWVILENBbEJEOztBQW1CZUEscUVBQWYsRTs7Ozs7Ozs7Ozs7QUNuQkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvUG9yc2NoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvUG9yc2NoZS5qc1wiKTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IENhcmQzIGZyb20gXCJzcmMvY29tcG9uZW50cy9jYXJkM1wiXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SFcgTXggUG9yc2NoZTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgPGJvZHkgYmFja2dyb3VuZD1cImh0dHBzOi8vaS5wb3N0aW1nLmNjL2pqWDdwNWpKL2ZvbmRvLW5lZ3JvLnBuZ1wiPjwvYm9keT5cclxuXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgUG9yc2NoZVxyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwibmF2ZWdhZG9yXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI+SW5pY2lvPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYW5vc1wiPkHDsW9zPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VyaWVcIj5TZXJpZXM8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9TVEhcIj5TVEg8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9aYW1hY1wiPlphbWFjPC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1zdGFydCAuLi5cIj5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMDEgLSA4OSBQb3JzY2hlIDk0NCBUdXJib1wifSBpbWduPXtcImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9ob3R3aGVlbHMvaW1hZ2VzL2UvZWYvMjAyMF9Qb3JzY2hlXy1fMDEuMDVfLV8lMjc4NF9Qb3JzY2hlXzk0NF9UdXJib18wMS5qcGcvcmV2aXNpb24vbGF0ZXN0L3NjYWxlLXRvLXdpZHRoLWRvd24vMTAwMD9jYj0yMDIwMDgyNjIwMDAyMFwifSAvPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCIwMSAtIDg5IFBvcnNjaGUgOTQ0IFR1cmJvXCJ9IGltZ249e1wiaHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L2hvdHdoZWVscy9pbWFnZXMvNC80NS8yMDIwX1BvcnNjaGVfLV8wMS4wNV8tXyUyNzg0X1BvcnNjaGVfOTQ0X1R1cmJvXzA5LmpwZy9yZXZpc2lvbi9sYXRlc3Qvc2NhbGUtdG8td2lkdGgtZG93bi8xMDAwP2NiPTIwMjAwODI2MjAxNDMyXCJ9IC8+XHJcbiAgICAgICAgPENhcmQzIHRpdGxlPXtcIjAyIC0gOTYgUG9yc2NoZSBDYXJyZXJhXCJ9IGltZ249e1wiaHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L2hvdHdoZWVscy9pbWFnZXMvNy83ZC85OTZDQVJSLmpwZy9yZXZpc2lvbi9sYXRlc3Qvc2NhbGUtdG8td2lkdGgtZG93bi80NjY/Y2I9MjAyMDA3MTkyMDUyMDlcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMDIgLSA5NiBQb3JzY2hlIENhcnJlcmFcIn0gaW1nbj17XCJodHRwczovL3N0YXRpYy53aWtpYS5ub2Nvb2tpZS5uZXQvaG90d2hlZWxzL2ltYWdlcy9hL2FkL05ld3M2NjAwMDQuanBnL3JldmlzaW9uL2xhdGVzdC9zY2FsZS10by13aWR0aC1kb3duLzU0OD9jYj0yMDE5MTEwMzEzNDgxNVwifS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1zdGFydCAuLi5cIj5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMDIgLSA5NiBQb3JzY2hlIENhcnJlcmFcIn0gaW1nbj17XCJodHRwczovL3N0YXRpYy53aWtpYS5ub2Nvb2tpZS5uZXQvaG90d2hlZWxzL2ltYWdlcy85LzllLzIwMjBfUG9yc2NoZV8tXzAyLjA1Xy1fJTI3OTZfUG9yc2NoZV9DYXJyZXJhXzAxLmpwZy9yZXZpc2lvbi9sYXRlc3Qvc2NhbGUtdG8td2lkdGgtZG93bi8xMDAwP2NiPTIwMjAwODI2MTg1NjU5XCJ9IC8+XHJcbiAgICAgICAgPENhcmQzIHRpdGxlPXtcIjAzIC0gUG9yc2NoZSBQYW5hbWVyYSBUdXJibyBTIEUtSHlicmlkIFNwb3J0IFR1cmlzbW9cIn0gaW1nbj17XCJodHRwczovL3N0YXRpYy53aWtpYS5ub2Nvb2tpZS5uZXQvaG90d2hlZWxzL2ltYWdlcy8zLzNhL0dIRjE5Xy1fUG9yc2NoZV9QYW5hbWVyYV9UdXJib19TX0UtSHlicmlkX1Nwb3J0X1R1cmlzbW9fQ2FyZGVkLTEuanBnL3JldmlzaW9uL2xhdGVzdC9zY2FsZS10by13aWR0aC1kb3duLzEwMDA/Y2I9MjAyMTAxMTUxODM0MDhcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMDMgLSBQb3JzY2hlIFBhbmFtZXJhIFR1cmJvIFMgRS1IeWJyaWQgU3BvcnQgVHVyaXNtb1wifSBpbWduPXtcImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9ob3R3aGVlbHMvaW1hZ2VzL2MvYzkvMjIwNS5KUEcvcmV2aXNpb24vbGF0ZXN0L3NjYWxlLXRvLXdpZHRoLWRvd24vMTAwMD9jYj0yMDE5MTEwOTA3MTI0NVwifSAvPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCIwNCAtIFBvcnNjaGUgOTE3IExIXCJ9IGltZ249e1wiaHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L2hvdHdoZWVscy9pbWFnZXMvNi82YS8yMjAzLkpQRy9yZXZpc2lvbi9sYXRlc3Qvc2NhbGUtdG8td2lkdGgtZG93bi8xMDAwP2NiPTIwMTkxMTA5MDY1NTM3XCJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1zdGFydCAuLi5cIj5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMDQgLSBQb3JzY2hlIDkxNyBMSCAoWmFtYWMpXCJ9IGltZ249e1wiaHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L2hvdHdoZWVscy9pbWFnZXMvYS9hMS9Qb3JzY2hlXzkxN19MSC5qcGcvcmV2aXNpb24vbGF0ZXN0L3NjYWxlLXRvLXdpZHRoLWRvd24vNTQ5P2NiPTIwMTkxMTA0MDIzNTA1XCJ9IC8+XHJcbiAgICAgICAgPENhcmQzIHRpdGxlPXtcIjA1IC0gUG9yc2NoZSA5MTggU3B5ZGVyXCJ9IGltZ249e1wiaHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L2hvdHdoZWVscy9pbWFnZXMvMS8xYy8yMDIwX1BvcnNjaGVfLV8wNS4wNV8tX1BvcnNjaGVfOTE4X1NweWRlcl8wMS5qcGcvcmV2aXNpb24vbGF0ZXN0L3NjYWxlLXRvLXdpZHRoLWRvd24vMTAwMD9jYj0yMDIwMDgyNjIwMjAxM1wifSAvPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCIwNSAtIFBvcnNjaGUgOTE4IFNweWRlciAoU1RIKVwifSBpbWduPXtcImh0dHBzOi8vaS5wb3N0aW1nLmNjL3g4RnJ2UHZOL1BvcnNjaGUtOTE4LmpwZ1wifSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Rm9vdGVyIC8+XHJcblxyXG4gIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiY29uc3QgQ2FyZDMgPSAoe3RpdGxlLCBkZXNjcmlwdGlvbiwgbGluaywgaW1nbn0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YSBocmVmPXtsaW5rfSBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgPGgzPnt0aXRsZX0gJnJhcnI7PC9oMz5cclxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWdufSB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjMwMFwiPjwvaW1nPlxyXG4gICAgICA8L2E+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDM7ICIsImNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIERlc2Fycm9sbGFkbyBwb3I6IHsnICd9XHJcbiAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZm9vdGVyPlxyXG5cclxuICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==