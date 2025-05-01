/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/server.js":
/*!***********************!*\
  !*** ./app/server.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = \"function\" == typeof Symbol ? Symbol : {}, i = o.iterator || \"@@iterator\", a = o.asyncIterator || \"@@asyncIterator\", u = o.toStringTag || \"@@toStringTag\"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, \"\"); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, \"_invoke\", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error(\"Generator is already running\"); if (4 === o) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = 3; var h = s(r, e, n); if (\"normal\" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } \"throw\" === h.type && (o = 4, n.method = \"throw\", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: \"normal\", arg: t.call(r, e) }; } catch (t) { return { type: \"throw\", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { [\"next\", \"throw\", \"return\"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if (\"throw\" !== c.type) { var h = c.arg, f = h.value; return f && \"object\" == _typeof(f) && n.call(f, \"__await\") ? r.resolve(f.__await).then(function (t) { e(\"next\", t, a, u); }, function (t) { e(\"throw\", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e(\"throw\", t, a, u); }); } u(c.arg); } var o; c(this, \"_invoke\", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, \"throw\" === n && r.i[\"return\"] && (e.method = \"return\", e.arg = t, d(r, e), \"throw\" === e.method) || \"return\" !== n && (e.method = \"throw\", e.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), f; var i = s(o, r.i, e.arg); if (\"throw\" === i.type) return e.method = \"throw\", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, \"return\" !== e.method && (e.method = \"next\", e.arg = t), e.delegate = null, f) : a : (e.method = \"throw\", e.arg = new TypeError(\"iterator result is not an object\"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = \"normal\", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if (\"function\" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, \"constructor\", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), r.isGeneratorFunction = function (t) { var r = \"function\" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || \"GeneratorFunction\" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, \"GeneratorFunction\")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, \"Generator\"), c(v, i, function () { return this; }), c(v, \"toString\", function () { return \"[object Generator]\"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) \"t\" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = \"throw\", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n(\"end\"), !1; if (!c && !h) throw Error(\"try statement without catch or finally\"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = \"next\", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && (\"break\" === t || \"continue\" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = \"next\", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, \"catch\": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if (\"throw\" === n.type) { var o = n.arg; m(e); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, \"next\" === this.method && (this.arg = t), f; } }, r; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\nvar express = __webpack_require__(/*! express */ \"express\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar React = __webpack_require__(/*! react */ \"react\");\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nvar _require = __webpack_require__(/*! ../src/App */ \"./src/App.jsx\"),\n  App = _require[\"default\"];\nvar _require2 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\"),\n  StaticRouter = _require2.StaticRouter;\nvar _require3 = __webpack_require__(/*! ../src/store */ \"./src/store/index.js\"),\n  createStore = _require3[\"default\"];\nvar _require4 = __webpack_require__(/*! react-redux */ \"react-redux\"),\n  Provider = _require4.Provider;\nvar PORT = process.env.PORT || 4000;\nvar app = express();\napp.use(\"/public\", express[\"static\"](path.resolve(__dirname, \"../build/public\")));\n\n// in express@v5, \"*\" is not considered valid anymore, thats why used regex /^\\/.*/\napp.get(/^\\/.*/, /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {\n    var initialData, htmlFileStr, match, id, response, data, store, appHtml, finalHtmlStr;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          initialData = {\n            post: null\n          };\n          htmlFileStr = fs.readFileSync(path.resolve(__dirname, \"../build/public/index.html\"), \"utf8\");\n          match = req.url.match(/^\\/post\\/(\\d+)/); // 🔍 If /post/:id route, fetch the post\n          if (!match) {\n            _context.next = 12;\n            break;\n          }\n          id = match[1];\n          _context.next = 7;\n          return fetch(\"https://jsonplaceholder.typicode.com/posts/\".concat(id));\n        case 7:\n          response = _context.sent;\n          _context.next = 10;\n          return response.json();\n        case 10:\n          data = _context.sent;\n          initialData.post = {\n            currentPost: data\n          };\n        case 12:\n          store = createStore(initialData);\n          appHtml = ReactDOMServer.renderToString(/*#__PURE__*/React.createElement(Provider, {\n            store: store\n          }, /*#__PURE__*/React.createElement(StaticRouter, {\n            location: req.url\n          }, /*#__PURE__*/React.createElement(App, {\n            initialData: initialData\n          })))); // Inject serverTime into HTML as a global variable\n          finalHtmlStr = htmlFileStr.replace(\"<div id=\\\"root\\\"></div>\", \"<div id=\\\"root\\\">\".concat(appHtml, \"</div>\")).replace(\"</body>\", \"<script>window.__INITIAL_STATE__ = \".concat(JSON.stringify(store === null || store === void 0 ? void 0 : store.getState()), \";</script></body>\"));\n          res.send(finalHtmlStr);\n        case 16:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.listen(PORT, function () {\n  console.log(\"Server is running on \".concat(PORT));\n});\n\n//# sourceURL=webpack://ssr/./app/server.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://ssr/./src/App.css?");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/routes.jsx\");\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-wrapper\"\n  }, \"Blog App\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n/**\n * BrowserRouter ********\n *\n * Client (Browser): Must use <BrowserRouter> to manage navigation with the browser’s history API.\n * If you don’t use BrowserRouter on the client, React hydration may fail or routing won’t work correctly\n */\n\n//# sourceURL=webpack://ssr/./src/App.jsx?");

/***/ }),

/***/ "./src/pages/Home.jsx":
/*!****************************!*\
  !*** ./src/pages/Home.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Home = function Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Welcome to the Blog\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/post/1\"\n  }, \"Go to Post 1\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/post/2\"\n  }, \"Go to Post 2\"))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://ssr/./src/pages/Home.jsx?");

/***/ }),

/***/ "./src/pages/Post.jsx":
/*!****************************!*\
  !*** ./src/pages/Post.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_slices_post_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/slices/post.slice */ \"./src/store/slices/post.slice.js\");\n\n\n\n\nvar Post = function Post() {\n  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),\n    id = _useParams.id;\n  var post = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.post.currentPost;\n  });\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!post) fetch(\"https://jsonplaceholder.typicode.com/posts/\".concat(id)).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return dispatch((0,_store_slices_post_slice__WEBPACK_IMPORTED_MODULE_3__.setPost)(data));\n    });\n  }, [id, post]);\n  if (!post) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Loading...\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, post === null || post === void 0 ? void 0 : post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, post === null || post === void 0 ? void 0 : post.body));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n//# sourceURL=webpack://ssr/./src/pages/Post.jsx?");

/***/ }),

/***/ "./src/routes.jsx":
/*!************************!*\
  !*** ./src/routes.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ \"./src/pages/Home.jsx\");\n/* harmony import */ var _pages_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Post */ \"./src/pages/Post.jsx\");\n\n\n\n\nvar AppRoutes = function AppRoutes() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/post/:id\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRoutes);\n\n//# sourceURL=webpack://ssr/./src/routes.jsx?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_post_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/post.slice */ \"./src/store/slices/post.slice.js\");\n\n\nvar createStore = function createStore() {\n  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n      post: _slices_post_slice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    preloadedState: preloadedState\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStore);\n\n/**\n * \"createStore\" is a custom function that:\n * Calls \"configureStore\" to create and return the Redux store.\n * \"preloadedState\" is passed in as an argument. This is optional and allows you to initialize the store with data (e.g., when restoring state from localStorage or server-side rendering).\n */\n\n/**\n * reducer: This is an object that defines how the state is structured and what logic will handle the state updates\n * In this case:\n *      The post state will be managed by the postReducer (which handles actions and state changes related to posts)\n * preloadedState: This is the initial state that will be used to hydrate the store.\n * It's particularly useful if you need to pre-populate the store with data when the app is first loaded, such as from server-side rendering or local storage.\n */\n\n//# sourceURL=webpack://ssr/./src/store/index.js?");

/***/ }),

/***/ "./src/store/slices/post.slice.js":
/*!****************************************!*\
  !*** ./src/store/slices/post.slice.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setPost: () => (/* binding */ setPost)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nvar postSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"post\",\n  initialState: {\n    currentPost: null\n  },\n  reducers: {\n    setPost: function setPost(state, action) {\n      state.currentPost = action.payload;\n    }\n  }\n});\nvar setPost = postSlice.actions.setPost;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postSlice.reducer);\n\n/**\n * createSlice is a utility from Redux Toolkit that automatically generates action creators and reducers for you.\n * A slice represents a specific piece of the Redux state and the reducers (functions) that update that piece of state.\n */\n\n/**\n * postSlice.actions\n * This object contains all the action creators automatically generated by \"createSlice\"\n * Each key in this object corresponds to one of the reducer functions you defined.\n * \"setPost\" is an \"action creator\" that you can dispatch to update the state\n */\n\n//# sourceURL=webpack://ssr/./src/store/slices/post.slice.js?");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;