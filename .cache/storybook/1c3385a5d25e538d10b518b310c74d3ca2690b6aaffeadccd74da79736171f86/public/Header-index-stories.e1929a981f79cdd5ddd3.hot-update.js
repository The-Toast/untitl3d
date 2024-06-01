"use strict";
self["webpackHotUpdateuntitl3d"]("Header-index-stories",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _Users_yechan0616_Desktop_untitl3d_node_modules_pnpm_next_14_2_3_babel_core_7_24_6_react_dom_18_3_1_react_18_3_1_react_18_3_1_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js */ "./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stores */ "./src/stores/index.ts");
/* harmony import */ var assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets */ "./src/assets/index.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/components/Header/style.ts");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js */ "./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.5.13_react-refresh@0.14.2_type-fest@2.19.0_webpack-hot_lp7ofoq7laegewarlj6daov574/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.5.13_react-refresh@0.14.2_type-fest@2.19.0_webpack-hot_lp7ofoq7laegewarlj6daov574/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js");

'use client';


var _jsxFileName = "/Users/yechan0616/Desktop/untitl3d/src/components/Header/index.tsx",
  _s = __webpack_require__.$Refresh$.signature(),
  _templateObject,
  _templateObject2;

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Header() {
  _s();
  var _useDarkStore = (0,stores__WEBPACK_IMPORTED_MODULE_1__.useDarkStore)(),
    isDark = _useDarkStore.isDark,
    setIsDark = _useDarkStore.setIsDark;
  var handleClick = function handleClick() {
    setIsDark(!isDark);
    localStorage.setItem('dark', String(!isDark));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var localState = localStorage.getItem('dark');
    if (localState) setIsDark(localState == 'true');
  }, []);
  console.log(isDark);
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_3__.Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_3__.HeaderContent, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_3__.LogoLink, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Hello, World!")), __jsx(_style__WEBPACK_IMPORTED_MODULE_3__.HeaderInner, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(ToggleBtn, {
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, isDark ? __jsx(assets__WEBPACK_IMPORTED_MODULE_2__.SunIcon, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }) : __jsx(assets__WEBPACK_IMPORTED_MODULE_2__.MoonIcon, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 37
    }
  })))));
}
_s(Header, "d2FYOz1Fm6znQyZTDtaxJPSzR7s=", false, function () {
  return [stores__WEBPACK_IMPORTED_MODULE_1__.useDarkStore];
});
_c = Header;

var Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject || (_templateObject = (0,_Users_yechan0616_Desktop_untitl3d_node_modules_pnpm_next_14_2_3_babel_core_7_24_6_react_dom_18_3_1_react_18_3_1_react_18_3_1_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  color: ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.ui.textColor;
});
_c2 = Title;
var ToggleBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject2 || (_templateObject2 = (0,_Users_yechan0616_Desktop_untitl3d_node_modules_pnpm_next_14_2_3_babel_core_7_24_6_react_dom_18_3_1_react_18_3_1_react_18_3_1_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 0.5rem;\n  border-radius: 0.75rem;\n  background: ", ";\n  svg {\n    display: block;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.ui.boxColor;
});
_c3 = ToggleBtn;
Header.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Header"
};
var _c, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "Header");
__webpack_require__.$Refresh$.register(_c2, "Title");
__webpack_require__.$Refresh$.register(_c3, "ToggleBtn");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

});
//# sourceMappingURL=Header-index-stories.e1929a981f79cdd5ddd3.hot-update.js.map