"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["posts"],{

/***/ "./src/pages/Posts.jsx":
/*!*****************************!*\
  !*** ./src/pages/Posts.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slices_post_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/slices/post.slice */ \"./src/store/slices/post.slice.js\");\n\n\n\nvar Posts = function Posts() {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n      return state.post || {};\n    }),\n    _useSelector$items = _useSelector.items,\n    items = _useSelector$items === void 0 ? [] : _useSelector$items,\n    loading = _useSelector.loading;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!items.length) dispatch((0,_store_slices_post_slice__WEBPACK_IMPORTED_MODULE_1__.fetchPosts)());\n  }, []);\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Loading...\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, items === null || items === void 0 ? void 0 : items.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: post.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, post.content));\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);\n\n//# sourceURL=webpack://ssr/./src/pages/Posts.jsx?");

/***/ })

}]);