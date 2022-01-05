/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    /* calibri font */\n    font-family: 'Calibri', sans-serif;\n    margin:0px;\n    font-size: 20px;\n}\n\n#content{\n    display: flex;\n    box-sizing: border-box;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(228, 228, 228, 0.993);\n\n}\n\n.app-cont{\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    align-items: center;\n    width: 95vw;\n    height: 92.5vh;\n    background-color: rgb(255, 255, 255);\n    box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.5);\n    border-radius: 7px;\n}\n\n.empty-header-cont, .content-header-cont{\n    display: flex;\n    width: 95vw;\n    box-sizing: border-box;\n}\n\n.empty-header-cont{\n    height: 2.5vh;\n    background-color: rgb(250, 35, 28);\n    border-radius: 7px 7px 0px 0px;\n    padding-top: 6px;\n    padding-left: 55px;\n}\n\n.content-header-cont{\n    justify-content: center;\n    align-items: center;\n    height: 6.5vh;\n    background-color: rgb(233, 69, 27);\n    color: white;\n    gap: 10px;\n    /* padding-right: 200px; */\n}\n\n.body-cont{\n    display: flex;\n    /* flex-direction: column; */\n    width: 95vw;\n    height: 83.5vh;\n    border-radius: 7px;\n}\n\n.content-body-cont, .menu-body-cont{\n    display: flex;\n    height: 83.5vh;\n    box-sizing: border-box;\n}\n\n.menu-body-cont{\n    flex-direction: column;\n    width: 20vw;\n    background-color: rgb(240, 235, 235);\n    border-radius: 0px 0px 0px 7px;\n    gap: 30px;\n    padding: 50px 0px 50px 0px;\n}\n\n.content-body-cont{\n    display: flex;\n    flex-direction: column;\n    width: 75vw;\n    background-color: rgb(255, 255, 255);\n    border-radius: 0px 0px 7px 0px;\n    overflow: auto;\n    padding: 30px;\n    gap: 13px;\n}\n\n.task{\n    display: flex;\n    border-radius: 6px;\n    box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.5);\n    padding: 10px 20px 10px 20px;\n    flex-direction: column;\n    gap: 6px;\n}\n\n.task-primary{\n    display: flex;\n    justify-content: space-between;\n}\n\n.task-primary-text{\n    display: flex;\n    gap: 17px;\n    align-items: center;\n}\n\n.task-expand{\n    display: flex;\n    flex-direction: column;\n    transition: 0.4s;\n    gap: 6px;\n    max-height: 0px;\n    overflow: hidden;\n}\n\n.task-expand-show{\n    max-height: 55px;\n}\n\n.task-options{\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.task-remove, .task-edit, .task-expand-icon{\n    height: 20px;\n    width: 20px;\n    transition: 0.2s;\n}\n\n.task-remove:hover, .task-edit:hover, .task-expand-icon:hover{\n    cursor: pointer;\n    transform: translateY(-1px);\n}\n\n.menu-image{\n    height: 25px;\n    width: 25px;\n}\n\n.menu-line{\n    display: flex;\n    gap: 15px;\n    padding-left: 50px;\n    align-items: center;\n}\n\n.menu-but:hover, .add-button-cont:hover {\n    cursor: pointer;\n}\n\n.menu-but-clicked{\n    font-weight: bold;\n}\n\n.add-button-cont:hover, .submit-but:hover{\n    box-shadow: 0px 0px 8px 1px rgba(63, 63, 63, 0.5);\n}\n\n.notif-num{\n    font-size: 14px;\n    color: gray;\n}\n\n.plus-but{\n    font-size: 33px;\n    font-weight: bold;\n}\n\n.add-but{\n    font-weight: bold;\n}\n\n.add-button-cont{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    height: 4vh;\n    width: 7.5vw;\n    border-radius: 12px;\n    box-shadow: 0px 0px 4px 0.5px rgba(63, 63, 63, 0.5);\n    transition: 0.2s;\n}\n\n.text-time{\n    color: white;\n    font-size: 15px;\n}\n\n/* task modal  */\n#modal{\n    display: none;\n    background-color: rgba(255, 255, 255, 0.5);\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\n#edit-modal{\n    display: none;\n    background-color: rgba(255, 255, 255, 0.5);\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\n.code-value{\n    display: none;\n}\n\n.form-cont{\n    display: flex;\n    flex-direction: column;\n    background-color: #fbfbfb;\n    border-radius: 10px;\n    width: 400px;\n    height: 420px;\n    box-shadow: 0 10px 10px 0 rgba(0,0,0,0.24), 0 10px 10px 0 rgba(0,0,0,0.19);\n    padding: 20px;\n    padding-top: 27px;\n    align-items: center;\n    position: relative;\n    border: 5px solid rgb(233, 69, 27);\n    gap: 30px;\n}\n\n.icon-img{\n    height: 50px;\n    width: 50px;\n}\n\n.close-but{\n    position: absolute;\n    top: 0;\n    right: 11px;\n    font-size: 25px;\n    cursor: pointer;\n    transform: rotate(45deg);\n    color: #000000;\n}\n\n.form{\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    width: 100%;\n}\n\n.description-input{\n    height: 50px;\n}\n\n.submit-but{\n    font-size: 15px;\n    color: white;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 4vh;\n    width: 7.5vw;\n    border: none;\n    background-color: rgb(241, 59, 13);\n    border-radius: 16px;\n    box-shadow: 0px 0px 5px 0.5px rgba(63, 63, 63, 0.5);\n    transition: 0.2s;\n    cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["body{\n    /* calibri font */\n    font-family: 'Calibri', sans-serif;\n    margin:0px;\n    font-size: 20px;\n}\n\n#content{\n    display: flex;\n    box-sizing: border-box;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(228, 228, 228, 0.993);\n\n}\n\n.app-cont{\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    align-items: center;\n    width: 95vw;\n    height: 92.5vh;\n    background-color: rgb(255, 255, 255);\n    box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.5);\n    border-radius: 7px;\n}\n\n.empty-header-cont, .content-header-cont{\n    display: flex;\n    width: 95vw;\n    box-sizing: border-box;\n}\n\n.empty-header-cont{\n    height: 2.5vh;\n    background-color: rgb(250, 35, 28);\n    border-radius: 7px 7px 0px 0px;\n    padding-top: 6px;\n    padding-left: 55px;\n}\n\n.content-header-cont{\n    justify-content: center;\n    align-items: center;\n    height: 6.5vh;\n    background-color: rgb(233, 69, 27);\n    color: white;\n    gap: 10px;\n    /* padding-right: 200px; */\n}\n\n.body-cont{\n    display: flex;\n    /* flex-direction: column; */\n    width: 95vw;\n    height: 83.5vh;\n    border-radius: 7px;\n}\n\n.content-body-cont, .menu-body-cont{\n    display: flex;\n    height: 83.5vh;\n    box-sizing: border-box;\n}\n\n.menu-body-cont{\n    flex-direction: column;\n    width: 20vw;\n    background-color: rgb(240, 235, 235);\n    border-radius: 0px 0px 0px 7px;\n    gap: 30px;\n    padding: 50px 0px 50px 0px;\n}\n\n.content-body-cont{\n    display: flex;\n    flex-direction: column;\n    width: 75vw;\n    background-color: rgb(255, 255, 255);\n    border-radius: 0px 0px 7px 0px;\n    overflow: auto;\n    padding: 30px;\n    gap: 13px;\n}\n\n.task{\n    display: flex;\n    border-radius: 6px;\n    box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.5);\n    padding: 10px 20px 10px 20px;\n    flex-direction: column;\n    gap: 6px;\n}\n\n.task-primary{\n    display: flex;\n    justify-content: space-between;\n}\n\n.task-primary-text{\n    display: flex;\n    gap: 17px;\n    align-items: center;\n}\n\n.task-expand{\n    display: flex;\n    flex-direction: column;\n    transition: 0.4s;\n    gap: 6px;\n    max-height: 0px;\n    overflow: hidden;\n}\n\n.task-expand-show{\n    max-height: 55px;\n}\n\n.task-options{\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.task-remove, .task-edit, .task-expand-icon{\n    height: 20px;\n    width: 20px;\n    transition: 0.2s;\n}\n\n.task-remove:hover, .task-edit:hover, .task-expand-icon:hover{\n    cursor: pointer;\n    transform: translateY(-1px);\n}\n\n.menu-image{\n    height: 25px;\n    width: 25px;\n}\n\n.menu-line{\n    display: flex;\n    gap: 15px;\n    padding-left: 50px;\n    align-items: center;\n}\n\n.menu-but:hover, .add-button-cont:hover {\n    cursor: pointer;\n}\n\n.menu-but-clicked{\n    font-weight: bold;\n}\n\n.add-button-cont:hover, .submit-but:hover{\n    box-shadow: 0px 0px 8px 1px rgba(63, 63, 63, 0.5);\n}\n\n.notif-num{\n    font-size: 14px;\n    color: gray;\n}\n\n.plus-but{\n    font-size: 33px;\n    font-weight: bold;\n}\n\n.add-but{\n    font-weight: bold;\n}\n\n.add-button-cont{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    height: 4vh;\n    width: 7.5vw;\n    border-radius: 12px;\n    box-shadow: 0px 0px 4px 0.5px rgba(63, 63, 63, 0.5);\n    transition: 0.2s;\n}\n\n.text-time{\n    color: white;\n    font-size: 15px;\n}\n\n/* task modal  */\n#modal{\n    display: none;\n    background-color: rgba(255, 255, 255, 0.5);\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\n#edit-modal{\n    display: none;\n    background-color: rgba(255, 255, 255, 0.5);\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\n.code-value{\n    display: none;\n}\n\n.form-cont{\n    display: flex;\n    flex-direction: column;\n    background-color: #fbfbfb;\n    border-radius: 10px;\n    width: 400px;\n    height: 420px;\n    box-shadow: 0 10px 10px 0 rgba(0,0,0,0.24), 0 10px 10px 0 rgba(0,0,0,0.19);\n    padding: 20px;\n    padding-top: 27px;\n    align-items: center;\n    position: relative;\n    border: 5px solid rgb(233, 69, 27);\n    gap: 30px;\n}\n\n.icon-img{\n    height: 50px;\n    width: 50px;\n}\n\n.close-but{\n    position: absolute;\n    top: 0;\n    right: 11px;\n    font-size: 25px;\n    cursor: pointer;\n    transform: rotate(45deg);\n    color: #000000;\n}\n\n.form{\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    width: 100%;\n}\n\n.description-input{\n    height: 50px;\n}\n\n.submit-but{\n    font-size: 15px;\n    color: white;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 4vh;\n    width: 7.5vw;\n    border: none;\n    background-color: rgb(241, 59, 13);\n    border-radius: 16px;\n    box-shadow: 0px 0px 5px 0.5px rgba(63, 63, 63, 0.5);\n    transition: 0.2s;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/bin.png":
/*!****************************!*\
  !*** ./src/assets/bin.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/bin.png");

/***/ }),

/***/ "./src/assets/down.png":
/*!*****************************!*\
  !*** ./src/assets/down.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/down.png");

/***/ }),

/***/ "./src/assets/editar.png":
/*!*******************************!*\
  !*** ./src/assets/editar.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/editar.png");

/***/ }),

/***/ "./src/assets/empty_cal.png":
/*!**********************************!*\
  !*** ./src/assets/empty_cal.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/empty_cal.png");

/***/ }),

/***/ "./src/assets/expired.png":
/*!********************************!*\
  !*** ./src/assets/expired.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/expired.png");

/***/ }),

/***/ "./src/assets/full_cal.png":
/*!*********************************!*\
  !*** ./src/assets/full_cal.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/full_cal.png");

/***/ }),

/***/ "./src/assets/notepad.png":
/*!********************************!*\
  !*** ./src/assets/notepad.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/notepad.png");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/html_creation/edit-modal.js":
/*!********************************************!*\
  !*** ./src/js/html_creation/edit-modal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalEditStructure": () => (/* binding */ ModalEditStructure)
/* harmony export */ });
/* harmony import */ var _assets_notepad_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/notepad.png */ "./src/assets/notepad.png");

;

class ModalEditStructure{

    constructor(div){
        this.div = div
    }

    init(){
        this.creator()
        this.elementNamer()
        this.innerHtmlSetter()
        this.itemAppender()
    }

    creator(){
        this.createFormCont = document.createElement("div");
        this.createCloseBut = document.createElement("div");
        this.createIconImg = document.createElement("img");
        this.createForm = document.createElement("form");
        this.createNameInput = document.createElement("input");
        this.createDescriptionInput = document.createElement("input");
        this.createDateInput = document.createElement("input");
        this.createDataList = document.createElement("datalist");
        this.createDlInput = document.createElement("input");
        this.createFirstOption = document.createElement("option");
        this.createSecondOption = document.createElement("option");
        this.createThirdOption = document.createElement("option");
        this.createSaveBut = document.createElement("button");
        this.createCodeValue = document.createElement("div");
    }

    elementNamer(){
        this.createFormCont.className = "form-cont"
        this.createCloseBut.className  = "close-but"
        this.createIconImg.className  = "icon-img"
        this.createNameInput.className  = "name-input"
        this.createDescriptionInput.className  = "description-input"
        this.createDateInput.className  = "date-input"
        this.createDataList.id = "data-list"
        this.createForm.className  = "form"
        this.createDlInput.id  = "dl-input"
        this.createDlInput.setAttribute("list", "data-list")
        this.createSaveBut.className  = "submit-but" 
        this.createCodeValue.className  = "code-value"
    }

    innerHtmlSetter(){
        this.createCloseBut.innerHTML = "+"
        this.createIconImg.src = _assets_notepad_png__WEBPACK_IMPORTED_MODULE_0__["default"]
        this.createDlInput.placeholder = "Priority level"
        this.createNameInput.placeholder = "Task name"
        this.createDescriptionInput.placeholder = "Task description"
        this.createDateInput.placeholder = "Date of task yyyy/mm/dd"
        this.createFirstOption.value = "Low"
        this.createSecondOption.value = "Medium"
        this.createThirdOption.value = "High"
        this.createSaveBut.innerHTML = "Save"
    }

    itemAppender(){
        this.createDataList.appendChild(this.createFirstOption)
        this.createDataList.appendChild(this.createSecondOption)
        this.createDataList.appendChild(this.createThirdOption)
        this.createDlInput.appendChild(this.createDataList)
        this.createForm.appendChild(this.createNameInput)
        this.createForm.appendChild(this.createDescriptionInput)
        this.createForm.appendChild(this.createDateInput)
        this.createFormCont.appendChild(this.createCloseBut)
        this.createFormCont.appendChild(this.createIconImg)
        this.createFormCont.appendChild(this.createForm)
        this.createFormCont.appendChild(this.createDlInput)
        this.createFormCont.appendChild(this.createSaveBut)
        this.createFormCont.appendChild(this.createCodeValue)
        this.div.appendChild(this.createFormCont)
    }

}

/***/ }),

/***/ "./src/js/html_creation/main_html.js":
/*!*******************************************!*\
  !*** ./src/js/html_creation/main_html.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlStructure": () => (/* binding */ HtmlStructure)
/* harmony export */ });
/* harmony import */ var _assets_empty_cal_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/empty_cal.png */ "./src/assets/empty_cal.png");
/* harmony import */ var _assets_full_cal_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/full_cal.png */ "./src/assets/full_cal.png");
/* harmony import */ var _assets_expired_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/expired.png */ "./src/assets/expired.png");

;




    class HtmlStructure{
        
        constructor(div){
            this.div = div
        }

        init(){
            this.creator()
            this.elementNamer()
            this.innerHtmlSet()
            this.imgUrlSet()
            this.itemAppender()
        }

        creator(){
            this.createTime = new Date()
            this.createFormatedTime = `${this.createTime.getFullYear()}-${this.createTime.getMonth()+1}-${this.createTime.getDate()}`
            this.createTextTime = document.createElement("div");
            this.createAppCont = document.createElement("div");
            this.createEmptyHeaderCont = document.createElement("div");
            this.createContentHeaderCont = document.createElement("div");
            this.createMenuBodyCont = document.createElement("div");
            this.createContentBodyCont = document.createElement("div");
            this.createBodyCont = document.createElement("div");
            this.createMenuPrimerRenglonCont = document.createElement("div")
            this.createMenuSegundoRenglonCont = document.createElement("div")
            this.createMenuTercerRenglonCont = document.createElement("div")
            this.createAddButtonCont = document.createElement("div")
            this.createTextPlus = document.createElement("div")
            this.createTextAdd = document.createElement("div")
            this.createTextToday = document.createElement("div");
            this.createTextNextDays = document.createElement("div");
            this.createTextOldDays = document.createElement("div");
            this.createNumberToday = document.createElement("div");
            this.createNumberNextDays = document.createElement("div");
            this.createNumberOldDays = document.createElement("div");
            this.createEmptyCalImage = document.createElement("img")
            this.createFullCalImage = document.createElement("img") 
            this.createExpiredImage = document.createElement("img") 
        }

        elementNamer(){
            this.createTextTime.className = "text-time"
            this.createAppCont.className = "app-cont";
            this.createEmptyHeaderCont.className = "empty-header-cont";
            this.createContentHeaderCont.className = "content-header-cont";
            this.createBodyCont.className = "body-cont";
            this.createContentBodyCont.className = "content-body-cont"
            this.createMenuBodyCont.className = "menu-body-cont"
            this.createMenuPrimerRenglonCont.className = "menu-line"
            this.createMenuSegundoRenglonCont.className = "menu-line"
            this.createMenuTercerRenglonCont.className = "menu-line"
            this.menuButtons = document.querySelectorAll(".menu-but");
            this.createTextToday.className = "menu-but"
            this.createTextNextDays.className = "menu-but"
            this.createTextOldDays.className = "menu-but"
            this.createTextToday.id = "today-but"
            this.createTextNextDays.id = "next-but"
            this.createTextOldDays.id= "old-but"
            this.createNumberToday.className = "notif-num"
            this.createNumberNextDays.className = "notif-num"
            this.createNumberOldDays.className = "notif-num"
            this.createEmptyCalImage.className = "menu-image"
            this.createFullCalImage.className = "menu-image"
            this.createExpiredImage.className = "menu-image"
            this.createTextPlus.className = "plus-but"
            this.createTextAdd.className = "add-but"
            this.createAddButtonCont.className = "add-button-cont"
        }

        innerHtmlSet(){
            this.createTextToday.classList.add("menu-but-clicked")
            this.createTextTime.innerHTML = `${this.createFormatedTime}`
            this.createTextPlus.innerHTML = "+"
            this.createTextAdd.innerHTML = "New task"
            this.createTextToday.innerHTML = "Today"
            this.createTextNextDays.innerHTML = "Up next"
            this.createTextOldDays.innerHTML = "Expired"
            this.createNumberToday.innerHTML = "0"
            this.createNumberNextDays.innerHTML = "0"
            this.createNumberOldDays.innerHTML = "0"
        }

        imgUrlSet(){
            this.createEmptyCalImage.src = _assets_empty_cal_png__WEBPACK_IMPORTED_MODULE_0__["default"]
            this.createFullCalImage.src = _assets_full_cal_png__WEBPACK_IMPORTED_MODULE_1__["default"]
            this.createExpiredImage.src = _assets_expired_png__WEBPACK_IMPORTED_MODULE_2__["default"]
        }

        itemAppender(){

            this.createEmptyHeaderCont.appendChild(this.createTextTime)
            this.createAddButtonCont.appendChild(this.createTextAdd)
            this.createAddButtonCont.appendChild(this.createTextPlus)
            this.createContentHeaderCont.appendChild(this.createAddButtonCont)
            this.createMenuPrimerRenglonCont.appendChild(this.createEmptyCalImage)
            this.createMenuPrimerRenglonCont.appendChild(this.createTextToday)
            this.createMenuPrimerRenglonCont.appendChild(this.createNumberToday)
            this.createMenuSegundoRenglonCont.appendChild(this.createFullCalImage)
            this.createMenuSegundoRenglonCont.appendChild(this.createTextNextDays)
            this.createMenuSegundoRenglonCont.appendChild(this.createNumberNextDays)
            this.createMenuTercerRenglonCont.appendChild(this.createExpiredImage)
            this.createMenuTercerRenglonCont.appendChild(this.createTextOldDays)
            this.createMenuTercerRenglonCont.appendChild(this.createNumberOldDays)
            this.createMenuBodyCont.appendChild(this.createMenuPrimerRenglonCont)
            this.createMenuBodyCont.appendChild(this.createMenuSegundoRenglonCont)
            this.createMenuBodyCont.appendChild(this.createMenuTercerRenglonCont)
            this.createAppCont.appendChild(this.createEmptyHeaderCont)
            this.createAppCont.appendChild(this.createContentHeaderCont)
            this.createBodyCont.appendChild(this.createMenuBodyCont)
            this.createBodyCont.appendChild(this.createContentBodyCont)
            this.createAppCont.appendChild(this.createBodyCont)
            this.div.appendChild(this.createAppCont)
        }

}

/***/ }),

/***/ "./src/js/html_creation/modal_html.js":
/*!********************************************!*\
  !*** ./src/js/html_creation/modal_html.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalStructure": () => (/* binding */ ModalStructure)
/* harmony export */ });
/* harmony import */ var _assets_notepad_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/notepad.png */ "./src/assets/notepad.png");




class ModalStructure {
  constructor(div) {
    this.div = div;
  }

  init() {
    this.creator();
    this.elementNamer();
    this.innerHtmlSetter();
    this.itemAppender();
  }

  creator() {
    this.createFormCont = document.createElement('div');
    this.createCloseBut = document.createElement('div');
    this.createIconImg = document.createElement('img');
    this.createForm = document.createElement('form');
    this.createNameInput = document.createElement('input');
    this.createDescriptionInput = document.createElement('input');
    this.createDateInput = document.createElement('input');
    this.createDataList = document.createElement('datalist');
    this.createDlInput = document.createElement('input');
    this.createFirstOption = document.createElement('option');
    this.createSecondOption = document.createElement('option');
    this.createThirdOption = document.createElement('option');
    this.createSubmitBut = document.createElement('button');
  }

  elementNamer() {
    this.createFormCont.className = 'form-cont';
    this.createCloseBut.className = 'close-but';
    this.createIconImg.className = 'icon-img';
    this.createNameInput.className = 'name-input';
    this.createDescriptionInput.className = 'description-input';
    this.createDateInput.className = 'date-input';
    this.createDataList.id = 'data-list';
    this.createForm.className = 'form';
    this.createDlInput.id = 'dl-input';
    this.createDlInput.setAttribute('list', 'data-list');
    this.createSubmitBut.className = 'submit-but';
  }

  innerHtmlSetter() {
    this.createCloseBut.innerHTML = '+';
    this.createIconImg.src = _assets_notepad_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.createDlInput.placeholder = 'Priority level';
    this.createNameInput.placeholder = 'Task name';
    this.createDescriptionInput.placeholder = 'Task description';
    this.createDateInput.placeholder = 'Date of task yyyy/mm/dd';
    this.createFirstOption.value = 'Low';
    this.createSecondOption.value = 'Medium';
    this.createThirdOption.value = 'High';
    this.createSubmitBut.innerHTML = 'Add';
  }

  itemAppender() {
    this.createDataList.appendChild(this.createFirstOption);
    this.createDataList.appendChild(this.createSecondOption);
    this.createDataList.appendChild(this.createThirdOption);
    this.createDlInput.appendChild(this.createDataList);
    this.createForm.appendChild(this.createNameInput);
    this.createForm.appendChild(this.createDescriptionInput);
    this.createForm.appendChild(this.createDateInput);
    this.createFormCont.appendChild(this.createCloseBut);
    this.createFormCont.appendChild(this.createIconImg);
    this.createFormCont.appendChild(this.createForm);
    this.createFormCont.appendChild(this.createDlInput);
    this.createFormCont.appendChild(this.createSubmitBut);
    this.div.appendChild(this.createFormCont);
  }
}


/***/ }),

/***/ "./src/js/task_class/task_class.js":
/*!*****************************************!*\
  !*** ./src/js/task_class/task_class.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskManager": () => (/* binding */ TaskManager),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _assets_bin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/bin.png */ "./src/assets/bin.png");
/* harmony import */ var _assets_editar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/editar.png */ "./src/assets/editar.png");
/* harmony import */ var _assets_down_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/down.png */ "./src/assets/down.png");






class TaskManager {
  constructor() {
    this.todayDate = new Date();
  }

  tasks = [];

  addTask(task, array) {
    array.push(task);
    array.sort((a, b) => a.date - b.date);
  }

  editTask(task) {

  }

  removeTask(task, array) {
    array.splice(this.tasks.indexOf(task), 1);
  }

  todayTasksToHtml(htmlDiv) {
    this.tasks.sort((a, b) => a.formatedDate.localeCompare(b.formatedDate) || a.priorityNum - b.priorityNum);
    this.tasks.forEach((task) => {
      if (!document.getElementById(`${task.name}`) && this.formatTaskDate(task.date) === this.formatTaskDate(this.todayDate)) {
        this.htmlCreator(htmlDiv, task);
      }
    });
  }

  nextDaysTasksToHtml(htmlDiv) {
    this.tasks.sort((a, b) => a.formatedDate.localeCompare(b.formatedDate) || a.priorityNum - b.priorityNum);
    this.tasks.forEach((task) => {
      if (!document.getElementById(`${task.name}`) && this.formatTaskDate(task.date) > this.formatTaskDate(this.todayDate)) {
        this.htmlCreator(htmlDiv, task);
      }
    });
  }

  oldTasksToHtml(htmlDiv) {
    this.tasks.sort((a, b) => a.formatedDate.localeCompare(b.formatedDate) || a.priorityNum - b.priorityNum);
    this.tasks.forEach((task) => {
      if (!document.getElementById(`${task.name}`) && this.formatTaskDate(task.date) < this.formatTaskDate(this.todayDate)) {
        this.htmlCreator(htmlDiv, task);
      }
    });
  }

  todayTasks(today) {
    return this.tasks.filter((task) => task.formatedDate === today).length;
  }

  upNextTasks(today) {
    return this.tasks.filter((task) => task.formatedDate > today).length;
  }

  oldTasks(today) {
    return this.tasks.filter((task) => task.formatedDate < today).length;
  }

  createTaskPriorityNum(priority) {
    if (priority === 'Low') {
      return 3;
    }
    if (priority === 'Medium') {
      return 2;
    }
    if (priority === 'High') {
      return 1;
    }
  }

  storageUpdate() {
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  objectsToTasks() {
    const db = JSON.parse(localStorage.getItem('tasks') || '[]');
    db.forEach((element) => {
      this.addTask(new Task(element.name, element.date, element.description, element.priority, element.completed, this.tasks.length, this.createTaskPriorityNum(element.priority)), this.tasks);
    });
  }

  formatTaskDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  htmlCreator(htmlDiv, task) {
    const taskDiv = document.createElement('div');
    const primaryTaskDiv = document.createElement('div');
    const taskExpandDiv = document.createElement('div');
    const taskOptionsDiv = document.createElement('div');
    const primaryTaskTextDiv = document.createElement('div');

    taskDiv.className = 'task';
    primaryTaskDiv.className = 'task-primary';
    primaryTaskTextDiv.className = 'task-primary-text';
    taskOptionsDiv.className = 'task-options';
    taskExpandDiv.className = 'task-expand';
    primaryTaskDiv.id = `${task.name}`;

    primaryTaskTextDiv.innerHTML = `
            <div class="task-name">${task.name}</div>
            <div class="task-date">${this.formatTaskDate(task.date)}</div>
        `;
    taskOptionsDiv.innerHTML = `
            <img src=${_assets_bin_png__WEBPACK_IMPORTED_MODULE_0__["default"]} class="task-remove">
            <img src=${_assets_editar_png__WEBPACK_IMPORTED_MODULE_1__["default"]} class="task-edit">
            <img src=${_assets_down_png__WEBPACK_IMPORTED_MODULE_2__["default"]} class="task-expand-icon">
        `;
    taskExpandDiv.innerHTML = `
            <div class="task-description">About the task: ${task.description}</div>
            <div class="task-priority">Task priority: ${task.priority}</div>
        `;
    if (task.priority === 'Low') {
      taskDiv.style.backgroundColor = 'rgb(205, 255, 126)';
    } else if (task.priority === 'Medium') {
      taskDiv.style.backgroundColor = 'rgb(255, 253, 138)';
    } else if (task.priority === 'High') {
      taskDiv.style.backgroundColor = 'rgb(255, 136, 136)';
    }
    primaryTaskDiv.appendChild(primaryTaskTextDiv);
    primaryTaskDiv.appendChild(taskOptionsDiv);
    taskDiv.appendChild(primaryTaskDiv);
    taskDiv.appendChild(taskExpandDiv);
    htmlDiv.appendChild(taskDiv);
    this.eventBinder(taskDiv);
  }

  eventBinder(taskDiv) {
    taskDiv.querySelector('.task-remove').addEventListener('click', () => {
      taskDiv.remove();
      this.removeTask(taskDiv.id, this.tasks);
    });
    taskDiv.querySelector('.task-expand-icon').addEventListener('click', () => {
      taskDiv.querySelector('.task-expand').classList.toggle('task-expand-show');
    });
  }
}

class Task {
  constructor(name, date, description, priority, priorityNum, number) {
    this.name = name;
    this.date = new Date(date);
    this.formatedDate = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`;
    this.editFormatedDate = `${this.date.getFullYear()}/${this.date.getMonth() + 1}/${this.date.getDate()}`;
    this.description = description;
    this.priority = priority;
    this.priorityNum = priorityNum;
    this.done = false;
    this.number = number;
  }
}


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
/******/ 				scriptUrl = document.currentScript.src
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_creation_main_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html_creation/main_html */ "./src/js/html_creation/main_html.js");
/* harmony import */ var _html_creation_modal_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html_creation/modal_html */ "./src/js/html_creation/modal_html.js");
/* harmony import */ var _task_class_task_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task_class/task_class */ "./src/js/task_class/task_class.js");
/* harmony import */ var _html_creation_edit_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html_creation/edit-modal */ "./src/js/html_creation/edit-modal.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/style.css */ "./src/style/style.css");






(function(){

    class MainPage{

        init(){
        this.cacheDom()
        this.htmlStructureCreation()
        this.bindEvents()
        this.taskManager.objectsToTasks()
        this.taskManager.todayTasksToHtml(this.htmlStructure.createContentBodyCont);
        this.editButBinder();
        this.updateTodayTaskNumber();
        this.updateNextTaskNumber();
        this.updateOldTaskNumber();
        console.log(window.localStorage)
       }

        cacheDom(){
        this.mainContentDiv = document.querySelector("#content")
        this.modalContentDiv = document.querySelector("#modal")
        this.modalEditDiv = document.querySelector("#edit-modal")
        this.menuButtons = document.querySelectorAll(".menu-but");

       }

        htmlStructureCreation(){
        this.htmlStructure = new _html_creation_main_html__WEBPACK_IMPORTED_MODULE_0__.HtmlStructure(this.mainContentDiv);
        this.modalStructure = new _html_creation_modal_html__WEBPACK_IMPORTED_MODULE_1__.ModalStructure(this.modalContentDiv);
        this.editModalStructure = new _html_creation_edit_modal__WEBPACK_IMPORTED_MODULE_3__.ModalEditStructure(this.modalEditDiv);
        this.taskManager = new _task_class_task_class__WEBPACK_IMPORTED_MODULE_2__.TaskManager();
        this.modalStructure.init();
        this.htmlStructure.init();
        this.editModalStructure.init();
       }

        bindEvents(){
        this.htmlStructure.createAddButtonCont.onclick = () => {
            this.modalContentDiv.style.display = "flex"
            }
        
        this.modalStructure.createCloseBut.onclick = () => {
            this.modalContentDiv.style.display = "none";

            }
        this.editModalStructure.createCloseBut.onclick = () => {
            this.modalContentDiv.style.display = "none";
            }
        this.modalStructure.createSubmitBut.onclick = () => {
            this.addTask();
            this.updateNextTaskNumber();
            this.updateTodayTaskNumber();
            this.updateOldTaskNumber();
            this.inputsInnerHtlmSetter("", "", "", "")
            this.modalContentDiv.style.display = "none";
            this.taskManager.storageUpdate();
            }
        this.editModalStructure.createSaveBut.onclick = () => {
            var thisTask = this.taskManager.tasks.find(element => element.code === this.editModalStructure.createCodeValue.value)
            thisTask.name = this.editModalStructure.createNameInput.value
            thisTask.description = this.editModalStructure.createDescriptionInput.value
            thisTask.date = new Date(this.editModalStructure.createDateInput.value)
            thisTask.priority = this.editModalStructure.createDlInput.value
            thisTask.formatedDate = `${thisTask.date.getFullYear()}-${thisTask.date.getMonth()+1}-${thisTask.date.getDate()}`
            thisTask.editFormatedDate = `${thisTask.date.getFullYear()}/${thisTask.date.getMonth()+1}/${thisTask    .date.getDate()}`
            thisTask.priorityNum = this.taskManager.createTaskPriorityNum(thisTask.priority)
            this.taskManager.todayTasksToHtml(this.htmlStructure.createContentBodyCont);
            this.editInputsInnerHtlmSetter("", "", "", "","")
            this.modalEditDiv.style.display = "none";
            this.updateNextTaskNumber();
            this.updateTodayTaskNumber();
            this.updateOldTaskNumber();
            this.clickedOptionErrase();
            this.taskManager.storageUpdate();
        }
        this.clickedOption();
        }

        addTask(){
            this.htmlStructure.createTextToday.classList.add("menu-but-clicked")
            this.taskManager.addTask(new _task_class_task_class__WEBPACK_IMPORTED_MODULE_2__.Task(
                                                this.modalStructure.createNameInput.value, 
                                                this.modalStructure.createDateInput.value, 
                                                this.modalStructure.createDescriptionInput.value, 
                                                this.modalStructure.createDlInput.value, 
                                                this.taskManager.createTaskPriorityNum(this.modalStructure.createDlInput.value),
                                                this.taskManager.tasks.length),
                                                this.taskManager.tasks);
            this.taskManager.todayTasksToHtml(this.htmlStructure.createContentBodyCont);
        }

        updateTodayTaskNumber(){
            this.htmlStructure.createNumberToday.innerHTML = this.taskManager.todayTasks(this.htmlStructure.createFormatedTime)
        }

        updateNextTaskNumber(){
            this.htmlStructure.createNumberNextDays.innerHTML = this.taskManager.upNextTasks(this.htmlStructure.createFormatedTime)  
        }

        updateOldTaskNumber(){
            this.htmlStructure.createNumberOldDays.innerHTML = this.taskManager.oldTasks(this.htmlStructure.createFormatedTime)
        }

        clickedStyleErrase(){
            let menuButtons = document.querySelectorAll(".menu-but");
            menuButtons.forEach(button => {
                button.classList.remove("menu-but-clicked")
            })
        }

        clickedOptionErrase(){
            this.clickedStyleErrase
            this.htmlStructure.createContentBodyCont.innerHTML = "";
        }

        inputsInnerHtlmSetter(name, description, date, priority){
            this.modalStructure.createNameInput.value = name
            this.modalStructure.createDescriptionInput.value = description
            this.modalStructure.createDateInput.value = date
            this.modalStructure.createDlInput.value = priority
        }

        editInputsInnerHtlmSetter(name, description, date, priority,code){
            this.editModalStructure.createNameInput.value = name
            this.editModalStructure.createDescriptionInput.value = description
            this.editModalStructure.createDateInput.value = date
            this.editModalStructure.createDlInput.value = priority
            this.editModalStructure.createCodeValue.innerHTML = code
        }

        editButBinder(){
            let editIcons = document.querySelectorAll(".task-edit")
            editIcons.forEach(icon => {
                icon.addEventListener("click", ()=> {
                    this.modalEditDiv.style.display = "flex"
                    var thisTask = this.taskManager.tasks.find(element => element.name === icon.parentElement.parentElement.id)
                    this.editInputsInnerHtlmSetter(thisTask.name, thisTask.description,thisTask.editFormatedDate,thisTask.priority,thisTask.number)
                })
            })
        }

        clickedOption(){
            let menuButtons = document.querySelectorAll(".menu-but");
            menuButtons.forEach(button => {
                button.addEventListener("click", () => {
                    this.clickedStyleErrase()
                    this.htmlStructure.createContentBodyCont.innerHTML = "";
                    button.classList.add("menu-but-clicked")
                    if (button.id === "today-but") {
                        this.taskManager.todayTasksToHtml(this.htmlStructure.createContentBodyCont);
                        this.editButBinder()
                    } 
                    else if (button.id === "next-but") {
                        this.taskManager.nextDaysTasksToHtml(this.htmlStructure.createContentBodyCont);
                        this.editButBinder()
                    }
                    else if (button.id === "old-but") {
                        this.taskManager.oldTasksToHtml(this.htmlStructure.createContentBodyCont);
                        this.editButBinder()
                    }
                })
            })
        }
   } 

   let restaurantPage = new MainPage();
   restaurantPage.init();
})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFh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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdF9wcm9qZWN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b19kb19saXN0X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3RfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3RfcHJvamVjdC8uL3NyYy9hc3NldHMvYmluLnBuZyIsIndlYnBhY2s6Ly90b19kb19saXN0X3Byb2plY3QvLi9zcmMvYXNzZXRzL2Rvd24ucG5nIiwid2VicGFjazovL3RvX2RvX2xpc3RfcHJvamVjdC8uL3NyYy9hc3NldHMvZWRpdGFyLnBuZyIsIndlYnBhY2s6Ly90b19kb19saXN0X3Byb2plY3QvLi9zcmMvYXNzZXRzL2VtcHR5X2NhbC5wbmciLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdF9wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9leHBpcmVkLnBuZyIsIndlYnBhY2s6Ly90b19kb19saXN0X3Byb2plY3QvLi9zcmMvYXNzZXRzL2Z1bGxfY2FsLnBuZyIsIndlYnBhY2s6Ly90b19kb19saXN0X3Byb2plY3QvLi9zcmMvYXNzZXRzL25vdGVwYWQucG5nIiwid2VicGFjazovL3RvX2RvX2xpc3RfcHJvamVjdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly90b19kb19saXN0X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3RfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3RfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3RfcHJvamVjdC8uL3NyYy9qcy9odG1sX2NyZWF0aW9uL2VkaXQtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdF9wcm9qZWN0Ly4vc3JjL2pzL2h0bWxfY3JlYXRpb24vbWFpbl9odG1sLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3RfcHJvamVjdC8uL3NyYy9qcy9odG1sX2NyZWF0aW9uL21vZGFsX2h0bWwuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdF9wcm9qZWN0Ly4vc3JjL2pzL3Rhc2tfY2xhc3MvdGFza19jbGFzcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0X3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvX2RvX2xpc3RfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvX2RvX2xpc3RfcHJvamVjdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIC8qIGNhbGlicmkgZm9udCAqL1xcbiAgICBmb250LWZhbWlseTogJ0NhbGlicmknLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjgsIDIyOCwgMjI4LCAwLjk5Myk7XFxuXFxufVxcblxcbi5hcHAtY29udHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDk1dnc7XFxuICAgIGhlaWdodDogOTIuNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDFweCByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLmVtcHR5LWhlYWRlci1jb250LCAuY29udGVudC1oZWFkZXItY29udHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDk1dnc7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5lbXB0eS1oZWFkZXItY29udHtcXG4gICAgaGVpZ2h0OiAyLjV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMzUsIDI4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwcHggMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDU1cHg7XFxufVxcblxcbi5jb250ZW50LWhlYWRlci1jb250e1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2LjV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgNjksIDI3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDIwMHB4OyAqL1xcbn1cXG5cXG4uYm9keS1jb250e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICB3aWR0aDogOTV2dztcXG4gICAgaGVpZ2h0OiA4My41dmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLmNvbnRlbnQtYm9keS1jb250LCAubWVudS1ib2R5LWNvbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODMuNXZoO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWVudS1ib2R5LWNvbnR7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzUsIDIzNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDdweDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiA1MHB4IDBweCA1MHB4IDBweDtcXG59XFxuXFxuLmNvbnRlbnQtYm9keS1jb250e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDdweCAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBnYXA6IDEzcHg7XFxufVxcblxcbi50YXNre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNnB4O1xcbn1cXG5cXG4udGFzay1wcmltYXJ5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLXByaW1hcnktdGV4dHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxN3B4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1leHBhbmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgIGdhcDogNnB4O1xcbiAgICBtYXgtaGVpZ2h0OiAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrLWV4cGFuZC1zaG93e1xcbiAgICBtYXgtaGVpZ2h0OiA1NXB4O1xcbn1cXG5cXG4udGFzay1vcHRpb25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrLXJlbW92ZSwgLnRhc2stZWRpdCwgLnRhc2stZXhwYW5kLWljb257XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi50YXNrLXJlbW92ZTpob3ZlciwgLnRhc2stZWRpdDpob3ZlciwgLnRhc2stZXhwYW5kLWljb246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4ubWVudS1pbWFnZXtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG59XFxuXFxuLm1lbnUtbGluZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWJ1dDpob3ZlciwgLmFkZC1idXR0b24tY29udDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtYnV0LWNsaWNrZWR7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbi1jb250OmhvdmVyLCAuc3VibWl0LWJ1dDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMXB4IHJnYmEoNjMsIDYzLCA2MywgMC41KTtcXG59XFxuXFxuLm5vdGlmLW51bXtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnBsdXMtYnV0e1xcbiAgICBmb250LXNpemU6IDMzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWRkLWJ1dHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGQtYnV0dG9uLWNvbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIHdpZHRoOiA3LjV2dztcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMC41cHggcmdiYSg2MywgNjMsIDYzLCAwLjUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4udGV4dC10aW1le1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogdGFzayBtb2RhbCAgKi9cXG4jbW9kYWx7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNlZGl0LW1vZGFse1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29kZS12YWx1ZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tY29udHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTBweCAwIHJnYmEoMCwwLDAsMC4yNCksIDAgMTBweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDI3cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDIzMywgNjksIDI3KTtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uaWNvbi1pbWd7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5jbG9zZS1idXR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMTFweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24taW5wdXR7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnN1Ym1pdC1idXR7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNHZoO1xcbiAgICB3aWR0aDogNy41dnc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgNTksIDEzKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMC41cHggcmdiYSg2MywgNjMsIDYzLCAwLjUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw0Q0FBNEM7O0FBRWhEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLDJDQUEyQztJQUMzQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFNBQVM7SUFDVCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyw4QkFBOEI7SUFDOUIsU0FBUztJQUNULDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1EQUFtRDtJQUNuRCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEVBQTBFO0lBQzFFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixtREFBbUQ7SUFDbkQsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgLyogY2FsaWJyaSBmb250ICovXFxuICAgIGZvbnQtZmFtaWx5OiAnQ2FsaWJyaScsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjowcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOCwgMjI4LCAyMjgsIDAuOTkzKTtcXG5cXG59XFxuXFxuLmFwcC1jb250e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTV2dztcXG4gICAgaGVpZ2h0OiA5Mi41dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMXB4IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4uZW1wdHktaGVhZGVyLWNvbnQsIC5jb250ZW50LWhlYWRlci1jb250e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTV2dztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmVtcHR5LWhlYWRlci1jb250e1xcbiAgICBoZWlnaHQ6IDIuNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAzNSwgMjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDBweCAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA2cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNTVweDtcXG59XFxuXFxuLmNvbnRlbnQtaGVhZGVyLWNvbnR7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDYuNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCA2OSwgMjcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgLyogcGFkZGluZy1yaWdodDogMjAwcHg7ICovXFxufVxcblxcbi5ib2R5LWNvbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICAgIHdpZHRoOiA5NXZ3O1xcbiAgICBoZWlnaHQ6IDgzLjV2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4uY29udGVudC1ib2R5LWNvbnQsIC5tZW51LWJvZHktY29udHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4My41dmg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tZW51LWJvZHktY29udHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzNSwgMjM1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggN3B4O1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHggMHB4IDUwcHggMHB4O1xcbn1cXG5cXG4uY29udGVudC1ib2R5LWNvbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggN3B4IDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGdhcDogMTNweDtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi50YXNrLXByaW1hcnl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stcHJpbWFyeS10ZXh0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE3cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWV4cGFuZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG4gICAgZ2FwOiA2cHg7XFxuICAgIG1heC1oZWlnaHQ6IDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stZXhwYW5kLXNob3d7XFxuICAgIG1heC1oZWlnaHQ6IDU1cHg7XFxufVxcblxcbi50YXNrLW9wdGlvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnRhc2stcmVtb3ZlLCAudGFzay1lZGl0LCAudGFzay1leHBhbmQtaWNvbntcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnRhc2stcmVtb3ZlOmhvdmVyLCAudGFzay1lZGl0OmhvdmVyLCAudGFzay1leHBhbmQtaWNvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5tZW51LWltYWdle1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4ubWVudS1saW5le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtYnV0OmhvdmVyLCAuYWRkLWJ1dHRvbi1jb250OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1idXQtY2xpY2tlZHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGQtYnV0dG9uLWNvbnQ6aG92ZXIsIC5zdWJtaXQtYnV0OmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAxcHggcmdiYSg2MywgNjMsIDYzLCAwLjUpO1xcbn1cXG5cXG4ubm90aWYtbnVte1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucGx1cy1idXR7XFxuICAgIGZvbnQtc2l6ZTogMzNweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGQtYnV0e1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFkZC1idXR0b24tY29udHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAgd2lkdGg6IDcuNXZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwLjVweCByZ2JhKDYzLCA2MywgNjMsIDAuNSk7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi50ZXh0LXRpbWV7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4vKiB0YXNrIG1vZGFsICAqL1xcbiNtb2RhbHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2VkaXQtbW9kYWx7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb2RlLXZhbHVle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS1jb250e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjI0KSwgMCAxMHB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjdweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjMzLCA2OSwgMjcpO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5pY29uLWltZ3tcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmNsb3NlLWJ1dHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAxMXB4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLmZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1pbnB1dHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uc3VibWl0LWJ1dHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIHdpZHRoOiA3LjV2dztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCA1OSwgMTMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwLjVweCByZ2JhKDYzLCA2MywgNjMsIDAuNSk7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWdzL2Jpbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1ncy9kb3duLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWdzL2VkaXRhci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1ncy9lbXB0eV9jYWwucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZ3MvZXhwaXJlZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1ncy9mdWxsX2NhbC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1ncy9ub3RlcGFkLnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQge01vZGFsRWRpdFN0cnVjdHVyZX1cbmltcG9ydCBpY29uSW1nIGZyb20gXCIuLi8uLi9hc3NldHMvbm90ZXBhZC5wbmdcIlxuXG5jbGFzcyBNb2RhbEVkaXRTdHJ1Y3R1cmV7XG5cbiAgICBjb25zdHJ1Y3RvcihkaXYpe1xuICAgICAgICB0aGlzLmRpdiA9IGRpdlxuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgdGhpcy5jcmVhdG9yKClcbiAgICAgICAgdGhpcy5lbGVtZW50TmFtZXIoKVxuICAgICAgICB0aGlzLmlubmVySHRtbFNldHRlcigpXG4gICAgICAgIHRoaXMuaXRlbUFwcGVuZGVyKClcbiAgICB9XG5cbiAgICBjcmVhdG9yKCl7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNsb3NlQnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jcmVhdGVJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIHRoaXMuY3JlYXRlTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLmNyZWF0ZURlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuY3JlYXRlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLmNyZWF0ZURhdGFMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRhdGFsaXN0XCIpO1xuICAgICAgICB0aGlzLmNyZWF0ZURsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuY3JlYXRlRmlyc3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlY29uZE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHRoaXMuY3JlYXRlVGhpcmRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNhdmVCdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvZGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgfVxuXG4gICAgZWxlbWVudE5hbWVyKCl7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybUNvbnQuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRcIlxuICAgICAgICB0aGlzLmNyZWF0ZUNsb3NlQnV0LmNsYXNzTmFtZSAgPSBcImNsb3NlLWJ1dFwiXG4gICAgICAgIHRoaXMuY3JlYXRlSWNvbkltZy5jbGFzc05hbWUgID0gXCJpY29uLWltZ1wiXG4gICAgICAgIHRoaXMuY3JlYXRlTmFtZUlucHV0LmNsYXNzTmFtZSAgPSBcIm5hbWUtaW5wdXRcIlxuICAgICAgICB0aGlzLmNyZWF0ZURlc2NyaXB0aW9uSW5wdXQuY2xhc3NOYW1lICA9IFwiZGVzY3JpcHRpb24taW5wdXRcIlxuICAgICAgICB0aGlzLmNyZWF0ZURhdGVJbnB1dC5jbGFzc05hbWUgID0gXCJkYXRlLWlucHV0XCJcbiAgICAgICAgdGhpcy5jcmVhdGVEYXRhTGlzdC5pZCA9IFwiZGF0YS1saXN0XCJcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtLmNsYXNzTmFtZSAgPSBcImZvcm1cIlxuICAgICAgICB0aGlzLmNyZWF0ZURsSW5wdXQuaWQgID0gXCJkbC1pbnB1dFwiXG4gICAgICAgIHRoaXMuY3JlYXRlRGxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJsaXN0XCIsIFwiZGF0YS1saXN0XCIpXG4gICAgICAgIHRoaXMuY3JlYXRlU2F2ZUJ1dC5jbGFzc05hbWUgID0gXCJzdWJtaXQtYnV0XCIgXG4gICAgICAgIHRoaXMuY3JlYXRlQ29kZVZhbHVlLmNsYXNzTmFtZSAgPSBcImNvZGUtdmFsdWVcIlxuICAgIH1cblxuICAgIGlubmVySHRtbFNldHRlcigpe1xuICAgICAgICB0aGlzLmNyZWF0ZUNsb3NlQnV0LmlubmVySFRNTCA9IFwiK1wiXG4gICAgICAgIHRoaXMuY3JlYXRlSWNvbkltZy5zcmMgPSBpY29uSW1nXG4gICAgICAgIHRoaXMuY3JlYXRlRGxJbnB1dC5wbGFjZWhvbGRlciA9IFwiUHJpb3JpdHkgbGV2ZWxcIlxuICAgICAgICB0aGlzLmNyZWF0ZU5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBuYW1lXCJcbiAgICAgICAgdGhpcy5jcmVhdGVEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIGRlc2NyaXB0aW9uXCJcbiAgICAgICAgdGhpcy5jcmVhdGVEYXRlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRhdGUgb2YgdGFzayB5eXl5L21tL2RkXCJcbiAgICAgICAgdGhpcy5jcmVhdGVGaXJzdE9wdGlvbi52YWx1ZSA9IFwiTG93XCJcbiAgICAgICAgdGhpcy5jcmVhdGVTZWNvbmRPcHRpb24udmFsdWUgPSBcIk1lZGl1bVwiXG4gICAgICAgIHRoaXMuY3JlYXRlVGhpcmRPcHRpb24udmFsdWUgPSBcIkhpZ2hcIlxuICAgICAgICB0aGlzLmNyZWF0ZVNhdmVCdXQuaW5uZXJIVE1MID0gXCJTYXZlXCJcbiAgICB9XG5cbiAgICBpdGVtQXBwZW5kZXIoKXtcbiAgICAgICAgdGhpcy5jcmVhdGVEYXRhTGlzdC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUZpcnN0T3B0aW9uKVxuICAgICAgICB0aGlzLmNyZWF0ZURhdGFMaXN0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU2Vjb25kT3B0aW9uKVxuICAgICAgICB0aGlzLmNyZWF0ZURhdGFMaXN0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGhpcmRPcHRpb24pXG4gICAgICAgIHRoaXMuY3JlYXRlRGxJbnB1dC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURhdGFMaXN0KVxuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOYW1lSW5wdXQpXG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURlc2NyaXB0aW9uSW5wdXQpXG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURhdGVJbnB1dClcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtQ29udC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUNsb3NlQnV0KVxuICAgICAgICB0aGlzLmNyZWF0ZUZvcm1Db250LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlSWNvbkltZylcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtQ29udC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUZvcm0pXG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybUNvbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEbElucHV0KVxuICAgICAgICB0aGlzLmNyZWF0ZUZvcm1Db250LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU2F2ZUJ1dClcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtQ29udC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUNvZGVWYWx1ZSlcbiAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVGb3JtQ29udClcbiAgICB9XG5cbn0iLCJleHBvcnQge0h0bWxTdHJ1Y3R1cmV9XG5pbXBvcnQgZW1wdHlDYWwgZnJvbSBcIi4uLy4uL2Fzc2V0cy9lbXB0eV9jYWwucG5nXCJcbmltcG9ydCBmdWxsQ2FsIGZyb20gXCIuLi8uLi9hc3NldHMvZnVsbF9jYWwucG5nXCJcbmltcG9ydCBleHBpcmVkSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2V4cGlyZWQucG5nXCJcblxuXG4gICAgY2xhc3MgSHRtbFN0cnVjdHVyZXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0cnVjdG9yKGRpdil7XG4gICAgICAgICAgICB0aGlzLmRpdiA9IGRpdlxuICAgICAgICB9XG5cbiAgICAgICAgaW5pdCgpe1xuICAgICAgICAgICAgdGhpcy5jcmVhdG9yKClcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudE5hbWVyKClcbiAgICAgICAgICAgIHRoaXMuaW5uZXJIdG1sU2V0KClcbiAgICAgICAgICAgIHRoaXMuaW1nVXJsU2V0KClcbiAgICAgICAgICAgIHRoaXMuaXRlbUFwcGVuZGVyKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNyZWF0b3IoKXtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGltZSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybWF0ZWRUaW1lID0gYCR7dGhpcy5jcmVhdGVUaW1lLmdldEZ1bGxZZWFyKCl9LSR7dGhpcy5jcmVhdGVUaW1lLmdldE1vbnRoKCkrMX0tJHt0aGlzLmNyZWF0ZVRpbWUuZ2V0RGF0ZSgpfWBcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGV4dFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVBcHBDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW1wdHlIZWFkZXJDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29udGVudEhlYWRlckNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Qm9keUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb250ZW50Qm9keUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVCb2R5Q29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVQcmltZXJSZW5nbG9uQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudVNlZ3VuZG9SZW5nbG9uQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudVRlcmNlclJlbmdsb25Db250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVBZGRCdXR0b25Db250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUZXh0UGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGV4dEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGV4dFRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGV4dE5leHREYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGV4dE9sZERheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVOdW1iZXJUb2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU51bWJlck5leHREYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTnVtYmVyT2xkRGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVtcHR5Q2FsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZ1bGxDYWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIikgXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUV4cGlyZWRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIikgXG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50TmFtZXIoKXtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGV4dFRpbWUuY2xhc3NOYW1lID0gXCJ0ZXh0LXRpbWVcIlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVBcHBDb250LmNsYXNzTmFtZSA9IFwiYXBwLWNvbnRcIjtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW1wdHlIZWFkZXJDb250LmNsYXNzTmFtZSA9IFwiZW1wdHktaGVhZGVyLWNvbnRcIjtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29udGVudEhlYWRlckNvbnQuY2xhc3NOYW1lID0gXCJjb250ZW50LWhlYWRlci1jb250XCI7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJvZHlDb250LmNsYXNzTmFtZSA9IFwiYm9keS1jb250XCI7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbnRlbnRCb2R5Q29udC5jbGFzc05hbWUgPSBcImNvbnRlbnQtYm9keS1jb250XCJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUJvZHlDb250LmNsYXNzTmFtZSA9IFwibWVudS1ib2R5LWNvbnRcIlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51UHJpbWVyUmVuZ2xvbkNvbnQuY2xhc3NOYW1lID0gXCJtZW51LWxpbmVcIlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51U2VndW5kb1Jlbmdsb25Db250LmNsYXNzTmFtZSA9IFwibWVudS1saW5lXCJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudVRlcmNlclJlbmdsb25Db250LmNsYXNzTmFtZSA9IFwibWVudS1saW5lXCJcbiAgICAgICAgICAgIHRoaXMubWVudUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtYnV0XCIpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUZXh0VG9kYXkuY2xhc3NOYW1lID0gXCJtZW51LWJ1dFwiXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRleHROZXh0RGF5cy5jbGFzc05hbWUgPSBcIm1lbnUtYnV0XCJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGV4dE9sZERheXMuY2xhc3NOYW1lID0gXCJtZW51LWJ1dFwiXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRleHRUb2RheS5pZCA9IFwidG9kYXktYnV0XCJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGV4dE5leHREYXlzLmlkID0gXCJuZXh0LWJ1dFwiXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRleHRPbGREYXlzLmlkPSBcIm9sZC1idXRcIlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVOdW1iZXJUb2RheS5jbGFzc05hbWUgPSBcIm5vdGlmLW51bVwiXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU51bWJlck5leHREYXlzLmNsYXNzTmFtZSA9IFwibm90aWYtbnVtXCJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTnVtYmVyT2xkRGF5cy5jbGFzc05hbWUgPSBcIm5vdGlmLW51bVwiXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVtcHR5Q2FsSW1hZ2UuY2xhc3NOYW1lID0gXCJtZW51LWltYWdlXCJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRnVsbENhbEltYWdlLmNsYXNzTmFtZSA9IFwibWVudS1pbWFnZVwiXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUV4cGlyZWRJbWFnZS5jbGFzc05hbWUgPSBcIm1lbnUtaW1hZ2VcIlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUZXh0UGx1cy5jbGFzc05hbWUgPSBcInBsdXMtYnV0XCJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGV4dEFkZC5jbGFzc05hbWUgPSBcImFkZC1idXRcIlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVBZGRCdXR0b25Db250LmNsYXNzTmFtZSA9IFwiYWRkLWJ1dHRvbi1jb250XCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlubmVySHRtbFNldCgpe1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUZXh0VG9kYXkuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0LWNsaWNrZWRcIilcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGV4dFRpbWUuaW5uZXJIVE1MID0gYCR7dGhpcy5jcmVhdGVGb3JtYXRlZFRpbWV9YFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUZXh0UGx1cy5pbm5lckhUTUwgPSBcIitcIlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUZXh0QWRkLmlubmVySFRNTCA9IFwiTmV3IHRhc2tcIlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUZXh0VG9kYXkuaW5uZXJIVE1MID0gXCJUb2RheVwiXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRleHROZXh0RGF5cy5pbm5lckhUTUwgPSBcIlVwIG5leHRcIlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUZXh0T2xkRGF5cy5pbm5lckhUTUwgPSBcIkV4cGlyZWRcIlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVOdW1iZXJUb2RheS5pbm5lckhUTUwgPSBcIjBcIlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVOdW1iZXJOZXh0RGF5cy5pbm5lckhUTUwgPSBcIjBcIlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVOdW1iZXJPbGREYXlzLmlubmVySFRNTCA9IFwiMFwiXG4gICAgICAgIH1cblxuICAgICAgICBpbWdVcmxTZXQoKXtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW1wdHlDYWxJbWFnZS5zcmMgPSBlbXB0eUNhbFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVGdWxsQ2FsSW1hZ2Uuc3JjID0gZnVsbENhbFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFeHBpcmVkSW1hZ2Uuc3JjID0gZXhwaXJlZEljb25cbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1BcHBlbmRlcigpe1xuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVtcHR5SGVhZGVyQ29udC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRleHRUaW1lKVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVBZGRCdXR0b25Db250LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGV4dEFkZClcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkQnV0dG9uQ29udC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRleHRQbHVzKVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb250ZW50SGVhZGVyQ29udC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUFkZEJ1dHRvbkNvbnQpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVQcmltZXJSZW5nbG9uQ29udC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVtcHR5Q2FsSW1hZ2UpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVQcmltZXJSZW5nbG9uQ29udC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRleHRUb2RheSlcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudVByaW1lclJlbmdsb25Db250LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTnVtYmVyVG9kYXkpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVTZWd1bmRvUmVuZ2xvbkNvbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVGdWxsQ2FsSW1hZ2UpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVTZWd1bmRvUmVuZ2xvbkNvbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUZXh0TmV4dERheXMpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVTZWd1bmRvUmVuZ2xvbkNvbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOdW1iZXJOZXh0RGF5cylcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudVRlcmNlclJlbmdsb25Db250LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRXhwaXJlZEltYWdlKVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51VGVyY2VyUmVuZ2xvbkNvbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUZXh0T2xkRGF5cylcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudVRlcmNlclJlbmdsb25Db250LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTnVtYmVyT2xkRGF5cylcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUJvZHlDb250LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTWVudVByaW1lclJlbmdsb25Db250KVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Qm9keUNvbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVNZW51U2VndW5kb1Jlbmdsb25Db250KVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Qm9keUNvbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVNZW51VGVyY2VyUmVuZ2xvbkNvbnQpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFwcENvbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbXB0eUhlYWRlckNvbnQpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFwcENvbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDb250ZW50SGVhZGVyQ29udClcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQm9keUNvbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVNZW51Qm9keUNvbnQpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJvZHlDb250LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ29udGVudEJvZHlDb250KVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVBcHBDb250LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQm9keUNvbnQpXG4gICAgICAgICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUFwcENvbnQpXG4gICAgICAgIH1cblxufSIsImltcG9ydCBpY29uSW1nIGZyb20gJy4uLy4uL2Fzc2V0cy9ub3RlcGFkLnBuZyc7XG5cbmV4cG9ydCB7IE1vZGFsU3RydWN0dXJlIH07XG5cbmNsYXNzIE1vZGFsU3RydWN0dXJlIHtcbiAgY29uc3RydWN0b3IoZGl2KSB7XG4gICAgdGhpcy5kaXYgPSBkaXY7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuY3JlYXRvcigpO1xuICAgIHRoaXMuZWxlbWVudE5hbWVyKCk7XG4gICAgdGhpcy5pbm5lckh0bWxTZXR0ZXIoKTtcbiAgICB0aGlzLml0ZW1BcHBlbmRlcigpO1xuICB9XG5cbiAgY3JlYXRvcigpIHtcbiAgICB0aGlzLmNyZWF0ZUZvcm1Db250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jcmVhdGVDbG9zZUJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3JlYXRlSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRoaXMuY3JlYXRlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0aGlzLmNyZWF0ZU5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy5jcmVhdGVEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aGlzLmNyZWF0ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy5jcmVhdGVEYXRhTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RhdGFsaXN0Jyk7XG4gICAgdGhpcy5jcmVhdGVEbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aGlzLmNyZWF0ZUZpcnN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgdGhpcy5jcmVhdGVTZWNvbmRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB0aGlzLmNyZWF0ZVRoaXJkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgdGhpcy5jcmVhdGVTdWJtaXRCdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgfVxuXG4gIGVsZW1lbnROYW1lcigpIHtcbiAgICB0aGlzLmNyZWF0ZUZvcm1Db250LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnQnO1xuICAgIHRoaXMuY3JlYXRlQ2xvc2VCdXQuY2xhc3NOYW1lID0gJ2Nsb3NlLWJ1dCc7XG4gICAgdGhpcy5jcmVhdGVJY29uSW1nLmNsYXNzTmFtZSA9ICdpY29uLWltZyc7XG4gICAgdGhpcy5jcmVhdGVOYW1lSW5wdXQuY2xhc3NOYW1lID0gJ25hbWUtaW5wdXQnO1xuICAgIHRoaXMuY3JlYXRlRGVzY3JpcHRpb25JbnB1dC5jbGFzc05hbWUgPSAnZGVzY3JpcHRpb24taW5wdXQnO1xuICAgIHRoaXMuY3JlYXRlRGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdkYXRlLWlucHV0JztcbiAgICB0aGlzLmNyZWF0ZURhdGFMaXN0LmlkID0gJ2RhdGEtbGlzdCc7XG4gICAgdGhpcy5jcmVhdGVGb3JtLmNsYXNzTmFtZSA9ICdmb3JtJztcbiAgICB0aGlzLmNyZWF0ZURsSW5wdXQuaWQgPSAnZGwtaW5wdXQnO1xuICAgIHRoaXMuY3JlYXRlRGxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2xpc3QnLCAnZGF0YS1saXN0Jyk7XG4gICAgdGhpcy5jcmVhdGVTdWJtaXRCdXQuY2xhc3NOYW1lID0gJ3N1Ym1pdC1idXQnO1xuICB9XG5cbiAgaW5uZXJIdG1sU2V0dGVyKCkge1xuICAgIHRoaXMuY3JlYXRlQ2xvc2VCdXQuaW5uZXJIVE1MID0gJysnO1xuICAgIHRoaXMuY3JlYXRlSWNvbkltZy5zcmMgPSBpY29uSW1nO1xuICAgIHRoaXMuY3JlYXRlRGxJbnB1dC5wbGFjZWhvbGRlciA9ICdQcmlvcml0eSBsZXZlbCc7XG4gICAgdGhpcy5jcmVhdGVOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnVGFzayBuYW1lJztcbiAgICB0aGlzLmNyZWF0ZURlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnVGFzayBkZXNjcmlwdGlvbic7XG4gICAgdGhpcy5jcmVhdGVEYXRlSW5wdXQucGxhY2Vob2xkZXIgPSAnRGF0ZSBvZiB0YXNrIHl5eXkvbW0vZGQnO1xuICAgIHRoaXMuY3JlYXRlRmlyc3RPcHRpb24udmFsdWUgPSAnTG93JztcbiAgICB0aGlzLmNyZWF0ZVNlY29uZE9wdGlvbi52YWx1ZSA9ICdNZWRpdW0nO1xuICAgIHRoaXMuY3JlYXRlVGhpcmRPcHRpb24udmFsdWUgPSAnSGlnaCc7XG4gICAgdGhpcy5jcmVhdGVTdWJtaXRCdXQuaW5uZXJIVE1MID0gJ0FkZCc7XG4gIH1cblxuICBpdGVtQXBwZW5kZXIoKSB7XG4gICAgdGhpcy5jcmVhdGVEYXRhTGlzdC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUZpcnN0T3B0aW9uKTtcbiAgICB0aGlzLmNyZWF0ZURhdGFMaXN0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU2Vjb25kT3B0aW9uKTtcbiAgICB0aGlzLmNyZWF0ZURhdGFMaXN0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGhpcmRPcHRpb24pO1xuICAgIHRoaXMuY3JlYXRlRGxJbnB1dC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURhdGFMaXN0KTtcbiAgICB0aGlzLmNyZWF0ZUZvcm0uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOYW1lSW5wdXQpO1xuICAgIHRoaXMuY3JlYXRlRm9ybS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURlc2NyaXB0aW9uSW5wdXQpO1xuICAgIHRoaXMuY3JlYXRlRm9ybS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURhdGVJbnB1dCk7XG4gICAgdGhpcy5jcmVhdGVGb3JtQ29udC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUNsb3NlQnV0KTtcbiAgICB0aGlzLmNyZWF0ZUZvcm1Db250LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlSWNvbkltZyk7XG4gICAgdGhpcy5jcmVhdGVGb3JtQ29udC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUZvcm0pO1xuICAgIHRoaXMuY3JlYXRlRm9ybUNvbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEbElucHV0KTtcbiAgICB0aGlzLmNyZWF0ZUZvcm1Db250LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU3VibWl0QnV0KTtcbiAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUZvcm1Db250KTtcbiAgfVxufVxuIiwiaW1wb3J0IGJpbkltZyBmcm9tICcuLi8uLi9hc3NldHMvYmluLnBuZyc7XG5pbXBvcnQgZWRpdEltZyBmcm9tICcuLi8uLi9hc3NldHMvZWRpdGFyLnBuZyc7XG5pbXBvcnQgZG93bkltZyBmcm9tICcuLi8uLi9hc3NldHMvZG93bi5wbmcnO1xuXG5leHBvcnQgeyBUYXNrTWFuYWdlciwgVGFzayB9O1xuXG5jbGFzcyBUYXNrTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIHRhc2tzID0gW107XG5cbiAgYWRkVGFzayh0YXNrLCBhcnJheSkge1xuICAgIGFycmF5LnB1c2godGFzayk7XG4gICAgYXJyYXkuc29ydCgoYSwgYikgPT4gYS5kYXRlIC0gYi5kYXRlKTtcbiAgfVxuXG4gIGVkaXRUYXNrKHRhc2spIHtcblxuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrLCBhcnJheSkge1xuICAgIGFycmF5LnNwbGljZSh0aGlzLnRhc2tzLmluZGV4T2YodGFzayksIDEpO1xuICB9XG5cbiAgdG9kYXlUYXNrc1RvSHRtbChodG1sRGl2KSB7XG4gICAgdGhpcy50YXNrcy5zb3J0KChhLCBiKSA9PiBhLmZvcm1hdGVkRGF0ZS5sb2NhbGVDb21wYXJlKGIuZm9ybWF0ZWREYXRlKSB8fCBhLnByaW9yaXR5TnVtIC0gYi5wcmlvcml0eU51bSk7XG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2submFtZX1gKSAmJiB0aGlzLmZvcm1hdFRhc2tEYXRlKHRhc2suZGF0ZSkgPT09IHRoaXMuZm9ybWF0VGFza0RhdGUodGhpcy50b2RheURhdGUpKSB7XG4gICAgICAgIHRoaXMuaHRtbENyZWF0b3IoaHRtbERpdiwgdGFzayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZXh0RGF5c1Rhc2tzVG9IdG1sKGh0bWxEaXYpIHtcbiAgICB0aGlzLnRhc2tzLnNvcnQoKGEsIGIpID0+IGEuZm9ybWF0ZWREYXRlLmxvY2FsZUNvbXBhcmUoYi5mb3JtYXRlZERhdGUpIHx8IGEucHJpb3JpdHlOdW0gLSBiLnByaW9yaXR5TnVtKTtcbiAgICB0aGlzLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFzay5uYW1lfWApICYmIHRoaXMuZm9ybWF0VGFza0RhdGUodGFzay5kYXRlKSA+IHRoaXMuZm9ybWF0VGFza0RhdGUodGhpcy50b2RheURhdGUpKSB7XG4gICAgICAgIHRoaXMuaHRtbENyZWF0b3IoaHRtbERpdiwgdGFzayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvbGRUYXNrc1RvSHRtbChodG1sRGl2KSB7XG4gICAgdGhpcy50YXNrcy5zb3J0KChhLCBiKSA9PiBhLmZvcm1hdGVkRGF0ZS5sb2NhbGVDb21wYXJlKGIuZm9ybWF0ZWREYXRlKSB8fCBhLnByaW9yaXR5TnVtIC0gYi5wcmlvcml0eU51bSk7XG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2submFtZX1gKSAmJiB0aGlzLmZvcm1hdFRhc2tEYXRlKHRhc2suZGF0ZSkgPCB0aGlzLmZvcm1hdFRhc2tEYXRlKHRoaXMudG9kYXlEYXRlKSkge1xuICAgICAgICB0aGlzLmh0bWxDcmVhdG9yKGh0bWxEaXYsIHRhc2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9kYXlUYXNrcyh0b2RheSkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5mb3JtYXRlZERhdGUgPT09IHRvZGF5KS5sZW5ndGg7XG4gIH1cblxuICB1cE5leHRUYXNrcyh0b2RheSkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5mb3JtYXRlZERhdGUgPiB0b2RheSkubGVuZ3RoO1xuICB9XG5cbiAgb2xkVGFza3ModG9kYXkpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZm9ybWF0ZWREYXRlIDwgdG9kYXkpLmxlbmd0aDtcbiAgfVxuXG4gIGNyZWF0ZVRhc2tQcmlvcml0eU51bShwcmlvcml0eSkge1xuICAgIGlmIChwcmlvcml0eSA9PT0gJ0xvdycpIHtcbiAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgPT09ICdNZWRpdW0nKSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ID09PSAnSGlnaCcpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuXG4gIHN0b3JhZ2VVcGRhdGUoKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xuICB9XG5cbiAgb2JqZWN0c1RvVGFza3MoKSB7XG4gICAgY29uc3QgZGIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpIHx8ICdbXScpO1xuICAgIGRiLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuYWRkVGFzayhuZXcgVGFzayhlbGVtZW50Lm5hbWUsIGVsZW1lbnQuZGF0ZSwgZWxlbWVudC5kZXNjcmlwdGlvbiwgZWxlbWVudC5wcmlvcml0eSwgZWxlbWVudC5jb21wbGV0ZWQsIHRoaXMudGFza3MubGVuZ3RoLCB0aGlzLmNyZWF0ZVRhc2tQcmlvcml0eU51bShlbGVtZW50LnByaW9yaXR5KSksIHRoaXMudGFza3MpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9ybWF0VGFza0RhdGUoZGF0ZSkge1xuICAgIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7ZGF0ZS5nZXRNb250aCgpICsgMX0tJHtkYXRlLmdldERhdGUoKX1gO1xuICB9XG5cbiAgaHRtbENyZWF0b3IoaHRtbERpdiwgdGFzaykge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmltYXJ5VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tFeHBhbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrT3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByaW1hcnlUYXNrVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGFza0Rpdi5jbGFzc05hbWUgPSAndGFzayc7XG4gICAgcHJpbWFyeVRhc2tEaXYuY2xhc3NOYW1lID0gJ3Rhc2stcHJpbWFyeSc7XG4gICAgcHJpbWFyeVRhc2tUZXh0RGl2LmNsYXNzTmFtZSA9ICd0YXNrLXByaW1hcnktdGV4dCc7XG4gICAgdGFza09wdGlvbnNEaXYuY2xhc3NOYW1lID0gJ3Rhc2stb3B0aW9ucyc7XG4gICAgdGFza0V4cGFuZERpdi5jbGFzc05hbWUgPSAndGFzay1leHBhbmQnO1xuICAgIHByaW1hcnlUYXNrRGl2LmlkID0gYCR7dGFzay5uYW1lfWA7XG5cbiAgICBwcmltYXJ5VGFza1RleHREaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGFzay5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGF0ZVwiPiR7dGhpcy5mb3JtYXRUYXNrRGF0ZSh0YXNrLmRhdGUpfTwvZGl2PlxuICAgICAgICBgO1xuICAgIHRhc2tPcHRpb25zRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxpbWcgc3JjPSR7YmluSW1nfSBjbGFzcz1cInRhc2stcmVtb3ZlXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz0ke2VkaXRJbWd9IGNsYXNzPVwidGFzay1lZGl0XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz0ke2Rvd25JbWd9IGNsYXNzPVwidGFzay1leHBhbmQtaWNvblwiPlxuICAgICAgICBgO1xuICAgIHRhc2tFeHBhbmREaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGVzY3JpcHRpb25cIj5BYm91dCB0aGUgdGFzazogJHt0YXNrLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stcHJpb3JpdHlcIj5UYXNrIHByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9PC9kaXY+XG4gICAgICAgIGA7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdMb3cnKSB7XG4gICAgICB0YXNrRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjA1LCAyNTUsIDEyNiknO1xuICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJ01lZGl1bScpIHtcbiAgICAgIHRhc2tEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNTUsIDI1MywgMTM4KSc7XG4gICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnSGlnaCcpIHtcbiAgICAgIHRhc2tEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNTUsIDEzNiwgMTM2KSc7XG4gICAgfVxuICAgIHByaW1hcnlUYXNrRGl2LmFwcGVuZENoaWxkKHByaW1hcnlUYXNrVGV4dERpdik7XG4gICAgcHJpbWFyeVRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza09wdGlvbnNEaXYpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQocHJpbWFyeVRhc2tEaXYpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0V4cGFuZERpdik7XG4gICAgaHRtbERpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB0aGlzLmV2ZW50QmluZGVyKHRhc2tEaXYpO1xuICB9XG5cbiAgZXZlbnRCaW5kZXIodGFza0Rpdikge1xuICAgIHRhc2tEaXYucXVlcnlTZWxlY3RvcignLnRhc2stcmVtb3ZlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0YXNrRGl2LnJlbW92ZSgpO1xuICAgICAgdGhpcy5yZW1vdmVUYXNrKHRhc2tEaXYuaWQsIHRoaXMudGFza3MpO1xuICAgIH0pO1xuICAgIHRhc2tEaXYucXVlcnlTZWxlY3RvcignLnRhc2stZXhwYW5kLWljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRhc2tEaXYucXVlcnlTZWxlY3RvcignLnRhc2stZXhwYW5kJykuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1leHBhbmQtc2hvdycpO1xuICAgIH0pO1xuICB9XG59XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByaW9yaXR5TnVtLCBudW1iZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIHRoaXMuZm9ybWF0ZWREYXRlID0gYCR7dGhpcy5kYXRlLmdldEZ1bGxZZWFyKCl9LSR7dGhpcy5kYXRlLmdldE1vbnRoKCkgKyAxfS0ke3RoaXMuZGF0ZS5nZXREYXRlKCl9YDtcbiAgICB0aGlzLmVkaXRGb3JtYXRlZERhdGUgPSBgJHt0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKX0vJHt0aGlzLmRhdGUuZ2V0TW9udGgoKSArIDF9LyR7dGhpcy5kYXRlLmdldERhdGUoKX1gO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcmlvcml0eU51bSA9IHByaW9yaXR5TnVtO1xuICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7SHRtbFN0cnVjdHVyZX0gZnJvbSBcIi4vaHRtbF9jcmVhdGlvbi9tYWluX2h0bWxcIlxuaW1wb3J0IHtNb2RhbFN0cnVjdHVyZX0gZnJvbSBcIi4vaHRtbF9jcmVhdGlvbi9tb2RhbF9odG1sXCJcbmltcG9ydCB7VGFza01hbmFnZXIsIFRhc2t9IGZyb20gXCIuL3Rhc2tfY2xhc3MvdGFza19jbGFzc1wiXG5pbXBvcnQgeyBNb2RhbEVkaXRTdHJ1Y3R1cmUgfSBmcm9tIFwiLi9odG1sX2NyZWF0aW9uL2VkaXQtbW9kYWxcIlxuaW1wb3J0IFwiLi4vc3R5bGUvc3R5bGUuY3NzXCJcblxuKGZ1bmN0aW9uKCl7XG5cbiAgICBjbGFzcyBNYWluUGFnZXtcblxuICAgICAgICBpbml0KCl7XG4gICAgICAgIHRoaXMuY2FjaGVEb20oKVxuICAgICAgICB0aGlzLmh0bWxTdHJ1Y3R1cmVDcmVhdGlvbigpXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpXG4gICAgICAgIHRoaXMudGFza01hbmFnZXIub2JqZWN0c1RvVGFza3MoKVxuICAgICAgICB0aGlzLnRhc2tNYW5hZ2VyLnRvZGF5VGFza3NUb0h0bWwodGhpcy5odG1sU3RydWN0dXJlLmNyZWF0ZUNvbnRlbnRCb2R5Q29udCk7XG4gICAgICAgIHRoaXMuZWRpdEJ1dEJpbmRlcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRvZGF5VGFza051bWJlcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZU5leHRUYXNrTnVtYmVyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlT2xkVGFza051bWJlcigpO1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYWxTdG9yYWdlKVxuICAgICAgIH1cblxuICAgICAgICBjYWNoZURvbSgpe1xuICAgICAgICB0aGlzLm1haW5Db250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG4gICAgICAgIHRoaXMubW9kYWxDb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbFwiKVxuICAgICAgICB0aGlzLm1vZGFsRWRpdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1tb2RhbFwiKVxuICAgICAgICB0aGlzLm1lbnVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWJ1dFwiKTtcblxuICAgICAgIH1cblxuICAgICAgICBodG1sU3RydWN0dXJlQ3JlYXRpb24oKXtcbiAgICAgICAgdGhpcy5odG1sU3RydWN0dXJlID0gbmV3IEh0bWxTdHJ1Y3R1cmUodGhpcy5tYWluQ29udGVudERpdik7XG4gICAgICAgIHRoaXMubW9kYWxTdHJ1Y3R1cmUgPSBuZXcgTW9kYWxTdHJ1Y3R1cmUodGhpcy5tb2RhbENvbnRlbnREaXYpO1xuICAgICAgICB0aGlzLmVkaXRNb2RhbFN0cnVjdHVyZSA9IG5ldyBNb2RhbEVkaXRTdHJ1Y3R1cmUodGhpcy5tb2RhbEVkaXREaXYpO1xuICAgICAgICB0aGlzLnRhc2tNYW5hZ2VyID0gbmV3IFRhc2tNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMubW9kYWxTdHJ1Y3R1cmUuaW5pdCgpO1xuICAgICAgICB0aGlzLmh0bWxTdHJ1Y3R1cmUuaW5pdCgpO1xuICAgICAgICB0aGlzLmVkaXRNb2RhbFN0cnVjdHVyZS5pbml0KCk7XG4gICAgICAgfVxuXG4gICAgICAgIGJpbmRFdmVudHMoKXtcbiAgICAgICAgdGhpcy5odG1sU3RydWN0dXJlLmNyZWF0ZUFkZEJ1dHRvbkNvbnQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kYWxDb250ZW50RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5tb2RhbFN0cnVjdHVyZS5jcmVhdGVDbG9zZUJ1dC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRlbnREaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMuZWRpdE1vZGFsU3RydWN0dXJlLmNyZWF0ZUNsb3NlQnV0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsQ29udGVudERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kYWxTdHJ1Y3R1cmUuY3JlYXRlU3VibWl0QnV0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFRhc2soKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dFRhc2tOdW1iZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9kYXlUYXNrTnVtYmVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9sZFRhc2tOdW1iZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRzSW5uZXJIdGxtU2V0dGVyKFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIpXG4gICAgICAgICAgICB0aGlzLm1vZGFsQ29udGVudERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB0aGlzLnRhc2tNYW5hZ2VyLnN0b3JhZ2VVcGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5lZGl0TW9kYWxTdHJ1Y3R1cmUuY3JlYXRlU2F2ZUJ1dC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHRoaXNUYXNrID0gdGhpcy50YXNrTWFuYWdlci50YXNrcy5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5jb2RlID09PSB0aGlzLmVkaXRNb2RhbFN0cnVjdHVyZS5jcmVhdGVDb2RlVmFsdWUudmFsdWUpXG4gICAgICAgICAgICB0aGlzVGFzay5uYW1lID0gdGhpcy5lZGl0TW9kYWxTdHJ1Y3R1cmUuY3JlYXRlTmFtZUlucHV0LnZhbHVlXG4gICAgICAgICAgICB0aGlzVGFzay5kZXNjcmlwdGlvbiA9IHRoaXMuZWRpdE1vZGFsU3RydWN0dXJlLmNyZWF0ZURlc2NyaXB0aW9uSW5wdXQudmFsdWVcbiAgICAgICAgICAgIHRoaXNUYXNrLmRhdGUgPSBuZXcgRGF0ZSh0aGlzLmVkaXRNb2RhbFN0cnVjdHVyZS5jcmVhdGVEYXRlSW5wdXQudmFsdWUpXG4gICAgICAgICAgICB0aGlzVGFzay5wcmlvcml0eSA9IHRoaXMuZWRpdE1vZGFsU3RydWN0dXJlLmNyZWF0ZURsSW5wdXQudmFsdWVcbiAgICAgICAgICAgIHRoaXNUYXNrLmZvcm1hdGVkRGF0ZSA9IGAke3RoaXNUYXNrLmRhdGUuZ2V0RnVsbFllYXIoKX0tJHt0aGlzVGFzay5kYXRlLmdldE1vbnRoKCkrMX0tJHt0aGlzVGFzay5kYXRlLmdldERhdGUoKX1gXG4gICAgICAgICAgICB0aGlzVGFzay5lZGl0Rm9ybWF0ZWREYXRlID0gYCR7dGhpc1Rhc2suZGF0ZS5nZXRGdWxsWWVhcigpfS8ke3RoaXNUYXNrLmRhdGUuZ2V0TW9udGgoKSsxfS8ke3RoaXNUYXNrICAgIC5kYXRlLmdldERhdGUoKX1gXG4gICAgICAgICAgICB0aGlzVGFzay5wcmlvcml0eU51bSA9IHRoaXMudGFza01hbmFnZXIuY3JlYXRlVGFza1ByaW9yaXR5TnVtKHRoaXNUYXNrLnByaW9yaXR5KVxuICAgICAgICAgICAgdGhpcy50YXNrTWFuYWdlci50b2RheVRhc2tzVG9IdG1sKHRoaXMuaHRtbFN0cnVjdHVyZS5jcmVhdGVDb250ZW50Qm9keUNvbnQpO1xuICAgICAgICAgICAgdGhpcy5lZGl0SW5wdXRzSW5uZXJIdGxtU2V0dGVyKFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsXCJcIilcbiAgICAgICAgICAgIHRoaXMubW9kYWxFZGl0RGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dFRhc2tOdW1iZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9kYXlUYXNrTnVtYmVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9sZFRhc2tOdW1iZXIoKTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tlZE9wdGlvbkVycmFzZSgpO1xuICAgICAgICAgICAgdGhpcy50YXNrTWFuYWdlci5zdG9yYWdlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGlja2VkT3B0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRUYXNrKCl7XG4gICAgICAgICAgICB0aGlzLmh0bWxTdHJ1Y3R1cmUuY3JlYXRlVGV4dFRvZGF5LmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dC1jbGlja2VkXCIpXG4gICAgICAgICAgICB0aGlzLnRhc2tNYW5hZ2VyLmFkZFRhc2sobmV3IFRhc2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsU3RydWN0dXJlLmNyZWF0ZU5hbWVJbnB1dC52YWx1ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsU3RydWN0dXJlLmNyZWF0ZURhdGVJbnB1dC52YWx1ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsU3RydWN0dXJlLmNyZWF0ZURlc2NyaXB0aW9uSW5wdXQudmFsdWUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbFN0cnVjdHVyZS5jcmVhdGVEbElucHV0LnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFza01hbmFnZXIuY3JlYXRlVGFza1ByaW9yaXR5TnVtKHRoaXMubW9kYWxTdHJ1Y3R1cmUuY3JlYXRlRGxJbnB1dC52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tNYW5hZ2VyLnRhc2tzLmxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tNYW5hZ2VyLnRhc2tzKTtcbiAgICAgICAgICAgIHRoaXMudGFza01hbmFnZXIudG9kYXlUYXNrc1RvSHRtbCh0aGlzLmh0bWxTdHJ1Y3R1cmUuY3JlYXRlQ29udGVudEJvZHlDb250KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVRvZGF5VGFza051bWJlcigpe1xuICAgICAgICAgICAgdGhpcy5odG1sU3RydWN0dXJlLmNyZWF0ZU51bWJlclRvZGF5LmlubmVySFRNTCA9IHRoaXMudGFza01hbmFnZXIudG9kYXlUYXNrcyh0aGlzLmh0bWxTdHJ1Y3R1cmUuY3JlYXRlRm9ybWF0ZWRUaW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlTmV4dFRhc2tOdW1iZXIoKXtcbiAgICAgICAgICAgIHRoaXMuaHRtbFN0cnVjdHVyZS5jcmVhdGVOdW1iZXJOZXh0RGF5cy5pbm5lckhUTUwgPSB0aGlzLnRhc2tNYW5hZ2VyLnVwTmV4dFRhc2tzKHRoaXMuaHRtbFN0cnVjdHVyZS5jcmVhdGVGb3JtYXRlZFRpbWUpICBcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZU9sZFRhc2tOdW1iZXIoKXtcbiAgICAgICAgICAgIHRoaXMuaHRtbFN0cnVjdHVyZS5jcmVhdGVOdW1iZXJPbGREYXlzLmlubmVySFRNTCA9IHRoaXMudGFza01hbmFnZXIub2xkVGFza3ModGhpcy5odG1sU3RydWN0dXJlLmNyZWF0ZUZvcm1hdGVkVGltZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWNrZWRTdHlsZUVycmFzZSgpe1xuICAgICAgICAgICAgbGV0IG1lbnVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWJ1dFwiKTtcbiAgICAgICAgICAgIG1lbnVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtYnV0LWNsaWNrZWRcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjbGlja2VkT3B0aW9uRXJyYXNlKCl7XG4gICAgICAgICAgICB0aGlzLmNsaWNrZWRTdHlsZUVycmFzZVxuICAgICAgICAgICAgdGhpcy5odG1sU3RydWN0dXJlLmNyZWF0ZUNvbnRlbnRCb2R5Q29udC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRzSW5uZXJIdGxtU2V0dGVyKG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSl7XG4gICAgICAgICAgICB0aGlzLm1vZGFsU3RydWN0dXJlLmNyZWF0ZU5hbWVJbnB1dC52YWx1ZSA9IG5hbWVcbiAgICAgICAgICAgIHRoaXMubW9kYWxTdHJ1Y3R1cmUuY3JlYXRlRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGRlc2NyaXB0aW9uXG4gICAgICAgICAgICB0aGlzLm1vZGFsU3RydWN0dXJlLmNyZWF0ZURhdGVJbnB1dC52YWx1ZSA9IGRhdGVcbiAgICAgICAgICAgIHRoaXMubW9kYWxTdHJ1Y3R1cmUuY3JlYXRlRGxJbnB1dC52YWx1ZSA9IHByaW9yaXR5XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0SW5wdXRzSW5uZXJIdGxtU2V0dGVyKG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSxjb2RlKXtcbiAgICAgICAgICAgIHRoaXMuZWRpdE1vZGFsU3RydWN0dXJlLmNyZWF0ZU5hbWVJbnB1dC52YWx1ZSA9IG5hbWVcbiAgICAgICAgICAgIHRoaXMuZWRpdE1vZGFsU3RydWN0dXJlLmNyZWF0ZURlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgdGhpcy5lZGl0TW9kYWxTdHJ1Y3R1cmUuY3JlYXRlRGF0ZUlucHV0LnZhbHVlID0gZGF0ZVxuICAgICAgICAgICAgdGhpcy5lZGl0TW9kYWxTdHJ1Y3R1cmUuY3JlYXRlRGxJbnB1dC52YWx1ZSA9IHByaW9yaXR5XG4gICAgICAgICAgICB0aGlzLmVkaXRNb2RhbFN0cnVjdHVyZS5jcmVhdGVDb2RlVmFsdWUuaW5uZXJIVE1MID0gY29kZVxuICAgICAgICB9XG5cbiAgICAgICAgZWRpdEJ1dEJpbmRlcigpe1xuICAgICAgICAgICAgbGV0IGVkaXRJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1lZGl0XCIpXG4gICAgICAgICAgICBlZGl0SWNvbnMuZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbEVkaXREaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGlzVGFzayA9IHRoaXMudGFza01hbmFnZXIudGFza3MuZmluZChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gaWNvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdElucHV0c0lubmVySHRsbVNldHRlcih0aGlzVGFzay5uYW1lLCB0aGlzVGFzay5kZXNjcmlwdGlvbix0aGlzVGFzay5lZGl0Rm9ybWF0ZWREYXRlLHRoaXNUYXNrLnByaW9yaXR5LHRoaXNUYXNrLm51bWJlcilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWNrZWRPcHRpb24oKXtcbiAgICAgICAgICAgIGxldCBtZW51QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1idXRcIik7XG4gICAgICAgICAgICBtZW51QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tlZFN0eWxlRXJyYXNlKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sU3RydWN0dXJlLmNyZWF0ZUNvbnRlbnRCb2R5Q29udC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0LWNsaWNrZWRcIilcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5pZCA9PT0gXCJ0b2RheS1idXRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXNrTWFuYWdlci50b2RheVRhc2tzVG9IdG1sKHRoaXMuaHRtbFN0cnVjdHVyZS5jcmVhdGVDb250ZW50Qm9keUNvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0QnV0QmluZGVyKClcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYnV0dG9uLmlkID09PSBcIm5leHQtYnV0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFza01hbmFnZXIubmV4dERheXNUYXNrc1RvSHRtbCh0aGlzLmh0bWxTdHJ1Y3R1cmUuY3JlYXRlQ29udGVudEJvZHlDb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdEJ1dEJpbmRlcigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYnV0dG9uLmlkID09PSBcIm9sZC1idXRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXNrTWFuYWdlci5vbGRUYXNrc1RvSHRtbCh0aGlzLmh0bWxTdHJ1Y3R1cmUuY3JlYXRlQ29udGVudEJvZHlDb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdEJ1dEJpbmRlcigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgfSBcblxuICAgbGV0IHJlc3RhdXJhbnRQYWdlID0gbmV3IE1haW5QYWdlKCk7XG4gICByZXN0YXVyYW50UGFnZS5pbml0KCk7XG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9