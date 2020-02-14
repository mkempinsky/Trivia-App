webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

// COLORS
var blue = function blue(shade) {
  var shades = {
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
var yellow = function yellow(shade) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var shades = {
    500: "rgba(255, 179, 71, ".concat(opacity, ")"),
    default: "rgba(255, 179, 71, ".concat(opacity, ")")
  };
  return shades[+shade] || shades.default;
};
var dropShadow = function dropShadow(shadow) {
  var shadows = {
    500: '0 14px 28px 0 rgba(37, 79, 115, 0.11)',
    default: '0 14px 28px 0 rgba(37, 79, 115, 0.11)'
  };
  return shadows[+shadow] || shadows.default;
}; // GLOBAL STYLES

var globalStyles = "\n\t* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbox-sizing: border-box;\n\t\t-webkit-box-sizing: border-box;\n\t}\n\thtml, body {\n\t\theight: 100%;\n        font-family: 'Gudea', sans-serif;\n\t\tcolor: #1C2838;\n\t\tfont-size: 16px;\n\t}\n\thtml {\n\t\t-webkit-font-smoothing: antialiased;\n\t}\n    h1 {\n        font-family: 'Comfortaa', cursive;\n        font-weight: Bold;\n        font-size: 22px;\n    }\n    h2 {\n        font-family: 'Comfortaa', cursive;\n        font-size: 20px;\n    }\n\t";
var px = function px(value) {
  if (typeof value === 'number') {
    return value + 'px';
  } else if (typeof value === 'string') {
    /**
     * Check if already ends with px, em, rem, etc.
     */
    var hasLetters = value.match(/\d/g);

    if (hasLetters) {
      var numsOnly = hasLetters.join('');
      return numsOnly + 'px';
    }

    return value + 'px';
  } else {
    console.log('Must pass string or number to px()');
    return '25px';
  }
};
var BREAKPOINT = '992px';
var BREAKPOINT_PX = px(BREAKPOINT);
var MAX_WIDTH = '1280';
var MAX_WIDTH_PX = px(MAX_WIDTH);
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? "".concat(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(result[1], 16), ", ").concat(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(result[2], 16), ", ").concat(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(result[3], 16)) : '0, 0, 0';
}

/***/ })

})
//# sourceMappingURL=index.js.30379851ec6b0070fe89.hot-update.js.map