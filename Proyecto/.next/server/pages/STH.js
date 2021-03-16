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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/STH.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/STH.js":
/*!**********************!*\
  !*** ./pages/STH.js ***!
  \**********************/
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

var _jsxFileName = "D:\\Enrique G\\Documents\\Programas\\Proyecto\\pages\\STH.js";



function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "HW Mx STH"
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
        children: "Super Treasure Hunts"
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
              href: "#",
              children: "Zamac"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
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
          title: "Nissan Skyline GT-R (BNR32)",
          description: "Serie: Turbo",
          imgn: "https://i.postimg.cc/9XxjHc6X/Skyline.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "Ford GT-40",
          description: "Serie: Race Day",
          imgn: "https://i.postimg.cc/Bbv9PzKG/Ford-GT.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "67 Jeepster Commando",
          description: "Serie: Baja Blazers",
          imgn: "https://i.postimg.cc/jSDxFDCr/Jeepster.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "Porsche 918 Spyder (2018)",
          description: "Serie: Porsche",
          imgn: "https://i.postimg.cc/x8FrvPvN/Porsche-918.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "flex justify-start ...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "88 Honda CR-X",
          description: "Serie: Honda",
          imgn: "https://i.postimg.cc/52D4dfFQ/Honda.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "Mazda RX-7",
          description: "Serie: Speed Blur",
          imgn: "https://i.postimg.cc/nzGpD7Sq/RX7.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "17 Nissan GT-R (R35)",
          description: "Serie: 	HW Speed Graphics",
          imgn: "https://i.postimg.cc/g0vPC8W1/GTR.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "84 Audi Sport Quattro",
          description: "Serie: Factory Fresh",
          imgn: "https://i.postimg.cc/9XxjHc6X/Skyline.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "flex justify-start ...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "Lamborghini Sesto Elemento",
          description: "Serie: HW Exotics",
          imgn: "https://i.postimg.cc/BvDqJRxY/Sesto.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "57 Chevy",
          description: "Serie: Rod Squad",
          imgn: "https://i.postimg.cc/9XxjHc6X/Skyline.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "69 Chevy Pickup",
          description: "Serie: HW Hot Trucks",
          imgn: "https://i.postimg.cc/zB818vDv/Chevy.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "65 Ford Galaxie",
          description: "Serie: HW Flames",
          imgn: "https://i.postimg.cc/HxgTn3zp/Galaxie.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "flex justify-start ...",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "18 Dodge Challenger SRT Demon",
          description: "Serie: Muscle Mania",
          imgn: "https://i.postimg.cc/vT8MLBCk/Charger.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "17 Pagani Huayra Roadster",
          description: "Serie: HW Roadsters",
          imgn: "https://i.postimg.cc/Ssdbs4jr/Huayra.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_card3__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "64 Chevy Chevelle SS",
          description: "Serie: Nightburnerz",
          imgn: "https://i.postimg.cc/ZYjJY8dS/Chevelle.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvU1RILmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmQzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIb21lIiwiQ2FyZDMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGluayIsImltZ24iLCJGb290ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLElBQVQsR0FB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SCxDQWxCRDs7QUFtQmVBLHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDbkJBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL1NUSC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvU1RILmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgQ2FyZDMgZnJvbSBcInNyYy9jb21wb25lbnRzL2NhcmQzXCJcclxuaW1wb3J0IEZvb3RlciBmcm9tICdzcmMvY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5IVyBNeCBTVEg8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgIDxib2R5IGJhY2tncm91bmQ9XCJodHRwczovL2kucG9zdGltZy5jYy9qalg3cDVqSi9mb25kby1uZWdyby5wbmdcIj48L2JvZHk+XHJcblxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgIFN1cGVyIFRyZWFzdXJlIEh1bnRzXHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJuYXZlZ2Fkb3JcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIj5JbmljaW88L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hbm9zXCI+QcOxb3M8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXJpZVwiPlNlcmllczwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlphbWFjPC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1zdGFydCAuLi5cIj5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiTmlzc2FuIFNreWxpbmUgR1QtUiAoQk5SMzIpXCJ9IGRlc2NyaXB0aW9uPXtcIlNlcmllOiBUdXJib1wifWltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvOVh4akhjNlgvU2t5bGluZS5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiRm9yZCBHVC00MFwifSBkZXNjcmlwdGlvbj17XCJTZXJpZTogUmFjZSBEYXlcIn1pbWduPXtcImh0dHBzOi8vaS5wb3N0aW1nLmNjL0JidjlQektHL0ZvcmQtR1QuanBnXCJ9IC8+XHJcbiAgICAgICAgPENhcmQzIHRpdGxlPXtcIjY3IEplZXBzdGVyIENvbW1hbmRvXCJ9IGRlc2NyaXB0aW9uPXtcIlNlcmllOiBCYWphIEJsYXplcnNcIn1pbWduPXtcImh0dHBzOi8vaS5wb3N0aW1nLmNjL2pTRHhGRENyL0plZXBzdGVyLmpwZ1wifSAvPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCJQb3JzY2hlIDkxOCBTcHlkZXIgKDIwMTgpXCJ9IGRlc2NyaXB0aW9uPXtcIlNlcmllOiBQb3JzY2hlXCJ9aW1nbj17XCJodHRwczovL2kucG9zdGltZy5jYy94OEZydlB2Ti9Qb3JzY2hlLTkxOC5qcGdcIn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IC4uLlwiPlxyXG4gICAgICAgIDxDYXJkMyB0aXRsZT17XCI4OCBIb25kYSBDUi1YXCJ9IGRlc2NyaXB0aW9uPXtcIlNlcmllOiBIb25kYVwifWltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvNTJENGRmRlEvSG9uZGEuanBnXCJ9IC8+XHJcbiAgICAgICAgPENhcmQzIHRpdGxlPXtcIk1hemRhIFJYLTdcIn0gZGVzY3JpcHRpb249e1wiU2VyaWU6IFNwZWVkIEJsdXJcIn1pbWduPXtcImh0dHBzOi8vaS5wb3N0aW1nLmNjL256R3BEN1NxL1JYNy5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMTcgTmlzc2FuIEdULVIgKFIzNSlcIn0gZGVzY3JpcHRpb249e1wiU2VyaWU6IFx0SFcgU3BlZWQgR3JhcGhpY3NcIn1pbWduPXtcImh0dHBzOi8vaS5wb3N0aW1nLmNjL2cwdlBDOFcxL0dUUi5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiODQgQXVkaSBTcG9ydCBRdWF0dHJvXCJ9IGRlc2NyaXB0aW9uPXtcIlNlcmllOiBGYWN0b3J5IEZyZXNoXCJ9aW1nbj17XCJodHRwczovL2kucG9zdGltZy5jYy85WHhqSGM2WC9Ta3lsaW5lLmpwZ1wifSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktc3RhcnQgLi4uXCI+XHJcbiAgICAgICAgPENhcmQzIHRpdGxlPXtcIkxhbWJvcmdoaW5pIFNlc3RvIEVsZW1lbnRvXCJ9IGRlc2NyaXB0aW9uPXtcIlNlcmllOiBIVyBFeG90aWNzXCJ9aW1nbj17XCJodHRwczovL2kucG9zdGltZy5jYy9CdkRxSlJ4WS9TZXN0by5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiNTcgQ2hldnlcIn0gZGVzY3JpcHRpb249e1wiU2VyaWU6IFJvZCBTcXVhZFwifWltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvOVh4akhjNlgvU2t5bGluZS5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiNjkgQ2hldnkgUGlja3VwXCJ9IGRlc2NyaXB0aW9uPXtcIlNlcmllOiBIVyBIb3QgVHJ1Y2tzXCJ9aW1nbj17XCJodHRwczovL2kucG9zdGltZy5jYy96QjgxOHZEdi9DaGV2eS5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiNjUgRm9yZCBHYWxheGllXCJ9IGRlc2NyaXB0aW9uPXtcIlNlcmllOiBIVyBGbGFtZXNcIn1pbWduPXtcImh0dHBzOi8vaS5wb3N0aW1nLmNjL0h4Z1RuM3pwL0dhbGF4aWUuanBnXCJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1zdGFydCAuLi5cIj5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMTggRG9kZ2UgQ2hhbGxlbmdlciBTUlQgRGVtb25cIn0gZGVzY3JpcHRpb249e1wiU2VyaWU6IE11c2NsZSBNYW5pYVwifWltZ249e1wiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvdlQ4TUxCQ2svQ2hhcmdlci5qcGdcIn0gLz5cclxuICAgICAgICA8Q2FyZDMgdGl0bGU9e1wiMTcgUGFnYW5pIEh1YXlyYSBSb2Fkc3RlclwifSBkZXNjcmlwdGlvbj17XCJTZXJpZTogSFcgUm9hZHN0ZXJzXCJ9aW1nbj17XCJodHRwczovL2kucG9zdGltZy5jYy9Tc2RiczRqci9IdWF5cmEuanBnXCJ9IC8+XHJcbiAgICAgICAgPENhcmQzIHRpdGxlPXtcIjY0IENoZXZ5IENoZXZlbGxlIFNTXCJ9IGRlc2NyaXB0aW9uPXtcIlNlcmllOiBOaWdodGJ1cm5lcnpcIn1pbWduPXtcImh0dHBzOi8vaS5wb3N0aW1nLmNjL1pZakpZOGRTL0NoZXZlbGxlLmpwZ1wifSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Rm9vdGVyIC8+XHJcblxyXG4gIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiY29uc3QgQ2FyZDMgPSAoe3RpdGxlLCBkZXNjcmlwdGlvbiwgbGluaywgaW1nbn0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YSBocmVmPXtsaW5rfSBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgPGgzPnt0aXRsZX0gJnJhcnI7PC9oMz5cclxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWdufSB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjMwMFwiPjwvaW1nPlxyXG4gICAgICA8L2E+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDM7ICIsImNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIERlc2Fycm9sbGFkbyBwb3I6IHsnICd9XHJcbiAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZm9vdGVyPlxyXG5cclxuICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==