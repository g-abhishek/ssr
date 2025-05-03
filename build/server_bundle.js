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

/***/ "./app/routes/posts.routes.js":
/*!************************************!*\
  !*** ./app/routes/posts.routes.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\nrouter.get(\"/\", function (req, res) {\n  res.send([{\n    id: 1,\n    title: \"First Post\",\n    content: \"Lorem ipsum...\"\n  }, {\n    id: 2,\n    title: \"Second Post\",\n    content: \"Dolor sit amet...\"\n  }]);\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://ssr/./app/routes/posts.routes.js?");

/***/ }),

/***/ "./app/server.js":
/*!***********************!*\
  !*** ./app/server.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = \"function\" == typeof Symbol ? Symbol : {}, i = o.iterator || \"@@iterator\", a = o.asyncIterator || \"@@asyncIterator\", u = o.toStringTag || \"@@toStringTag\"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, \"\"); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, \"_invoke\", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error(\"Generator is already running\"); if (4 === o) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = 3; var h = s(r, e, n); if (\"normal\" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } \"throw\" === h.type && (o = 4, n.method = \"throw\", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: \"normal\", arg: t.call(r, e) }; } catch (t) { return { type: \"throw\", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { [\"next\", \"throw\", \"return\"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if (\"throw\" !== c.type) { var h = c.arg, f = h.value; return f && \"object\" == _typeof(f) && n.call(f, \"__await\") ? r.resolve(f.__await).then(function (t) { e(\"next\", t, a, u); }, function (t) { e(\"throw\", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e(\"throw\", t, a, u); }); } u(c.arg); } var o; c(this, \"_invoke\", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, \"throw\" === n && r.i[\"return\"] && (e.method = \"return\", e.arg = t, d(r, e), \"throw\" === e.method) || \"return\" !== n && (e.method = \"throw\", e.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), f; var i = s(o, r.i, e.arg); if (\"throw\" === i.type) return e.method = \"throw\", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, \"return\" !== e.method && (e.method = \"next\", e.arg = t), e.delegate = null, f) : a : (e.method = \"throw\", e.arg = new TypeError(\"iterator result is not an object\"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = \"normal\", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if (\"function\" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, \"constructor\", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), r.isGeneratorFunction = function (t) { var r = \"function\" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || \"GeneratorFunction\" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, \"GeneratorFunction\")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, \"Generator\"), c(v, i, function () { return this; }), c(v, \"toString\", function () { return \"[object Generator]\"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) \"t\" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = \"throw\", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n(\"end\"), !1; if (!c && !h) throw Error(\"try statement without catch or finally\"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = \"next\", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && (\"break\" === t || \"continue\" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = \"next\", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, \"catch\": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if (\"throw\" === n.type) { var o = n.arg; m(e); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, \"next\" === this.method && (this.arg = t), f; } }, r; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\nvar express = __webpack_require__(/*! express */ \"express\");\nvar _require = __webpack_require__(/*! @loadable/server */ \"@loadable/server\"),\n  ChunkExtractor = _require.ChunkExtractor;\nvar path = __webpack_require__(/*! path */ \"path\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar React = __webpack_require__(/*! react */ \"react\");\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nvar _require2 = __webpack_require__(/*! ../src/App */ \"./src/App.jsx\"),\n  App = _require2[\"default\"];\nvar _require3 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\"),\n  StaticRouter = _require3.StaticRouter,\n  matchPath = _require3.matchPath;\nvar _require4 = __webpack_require__(/*! ../src/store */ \"./src/store/index.js\"),\n  createStore = _require4[\"default\"];\nvar _require5 = __webpack_require__(/*! react-redux */ \"react-redux\"),\n  Provider = _require5.Provider;\nvar PostRouter = __webpack_require__(/*! ./routes/posts.routes */ \"./app/routes/posts.routes.js\");\nvar _require6 = __webpack_require__(/*! ../src/store/slices/post.slice */ \"./src/store/slices/post.slice.js\"),\n  fetchPosts = _require6.fetchPosts;\nvar _require7 = __webpack_require__(/*! ../src/routes */ \"./src/routes.jsx\"),\n  routes = _require7[\"default\"];\nvar _require8 = __webpack_require__(/*! ../src/pages/ErrorPage */ \"./src/pages/ErrorPage.jsx\"),\n  ErrorPage = _require8[\"default\"];\nvar PORT = process.env.PORT || 4000;\nvar app = express();\n// ❗ Only disable caching for HTML responses (SSR)\napp.use(function (req, res, next) {\n  if (!req.url.startsWith(\"/public\")) {\n    res.set(\"Cache-Control\", \"no-store\");\n  }\n  next();\n});\napp.use(\"/public\", express[\"static\"](path.resolve(__dirname, \"../build/public\"), {\n  maxAge: \"1y\",\n  // Cache for 1 year\n  immutable: true // File will not change (safe for hashed assets), /public file will be cached\n}));\n\n// This is the stats file generated by webpack loadable plugin\nvar statsFile = path.resolve(__dirname, \"../build/public/loadable-stats.json\");\n// We create an extractor from the statsFile\nvar extractor = new ChunkExtractor({\n  statsFile: statsFile\n});\napp.use(\"/api/posts\", PostRouter);\n\n// in express@v5, \"*\" is not considered valid anymore, thats why used regex /^\\/.*/\napp.get(/^\\/.*/, /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {\n    var promises, store, matched, preloadedState, htmlFileStr, jsx, appHtml, scriptTags, linkTags, styleTags, finalHtmlStr, errorHTML;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          promises = [];\n          store = createStore();\n          matched = false;\n          routes.forEach(function (route) {\n            var match = matchPath(route.path, req.path);\n            if (match && route.loadData) {\n              matched = true;\n              promises.push(route.loadData(store, match.params));\n            }\n          });\n          _context.next = 7;\n          return Promise.all(promises);\n        case 7:\n          preloadedState = store === null || store === void 0 ? void 0 : store.getState();\n          htmlFileStr = fs.readFileSync(path.resolve(__dirname, \"../build/public/index.html\"), \"utf8\"); // Wrap your application using \"collectChunks\"\n          jsx = extractor.collectChunks(/*#__PURE__*/React.createElement(Provider, {\n            store: store\n          }, /*#__PURE__*/React.createElement(StaticRouter, {\n            location: req.url\n          }, /*#__PURE__*/React.createElement(App, null))));\n          appHtml = ReactDOMServer.renderToString(jsx); // You can now collect your script tags\n          scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();\n          // You can also collect your \"preload/prefetch\" links\n          linkTags = extractor.getLinkTags(); // or extractor.getLinkElements();\n          // And you can even collect your style tags (if you use \"mini-css-extract-plugin\")\n          styleTags = extractor.getStyleTags(); // or extractor.getStyleElements();\n          // Inject serverTime into HTML as a global variable\n          finalHtmlStr = htmlFileStr.replace(\"<div id=\\\"root\\\"></div>\", \"<div id=\\\"root\\\">\".concat(appHtml, \"</div>\")).replace(\"</body>\", \"\".concat(scriptTags, \"\\n          \").concat(linkTags, \"\\n          \").concat(styleTags, \"\\n          <script>window.__INITIAL_STATE__ = \").concat(JSON.stringify(preloadedState), \";</script></body>\"));\n          if (!matched) {\n            res.status(404);\n          }\n          res.send(finalHtmlStr);\n          _context.next = 24;\n          break;\n        case 19:\n          _context.prev = 19;\n          _context.t0 = _context[\"catch\"](0);\n          console.error(\"SSR rendering failed:\", _context.t0);\n          errorHTML = ReactDOMServer.renderToString(/*#__PURE__*/React.createElement(ErrorPage, {\n            message: \"Server Error: Failed to render page.\"\n          }));\n          res.status(500).send(\"\\n      <!DOCTYPE html>\\n      <html>\\n        <head><title>Server Error</title></head>\\n        <body>\".concat(errorHTML, \"</body>\\n      </html>\\n    \"));\n        case 24:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 19]]);\n  }));\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.listen(PORT, function () {\n  console.log(\"Server is running on \".concat(PORT));\n});\n\n//# sourceURL=webpack://ssr/./app/server.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/routes.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_ErrorPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ErrorPage */ \"./src/pages/ErrorPage.jsx\");\n\n\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-wrapper\"\n  }, \"Blog App\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Loading...\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, null, _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (r, idx) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n      key: idx,\n      path: r === null || r === void 0 ? void 0 : r.path,\n      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(r.element, null)\n    });\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n/**\n * BrowserRouter ********\n *\n * Client (Browser): Must use <BrowserRouter> to manage navigation with the browser’s history API.\n * If you don’t use BrowserRouter on the client, React hydration may fail or routing won’t work correctly\n */\n\n//# sourceURL=webpack://ssr/./src/App.jsx?");

/***/ }),

/***/ "./src/pages/ErrorPage.jsx":
/*!*********************************!*\
  !*** ./src/pages/ErrorPage.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ErrorPage = function ErrorPage(_ref) {\n  var _ref$message = _ref.message,\n    message = _ref$message === void 0 ? \"Something went wrong.\" : _ref$message;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      padding: \"2rem\",\n      textAlign: \"center\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"\\u26A0\\uFE0F Error\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, message));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);\n\n//# sourceURL=webpack://ssr/./src/pages/ErrorPage.jsx?");

/***/ }),

/***/ "./src/routes.jsx":
/*!************************!*\
  !*** ./src/routes.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_slices_post_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/slices/post.slice */ \"./src/store/slices/post.slice.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = \"function\" == typeof Symbol ? Symbol : {}, i = o.iterator || \"@@iterator\", a = o.asyncIterator || \"@@asyncIterator\", u = o.toStringTag || \"@@toStringTag\"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, \"\"); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, \"_invoke\", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error(\"Generator is already running\"); if (4 === o) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = 3; var h = s(r, e, n); if (\"normal\" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } \"throw\" === h.type && (o = 4, n.method = \"throw\", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: \"normal\", arg: t.call(r, e) }; } catch (t) { return { type: \"throw\", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { [\"next\", \"throw\", \"return\"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if (\"throw\" !== c.type) { var h = c.arg, f = h.value; return f && \"object\" == _typeof(f) && n.call(f, \"__await\") ? r.resolve(f.__await).then(function (t) { e(\"next\", t, a, u); }, function (t) { e(\"throw\", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e(\"throw\", t, a, u); }); } u(c.arg); } var o; c(this, \"_invoke\", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, \"throw\" === n && r.i[\"return\"] && (e.method = \"return\", e.arg = t, d(r, e), \"throw\" === e.method) || \"return\" !== n && (e.method = \"throw\", e.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), f; var i = s(o, r.i, e.arg); if (\"throw\" === i.type) return e.method = \"throw\", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, \"return\" !== e.method && (e.method = \"next\", e.arg = t), e.delegate = null, f) : a : (e.method = \"throw\", e.arg = new TypeError(\"iterator result is not an object\"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = \"normal\", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if (\"function\" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, \"constructor\", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), r.isGeneratorFunction = function (t) { var r = \"function\" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || \"GeneratorFunction\" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, \"GeneratorFunction\")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, \"Generator\"), c(v, i, function () { return this; }), c(v, \"toString\", function () { return \"[object Generator]\"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) \"t\" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = \"throw\", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n(\"end\"), !1; if (!c && !h) throw Error(\"try statement without catch or finally\"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = \"next\", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && (\"break\" === t || \"continue\" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = \"next\", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, \"catch\": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if (\"throw\" === n.type) { var o = n.arg; m(e); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, \"next\" === this.method && (this.arg = t), f; } }, r; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n\n\n\n// const Home = React.lazy(() => import(\"./pages/Home\"));\nvar Home = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"home\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | home */ \"home\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Home */ \"./src/pages/Home.jsx\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/Home */ \"./src/pages/Home.jsx\");\n    }\n    return eval('require.resolve')(\"./pages/Home\");\n  }\n});\nvar Post = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"post\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | post */ \"post\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Post */ \"./src/pages/Post.jsx\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/Post */ \"./src/pages/Post.jsx\");\n    }\n    return eval('require.resolve')(\"./pages/Post\");\n  }\n});\nvar Posts = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"posts\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | posts */ \"posts\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Posts */ \"./src/pages/Posts.jsx\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/Posts */ \"./src/pages/Posts.jsx\");\n    }\n    return eval('require.resolve')(\"./pages/Posts\");\n  }\n});\nvar ErrorPage = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"errorpage\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    return false;\n  },\n  importAsync: function importAsync() {\n    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/ErrorPage */ \"./src/pages/ErrorPage.jsx\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/ErrorPage */ \"./src/pages/ErrorPage.jsx\");\n    }\n    return eval('require.resolve')(\"./pages/ErrorPage\");\n  }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  path: \"/\",\n  element: Home,\n  loadData: function () {\n    var _loadData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(store) {\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    function loadData(_x) {\n      return _loadData.apply(this, arguments);\n    }\n    return loadData;\n  }()\n}, {\n  path: \"/posts\",\n  element: Posts,\n  loadData: function () {\n    var _loadData2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(store) {\n      return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n        while (1) switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return store.dispatch((0,_store_slices_post_slice__WEBPACK_IMPORTED_MODULE_2__.fetchPosts)());\n          case 3:\n            _context2.next = 8;\n            break;\n          case 5:\n            _context2.prev = 5;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.error(\"Error loading posts:\", _context2.t0);\n          case 8:\n          case \"end\":\n            return _context2.stop();\n        }\n      }, _callee2, null, [[0, 5]]);\n    }));\n    function loadData(_x2) {\n      return _loadData2.apply(this, arguments);\n    }\n    return loadData;\n  }()\n}, {\n  path: \"/posts/:id\",\n  element: Post,\n  loadData: function () {\n    var _loadData3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(store, params) {\n      return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n        while (1) switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return store.dispatch((0,_store_slices_post_slice__WEBPACK_IMPORTED_MODULE_2__.fetchPostByID)(params.id));\n          case 3:\n            _context3.next = 8;\n            break;\n          case 5:\n            _context3.prev = 5;\n            _context3.t0 = _context3[\"catch\"](0);\n            console.error(\"Error loading post \".concat(params.id, \":\"), _context3.t0);\n          case 8:\n          case \"end\":\n            return _context3.stop();\n        }\n      }, _callee3, null, [[0, 5]]);\n    }));\n    function loadData(_x3, _x4) {\n      return _loadData3.apply(this, arguments);\n    }\n    return loadData;\n  }()\n}, {\n  path: \"*\",\n  element: ErrorPage,\n  loadData: function () {\n    var _loadData4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(store, params) {\n      return _regeneratorRuntime().wrap(function _callee4$(_context4) {\n        while (1) switch (_context4.prev = _context4.next) {\n          case 0:\n          case \"end\":\n            return _context4.stop();\n        }\n      }, _callee4);\n    }));\n    function loadData(_x5, _x6) {\n      return _loadData4.apply(this, arguments);\n    }\n    return loadData;\n  }()\n}]);\n\n/**\n * How React.lazy Works\n * ✅ What it does:\n *    React.lazy() lets you dynamically import components.\n *    It works with <Suspense> to show a fallback UI during loading.\n * \n * ⛔ Drawbacks in SSR:\n * Runs only in the browser (client-side):\n *  React.lazy() defers loading the component until runtime in the browser.\n *  On the server, it has no way to wait for or preload the component.\n *  That means the server can’t render it ahead of time → blank/empty content.\n * Fails silently in SSR:\n *  ReactDOMServer.renderToString() can’t handle React.lazy() out of the box.\n *  You’ll either get an empty div or a crash with no helpful output.\n * \n * ✅ Experiment: Try React.lazy in your current SSR app\n * If you wrap your lazy component inside <Suspense> and try to render it on the server, you'll likely see:\n *    Empty content\n *    Or an error like: Error: A component suspended while rendering, but no fallback UI was specified.\n * \n * React.lazy()\n * You will likely see:\n *  🔴 A blank screen or\n *  🔴 Console error:\n *      Error: A component suspended while rendering, but no fallback UI was specified.\n * Even though you provided a fallback in <Suspense>, it only works in the browser.\n * \n * React.lazy uses Suspense, and React’s server-side renderer (renderToString) doesn't support Suspense for data or lazy-loaded components\n */\n\n//# sourceURL=webpack://ssr/./src/routes.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   fetchPostByID: () => (/* binding */ fetchPostByID),\n/* harmony export */   fetchPosts: () => (/* binding */ fetchPosts),\n/* harmony export */   setPost: () => (/* binding */ setPost)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = \"function\" == typeof Symbol ? Symbol : {}, i = o.iterator || \"@@iterator\", a = o.asyncIterator || \"@@asyncIterator\", u = o.toStringTag || \"@@toStringTag\"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, \"\"); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, \"_invoke\", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error(\"Generator is already running\"); if (4 === o) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = 3; var h = s(r, e, n); if (\"normal\" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } \"throw\" === h.type && (o = 4, n.method = \"throw\", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: \"normal\", arg: t.call(r, e) }; } catch (t) { return { type: \"throw\", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { [\"next\", \"throw\", \"return\"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if (\"throw\" !== c.type) { var h = c.arg, f = h.value; return f && \"object\" == _typeof(f) && n.call(f, \"__await\") ? r.resolve(f.__await).then(function (t) { e(\"next\", t, a, u); }, function (t) { e(\"throw\", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e(\"throw\", t, a, u); }); } u(c.arg); } var o; c(this, \"_invoke\", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, \"throw\" === n && r.i[\"return\"] && (e.method = \"return\", e.arg = t, d(r, e), \"throw\" === e.method) || \"return\" !== n && (e.method = \"throw\", e.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), f; var i = s(o, r.i, e.arg); if (\"throw\" === i.type) return e.method = \"throw\", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, \"return\" !== e.method && (e.method = \"next\", e.arg = t), e.delegate = null, f) : a : (e.method = \"throw\", e.arg = new TypeError(\"iterator result is not an object\"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = \"normal\", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if (\"function\" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, \"constructor\", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), r.isGeneratorFunction = function (t) { var r = \"function\" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || \"GeneratorFunction\" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, \"GeneratorFunction\")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, \"Generator\"), c(v, i, function () { return this; }), c(v, \"toString\", function () { return \"[object Generator]\"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) \"t\" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = \"throw\", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n(\"end\"), !1; if (!c && !h) throw Error(\"try statement without catch or finally\"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = \"next\", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && (\"break\" === t || \"continue\" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = \"next\", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, \"catch\": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if (\"throw\" === n.type) { var o = n.arg; m(e); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, \"next\" === this.method && (this.arg = t), f; } }, r; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n\nvar postSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"posts\",\n  initialState: {\n    currentPost: null,\n    items: [],\n    loading: false\n  },\n  reducers: {\n    setPost: function setPost(state, action) {\n      state.currentPost = action.payload;\n    }\n  },\n  extraReducers: function extraReducers(builder) {\n    builder.addCase(fetchPosts.pending, function (state) {\n      state.loading = true;\n    }).addCase(fetchPosts.fulfilled, function (state, action) {\n      state.items = action.payload;\n      state.loading = false;\n    });\n    builder.addCase(fetchPostByID.pending, function (state) {\n      state.loading = true;\n    }).addCase(fetchPostByID.fulfilled, function (state, action) {\n      state.currentPost = action.payload;\n      state.loading = false;\n    });\n  }\n});\nvar fetchPosts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"posts/fetch\", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n  var res;\n  return _regeneratorRuntime().wrap(function _callee$(_context) {\n    while (1) switch (_context.prev = _context.next) {\n      case 0:\n        _context.next = 2;\n        return fetch(\"http://localhost:3000/api/posts\");\n      case 2:\n        res = _context.sent;\n        _context.next = 5;\n        return res.json();\n      case 5:\n        return _context.abrupt(\"return\", _context.sent);\n      case 6:\n      case \"end\":\n        return _context.stop();\n    }\n  }, _callee);\n})));\nvar fetchPostByID = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"posts/fetchByID\", /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {\n    var res;\n    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return fetch(\"https://jsonplaceholder.typicode.com/posts/\".concat(id));\n        case 2:\n          res = _context2.sent;\n          _context2.next = 5;\n          return res.json();\n        case 5:\n          return _context2.abrupt(\"return\", _context2.sent);\n        case 6:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2);\n  }));\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nvar setPost = postSlice.actions.setPost;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postSlice.reducer);\n\n/**\n * createSlice is a utility from Redux Toolkit that automatically generates action creators and reducers for you.\n * A slice represents a specific piece of the Redux state and the reducers (functions) that update that piece of state.\n */\n\n/**\n * postSlice.actions\n * This object contains all the action creators automatically generated by \"createSlice\"\n * Each key in this object corresponds to one of the reducer functions you defined.\n * \"setPost\" is an \"action creator\" that you can dispatch to update the state\n */\n\n/**\n * When you use createAsyncThunk('post/fetchPost', ...), Redux Toolkit automatically generates 3 action types:\n * 1. fetchPost.pending → dispatched when the async function starts\n * 2. fetchPost.fulfilled → dispatched when it resolves successfully.\n * 3. fetchPost.rejected → dispatched if it throws an error.\n *\n * The extraReducers lets you handle those 3 action types in your slice’s reducer logic:\n *\n * 🧠 Why use extraReducers?\n * You can't list async actions like fetchPost inside the regular reducers field because they're not \"local\" reducers — they’re created outside the slice.\n * extraReducers gives you a structured way to handle those external or async-generated actions.\n */\n\n//# sourceURL=webpack://ssr/./src/store/slices/post.slice.js?");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/component");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/server");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".server_bundle.js";
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
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./app/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;