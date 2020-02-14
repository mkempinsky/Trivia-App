module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Nav */ "./src/components/Nav/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Layout = props => {
  return __jsx("div", {
    className: "jsx-3345255848" + " " + "layout"
  }, __jsx(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3345255848"
  }, ".layout.jsx-3345255848{background:#ffb347;background:-webkit-linear-gradient(to right,#ffcc33,#ffb347);background:linear-gradient(to right,#ffcc33,#ffb347);min-height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoZWxla2VtcGluc2t5Mi9EZXZlbG9wbWVudC9wcm9qZWN0cy9Ucml2aWEtQXBwL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRaUIsQUFHd0MsbUJBQzRDLDZEQUNSLHFEQUN0QyxpQkFDckIiLCJmaWxlIjoiL1VzZXJzL21pY2hlbGVrZW1waW5za3kyL0RldmVsb3BtZW50L3Byb2plY3RzL1RyaXZpYS1BcHAvc3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tICcuLi9OYXYnXG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgICAgICA8TmF2Lz5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjM0NzsgIFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmY2MzMywgI2ZmYjM0Nyk7IFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmNjMzMsICNmZmIzNDcpOyBcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=/Users/michelekempinsky2/Development/projects/Trivia-App/src/components/Layout/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/MaxWidth/index.js":
/*!******************************************!*\
  !*** ./src/components/MaxWidth/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/styles */ "./src/lib/styles.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const MaxWidth = props => {
  return __jsx("div", {
    style: props.style,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["617171630", [_lib_styles__WEBPACK_IMPORTED_MODULE_2__["MAX_WIDTH_PX"], _lib_styles__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"]]]])
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "617171630",
    dynamic: [_lib_styles__WEBPACK_IMPORTED_MODULE_2__["MAX_WIDTH_PX"], _lib_styles__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"]]
  }, `div.__jsx-style-dynamic-selector{margin-right:auto;margin-left:auto;max-width:${_lib_styles__WEBPACK_IMPORTED_MODULE_2__["MAX_WIDTH_PX"]};}@media screen and (min-width:${_lib_styles__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"]}){div.__jsx-style-dynamic-selector{padding:0px 10px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoZWxla2VtcGluc2t5Mi9EZXZlbG9wbWVudC9wcm9qZWN0cy9Ucml2aWEtQXBwL3NyYy9jb21wb25lbnRzL01heFdpZHRoL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU13QixBQUd1QyxBQU1HLGlCQUNyQixDQU5pQixpQkFDc0IsdUNBQzNDIiwiZmlsZSI6Ii9Vc2Vycy9taWNoZWxla2VtcGluc2t5Mi9EZXZlbG9wbWVudC9wcm9qZWN0cy9Ucml2aWEtQXBwL3NyYy9jb21wb25lbnRzL01heFdpZHRoL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCUkVBS1BPSU5ULCBNQVhfV0lEVEhfUFh9IGZyb20gJy4uLy4uL2xpYi9zdHlsZXMnO1xuXG5jb25zdCBNYXhXaWR0aCA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtwcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAke01BWF9XSURUSF9QWH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7QlJFQUtQT0lOVH0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF4V2lkdGg7XG4iXX0= */
/*@ sourceURL=/Users/michelekempinsky2/Development/projects/Trivia-App/src/components/MaxWidth/index.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (MaxWidth);

/***/ }),

/***/ "./src/components/Nav/index.js":
/*!*************************************!*\
  !*** ./src/components/Nav/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/styles */ "./src/lib/styles.js");
/* harmony import */ var _MaxWidth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MaxWidth */ "./src/components/MaxWidth/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Nav extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1027523401", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_2__["dropShadow"])()]]])
    }, __jsx(_MaxWidth__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: {
        margin: '0'
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1027523401", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_2__["dropShadow"])()]]])
    }, __jsx("h1", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1027523401", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_2__["dropShadow"])()]]])
    }, "Trivia For Fun")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1027523401",
      dynamic: [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_2__["dropShadow"])()]
    }, `nav.__jsx-style-dynamic-selector{width:100%;background:#fff;height:80px;box-shadow:${Object(_lib_styles__WEBPACK_IMPORTED_MODULE_2__["dropShadow"])()};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;padding:15px 0px;positon:sticky;top:0;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoZWxla2VtcGluc2t5Mi9EZXZlbG9wbWVudC9wcm9qZWN0cy9Ucml2aWEtQXBwL3NyYy9jb21wb25lbnRzL05hdi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnFCLEFBR29DLFdBQ0ssZ0JBQ0osWUFDNEIsd0NBQzNCLDBFQUNNLDZGQUNILGdCQUNDLGlCQUNGLGVBQ1QsTUFDViIsImZpbGUiOiIvVXNlcnMvbWljaGVsZWtlbXBpbnNreTIvRGV2ZWxvcG1lbnQvcHJvamVjdHMvVHJpdmlhLUFwcC9zcmMvY29tcG9uZW50cy9OYXYvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Ryb3BTaGFkb3d9IGZyb20gJy4uLy4uL2xpYi9zdHlsZXMnO1xuaW1wb3J0IE1heFdpZHRoIGZyb20gJy4uL01heFdpZHRoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8TWF4V2lkdGggc3R5bGU9e3ttYXJnaW46ICcwJ319PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Ucml2aWEgRm9yIEZ1bjwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTWF4V2lkdGg+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHtkcm9wU2hhZG93KCl9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdG9uOiBzdGlja3k7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */
/*@ sourceURL=/Users/michelekempinsky2/Development/projects/Trivia-App/src/components/Nav/index.js */`));
  }

}

/***/ }),

/***/ "./src/lib/styles.js":
/*!***************************!*\
  !*** ./src/lib/styles.js ***!
  \***************************/
/*! exports provided: blue, yellow, dropShadow, globalStyles, px, BREAKPOINT, BREAKPOINT_PX, MAX_WIDTH, MAX_WIDTH_PX, hexToRgb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropShadow", function() { return dropShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalStyles", function() { return globalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function() { return BREAKPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT_PX", function() { return BREAKPOINT_PX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_WIDTH", function() { return MAX_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_WIDTH_PX", function() { return MAX_WIDTH_PX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
// COLORS
const blue = shade => {
  const shades = {
    200: '#4E9EE0',
    300: '#182957',
    400: '#1C2838',
    500: '#354763',
    550: '#0F2555',
    600: '#2F77B2',
    700: '#27323F',
    default: '#2F77B2'
  };
  return shades[+shade] || shades.default;
};
const yellow = (shade, opacity = 1) => {
  const shades = {
    500: `rgba(255, 179, 71, ${opacity})`,
    default: `rgba(255, 179, 71, ${opacity})`
  };
  return shades[+shade] || shades.default;
};
const dropShadow = shadow => {
  const shadows = {
    500: '0 14px 28px 0 rgba(37, 79, 115, 0.11)',
    default: '0 14px 28px 0 rgba(37, 79, 115, 0.11)'
  };
  return shadows[+shadow] || shadows.default;
}; // GLOBAL STYLES

const globalStyles = `
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	html, body {
		height: 100%;
        font-family: 'Gudea', sans-serif;
		color: #1C2838;
		font-size: 16px;
	}
	html {
		-webkit-font-smoothing: antialiased;
	}
    h1 {
        font-family: 'Comfortaa', cursive;
        font-weight: Bold;
        font-size: 22px;
    }
    h2 {
        font-family: 'Comfortaa', cursive;
        font-size: 20px;
    }
	`;
const px = value => {
  if (typeof value === 'number') {
    return value + 'px';
  } else if (typeof value === 'string') {
    /**
     * Check if already ends with px, em, rem, etc.
     */
    const hasLetters = value.match(/\d/g);

    if (hasLetters) {
      let numsOnly = hasLetters.join('');
      return numsOnly + 'px';
    }

    return value + 'px';
  } else {
    console.log('Must pass string or number to px()');
    return '25px';
  }
};
const BREAKPOINT = '992px';
const BREAKPOINT_PX = px(BREAKPOINT);
const MAX_WIDTH = '1280';
const MAX_WIDTH_PX = px(MAX_WIDTH);
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 0, 0';
}

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_MaxWidth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MaxWidth */ "./src/components/MaxWidth/index.js");
/* harmony import */ var _lib_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/styles */ "./src/lib/styles.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Homepage = () => {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3687195175", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]]]) + " " + "hero"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3687195175", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]]]) + " " + "overlay"
  }, "Test you triva skills anytime, anywhere.")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3687195175", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]]]) + " " + "main"
  }, __jsx(_components_MaxWidth__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3687195175", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]]]) + " " + "info__card"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3687195175", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3687195175", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]]])
  }, "Download the App"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3687195175", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]]])
  }, "Browsers are boring. Download the app to get instant trivia at your fingertips.")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3687195175", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]]]) + " " + "main__image"
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3687195175", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]]]) + " " + "info__card"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3687195175", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]]]) + " " + "main__image"
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3687195175", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3687195175", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]]])
  }, "Download the App"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3687195175", [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]]])
  }, "Browsers are boring. Download the app to get instant trivia at your fingertips."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3687195175",
    dynamic: [Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()]
  }, `.hero.__jsx-style-dynamic-selector{background-image:url('/static/hero.jpg');background-size:cover;background-position:bottom center;background-repeat:no-repeat;background-attachment:fixed;min-height:500px;min-width:100%;positon:relative;}.overlay.__jsx-style-dynamic-selector{width:100%;height:500px;background:rgba(000,000,000,.3);positon:absolute;}.main.__jsx-style-dynamic-selector{padding:50px 0;height:900px;}.info__card.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100% align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;margin:50px 0;}.main__image.__jsx-style-dynamic-selector{width:420px;height:320px;background-image:url('/static/cellphone-1.jpg');background-size:cover;background-position:bottom center;background-repeat:no-repeat;box-shadow:${Object(_lib_styles__WEBPACK_IMPORTED_MODULE_4__["dropShadow"])()};border-radius:5px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoZWxla2VtcGluc2t5Mi9EZXZlbG9wbWVudC9wcm9qZWN0cy9Ucml2aWEtQXBwL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2lCLEFBRzhELEFBVTlCLEFBTUksQUFJRixBQVNELFdBbEJDLENBbUJBLEdBYkEsU0FMbUIsQ0FtQmdCLEdBYnBELGFBakIwQixlQVlMLE9BWGlCLFVBWXRDLEFBa0IwQixDQVZILHFCQVdlLEVBOUJOLE9Bb0JMLHFCQW5CSyxJQThCQSx3QkE3QlgsSUE4QnVCLGFBN0J6QixlQUNFLFlBNkJDLEtBNUJ0QixDQWdCYyxXQUNJLENBWWxCLGFBWEEiLCJmaWxlIjoiL1VzZXJzL21pY2hlbGVrZW1waW5za3kyL0RldmVsb3BtZW50L3Byb2plY3RzL1RyaXZpYS1BcHAvc3JjL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTWF4V2lkdGggZnJvbSAnLi4vY29tcG9uZW50cy9NYXhXaWR0aCc7XG5pbXBvcnQgeyBkcm9wU2hhZG93IH0gZnJvbSAnLi4vbGliL3N0eWxlcyc7XG5cblxuY29uc3QgSG9tZXBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgIFRlc3QgeW91IHRyaXZhIHNraWxscyBhbnl0aW1lLCBhbnl3aGVyZS5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgPE1heFdpZHRoPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9fX2NhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRvd25sb2FkIHRoZSBBcHA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJyb3dzZXJzIGFyZSBib3JpbmcuIERvd25sb2FkIHRoZSBhcHAgdG8gZ2V0IGluc3RhbnQgdHJpdmlhIGF0IHlvdXIgZmluZ2VydGlwcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9faW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9fX2NhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9faW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Eb3dubG9hZCB0aGUgQXBwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ccm93c2VycyBhcmUgYm9yaW5nLiBEb3dubG9hZCB0aGUgYXBwIHRvIGdldCBpbnN0YW50IHRyaXZpYSBhdCB5b3VyIGZpbmdlcnRpcHMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTWF4V2lkdGg+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuaGVybyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9oZXJvLmpwZycpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdG9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwMDAsMDAwLDAwMCwuMyk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0b246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZm9fX2NhcmQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1MHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5tYWluX19pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2NlbGxwaG9uZS0xLmpwZycpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAke2Ryb3BTaGFkb3coKX07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlOyJdfQ== */
/*@ sourceURL=/Users/michelekempinsky2/Development/projects/Trivia-App/src/pages/index.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michelekempinsky2/Development/projects/Trivia-App/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map