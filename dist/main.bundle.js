"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0%;\\n  color: rgb(77, 77, 77);\\n}\\n\\nbody {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n#container {\\n  display: flex;\\n  flex-direction: column;\\n  width: 50%;\\n  border: solid 2px rgb(153, 153, 153);\\n  box-shadow: 1px 1px 5px 6px rgb(153, 153, 153);\\n  position: absolute;\\n  top: 20%;\\n}\\n\\n#container hr {\\n  width: 100%;\\n  padding: 0%;\\n  color: aliceblue;\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 12px 1% 12px 3%;\\n}\\n\\n#input {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 10px 1% 10px 3%;\\n}\\n\\n#inputToDo {\\n  border: none;\\n}\\n\\n#toDos {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.toDo {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 10px 1% 10px 3%;\\n}\\n\\n.toDo div {\\n  display: flex;\\n  gap: 12px;\\n}\\n\\n.descriptionInput {\\n  border: none;\\n  background-color: rgba(240, 248, 255, 0);\\n}\\n\\nfooter {\\n  text-align: center;\\n  background-color: rgb(221, 221, 221);\\n  padding: 10px 0;\\n}\\n\\nfooter a {\\n  text-decoration: none;\\n  color: rgb(83, 83, 83);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui.js */ \"./src/modules/ui.js\");\n\n\n\nconst clearCompleted = () => {\n  const toDoList = JSON.parse(localStorage.getItem('allEntries'));\n  const complete = toDoList.filter((toDo) => toDo.completed === true);\n  const indexes = [];\n  for (let i = 0; i < complete.length; i += 1) {\n    const index = (complete[i].index) - 1;\n    indexes.push(index);\n  }\n\n  for (let i = indexes.length - 1; i >= 0; i -= 1) toDoList.splice(indexes[i], 1);\n\n  for (let i = 0; i < toDoList.length; i += 1) {\n    toDoList[i].index = i + 1;\n  }\n  localStorage.setItem('allEntries', JSON.stringify(toDoList));\n  (0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.toDos)();\n};\n\n// const toDoList = null\n// localStorage.setItem(\"allEntries\", JSON.stringify(toDoList));\n(0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.addIcons)();\n(0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.toDos)();\ndocument.querySelector('#addBtn').addEventListener('click', _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.add);\ndocument.querySelector('#refreshBtn').addEventListener('click', _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.toDos);\ndocument.querySelector('#clearBtn').addEventListener('click', clearCompleted);\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/statusUpdate.js":
/*!*************************************!*\
  !*** ./src/modules/statusUpdate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setStatus\": () => (/* binding */ setStatus),\n/* harmony export */   \"updateStatus\": () => (/* binding */ updateStatus)\n/* harmony export */ });\nconst updateStatus = (index) => {\n  const check = document.getElementById(`check${index}`);\n  const description = document.getElementById(`description${index}`);\n  const toDoList = JSON.parse(localStorage.getItem('allEntries'));\n  if (check.checked) {\n    toDoList[index].completed = true;\n    description.style.textDecoration = 'line-through';\n  } else {\n    toDoList[index].completed = false;\n    description.style.textDecoration = 'none';\n  }\n  localStorage.setItem('allEntries', JSON.stringify(toDoList));\n};\n\nconst setStatus = (index) => {\n  const description = document.getElementById(`description${index}`);\n  const toDoList = JSON.parse(localStorage.getItem('allEntries'));\n  if (toDoList[index].completed) {\n    document.getElementById(`check${index}`).checked = true;\n    description.style.textDecoration = 'line-through';\n  } else {\n    document.getElementById(`check${index}`).checked = false;\n    description.style.textDecoration = 'none';\n  }\n};\n\n//# sourceURL=webpack://webpack-demo/./src/modules/statusUpdate.js?");

/***/ }),

/***/ "./src/modules/toDo.js":
/*!*****************************!*\
  !*** ./src/modules/toDo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\n  constructor(description, completed, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/toDo.js?");

/***/ }),

/***/ "./src/modules/toDoStorage.js":
/*!************************************!*\
  !*** ./src/modules/toDoStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoStorage)\n/* harmony export */ });\nclass TodoStorage {\n  addToDo = (newToDo) => {\n    let toDos = JSON.parse(localStorage.getItem('allEntries'));\n    if (toDos == null) toDos = [];\n    localStorage.setItem('entry', JSON.stringify(newToDo));\n    toDos.push(newToDo);\n    localStorage.setItem('allEntries', JSON.stringify(toDos));\n  };\n\n  removeToDo = (index) => {\n    const toDos = JSON.parse(localStorage.getItem('allEntries'));\n    toDos.splice(index, 1);\n    for (let i = index; i < toDos.length; i += 1) {\n      toDos[i].index = i + 1;\n    }\n    localStorage.setItem('allEntries', JSON.stringify(toDos));\n  };\n\n  saveToDo = (index, input) => {\n    const toDos = JSON.parse(localStorage.getItem('allEntries'));\n    toDos[index].description = input;\n    localStorage.setItem('allEntries', JSON.stringify(toDos));\n  };\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/toDoStorage.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"addIcons\": () => (/* binding */ addIcons),\n/* harmony export */   \"edit\": () => (/* binding */ edit),\n/* harmony export */   \"listToDo\": () => (/* binding */ listToDo),\n/* harmony export */   \"remove\": () => (/* binding */ remove),\n/* harmony export */   \"save\": () => (/* binding */ save),\n/* harmony export */   \"toDos\": () => (/* binding */ toDos)\n/* harmony export */ });\n/* harmony import */ var _images_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/menu.png */ \"./src/images/menu.png\");\n/* harmony import */ var _images_refresh2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/refresh2.png */ \"./src/images/refresh2.png\");\n/* harmony import */ var _images_enter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/enter.png */ \"./src/images/enter.png\");\n/* harmony import */ var _images_recycle_bin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/recycle-bin.png */ \"./src/images/recycle-bin.png\");\n/* harmony import */ var _images_save1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/save1.png */ \"./src/images/save1.png\");\n/* harmony import */ var _toDoStorage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toDoStorage.js */ \"./src/modules/toDoStorage.js\");\n/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toDo.js */ \"./src/modules/toDo.js\");\n/* harmony import */ var _statusUpdate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./statusUpdate.js */ \"./src/modules/statusUpdate.js\");\n\n\n\n\n\n\n\n\n\n\nconst addToHtml = (child, parentId) => {\n  const parent = document.getElementById(parentId);\n  parent.innerHTML += child;\n};\n\nconst addIcons = () => {\n  const refresh = new Image();\n  refresh.src = _images_refresh2_png__WEBPACK_IMPORTED_MODULE_1__;\n  const enter = new Image();\n  enter.src = _images_enter_png__WEBPACK_IMPORTED_MODULE_2__;\n  const child = `<a id=\"refreshBtn\" href=\"#\" class=\"icons\">${refresh.outerHTML}</a>`;\n  const child2 = `<a id=\"addBtn\" href=\"#\" class=\"icons\">${enter.outerHTML}</a>`;\n  addToHtml(child, 'header');\n  addToHtml(child2, 'input');\n};\n\nconst listToDo = (toDoList, index) => {\n  const toDo = toDoList[index];\n  const menu = new Image();\n  menu.src = _images_menu_png__WEBPACK_IMPORTED_MODULE_0__;\n  const bin = new Image();\n  bin.src = _images_recycle_bin_png__WEBPACK_IMPORTED_MODULE_3__;\n  const save = new Image();\n  save.src = _images_save1_png__WEBPACK_IMPORTED_MODULE_4__;\n  const child = `\n    <div class=\"toDo\" id=\"toDo${index}\"> \n      <div>\n        <input id=\"check${index}\" type=\"checkbox\" onchange=\"updateStatus(${index})\">\n        <div>\n          <p id=\"description${index}\" style=\"display:block;\" onclick=\"edit(${index})\">${toDo.description}</p>\n          <input  id=\"descriptionInput${index}\" class=\"descriptionInput\" type=\"text\" style=\"display:none;border=none;\" value=\"${toDo.description}\">\n        </div>\n      </div> \n      <div>\n        <a id=\"menuBtn${index}\" style=\"display:block;\" href=\"#\">${menu.outerHTML}</a>\n        <a id=\"saveBtn${index}\" style=\"display:none;\" onclick=\"save(${index})\" href=\"#\">${save.outerHTML}</a>\n        <a id=\"binBtn${index}\" style=\"display:none;\" onclick=\"remove(${index})\" href=\"#\">${bin.outerHTML}</a>\n      </div>\n    </div>`;\n  addToHtml(child, 'toDos');\n};\n\nconst clearToDos = () => {\n  const child = '';\n  const parent = document.getElementById('toDos');\n  parent.innerHTML = child;\n};\n\nconst toDos = () => {\n  clearToDos();\n  let toDoList = JSON.parse(localStorage.getItem('allEntries'));\n  if (toDoList == null) { toDoList = []; }\n  for (let i = 0; i < toDoList.length; i += 1) {\n    listToDo(toDoList, i);\n    (0,_statusUpdate_js__WEBPACK_IMPORTED_MODULE_7__.setStatus)(i);\n    addToHtml('<hr>', 'toDos');\n  }\n};\n\nconst add = () => {\n  const input = document.getElementById('inputToDo').value;\n  if (input === '') { return; }\n  const toDoList = JSON.parse(localStorage.getItem('allEntries'));\n  let index = null;\n  if (toDoList == null) {\n    index = 1;\n  } else {\n    index = toDoList.length + 1;\n  }\n  const newToDo = new _toDo_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](input, false, index);\n  const storage = new _toDoStorage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n  storage.addToDo(newToDo);\n  document.getElementById('inputToDo').value = '';\n  toDos();\n};\n\nconst edit = (index) => {\n  toDos();\n  const menuIcon = document.getElementById(`menuBtn${index}`);\n  menuIcon.style.display = 'none';\n  const binIcon = document.getElementById(`binBtn${index}`);\n  binIcon.style.display = 'block';\n  const saveIcon = document.getElementById(`saveBtn${index}`);\n  saveIcon.style.display = 'block';\n  const row = document.getElementById(`toDo${index}`);\n  row.style.background = 'rgb(233, 222, 128)';\n\n  const p = document.getElementById(`description${index}`);\n  const input = document.getElementById(`descriptionInput${index}`);\n  p.style.display = 'none';\n  input.style.display = 'block';\n};\n\nconst save = (index) => {\n  const input = document.getElementById(`descriptionInput${index}`).value;\n  if (input === '') { return; }\n  const storage = new _toDoStorage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n  storage.saveToDo(index, input);\n  toDos();\n};\n\nconst remove = (index) => {\n  const storage = new _toDoStorage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n  storage.removeToDo(index);\n  toDos();\n};\n\nwindow.edit = edit;\nwindow.save = save;\nwindow.remove = remove;\nwindow.updateStatus = _statusUpdate_js__WEBPACK_IMPORTED_MODULE_7__.updateStatus;\n\n//# sourceURL=webpack://webpack-demo/./src/modules/ui.js?");

/***/ }),

/***/ "./src/images/enter.png":
/*!******************************!*\
  !*** ./src/images/enter.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0169442c48e02a9562d.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/enter.png?");

/***/ }),

/***/ "./src/images/menu.png":
/*!*****************************!*\
  !*** ./src/images/menu.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a36ec62d6ae80b6283e8.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/menu.png?");

/***/ }),

/***/ "./src/images/recycle-bin.png":
/*!************************************!*\
  !*** ./src/images/recycle-bin.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"42ca0fe91ff94c36d5c4.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/recycle-bin.png?");

/***/ }),

/***/ "./src/images/refresh2.png":
/*!*********************************!*\
  !*** ./src/images/refresh2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06b7f45bc23ee8594115.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/refresh2.png?");

/***/ }),

/***/ "./src/images/save1.png":
/*!******************************!*\
  !*** ./src/images/save1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bc12904862a402c80de2.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/save1.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);