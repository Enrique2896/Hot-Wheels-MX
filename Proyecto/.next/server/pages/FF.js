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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/FF.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/FF.js":
/*!*********************!*\
  !*** ./pages/FF.js ***!
  \*********************/
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

var _jsxFileName = "D:\\Enrique G\\Documents\\Programas\\Proyecto\\pages\\FF.js";



function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "HW Mx Factory Fresh"
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
        children: "Factory Fresh"
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
          title: "01 - 2019 Audi R8 Spyder",
          imgn: "https://i.postimg.cc/RVf3F61r/FF1.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "01 - 2019 Audi R8 Spyder",
          imgn: "https://i.postimg.cc/CxRfgPvN/FF1-5.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "02 - 19 Corvette ZR1 Convertible",
          imgn: "https://i.postimg.cc/WzrS4pb2/FF2.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "02 - 19 Corvette ZR1 Convertible",
          imgn: "https://i.postimg.cc/vBC3Mxyq/FF2-5.jpg"
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
          title: "03 - 2019 Kia Stinger GT",
          imgn: "https://i.postimg.cc/G2nPWpVt/kia2.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "03 - 2019 Kia Stinger GT",
          imgn: "https://i.postimg.cc/yxVmNbVz/Kia.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "04 - Land Rover Defender 90",
          imgn: "https://i.postimg.cc/52ctqFCX/rover.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "05 - Corvette C7 Z06",
          imgn: "https://i.postimg.cc/prCdBPgp/corvette2.jpg"
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
          title: "05 - Corvette C7 Z06",
          imgn: "https://i.postimg.cc/Zn4R3WsG/corvette.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "06 - Aston Martin Vulcan",
          imgn: "https://i.postimg.cc/nLq9DfcQ/vulcan.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "07 - 16 Bugatti Chiron",
          imgn: "https://i.postimg.cc/0N2kng94/chiron2.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "07 - 16 Bugatti Chiron (Zamac)",
          imgn: "https://i.postimg.cc/DzZhsqgk/chiron.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "flex justify-start ...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "08 - BMW K 1300 R (Negro)",
          imgn: "https://i.postimg.cc/VNGYH76k/bmw2.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "08 - BMW K 1300 R (Verde)",
          imgn: "https://i.postimg.cc/mgTBZx1r/bmw.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "09 - Tesla Model 3 (Azul)",
          imgn: "https://i.postimg.cc/T1Lb7LJp/tesla2.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "09 - Tesla Model 3 (Negro)",
          imgn: "https://i.postimg.cc/nryD6F3T/tesla.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "flex justify-start ...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "10 - 84 Audi Sport Quattro",
          imgn: "https://i.postimg.cc/qBSytwpn/audi.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "10 - 84 Audi Sport Quattro (STH)",
          imgn: "https://i.postimg.cc/tTmPNtPK/audi2.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRkYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZDMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhvbWUiLCJDYXJkMyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwiaW1nbiIsIkZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBSWUsU0FBU0EsSUFBVCxHQUFn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QUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBZUgsQ0FsQkQ7O0FBbUJlQSxxRUFBZixFOzs7Ozs7Ozs7OztBQ25CQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9GRi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvRkYuanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBDYXJkMyBmcm9tIFwic3JjL2NvbXBvbmVudHMvY2FyZDNcIlxyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ3NyYy9jb21wb25lbnRzL2Zvb3RlcidcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhXIE14IEZhY3RvcnkgRnJlc2g8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgIDxib2R5IGJhY2tncm91bmQ9XCJodHRwczovL2kucG9zdGltZy5jYy9qalg3cDVqSi9mb25kby1uZWdyby5wbmdcIj48L2JvZHk+XHJcblxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgIEZhY3RvcnkgRnJlc2hcclxuICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cIm5hdmVnYWRvclwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiPkluaWNpbzwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2Fub3NcIj5Bw7FvczwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcmllXCI+U2VyaWVzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvU1RIXCI+U1RIPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvWmFtYWNcIj5aYW1hYzwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktc3RhcnQgLi4uXCI+XHJcbiAgICAgICAgPENhcmQzIHRpdGxlPXtcIjAxIC0gMjAxOSBBdWRpIFI4IFNweWRlclwifSBpbWduPXtcImh0dHBzOi8vaS5wb3N0aW1nLmNjL1JWZjNGNjFyL0ZGMS5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMDEgLSAyMDE5IEF1ZGkgUjggU3B5ZGVyXCJ9IGltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvQ3hSZmdQdk4vRkYxLTUuanBnXCJ9IC8+XHJcbiAgICAgICAgPENhcmQzIHRpdGxlPXtcIjAyIC0gMTkgQ29ydmV0dGUgWlIxIENvbnZlcnRpYmxlXCJ9IGltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvV3pyUzRwYjIvRkYyLmpwZ1wifSAvPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCIwMiAtIDE5IENvcnZldHRlIFpSMSBDb252ZXJ0aWJsZVwifSBpbWduPXtcImh0dHBzOi8vaS5wb3N0aW1nLmNjL3ZCQzNNeHlxL0ZGMi01LmpwZ1wifS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1zdGFydCAuLi5cIj5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMDMgLSAyMDE5IEtpYSBTdGluZ2VyIEdUXCJ9IGltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvRzJuUFdwVnQva2lhMi5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMDMgLSAyMDE5IEtpYSBTdGluZ2VyIEdUXCJ9IGltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MveXhWbU5iVnovS2lhLmpwZ1wifSAvPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCIwNCAtIExhbmQgUm92ZXIgRGVmZW5kZXIgOTBcIn0gaW1nbj17XCJodHRwczovL2kucG9zdGltZy5jYy81MmN0cUZDWC9yb3Zlci5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMDUgLSBDb3J2ZXR0ZSBDNyBaMDZcIn0gaW1nbj17XCJodHRwczovL2kucG9zdGltZy5jYy9wckNkQlBncC9jb3J2ZXR0ZTIuanBnXCJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1zdGFydCAuLi5cIj5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMDUgLSBDb3J2ZXR0ZSBDNyBaMDZcIn0gaW1nbj17XCJodHRwczovL2kucG9zdGltZy5jYy9abjRSM1dzRy9jb3J2ZXR0ZS5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMDYgLSBBc3RvbiBNYXJ0aW4gVnVsY2FuXCJ9IGltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvbkxxOURmY1EvdnVsY2FuLmpwZ1wifSAvPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCIwNyAtIDE2IEJ1Z2F0dGkgQ2hpcm9uXCJ9IGltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvME4ya25nOTQvY2hpcm9uMi5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMDcgLSAxNiBCdWdhdHRpIENoaXJvbiAoWmFtYWMpXCJ9IGltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvRHpaaHNxZ2svY2hpcm9uLnBuZ1wifSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktc3RhcnQgLi4uXCI+XHJcbiAgICAgICAgPENhcmQzIHRpdGxlPXtcIjA4IC0gQk1XIEsgMTMwMCBSIChOZWdybylcIn0gaW1nbj17XCJodHRwczovL2kucG9zdGltZy5jYy9WTkdZSDc2ay9ibXcyLmpwZ1wifSAvPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCIwOCAtIEJNVyBLIDEzMDAgUiAoVmVyZGUpXCJ9IGltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvbWdUQlp4MXIvYm13LmpwZ1wifSAvPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCIwOSAtIFRlc2xhIE1vZGVsIDMgKEF6dWwpXCJ9IGltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvVDFMYjdMSnAvdGVzbGEyLmpwZ1wifSAvPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCIwOSAtIFRlc2xhIE1vZGVsIDMgKE5lZ3JvKVwifSBpbWduPXtcImh0dHBzOi8vaS5wb3N0aW1nLmNjL25yeUQ2RjNUL3Rlc2xhLmpwZ1wifSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktc3RhcnQgLi4uXCI+XHJcbiAgICAgICAgPENhcmQzIHRpdGxlPXtcIjEwIC0gODQgQXVkaSBTcG9ydCBRdWF0dHJvXCJ9IGltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvcUJTeXR3cG4vYXVkaS5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMTAgLSA4NCBBdWRpIFNwb3J0IFF1YXR0cm8gKFNUSClcIn0gaW1nbj17XCJodHRwczovL2kucG9zdGltZy5jYy90VG1QTnRQSy9hdWRpMi5qcGdcIn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxGb290ZXIgLz5cclxuXHJcbiAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJjb25zdCBDYXJkMyA9ICh7dGl0bGUsIGRlc2NyaXB0aW9uLCBsaW5rLCBpbWdufSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8aDM+e3RpdGxlfSAmcmFycjs8L2gzPlxyXG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPGltZyBzcmM9e2ltZ259IHdpZHRoPVwiMTUwXCIgaGVpZ2h0PVwiMzAwXCI+PC9pbWc+XHJcbiAgICAgIDwvYT5cclxuICAgIClcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkMzsgIiwiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgRGVzYXJyb2xsYWRvIHBvcjogeycgJ31cclxuICAgICAgICA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9mb290ZXI+XHJcblxyXG4gICAgKVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9