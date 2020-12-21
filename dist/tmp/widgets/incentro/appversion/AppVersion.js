module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/AppVersion.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}module.exports=_arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}module.exports=_arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray=__webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");function _arrayWithoutHoles(arr){if(Array.isArray(arr))return arrayLikeToArray(arr);}module.exports=_arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}module.exports=_defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends(){module.exports=_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}module.exports=_extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}module.exports=_interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}module.exports=_iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}module.exports=_iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}module.exports=_nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}module.exports=_nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles=__webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");var iterableToArrayLimit=__webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");var unsupportedIterableToArray=__webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");var nonIterableRest=__webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||unsupportedIterableToArray(arr,i)||nonIterableRest();}module.exports=_slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles=__webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");var iterableToArray=__webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");var unsupportedIterableToArray=__webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");var nonIterableSpread=__webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");function _toConsumableArray(arr){return arrayWithoutHoles(arr)||iterableToArray(arr)||unsupportedIterableToArray(arr)||nonIterableSpread();}module.exports=_toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray=__webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return arrayLikeToArray(o,minLen);}module.exports=_unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@mendix/pluggable-widgets-tools/dist/common.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mendix/pluggable-widgets-tools/dist/common.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.ensure=void 0;function ensure(arg){if(arg==null){throw new Error("Did not expect an argument to be undefined");}return arg;}exports.ensure=ensure;

/***/ }),

/***/ "./node_modules/@mendix/pluggable-widgets-tools/dist/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mendix/pluggable-widgets-tools/dist/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function get(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __exportStar=this&&this.__exportStar||function(m,exports){for(var p in m){if(p!=="default"&&!exports.hasOwnProperty(p))__createBinding(exports,m,p);}};Object.defineProperty(exports,"__esModule",{value:true});__exportStar(__webpack_require__(/*! ./common */ "./node_modules/@mendix/pluggable-widgets-tools/dist/common.js"),exports);__exportStar(__webpack_require__(/*! ./native/common */ "./node_modules/@mendix/pluggable-widgets-tools/dist/native/common.js"),exports);__exportStar(__webpack_require__(/*! ./web/common */ "./node_modules/@mendix/pluggable-widgets-tools/dist/web/common.js"),exports);

/***/ }),

/***/ "./node_modules/@mendix/pluggable-widgets-tools/dist/native/common.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@mendix/pluggable-widgets-tools/dist/native/common.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _slicedToArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));var _defineProperty2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));var _extends3=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _toConsumableArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));Object.defineProperty(exports,"__esModule",{value:true});exports.extractStyles=exports.mergeNativeStyles=void 0;function mergeNativeStyles(defaultStyle,overrideStyles){var styles=[defaultStyle].concat((0,_toConsumableArray2.default)(overrideStyles.filter(function(object){return object!==undefined;})));return Object.keys(defaultStyle).reduce(function(flattened,currentKey){var styleItems=styles.map(function(object){return object[currentKey];});return(0,_extends3.default)((0,_extends3.default)({},flattened),(0,_defineProperty2.default)({},currentKey,flattenObjects(styleItems)));},{});}exports.mergeNativeStyles=mergeNativeStyles;function flattenObjects(objects){return objects.reduce(function(merged,object){return(0,_extends3.default)((0,_extends3.default)({},merged),object);},{});}function extractStyles(source,extractionKeys){if(!source){return[{},{}];}return Object.entries(source).reduce(function(_ref,_ref2){var _ref3=(0,_slicedToArray2.default)(_ref,2),extracted=_ref3[0],rest=_ref3[1];var _ref4=(0,_slicedToArray2.default)(_ref2,2),key=_ref4[0],value=_ref4[1];if(extractionKeys.includes(key)){extracted[key]=value;}else{rest[key]=value;}return[extracted,rest];},[{},{}]);}exports.extractStyles=extractStyles;

/***/ }),

/***/ "./node_modules/@mendix/pluggable-widgets-tools/dist/web/common.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@mendix/pluggable-widgets-tools/dist/web/common.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.parseInlineStyle=void 0;function parseInlineStyle(){var style=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";try{return style.split(";").reduce(function(styleObject,line){var pair=line.split(":");if(pair.length===2){var name=pair[0].trim().replace(/(-.)/g,function(match){return match[1].toUpperCase();});styleObject[name]=pair[1].trim();}return styleObject;},{});}catch(_){return{};}}exports.parseInlineStyle=parseInlineStyle;

/***/ }),

/***/ "./src/AppVersion.tsx":
/*!****************************!*\
  !*** ./src/AppVersion.tsx ***!
  \****************************/
/*! exports provided: AppVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppVersion", function() { return AppVersion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mendix_pluggable_widgets_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mendix/pluggable-widgets-tools */ "./node_modules/@mendix/pluggable-widgets-tools/dist/index.js");
/* harmony import */ var _mendix_pluggable_widgets_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mendix_pluggable_widgets_tools__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var defaultStyle = {
    container: {},
    label: {
        color: "#F6BB42"
    }
};
var AppVersion = /** @class */ (function (_super) {
    __extends(AppVersion, _super);
    function AppVersion(props) {
        var _this = _super.call(this, props) || this;
        _this.styles = Object(_mendix_pluggable_widgets_tools__WEBPACK_IMPORTED_MODULE_2__["mergeNativeStyles"])(defaultStyle, _this.props.style);
        _this.state = {
            executeOnce: false,
        };
        return _this;
    }
    AppVersion.prototype.appVersion = function () {
        var _a, _b, _c, _d;
        var backendAppVersionString = (_b = (_a = this.props.backendVersion) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toString();
        var appVersion = Number(this.props.appVersion.split('.').join(""));
        var backendAppVersion = Number(backendAppVersionString === null || backendAppVersionString === void 0 ? void 0 : backendAppVersionString.split('.').join(""));
        if (this.state.executeOnce === false) {
            if (backendAppVersion > appVersion) {
                (_c = this.props.updateFlow) === null || _c === void 0 ? void 0 : _c.execute();
                this.setState({ executeOnce: true });
            }
            if (backendAppVersion <= appVersion) {
                (_d = this.props.noUpdateFlow) === null || _d === void 0 ? void 0 : _d.execute();
                this.setState({ executeOnce: true });
            }
        }
    };
    AppVersion.prototype.render = function () {
        var _a, _b;
        this.appVersion();
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], { style: this.styles.container },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], { style: this.styles.label },
                "App Versie: ",
                this.props.appVersion,
                " / Backend Versie: ", (_b = (_a = this.props.backendVersion) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 :
                _b.toString())));
    };
    return AppVersion;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ })

/******/ });
//# sourceMappingURL=AppVersion.js.map