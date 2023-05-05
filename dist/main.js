/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./grilledMeat.jpg */ \"./src/grilledMeat.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n\\t--textcolour: rgba(250, 249, 246, 0.87);\\n\\t--darkcolour: #0c0c0c;\\n}\\n* {\\n\\tbox-sizing: border-box;\\n}\\n\\nhtml,\\nbody {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\theight: 100%;\\n\\tcolor: var(--textcolour);\\n\\tfont-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\n#content {\\n\\theight: 100%;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n\\tcolor: var(--darkcolour);\\n}\\n\\n/***************** HEADER CSS *****************/\\n\\n#header {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\twidth: 100%;\\n\\tposition: fixed;\\n\\tmin-height: 64px;\\n\\tbackground-color: var(--darkcolour);\\n\\tz-index: 2;\\n}\\n\\n.spacer {\\n\\twidth: 100%;\\n\\theight: 72px;\\n}\\n\\n#nav ul {\\n\\tdisplay: flex;\\n\\tjustify-content: space-around;\\n\\tlist-style-type: none;\\n\\tpadding: 0;\\n\\tfont-size: 1.2rem;\\n}\\n\\n#nav ul li {\\n\\tcursor: pointer;\\n\\tpadding-left: 5px;\\n\\tpadding-right: 5px;\\n}\\n\\n#nav {\\n\\twidth: 300px;\\n\\tpadding-left: 5px;\\n}\\n\\n.site-header-wrapper {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: space-between;\\n\\twidth: 80%;\\n}\\n\\n.active {\\n\\tfont-weight: 600;\\n}\\n\\n/***************** MAIN CSS *****************/\\n#main {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n\\tbackground-position: center;\\n\\tbackground-size: cover;\\n\\tbackground-attachment: fixed;\\n\\n\\theight: 100svh;\\n\\twidth: 100%;\\n}\\n\\n.darkBg {\\n\\tposition: absolute;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tbackground-color: rgba(0, 0, 0, 0.35);\\n\\tz-index: 0;\\n}\\n\\n#mainLogo {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\ttext-align: center;\\n\\tjustify-content: space-between;\\n\\twidth: 400px;\\n\\theight: 300px;\\n\\tz-index: 1;\\n}\\n\\n.content-container,\\n.gallery-content-container {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tflex-direction: column;\\n}\\n\\n.gallery-content-container {\\n\\tbackground-color: #121212;\\n}\\n\\n.wrapper {\\n\\twidth: 80%;\\n\\tgap: 2rem;\\n\\tmargin: 50px;\\n}\\n\\n.content-container .wrapper {\\n\\tdisplay: grid;\\n\\tgrid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\\n}\\n.ourStory {\\n\\twidth: 100%;\\n\\ttext-align: justify;\\n\\tcolor: var(--darkcolour);\\n}\\n.ourStory h2 {\\n\\tfont-size: 2rem;\\n\\tpadding-bottom: 3rem;\\n\\tpadding: 0;\\n}\\n\\n.imageContainer {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\theight: 100%;\\n\\twidth: 100%;\\n}\\n.imageContainer img {\\n\\theight: auto;\\n\\tmax-width: 100%;\\n\\tborder-radius: 10px;\\n\\tborder: white 2px solid;\\n}\\n\\n.imageContainer p {\\n\\twidth: 100%;\\n}\\n\\n.logo img {\\n\\theight: 4.2rem;\\n\\tpadding: 5px;\\n\\twidth: auto;\\n}\\n\\n#main #mainLogo .logo img {\\n\\theight: 12rem;\\n}\\n\\n.gallery-wrapper {\\n\\tdisplay: grid;\\n\\tgap: 10px;\\n\\tgrid-template-columns: 1fr 1fr 1fr;\\n\\twidth: 100%;\\n\\tpadding: 10px;\\n}\\n\\n@media screen and (max-width: 664px) {\\n\\t.gallery-wrapper {\\n\\t\\tgrid-template-columns: 1fr 1fr;\\n\\t}\\n}\\n\\n@media screen and (max-width: 440px) {\\n\\t.gallery-wrapper {\\n\\t\\tgrid-template-columns: 1fr;\\n\\t}\\n}\\n/***************** footer CSS *****************/\\n#footer {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\theight: 32px;\\n\\tcolor: var(--darkcolour);\\n}\\n\\n#footer > .wrapper {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\tgap: 1rem;\\n\\talign-items: center;\\n\\tmargin: 0px;\\n}\\n\\n#footer img {\\n\\theight: 1.7rem;\\n\\tpadding: 2px;\\n\\twidth: auto;\\n}\\n\\n/******************menu css try to merge with current stuff*******************/\\n\\nform {\\n\\tpadding: 20px;\\n}\\n\\n.outter-form {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tpadding: 0;\\n\\tgap: 50px;\\n}\\n.outter-form > p {\\n\\twidth: 70%;\\n}\\n\\n.outter-form li,\\n.outter-form ul {\\n\\twidth: 70%;\\n\\tlist-style: none;\\n}\\n\\nlabel {\\n\\tdisplay: inline-block;\\n\\twidth: 145px;\\n\\ttext-align: left;\\n\\tpadding-right: 10px;\\n}\\n\\nli textarea,\\nli input {\\n\\twidth: 80%;\\n\\tmin-width: 145px;\\n\\tpadding: 2px;\\n\\tvertical-align: middle;\\n}\\n\\ninput[type=\\\"button\\\"],\\ninput[type=\\\"submit\\\"] {\\n\\tbackground-color: #3a3a3a;\\n\\tborder: none;\\n\\tborder-radius: 5px;\\n\\ttext-shadow: 0px 2px 0px #000000;\\n\\tcursor: pointer;\\n\\tcolor: #faf9f6;\\n\\ttext-decoration: none;\\n\\theight: 40px;\\n\\twidth: 100px;\\n}\\n\\ninput[type=\\\"button\\\"]:hover,\\ninput[type=\\\"submit\\\"]:hover {\\n\\tbackground-color: #0c0c0c;\\n}\\n\\n.btnContainer {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\theight: 50px;\\n\\tgap: 1.5rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handleForm = (e) => {\n\te.preventDefault();\n\talert(\"Thank you for your booking. Someone will be in touch shortly.\");\n};\n\nconst createBookingForm = () => {\n\tconst contentContainer = document.createElement(\"div\");\n\tconst formElemsOutter = document.createElement(\"ul\");\n\tconst wrapper = document.createElement(\"div\");\n\tconst spacer = document.createElement(\"div\");\n\tconst title = document.createElement(\"h1\");\n\tconst subTitle = document.createElement(\"p\");\n\tconst formContainer = document.createElement(\"div\");\n\tconst form = document.createElement(\"form\");\n\tconst fnLi = document.createElement(\"li\");\n\tconst label1 = document.createElement(\"label\");\n\tconst fnInput = document.createElement(\"input\");\n\tconst lnLi = document.createElement(\"li\");\n\tconst label2 = document.createElement(\"label\");\n\tconst lnInput = document.createElement(\"input\");\n\tconst mobInputLi = document.createElement(\"li\");\n\tconst label3 = document.createElement(\"label\");\n\tconst mobNoInput = document.createElement(\"input\");\n\tconst emailLi = document.createElement(\"li\");\n\tconst label4 = document.createElement(\"label\");\n\tconst emailInput = document.createElement(\"input\");\n\tconst guestLi = document.createElement(\"li\");\n\tconst label5 = document.createElement(\"label\");\n\tconst numGuests = document.createElement(\"input\");\n\tconst dateLi = document.createElement(\"li\");\n\tconst label6 = document.createElement(\"label\");\n\tconst date = document.createElement(\"input\");\n\tconst infoLi = document.createElement(\"li\");\n\tconst label7 = document.createElement(\"label\");\n\tconst extraInfo = document.createElement(\"textarea\");\n\tconst submitBtn = document.createElement(\"input\");\n\tconst textAreaContainer = document.createElement(\"div\");\n\tconst requiredInfo = document.createElement(\"p\");\n\trequiredInfo.innerHTML = \"<strong>*</strong> indicates required field.\";\n\n\tformElemsOutter.classList.add(\"outter-form\");\n\tcontentContainer.classList.add(\"gallery-content-container\");\n\twrapper.classList.add(\"wrapper\");\n\ttextAreaContainer.classList.add(\"text-area-container\");\n\tformContainer.classList.add(\"form-container\");\n\ttitle.innerHTML = \"Make a reservation\";\n\tsubTitle.innerHTML =\n\t\t\"Please submit a reservation here and someone will confirm your booking. <br></br> You can also call <strong>02380459710</strong> to book over the phone.\";\n\n\tfnLi.appendChild(label1);\n\tlabel1.setAttribute(\"for\", \"first-name\");\n\tlabel1.innerHTML = \"First Name *:\";\n\tfnInput.setAttribute(\"type\", \"text\");\n\tfnInput.setAttribute(\"id\", \"first-name\");\n\tfnInput.setAttribute(\"required\", \"\");\n\n\tlnLi.appendChild(label2);\n\tlabel2.setAttribute(\"for\", \"last-name \");\n\tlabel2.innerHTML = \"Last Name *:\";\n\tlnInput.setAttribute(\"type\", \"text\");\n\tlnInput.setAttribute(\"id\", \"last-name\");\n\tlnInput.setAttribute(\"required\", \"\");\n\n\tmobInputLi.appendChild(label3);\n\tlabel3.setAttribute(\"for\", \"mob-no\");\n\tlabel3.innerHTML = \"Mobile Number *:\";\n\tmobNoInput.setAttribute(\"type\", \"tel\");\n\tmobNoInput.setAttribute(\"id\", \"mob-no\");\n\tmobNoInput.setAttribute(\"required\", \"\");\n\n\temailLi.appendChild(label4);\n\tlabel4.setAttribute(\"for\", \"email\");\n\tlabel4.innerHTML = \"Email (Optional):\";\n\temailInput.setAttribute(\"type\", \"email\");\n\temailInput.setAttribute(\"id\", \"email\");\n\n\tguestLi.appendChild(label5);\n\tlabel5.setAttribute(\"for\", \"num-guests\");\n\tlabel5.innerHTML = \"Number of Guests *:\";\n\tnumGuests.setAttribute(\"type\", \"number\");\n\tnumGuests.setAttribute(\"id\", \"num-guests\");\n\tnumGuests.setAttribute(\"required\", \"\");\n\n\tdateLi.appendChild(label6);\n\tlabel6.setAttribute(\"for\", \"date\");\n\tlabel6.innerHTML = \"Date *:\";\n\tdate.setAttribute(\"type\", \"datetime-local\");\n\tdate.setAttribute(\"id\", \"date\");\n\tdate.setAttribute(\"required\", \"\");\n\n\tinfoLi.appendChild(label7);\n\tlabel7.setAttribute(\"for\", \"info\");\n\tlabel7.innerHTML = \"Message (Optional):\";\n\textraInfo.setAttribute(\"id\", \"info\");\n\textraInfo.setAttribute(\"rows\", \"6\");\n\textraInfo.setAttribute(\n\t\t\"placeholder\",\n\t\t\"E.g. Allergies or special requirements\"\n\t);\n\n\tsubmitBtn.setAttribute(\"type\", \"submit\");\n\tsubmitBtn.setAttribute(\"for\", \"booking-form\");\n\n\tnumGuests.setAttribute(\"id\", \"num-guests\");\n\tform.setAttribute(\"id\", \"booking-form\");\n\tform.setAttribute(\"action\", \"#\");\n\tform.setAttribute(\"method\", \"post\");\n\tspacer.classList.add(\"spacer\");\n\n\tform.addEventListener(\"submit\", (e) => {\n\t\thandleForm(e);\n\t\tform.reset();\n\t});\n\n\tfnLi.appendChild(fnInput);\n\tlnLi.appendChild(lnInput);\n\tmobInputLi.appendChild(mobNoInput);\n\temailLi.appendChild(emailInput);\n\tguestLi.appendChild(numGuests);\n\tdateLi.appendChild(date);\n\tinfoLi.appendChild(extraInfo);\n\tformElemsOutter.appendChild(requiredInfo);\n\tformElemsOutter.appendChild(fnLi);\n\tformElemsOutter.appendChild(lnLi);\n\tformElemsOutter.appendChild(mobInputLi);\n\tformElemsOutter.appendChild(emailLi);\n\tformElemsOutter.appendChild(guestLi);\n\tformElemsOutter.appendChild(dateLi);\n\tformElemsOutter.appendChild(infoLi);\n\tformElemsOutter.appendChild(submitBtn);\n\n\tform.appendChild(formElemsOutter);\n\twrapper.appendChild(title);\n\twrapper.appendChild(subTitle);\n\twrapper.appendChild(formContainer);\n\n\tformContainer.appendChild(form);\n\tcontentContainer.appendChild(wrapper);\n\n\treturn { spacer, contentContainer };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBookingForm);\n\n\n//# sourceURL=webpack://restaurant-page/./src/book.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _github_mark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-mark.svg */ \"./src/github-mark.svg\");\n\n\nconst gitLogo = new Image();\ngitLogo.src = _github_mark_svg__WEBPACK_IMPORTED_MODULE_0__;\n\nconst createFooter = () => {\n\tconst footer = document.createElement(\"div\");\n\tconst wrapper = document.createElement(\"div\");\n\tconst text = document.createElement(\"a\");\n\ttext.innerHTML = \"Spaceflyy\";\n\ttext.href = \"https://github.com/Spaceflyy\";\n\ttext.setAttribute(\"target\", \"_blank\");\n\twrapper.appendChild(gitLogo);\n\ttext.innerHTML = \"Spaceflyy\";\n\twrapper.appendChild(text);\n\twrapper.classList.add(\"wrapper\");\n\tfooter.setAttribute(\"id\", \"footer\");\n\tfooter.appendChild(wrapper);\n\n\treturn footer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"setActive\": () => (/* binding */ setActive)\n/* harmony export */ });\n/* harmony import */ var _Logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.svg */ \"./src/Logo.svg\");\n\n\nconst log = new Image();\nlog.src = _Logo_svg__WEBPACK_IMPORTED_MODULE_0__;\n\nfunction createHeader() {\n\tconst head = document.createElement(\"div\");\n\tconst headerWrapper = document.createElement(\"div\");\n\tconst logoContainer = document.createElement(\"div\");\n\tconst nav = document.createElement(\"div\");\n\tnav.setAttribute(\"id\", \"nav\");\n\n\tconst ulList = document.createElement(\"ul\");\n\tconst home = document.createElement(\"li\");\n\tconst menu = document.createElement(\"li\");\n\tconst contact = document.createElement(\"li\");\n\thome.innerHTML = \"Home\";\n\tmenu.innerHTML = \"Menu\";\n\tcontact.innerHTML = \"Book\";\n\thome.setAttribute(\"id\", \"homeBtn\");\n\tmenu.setAttribute(\"id\", \"menuBtn\");\n\tcontact.setAttribute(\"id\", \"contactBtn\");\n\tulList.appendChild(home);\n\tulList.appendChild(menu);\n\tulList.appendChild(contact);\n\tnav.append(ulList);\n\tlogoContainer.appendChild(log);\n\n\theaderWrapper.appendChild(logoContainer);\n\theaderWrapper.classList.add(\"logo\");\n\theaderWrapper.classList.add(\"site-header-wrapper\");\n\theaderWrapper.appendChild(nav);\n\thead.setAttribute(\"id\", \"header\");\n\thead.appendChild(headerWrapper);\n\n\treturn head;\n}\n\nconst setActive = (activeButton) => {\n\tconst elms = Array.from(document.querySelector(\"#nav ul\").children);\n\tfor (let i = 0; i < elms.length; i += 1) {\n\t\telms[i].style = \"\";\n\t}\n\tconst homeButton = document.querySelector(activeButton);\n\n\thomeButton.style.borderBottom = \"solid 1px var(--textcolour)\";\n\thomeButton.style.fontWeight = \"600\";\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gallerySection\": () => (/* binding */ gallerySection),\n/* harmony export */   \"heroSection\": () => (/* binding */ heroSection),\n/* harmony export */   \"storySection\": () => (/* binding */ storySection)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book */ \"./src/book.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _diningRoom_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diningRoom.jpg */ \"./src/diningRoom.jpg\");\n/* harmony import */ var _Logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo.svg */ \"./src/Logo.svg\");\n/* harmony import */ var _imgs_home_beer_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/home/beer.jpg */ \"./src/imgs/home/beer.jpg\");\n/* harmony import */ var _imgs_home_man_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgs/home/man.jpg */ \"./src/imgs/home/man.jpg\");\n/* harmony import */ var _imgs_home_meatDish_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgs/home/meatDish.jpg */ \"./src/imgs/home/meatDish.jpg\");\n/* harmony import */ var _imgs_home_servingFood_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imgs/home/servingFood.jpg */ \"./src/imgs/home/servingFood.jpg\");\n/* harmony import */ var _imgs_home_steakdish_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imgs/home/steakdish.jpg */ \"./src/imgs/home/steakdish.jpg\");\n/* harmony import */ var _imgs_home_restaurant_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imgs/home/restaurant.jpg */ \"./src/imgs/home/restaurant.jpg\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* eslint-disable no-plusplus */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst content = document.getElementById(\"content\");\nconst images = [_imgs_home_beer_jpg__WEBPACK_IMPORTED_MODULE_5__, _imgs_home_man_jpg__WEBPACK_IMPORTED_MODULE_6__, _imgs_home_servingFood_jpg__WEBPACK_IMPORTED_MODULE_8__, _imgs_home_meatDish_jpg__WEBPACK_IMPORTED_MODULE_7__, _imgs_home_steakdish_jpg__WEBPACK_IMPORTED_MODULE_9__, _imgs_home_restaurant_jpg__WEBPACK_IMPORTED_MODULE_10__];\n\nconst log = new Image();\nlog.src = _Logo_svg__WEBPACK_IMPORTED_MODULE_4__;\n\nfunction heroSection() {\n\tconst main = document.createElement(\"div\");\n\tconst darkBg = document.createElement(\"div\");\n\tconst logoBtnContainer = document.createElement(\"div\");\n\tconst openingHours = document.createElement(\"p\");\n\tconst buttons = document.createElement(\"div\");\n\tconst viewMenubtn = document.createElement(\"input\");\n\tconst contactbtn = document.createElement(\"input\");\n\tconst mainTitle = document.createElement(\"div\");\n\tdarkBg.classList.add(\"darkBg\");\n\tbuttons.classList.add(\"btnContainer\");\n\tmainTitle.classList.add(\"logo\");\n\tmainTitle.appendChild(log);\n\topeningHours.innerHTML =\n\t\t\"Open weekdays 9AM - 5PM <br></br> 123 Fake Street, Fake City, SO45 XG3\";\n\tlogoBtnContainer.setAttribute(\"id\", \"mainLogo\");\n\tmain.setAttribute(\"id\", \"main\");\n\n\tviewMenubtn.setAttribute(\"type\", \"button\");\n\tcontactbtn.setAttribute(\"type\", \"button\");\n\n\tviewMenubtn.setAttribute(\"value\", \"View Menu\");\n\tcontactbtn.setAttribute(\"value\", \"Book Now\");\n\tbuttons.appendChild(viewMenubtn);\n\tbuttons.appendChild(contactbtn);\n\tlogoBtnContainer.appendChild(mainTitle);\n\tlogoBtnContainer.appendChild(openingHours);\n\tlogoBtnContainer.appendChild(buttons);\n\tmain.appendChild(darkBg);\n\tmain.appendChild(logoBtnContainer);\n\n\tcontactbtn.addEventListener(\"click\", () => {\n\t\tconst elms = Array.from(content.children);\n\t\tfor (let i = 1; i < elms.length; i += 1) {\n\t\t\tcontent.removeChild(elms[i]);\n\t\t}\n\n\t\tcontent.appendChild((0,_book__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().spacer);\n\t\tcontent.appendChild((0,_book__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().contentContainer);\n\t\tcontent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_11__[\"default\"])());\n\t\t(0,_header__WEBPACK_IMPORTED_MODULE_0__.setActive)(\"#contactBtn\");\n\t});\n\tviewMenubtn.addEventListener(\"click\", () => {\n\t\tconst elms = Array.from(content.children);\n\t\tfor (let i = 1; i < elms.length; i += 1) {\n\t\t\tcontent.removeChild(elms[i]);\n\t\t}\n\t\tcontent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().spacer);\n\t\tcontent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().container);\n\t\tcontent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_11__[\"default\"])());\n\t\t(0,_header__WEBPACK_IMPORTED_MODULE_0__.setActive)(\"#menuBtn\");\n\t});\n\treturn main;\n}\n\nfunction storySection() {\n\tconst diningImg = new Image();\n\tdiningImg.src = _diningRoom_jpg__WEBPACK_IMPORTED_MODULE_3__;\n\n\tconst container = document.createElement(\"div\");\n\tconst wrapper = document.createElement(\"div\");\n\tconst story = document.createElement(\"div\");\n\tconst imgcontainer = document.createElement(\"div\");\n\tconst text = document.createElement(\"p\");\n\tconst title = document.createElement(\"h2\");\n\ttitle.innerHTML = \"Our Story\";\n\ttext.innerHTML =\n\t\t\"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime molestias libero soluta perspiciatis repudiandae vitae, inventore pariatur aut suscipit nam et. Quod ullam facere at, nemo rerum laudantium ea!\";\n\timgcontainer.classList.add(\"imageContainer\");\n\timgcontainer.appendChild(diningImg);\n\tcontainer.classList.add(\"content-container\");\n\twrapper.classList.add(\"wrapper\");\n\tstory.classList.add(\"ourStory\");\n\n\tconst text2 = text.cloneNode(true);\n\tconst text3 = text.cloneNode(true);\n\tconst text4 = text.cloneNode(true);\n\tconst text5 = text.cloneNode(true);\n\tstory.appendChild(title);\n\tstory.appendChild(text);\n\tstory.appendChild(text2);\n\tstory.appendChild(text3);\n\tstory.appendChild(text4);\n\tstory.appendChild(text5);\n\twrapper.appendChild(story);\n\twrapper.appendChild(imgcontainer);\n\tcontainer.appendChild(wrapper);\n\n\treturn container;\n}\n\nfunction gallerySection() {\n\tconst container = document.createElement(\"div\");\n\tconst wrapper = document.createElement(\"div\");\n\tconst galleryWrapper = document.createElement(\"div\");\n\n\tcontainer.classList.add(\"gallery-content-container\");\n\twrapper.classList.add(\"wrapper\");\n\tgalleryWrapper.classList.add(\"gallery-wrapper\");\n\n\tfor (let i = 0; i < 6; i++) {\n\t\tconst imgs = new Image();\n\t\timgs.src = images[i];\n\t\tconst cont = document.createElement(\"div\");\n\t\tcont.classList.add(\"imageContainer\");\n\t\tcont.appendChild(imgs);\n\t\tgalleryWrapper.appendChild(cont);\n\t}\n\tcontainer.appendChild(wrapper);\n\twrapper.appendChild(galleryWrapper);\n\n\treturn container;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBookPage\": () => (/* binding */ createBookPage),\n/* harmony export */   \"createMenuPage\": () => (/* binding */ createMenuPage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book */ \"./src/book.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\n\nconst content = document.getElementById(\"content\");\n\nconst clearScreen = () => {\n\tconst elms = Array.from(content.children);\n\tfor (let i = 1; i < elms.length; i += 1) {\n\t\tcontent.removeChild(elms[i]);\n\t}\n};\n\nconst createHomePage = () => {\n\tclearScreen();\n\tcontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.heroSection)());\n\tcontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.storySection)());\n\tcontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.gallerySection)());\n\tcontent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n\t(0,_header__WEBPACK_IMPORTED_MODULE_1__.setActive)(\"#homeBtn\");\n};\n\nconst createMenuPage = () => {\n\tclearScreen();\n\tcontent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().spacer);\n\tcontent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().container);\n\tcontent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n\t(0,_header__WEBPACK_IMPORTED_MODULE_1__.setActive)(\"#menuBtn\");\n};\n\nconst createBookPage = () => {\n\tclearScreen();\n\tcontent.appendChild((0,_book__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().spacer);\n\tcontent.appendChild((0,_book__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().contentContainer);\n\tcontent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n\t(0,_header__WEBPACK_IMPORTED_MODULE_1__.setActive)(\"#contactBtn\");\n};\n\ncontent.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)());\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.heroSection)());\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.storySection)());\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.gallerySection)());\ncontent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n(0,_header__WEBPACK_IMPORTED_MODULE_1__.setActive)(\"#homeBtn\");\n\nconst menuBtn = document.querySelector(\"#menuBtn\");\nconst homeBtn = document.querySelector(\"#homeBtn\");\nconst bookBtn = document.querySelector(\"#contactBtn\");\nhomeBtn.addEventListener(\"click\", () => {\n\tcreateHomePage();\n});\n\nmenuBtn.addEventListener(\"click\", () => {\n\tcreateMenuPage();\n});\n\nbookBtn.addEventListener(\"click\", () => {\n\tcreateBookPage();\n});\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _steak_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./steak.jpg */ \"./src/steak.jpg\");\n/* harmony import */ var _ribs_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ribs.jpg */ \"./src/ribs.jpg\");\n/* harmony import */ var _rump_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rump.jpg */ \"./src/rump.jpg\");\n/* harmony import */ var _sirloin_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sirloin.jpg */ \"./src/sirloin.jpg\");\n/* harmony import */ var _burger_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./burger.jpg */ \"./src/burger.jpg\");\n/* harmony import */ var _fillet_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fillet.jpg */ \"./src/fillet.jpg\");\n\n\n\n\n\n\n\nconst steakImg = new Image();\nsteakImg.src = _steak_jpg__WEBPACK_IMPORTED_MODULE_0__;\nconst ribsImg = new Image();\nribsImg.src = _ribs_jpg__WEBPACK_IMPORTED_MODULE_1__;\nconst rumpImg = new Image();\nrumpImg.src = _rump_jpg__WEBPACK_IMPORTED_MODULE_2__;\nconst sirloinImg = new Image();\nsirloinImg.src = _sirloin_jpg__WEBPACK_IMPORTED_MODULE_3__;\nconst burgerImg = new Image();\nburgerImg.src = _burger_jpg__WEBPACK_IMPORTED_MODULE_4__;\n\nconst filletImg = new Image();\nfilletImg.src = _fillet_jpg__WEBPACK_IMPORTED_MODULE_5__;\n\nconst createMenuItem = (img, description) => {\n\tconst imgCont = document.createElement(\"div\");\n\tconst menuItemDescription = document.createElement(\"p\");\n\tmenuItemDescription.innerHTML = description;\n\timgCont.classList.add(\"imageContainer\");\n\timgCont.appendChild(img);\n\timgCont.appendChild(menuItemDescription);\n\n\treturn imgCont;\n};\n\nconst createMenu = () => {\n\tconst container = document.createElement(\"div\");\n\tconst wrapper = document.createElement(\"div\");\n\tconst galleryWrapper = document.createElement(\"div\");\n\tconst spacer = document.createElement(\"div\");\n\n\tconst title = document.createElement(\"h1\");\n\n\ttitle.innerText = \"Menu\";\n\tspacer.classList.add(\"spacer\");\n\n\tcontainer.classList.add(\"gallery-content-container\");\n\twrapper.classList.add(\"wrapper\");\n\tgalleryWrapper.classList.add(\"gallery-wrapper\");\n\n\tgalleryWrapper.appendChild(\n\t\tcreateMenuItem(\n\t\t\tsteakImg,\n\t\t\t\"<strong>Steak and chips £16.30 </strong><br></br> Juicy succulent steak served with chips. Recommended Medium-rare\"\n\t\t)\n\t);\n\tgalleryWrapper.appendChild(\n\t\tcreateMenuItem(\n\t\t\tribsImg,\n\t\t\t\"<strong>Rack of Ribs £21.75</strong><br></br> Delicious rack of slow-cooked ribs served with a smokey barbeque sauce and sides\"\n\t\t)\n\t);\n\n\tgalleryWrapper.appendChild(\n\t\tcreateMenuItem(\n\t\t\trumpImg,\n\t\t\t\"<strong>8oz Rump Steak £14.25</strong><br></br> Firm texture and rich flavour. Recommended Medium.\"\n\t\t)\n\t);\n\n\tgalleryWrapper.appendChild(\n\t\tcreateMenuItem(\n\t\t\tsirloinImg,\n\t\t\t\"<strong>8oz sirloin Steak £16.25</strong><br></br> Tender and full of flavour. Recommended Rare.\"\n\t\t)\n\t);\n\n\tgalleryWrapper.appendChild(\n\t\tcreateMenuItem(\n\t\t\tburgerImg,\n\t\t\t\"<strong> 100% Beef burger with cheese £13.50</strong><br></br> Juicy and succulent burger served with cheddar cheese.\"\n\t\t)\n\t);\n\n\tgalleryWrapper.appendChild(\n\t\tcreateMenuItem(\n\t\t\tfilletImg,\n\t\t\t\"<strong> Fillet steak with cauliflower £24.95</strong><br></br> The king of steaks, packed full of flavour. Recommended Rare\"\n\t\t)\n\t);\n\n\twrapper.appendChild(title);\n\tcontainer.appendChild(wrapper);\n\twrapper.appendChild(galleryWrapper);\n\treturn { spacer, container };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/Logo.svg":
/*!**********************!*\
  !*** ./src/Logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fe2ba1fa71fca44ed6f6.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Logo.svg?");

/***/ }),

/***/ "./src/burger.jpg":
/*!************************!*\
  !*** ./src/burger.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5632d2a5faccd39a9635.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/burger.jpg?");

/***/ }),

/***/ "./src/diningRoom.jpg":
/*!****************************!*\
  !*** ./src/diningRoom.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac8b162f5cddd04965fe.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/diningRoom.jpg?");

/***/ }),

/***/ "./src/fillet.jpg":
/*!************************!*\
  !*** ./src/fillet.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bffef0e4e83c6de7d54a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/fillet.jpg?");

/***/ }),

/***/ "./src/github-mark.svg":
/*!*****************************!*\
  !*** ./src/github-mark.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6fa18895f6e6c7772cab.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/github-mark.svg?");

/***/ }),

/***/ "./src/grilledMeat.jpg":
/*!*****************************!*\
  !*** ./src/grilledMeat.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c5aee866542eba5e1bb.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/grilledMeat.jpg?");

/***/ }),

/***/ "./src/imgs/home/beer.jpg":
/*!********************************!*\
  !*** ./src/imgs/home/beer.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c71f001f4e64bfefca18.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/home/beer.jpg?");

/***/ }),

/***/ "./src/imgs/home/man.jpg":
/*!*******************************!*\
  !*** ./src/imgs/home/man.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"44b6feaaa5dd24dcaa88.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/home/man.jpg?");

/***/ }),

/***/ "./src/imgs/home/meatDish.jpg":
/*!************************************!*\
  !*** ./src/imgs/home/meatDish.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bcdd21e9101eb4010cc7.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/home/meatDish.jpg?");

/***/ }),

/***/ "./src/imgs/home/restaurant.jpg":
/*!**************************************!*\
  !*** ./src/imgs/home/restaurant.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"96cb0c21f2346c6c3c36.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/home/restaurant.jpg?");

/***/ }),

/***/ "./src/imgs/home/servingFood.jpg":
/*!***************************************!*\
  !*** ./src/imgs/home/servingFood.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"40b0a0ce4667b4cff50f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/home/servingFood.jpg?");

/***/ }),

/***/ "./src/imgs/home/steakdish.jpg":
/*!*************************************!*\
  !*** ./src/imgs/home/steakdish.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d9d5d1baac8aa006b22a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/home/steakdish.jpg?");

/***/ }),

/***/ "./src/ribs.jpg":
/*!**********************!*\
  !*** ./src/ribs.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"369660ae21c79b11c131.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/ribs.jpg?");

/***/ }),

/***/ "./src/rump.jpg":
/*!**********************!*\
  !*** ./src/rump.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e494422eb6d27077a633.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/rump.jpg?");

/***/ }),

/***/ "./src/sirloin.jpg":
/*!*************************!*\
  !*** ./src/sirloin.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"630e0b85932b44a5ffd2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/sirloin.jpg?");

/***/ }),

/***/ "./src/steak.jpg":
/*!***********************!*\
  !*** ./src/steak.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04c70580649fafa3b2da.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/steak.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;