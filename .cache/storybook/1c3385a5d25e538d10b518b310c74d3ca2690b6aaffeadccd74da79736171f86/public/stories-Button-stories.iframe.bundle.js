"use strict";
(self["webpackChunkuntitl3d"] = self["webpackChunkuntitl3d"] || []).push([["stories-Button-stories"],{

/***/ "./src/stories/Button.stories.ts":
/*!***************************************!*\
  !*** ./src/stories/Button.stories.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Large: () => (/* binding */ Large),
/* harmony export */   Primary: () => (/* binding */ Primary),
/* harmony export */   Secondary: () => (/* binding */ Secondary),
/* harmony export */   Small: () => (/* binding */ Small),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/test */ "./node_modules/.pnpm/@storybook+test@8.1.5/node_modules/@storybook/test/dist/index.mjs");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/stories/Button.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.5.13_react-refresh@0.14.2_type-fest@2.19.0_webpack-hot_lp7ofoq7laegewarlj6daov574/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.5.13_react-refresh@0.14.2_type-fest@2.19.0_webpack-hot_lp7ofoq7laegewarlj6daov574/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js");

var _Primary_parameters, _Primary_parameters_docs, _Primary_parameters1, _Secondary_parameters, _Secondary_parameters_docs, _Secondary_parameters1, _Large_parameters, _Large_parameters_docs, _Large_parameters1, _Small_parameters, _Small_parameters_docs, _Small_parameters1;


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example/Button",
    component: _Button__WEBPACK_IMPORTED_MODULE_1__.Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered"
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: [
        "autodocs"
    ],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: {
            control: "color"
        }
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
        onClick: (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const Primary = {
    args: {
        primary: true,
        label: "Button"
    }
};
const Secondary = {
    args: {
        label: "Button"
    }
};
const Large = {
    args: {
        size: "large",
        label: "Button"
    }
};
const Small = {
    args: {
        size: "small",
        label: "Button"
    }
};
Primary.parameters = {
    ...Primary.parameters,
    docs: {
        ...(_Primary_parameters = Primary.parameters) === null || _Primary_parameters === void 0 ? void 0 : _Primary_parameters.docs,
        source: {
            originalSource: "{\n  args: {\n    primary: true,\n    label: 'Button'\n  }\n}",
            ...(_Primary_parameters1 = Primary.parameters) === null || _Primary_parameters1 === void 0 ? void 0 : (_Primary_parameters_docs = _Primary_parameters1.docs) === null || _Primary_parameters_docs === void 0 ? void 0 : _Primary_parameters_docs.source
        }
    }
};
Secondary.parameters = {
    ...Secondary.parameters,
    docs: {
        ...(_Secondary_parameters = Secondary.parameters) === null || _Secondary_parameters === void 0 ? void 0 : _Secondary_parameters.docs,
        source: {
            originalSource: "{\n  args: {\n    label: 'Button'\n  }\n}",
            ...(_Secondary_parameters1 = Secondary.parameters) === null || _Secondary_parameters1 === void 0 ? void 0 : (_Secondary_parameters_docs = _Secondary_parameters1.docs) === null || _Secondary_parameters_docs === void 0 ? void 0 : _Secondary_parameters_docs.source
        }
    }
};
Large.parameters = {
    ...Large.parameters,
    docs: {
        ...(_Large_parameters = Large.parameters) === null || _Large_parameters === void 0 ? void 0 : _Large_parameters.docs,
        source: {
            originalSource: "{\n  args: {\n    size: 'large',\n    label: 'Button'\n  }\n}",
            ...(_Large_parameters1 = Large.parameters) === null || _Large_parameters1 === void 0 ? void 0 : (_Large_parameters_docs = _Large_parameters1.docs) === null || _Large_parameters_docs === void 0 ? void 0 : _Large_parameters_docs.source
        }
    }
};
Small.parameters = {
    ...Small.parameters,
    docs: {
        ...(_Small_parameters = Small.parameters) === null || _Small_parameters === void 0 ? void 0 : _Small_parameters.docs,
        source: {
            originalSource: "{\n  args: {\n    size: 'small',\n    label: 'Button'\n  }\n}",
            ...(_Small_parameters1 = Small.parameters) === null || _Small_parameters1 === void 0 ? void 0 : (_Small_parameters_docs = _Small_parameters1.docs) === null || _Small_parameters_docs === void 0 ? void 0 : _Small_parameters_docs.source
        }
    }
};
;const __namedExportsOrder = ["Primary","Secondary","Large","Small"];

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

}]);
//# sourceMappingURL=stories-Button-stories.iframe.bundle.js.map