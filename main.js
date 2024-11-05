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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/odin-salad-background.jpg */ \"./src/assets/images/odin-salad-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\r\n\r\n:root {\r\n  --green200: #bbf7d0;\r\n  --green400: #34d399;\r\n  --green600: #059669;\r\n  --background: rgb(1, 5, 10);\r\n  font-family: 'Satisfy', cursive;\r\n  font-style: italic;\r\n}\r\nhtml {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  height: 100vh;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  width: 700px;\r\n  background: var(--background);\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  /*centers the position of the bacground photo*/\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: fixed;\r\n}\r\n\r\n/* #salad-background {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  width: max-content;\r\n  height: max-content;\r\n} */\r\nheader {\r\n  /* width: clamp(300px, 50%, 60vw); */\r\n  /* margin-top: 100px; */\r\n  height: 200px;\r\n  width: 100%;\r\n  /* position: absolute; */\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#rest-name {\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  /* margin-left: 10%; */\r\n  color: white;\r\n  font-size: 20px;\r\n  font-weight: lighter;\r\n}\r\n\r\n#navigation {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-end;\r\n  justify-content: flex-start;\r\n  height: 100%;\r\n  /* margin-left: 10%; */\r\n  gap: 20px;\r\n}\r\n\r\n.nav-button {\r\n  border-top-width: 1px;\r\n  border-left-width: 1px;\r\n  border-right-width: 1px;\r\n  border-bottom-width: 0px;\r\n  z-index: 1;\r\n  height: 50px;\r\n  width: 150px;\r\n  box-shadow: 0px -4px 5px var(--background);\r\n  border-top-left-radius: 17px;\r\n  border-top-right-radius: 17px;\r\n  border-color: white;\r\n  transition: 0.2s;\r\n  /* background-color: rgba(0, 0, 0, 0.1); */\r\n  color: black;\r\n  background-color: white;\r\n  font-family: 'Satisfy', cursive;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n}\r\n\r\n.nav-button:hover {\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n#content {\r\n  /* width: clamp(200px, 50%, 70vw);\r\n  height: min(70vh); */\r\n  /* margin-top: 30px; */\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  grid-template-rows: auto;\r\n  grid-auto-flow: row;\r\n  justify-items: center;\r\n  align-items: center;\r\n  gap: 20px;\r\n  border-color: white;\r\n  border-left: 1px;\r\n  border-right: 1px;\r\n  border-bottom: 1px;\r\n  background-color: white;\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n  border-top-right-radius: 17px;\r\n  border-bottom-right-radius: 17px;\r\n  border-bottom-left-radius: 17px;\r\n  border-top: 0px;\r\n  box-shadow: 0px -4px 5px var(--background);\r\n}\r\n\r\n.meal-cell {\r\n  border-radius: 17px;\r\n  width: 200px;\r\n  height: 200px;\r\n  box-shadow: 0px -4px 5px var(--background);\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 2fr 1fr;\r\n}\r\n\r\n.meal-image-cell {\r\n  background-color: white;\r\n  width: 200px;\r\n  height: 150px;\r\n  border-top-left-radius: 17px;\r\n  border-top-right-radius: 17px;\r\n}\r\n\r\n.meal-description {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n}\r\n\r\n.meal-image {\r\n  width: 100%;\r\n  height: 100%;\r\n  /* overflow: hidden; */\r\n  /*prevents pictures from stretching*/\r\n  object-fit: cover;\r\n  z-index: -1;\r\n  border-top-left-radius: 17px;\r\n  border-top-right-radius: 17px;\r\n}\r\n\r\n.meal-description {\r\n  box-shadow: 0px -2px 20px var(--background);\r\n  color: white;\r\n  font-weight: 200;\r\n  background-color: var(--background);\r\n  border-bottom-right-radius: 17px;\r\n  border-bottom-left-radius: 17px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://starter/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://starter/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://starter/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://starter/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://starter/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://starter/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://starter/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://starter/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://starter/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://starter/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://starter/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/chickenMenu.js":
/*!****************************!*\
  !*** ./src/chickenMenu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   chickenMenu: () => (/* binding */ chickenMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_images_chicken_salad_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/chicken-salad-1.jpg */ \"./src/assets/images/chicken-salad-1.jpg\");\n/* harmony import */ var _assets_images_chicken_salad_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/chicken-salad-2.jpg */ \"./src/assets/images/chicken-salad-2.jpg\");\n/* harmony import */ var _assets_images_chicken_salad_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/chicken-salad-3.jpg */ \"./src/assets/images/chicken-salad-3.jpg\");\n/* harmony import */ var _assets_images_chicken_salad_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/chicken-salad-4.jpg */ \"./src/assets/images/chicken-salad-4.jpg\");\n/* harmony import */ var _assets_images_chicken_salad_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/chicken-salad-5.jpg */ \"./src/assets/images/chicken-salad-5.jpg\");\n\n\n\n\n\n\nconst chickenMenu = (function () {\n  const chickenSaladImages = [\n    _assets_images_chicken_salad_1_jpg__WEBPACK_IMPORTED_MODULE_0__,\n    _assets_images_chicken_salad_2_jpg__WEBPACK_IMPORTED_MODULE_1__,\n    _assets_images_chicken_salad_3_jpg__WEBPACK_IMPORTED_MODULE_2__,\n    _assets_images_chicken_salad_4_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    _assets_images_chicken_salad_5_jpg__WEBPACK_IMPORTED_MODULE_4__,\n  ];\n  const chickenSaladDesc = [\n    'Exquisite Chicken Salad #1 $20',\n    'Exquisite Chicken Salad #2 $15',\n    'Exquisite Chicken Salad #3 $17',\n    'Exquisite Chicken Salad #4 $22',\n    'Exquisite Chicken Salad #5 $30',\n  ];\n\n  const buildMenu = () => {\n    const menuImages = chickenSaladImages;\n    const menuDesc = chickenSaladDesc;\n\n    let mealCells = [];\n    for (let i in menuImages) {\n      const mealCell = document.createElement('div');\n      mealCell.className = 'meal-cell';\n\n      let mealImageCell = document.createElement('div');\n      mealImageCell.className = 'meal-image-cell';\n\n      let mealImage = document.createElement('img');\n      mealImage.className = 'meal-image';\n      mealImage.src = menuImages[i];\n\n      let mealDescription = document.createElement('div');\n      mealDescription.className = 'meal-description';\n      mealDescription.innerHTML = `<p>${menuDesc[i]}</p>`;\n\n      mealImageCell.appendChild(mealImage);\n\n      mealCell.appendChild(mealImageCell);\n      mealCell.appendChild(mealDescription);\n      mealCells.push(mealCell);\n    }\n    return mealCells;\n  };\n\n  return { buildMenu };\n})();\n\n\n//# sourceURL=webpack://starter/./src/chickenMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _chickenMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chickenMenu.js */ \"./src/chickenMenu.js\");\n/* harmony import */ var _meatMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meatMenu.js */ \"./src/meatMenu.js\");\n/* harmony import */ var _veganMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./veganMenu.js */ \"./src/veganMenu.js\");\n\n\n\n\n\nfunction init() {\n  let mainContent = document.getElementById('content');\n  mainContent.innerHTML = '';\n  let menuList = _chickenMenu_js__WEBPACK_IMPORTED_MODULE_1__.chickenMenu.buildMenu(1);\n  for (let el of menuList) {\n    mainContent.appendChild(el);\n  }\n}\n\nconst page = (function () {\n  let buttons = document.querySelectorAll('.nav-button');\n  init();\n  for (let btn of buttons) {\n    btn.onclick = function () {\n      let mainContent = document.getElementById('content');\n      mainContent.innerHTML = '';\n      let menuList = '';\n      switch (btn.id) {\n        case 'chicken-salads-button':\n          menuList = _chickenMenu_js__WEBPACK_IMPORTED_MODULE_1__.chickenMenu.buildMenu();\n          break;\n        case 'meat-salads-button':\n          menuList = _meatMenu_js__WEBPACK_IMPORTED_MODULE_2__.meatMenu.buildMenu();\n          break;\n        case 'vegan-salads-button':\n          menuList = _veganMenu_js__WEBPACK_IMPORTED_MODULE_3__.veganMenu.buildMenu();\n          break;\n      }\n      for (let el of menuList) {\n        mainContent.appendChild(el);\n      }\n    };\n  }\n})();\n\n\n//# sourceURL=webpack://starter/./src/index.js?");

/***/ }),

/***/ "./src/meatMenu.js":
/*!*************************!*\
  !*** ./src/meatMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   meatMenu: () => (/* binding */ meatMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_images_meat_salad_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/meat-salad-1.jpg */ \"./src/assets/images/meat-salad-1.jpg\");\n/* harmony import */ var _assets_images_meat_salad_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/meat-salad-2.jpg */ \"./src/assets/images/meat-salad-2.jpg\");\n/* harmony import */ var _assets_images_meat_salad_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/meat-salad-3.jpg */ \"./src/assets/images/meat-salad-3.jpg\");\n/* harmony import */ var _assets_images_meat_salad_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/meat-salad-4.jpg */ \"./src/assets/images/meat-salad-4.jpg\");\n/* harmony import */ var _assets_images_meat_salad_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/meat-salad-5.jpg */ \"./src/assets/images/meat-salad-5.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst meatMenu = (function () {\r\n  const meatSaladImages = [\r\n    _assets_images_meat_salad_1_jpg__WEBPACK_IMPORTED_MODULE_0__,\r\n    _assets_images_meat_salad_2_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n    _assets_images_meat_salad_3_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n    _assets_images_meat_salad_4_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n    _assets_images_meat_salad_5_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n  ];\r\n\r\n  const meatSaladDesc = [\r\n    'Exquisite Meat Salad #1 $20',\r\n    'Exquisite Meat Salad #2 $15',\r\n    'Exquisite Meat Salad #3 $17',\r\n    'Exquisite Meat Salad #4 $22',\r\n    'Exquisite Meat Salad #5 $30',\r\n  ];\r\n\r\n  const buildMenu = () => {\r\n    let menuImages = meatSaladImages;\r\n    let menuDesc = meatSaladDesc;\r\n\r\n    let mealCells = [];\r\n    for (let i in menuImages) {\r\n      const mealCell = document.createElement('div');\r\n      mealCell.className = 'meal-cell';\r\n\r\n      let mealImageCell = document.createElement('div');\r\n      mealImageCell.className = 'meal-image-cell';\r\n\r\n      let mealImage = document.createElement('img');\r\n      mealImage.className = 'meal-image';\r\n      mealImage.src = menuImages[i];\r\n\r\n      let mealDescription = document.createElement('div');\r\n      mealDescription.className = 'meal-description';\r\n      mealDescription.innerHTML = `<p>${menuDesc[i]}</p>`;\r\n\r\n      mealImageCell.appendChild(mealImage);\r\n\r\n      mealCell.appendChild(mealImageCell);\r\n      mealCell.appendChild(mealDescription);\r\n      mealCells.push(mealCell);\r\n    }\r\n    return mealCells;\r\n  };\r\n\r\n  return { buildMenu };\r\n})();\r\n\n\n//# sourceURL=webpack://starter/./src/meatMenu.js?");

/***/ }),

/***/ "./src/veganMenu.js":
/*!**************************!*\
  !*** ./src/veganMenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   veganMenu: () => (/* binding */ veganMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_images_vegan_salad_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/vegan-salad-1.jpg */ \"./src/assets/images/vegan-salad-1.jpg\");\n/* harmony import */ var _assets_images_vegan_salad_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/vegan-salad-2.jpg */ \"./src/assets/images/vegan-salad-2.jpg\");\n/* harmony import */ var _assets_images_vegan_salad_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/vegan-salad-3.jpg */ \"./src/assets/images/vegan-salad-3.jpg\");\n\r\n\r\n\r\n\r\nconst veganMenu = (function () {\r\n  const veganSaladImages = [_assets_images_vegan_salad_1_jpg__WEBPACK_IMPORTED_MODULE_0__, _assets_images_vegan_salad_2_jpg__WEBPACK_IMPORTED_MODULE_1__, _assets_images_vegan_salad_3_jpg__WEBPACK_IMPORTED_MODULE_2__];\r\n\r\n  const veganSaladDesc = [\r\n    'Vegan Salad #1 $20',\r\n    'Vegan Salad #2 $15',\r\n    'Vegan Salad #3 $17',\r\n  ];\r\n\r\n  const buildMenu = () => {\r\n    let menuImages = veganSaladImages;\r\n    let menuDesc = veganSaladDesc;\r\n\r\n    let mealCells = [];\r\n    for (let i in menuImages) {\r\n      const mealCell = document.createElement('div');\r\n      mealCell.className = 'meal-cell';\r\n\r\n      let mealImageCell = document.createElement('div');\r\n      mealImageCell.className = 'meal-image-cell';\r\n\r\n      let mealImage = document.createElement('img');\r\n      mealImage.className = 'meal-image';\r\n      mealImage.src = menuImages[i];\r\n\r\n      let mealDescription = document.createElement('div');\r\n      mealDescription.className = 'meal-description';\r\n      mealDescription.innerHTML = `<p>${menuDesc[i]}</p>`;\r\n\r\n      mealImageCell.appendChild(mealImage);\r\n\r\n      mealCell.appendChild(mealImageCell);\r\n      mealCell.appendChild(mealDescription);\r\n      mealCells.push(mealCell);\r\n    }\r\n    return mealCells;\r\n  };\r\n\r\n  return { buildMenu };\r\n})();\r\n\n\n//# sourceURL=webpack://starter/./src/veganMenu.js?");

/***/ }),

/***/ "./src/assets/images/chicken-salad-1.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/chicken-salad-1.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce8288d1b8dff4b62862.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/chicken-salad-1.jpg?");

/***/ }),

/***/ "./src/assets/images/chicken-salad-2.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/chicken-salad-2.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c570ce2f599405fb5f65.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/chicken-salad-2.jpg?");

/***/ }),

/***/ "./src/assets/images/chicken-salad-3.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/chicken-salad-3.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"65d255bc943d546fd6b0.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/chicken-salad-3.jpg?");

/***/ }),

/***/ "./src/assets/images/chicken-salad-4.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/chicken-salad-4.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e2708ec1920462a521b.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/chicken-salad-4.jpg?");

/***/ }),

/***/ "./src/assets/images/chicken-salad-5.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/chicken-salad-5.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07cb11583345ccd6d3b3.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/chicken-salad-5.jpg?");

/***/ }),

/***/ "./src/assets/images/meat-salad-1.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/meat-salad-1.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8f2c8a66844eb6e3c6c0.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/meat-salad-1.jpg?");

/***/ }),

/***/ "./src/assets/images/meat-salad-2.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/meat-salad-2.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"215a53ab08abeb434aba.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/meat-salad-2.jpg?");

/***/ }),

/***/ "./src/assets/images/meat-salad-3.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/meat-salad-3.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c43a0fa5223cef486a7.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/meat-salad-3.jpg?");

/***/ }),

/***/ "./src/assets/images/meat-salad-4.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/meat-salad-4.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89a733dae068728f9761.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/meat-salad-4.jpg?");

/***/ }),

/***/ "./src/assets/images/meat-salad-5.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/meat-salad-5.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a25fb6c11d5fcfeae4e.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/meat-salad-5.jpg?");

/***/ }),

/***/ "./src/assets/images/odin-salad-background.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/odin-salad-background.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a8b12c806cab4a3e0eb2.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/odin-salad-background.jpg?");

/***/ }),

/***/ "./src/assets/images/vegan-salad-1.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/vegan-salad-1.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"670dfc9bdd1521b09f94.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/vegan-salad-1.jpg?");

/***/ }),

/***/ "./src/assets/images/vegan-salad-2.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/vegan-salad-2.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"45d9bcf7ee2b3caf2164.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/vegan-salad-2.jpg?");

/***/ }),

/***/ "./src/assets/images/vegan-salad-3.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/vegan-salad-3.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6393df72696e8a042d9c.jpg\";\n\n//# sourceURL=webpack://starter/./src/assets/images/vegan-salad-3.jpg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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