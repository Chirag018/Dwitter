"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _components_SignUpForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SignUpForm */ \"./components/SignUpForm.tsx\");\n/* harmony import */ var _hooks_useDwitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useDwitter */ \"./hooks/useDwitter.ts\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,_hooks_useDwitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), connect = ref.connect, account = ref.account, user = ref.user, createUser = ref.createUser, postDweet = ref.postDweet, dweets = ref.dweets;\n    // console.log(user)\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), dweetContent = ref1[0], setDweetContent = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center justify-center py-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Dwitter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-1 flex-col items-center justify-center px-20 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-8 text-6xl font-bold\",\n                        children: [\n                            \"Welcome to \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-blue-400\",\n                                children: \"Dwitter\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    !account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        label: \"Connect with Ethereum\",\n                        onClick: connect\n                    }, void 0, false, {\n                        fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this) : account.toUpperCase() !== (user === null || user === void 0 ? void 0 : user.wallet.toUpperCase()) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignUpForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        createUser: createUser\n                    }, void 0, false, {\n                        fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center w-80\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: user === null || user === void 0 ? void 0 : user.avatar,\n                                        alt: \"\",\n                                        className: \"rounded-xl h-16 mr-4 w-16\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"rounded-xl ml-10 w-64\",\n                                        placeholder: \"What's happening?\",\n                                        value: dweetContent,\n                                        onChange: function(e) {\n                                            return setDweetContent(e.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-2 flex justify-end w-72\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    label: \"Dweet\",\n                                    onClick: function() {\n                                        return postDweet(dweetContent);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    dweets.map(function(dweet) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"w-64 py-2 px-4\",\n                            children: [\n                                dweet.content,\n                                dweet.author\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"flex h-24 w-full items-center justify-center border-t\",\n                children: \"Powered by Ethereum\"\n            }, void 0, false, {\n                fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chirag/Documents/60DaysWeb3/dwit/dapp/pages/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"AFsPdhNfVJO5FTt5XbCcXYzEvXg=\", false, function() {\n    return [\n        _hooks_useDwitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLE9BQU87Z0NBQ2JELEtBQUssQ0FBQ0UsTUFBTTs7Ozs7O2lDQUdSO3FCQUNSLENBQUM7Ozs7OztvQkFFRzswQkFFUCw4REFBQ0MsUUFBTTtnQkFBQzFCLFNBQVMsRUFBQyx1REFBdUQ7MEJBQUMscUJBRTFFOzs7OztvQkFBUzs7Ozs7O1lBQ0wsQ0FDUDtDQUNGO0dBdER1QlYsSUFBSTs7UUFDd0NELHlEQUFVOzs7QUFEdERDLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJ1xuaW1wb3J0IFNpZ25VcEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9TaWduVXBGb3JtJztcbmltcG9ydCB1c2VEd2l0dGVyIGZyb20gJy4uL2hvb2tzL3VzZUR3aXR0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgY29ubmVjdCwgYWNjb3VudCwgdXNlciwgY3JlYXRlVXNlciwgcG9zdER3ZWV0LCBkd2VldHMgfSA9IHVzZUR3aXR0ZXIoKTtcbiAgLy8gY29uc29sZS5sb2codXNlcilcbiAgXG4gIGNvbnN0IFtkd2VldENvbnRlbnQsIHNldER3ZWV0Q29udGVudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMic+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkR3aXR0ZXI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBmbGV4LTEgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTIwIHRleHQtY2VudGVyJz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nbWItOCB0ZXh0LTZ4bCBmb250LWJvbGQnPlxuICAgICAgICAgIFdlbGNvbWUgdG8gPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNDAwJz5Ed2l0dGVyPC9zcGFuPlxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHshYWNjb3VudCA/IChcbiAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiQ29ubmVjdCB3aXRoIEV0aGVyZXVtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IGFjY291bnQudG9VcHBlckNhc2UoKSAhPT0gdXNlcj8ud2FsbGV0LnRvVXBwZXJDYXNlKCkgPyAoXG4gICAgICAgICAgPFNpZ25VcEZvcm0gY3JlYXRlVXNlcj17Y3JlYXRlVXNlcn0gLz5cbiAgICAgICAgKVxuICAgICAgICAgIDpcbiAgICAgICAgICAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctODBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlcj8uYXZhdGFyfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGgtMTYgbXItNCB3LTE2XCIgLz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwicm91bmRlZC14bCBtbC0xMCB3LTY0XCIgcGxhY2Vob2xkZXI9XCJXaGF0J3MgaGFwcGVuaW5nP1wiIHZhbHVlPXtkd2VldENvbnRlbnR9IG9uQ2hhbmdlPXtlID0+IHNldER3ZWV0Q29udGVudChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZmxleCBqdXN0aWZ5LWVuZCB3LTcyXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD0nRHdlZXQnIG9uQ2xpY2s9eygpID0+IHBvc3REd2VldChkd2VldENvbnRlbnQpfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAge2R3ZWV0cy5tYXAoZHdlZXQgPT4gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctNjQgcHktMiBweC00XCI+XG4gICAgICAgICAgICB7ZHdlZXQuY29udGVudH1cbiAgICAgICAgICAgIHtkd2VldC5hdXRob3J9XG4gICAgICAgICAgICB7Lyoge2R3ZWV0LnRpbWVzdGFtcH0gKi99XG4gICAgICAgICAgICB7Lyoge2R3ZWV0Lmxpa2VzfSAqL31cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkpfVxuXG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSdmbGV4IGgtMjQgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItdCc+XG4gICAgICAgIFBvd2VyZWQgYnkgRXRoZXJldW1cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIlNpZ25VcEZvcm0iLCJ1c2VEd2l0dGVyIiwiSG9tZSIsImNvbm5lY3QiLCJhY2NvdW50IiwidXNlciIsImNyZWF0ZVVzZXIiLCJwb3N0RHdlZXQiLCJkd2VldHMiLCJkd2VldENvbnRlbnQiLCJzZXREd2VldENvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwic3BhbiIsImxhYmVsIiwib25DbGljayIsInRvVXBwZXJDYXNlIiwid2FsbGV0IiwiaW1nIiwic3JjIiwiYXZhdGFyIiwiYWx0IiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibWFwIiwiZHdlZXQiLCJjb250ZW50IiwiYXV0aG9yIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});