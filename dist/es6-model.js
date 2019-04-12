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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/model */ \"./src/model.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4vc3JjL21vZGVsJ1xuXG5leHBvcnQgZGVmYXVsdCBNb2RlbFxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Model =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Base constructor method for models. Performs a type checking on each argument provided\n   * in the 'args' object. Each argument is a key-value pair composed of the following fields:\n   * <argName>: [\n   *   <argValue>,    --> The value to check\n   *   <typeToCheck>, --> The primitive type to check the value against,\n   *                      or an array containing the Array type with its associated type.\n   *   <isRequired>   --> A optional boolean indicating if the attribute is required\n   * ]\n   *\n   * @param  {Object} args - Child-class constructor arguments.\n   * @return {void}\n   */\n  function Model(args) {\n    _classCallCheck(this, Model);\n\n    for (var i in args) {\n      var argValue = args[i][0];\n      var argType = args[i][1];\n      var argRequired = !!args[i][2]; // Perform attribute checking for:\n      // - Type-based array/objects\n\n      if (this._isObject(argType) && argType.hasOwnProperty('Array')) {\n        this._checkArgPrimitiveType(argValue, Array, i, argRequired);\n\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = argValue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var arg = _step.value;\n\n            this._checkArgPrimitiveType(arg, argType.Array, i, argRequired);\n          } // - multi-types values\n          // - simple primitive types\n\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n              _iterator[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n      } else {\n        this._checkArgPrimitiveType(argValue, argType, i, argRequired);\n      }\n    }\n  }\n  /**\n   * Used by the constructor to check if given arg. values match given arg. types,\n   * and eventually throw an error if it occurs.\n   *\n   * @param  {mixed} argValue - The argument value to check.\n   * @param  {mixed} argType - The argument type against which the check will be performed.\n   * @param  {String} argName - The argument name, used when throwing an error.\n   * @return {Boolean}\n   */\n\n\n  _createClass(Model, [{\n    key: \"_checkArgPrimitiveType\",\n    value: function _checkArgPrimitiveType(argValue, argType, argName, isRequired) {\n      var _this = this;\n\n      var typeError = null; // Multi-type checking\n\n      if (this._isArray(argType)) {\n        var validType = false;\n        var _iteratorNormalCompletion2 = true;\n        var _didIteratorError2 = false;\n        var _iteratorError2 = undefined;\n\n        try {\n          for (var _iterator2 = argType[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n            var type = _step2.value;\n\n            if (this._isArgOfType(argValue, type)) {\n              validType = true;\n            }\n          }\n        } catch (err) {\n          _didIteratorError2 = true;\n          _iteratorError2 = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n              _iterator2[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError2) {\n              throw _iteratorError2;\n            }\n          }\n        }\n\n        if (!validType) {\n          typeError = argType.map(function (type) {\n            return _this._getFnNameFromDefinition(type);\n          }).toString();\n        } // Simple type checking\n\n      } else {\n        if (!this._isArgOfType(argValue, argType)) {\n          typeError = this._getFnNameFromDefinition(argType);\n        }\n      } // Check for type error and throw an error if it occurs\n\n\n      if (typeError) {\n        if (isRequired && argValue == null || !isRequired && argValue != null) {\n          this._throwArgTypeError(typeError, argName, argValue);\n        }\n      }\n    }\n    /**\n     * Check if the given arg. value matches the given arg. type.\n     *\n     * @param  {mixed} argValue - The arg. value to check.\n     * @param  {mixed} argType - The arg. type to check the value against.\n     * @return {Boolean}\n     */\n\n  }, {\n    key: \"_isArgOfType\",\n    value: function _isArgOfType(argValue, argType) {\n      switch (argType) {\n        case String:\n          if (this._isString(argValue)) return true;\n          break;\n\n        case Number:\n          if (this._isNumber(argValue)) return true;\n          break;\n\n        case Boolean:\n          if (this._isBoolean(argValue)) return true;\n          break;\n\n        case Date:\n          if (this._isDate(argValue)) return true;\n          break;\n\n        case Array:\n          if (this._isArray(argValue)) return true;\n          break;\n\n        case Object:\n          if (this._isObject(argValue)) return true;\n          break;\n\n        default:\n          if (argValue instanceof argType) return true;\n          break;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"_getFnNameFromDefinition\",\n    value: function _getFnNameFromDefinition(fnDefinition) {\n      fnDefinition = fnDefinition.toString();\n      var fnName = fnDefinition.substring(fnDefinition.indexOf(' '), fnDefinition.indexOf('(')).trim();\n      return fnName;\n    }\n    /**\n     * Custom methods for checking argument types.\n     *\n     * @param  {mixed}  value - The value we want to check.\n     * @return {Boolean}\n     */\n\n  }, {\n    key: \"_isString\",\n    value: function _isString(value) {\n      return typeof value === 'string' || value instanceof String;\n    }\n  }, {\n    key: \"_isNumber\",\n    value: function _isNumber(value) {\n      return typeof value === 'number' && Number.isFinite(value);\n    }\n  }, {\n    key: \"_isBoolean\",\n    value: function _isBoolean(value) {\n      return typeof value === 'boolean';\n    }\n  }, {\n    key: \"_isArray\",\n    value: function _isArray(value) {\n      return value && _typeof(value) === 'object' && value.constructor === Array;\n    }\n  }, {\n    key: \"_isObject\",\n    value: function _isObject(value) {\n      return value && _typeof(value) === 'object' && value.constructor === Object;\n    }\n  }, {\n    key: \"_isDate\",\n    value: function _isDate(value) {\n      return value instanceof Date;\n    }\n    /**\n     * Used to throw an 'ArgumentError' related to failed arg. type checking.\n     *\n     * @param  {String} type - The argument expected type, as string.\n     * @param  {String} argName - The argument name.\n     * @return {void}\n     */\n\n  }, {\n    key: \"_throwArgTypeError\",\n    value: function _throwArgTypeError(type, argName, argValue) {\n      if (typeof argValue === 'string') argValue = \"'\".concat(argValue, \"'\");\n      var msg = \"[ArgumentError] Expected type(s) <\".concat(type, \"> for argument '\").concat(argName, \"' (received: \").concat(argValue, \").\");\n      console.error(msg); // throw new Error(msg)\n    }\n  }]);\n\n  return Model;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwuanM/NGFiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gIC8qKlxuICAgKiBCYXNlIGNvbnN0cnVjdG9yIG1ldGhvZCBmb3IgbW9kZWxzLiBQZXJmb3JtcyBhIHR5cGUgY2hlY2tpbmcgb24gZWFjaCBhcmd1bWVudCBwcm92aWRlZFxuICAgKiBpbiB0aGUgJ2FyZ3MnIG9iamVjdC4gRWFjaCBhcmd1bWVudCBpcyBhIGtleS12YWx1ZSBwYWlyIGNvbXBvc2VkIG9mIHRoZSBmb2xsb3dpbmcgZmllbGRzOlxuICAgKiA8YXJnTmFtZT46IFtcbiAgICogICA8YXJnVmFsdWU+LCAgICAtLT4gVGhlIHZhbHVlIHRvIGNoZWNrXG4gICAqICAgPHR5cGVUb0NoZWNrPiwgLS0+IFRoZSBwcmltaXRpdmUgdHlwZSB0byBjaGVjayB0aGUgdmFsdWUgYWdhaW5zdCxcbiAgICogICAgICAgICAgICAgICAgICAgICAgb3IgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgQXJyYXkgdHlwZSB3aXRoIGl0cyBhc3NvY2lhdGVkIHR5cGUuXG4gICAqICAgPGlzUmVxdWlyZWQ+ICAgLS0+IEEgb3B0aW9uYWwgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBhdHRyaWJ1dGUgaXMgcmVxdWlyZWRcbiAgICogXVxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGFyZ3MgLSBDaGlsZC1jbGFzcyBjb25zdHJ1Y3RvciBhcmd1bWVudHMuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjb25zdHJ1Y3RvciAoYXJncykge1xuICAgIGZvciAobGV0IGkgaW4gYXJncykge1xuICAgICAgY29uc3QgYXJnVmFsdWUgPSBhcmdzW2ldWzBdXG4gICAgICBjb25zdCBhcmdUeXBlID0gYXJnc1tpXVsxXVxuICAgICAgY29uc3QgYXJnUmVxdWlyZWQgPSAhIWFyZ3NbaV1bMl1cblxuICAgICAgLy8gUGVyZm9ybSBhdHRyaWJ1dGUgY2hlY2tpbmcgZm9yOlxuICAgICAgLy8gLSBUeXBlLWJhc2VkIGFycmF5L29iamVjdHNcbiAgICAgIGlmICh0aGlzLl9pc09iamVjdChhcmdUeXBlKSAmJiBhcmdUeXBlLmhhc093blByb3BlcnR5KCdBcnJheScpKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrQXJnUHJpbWl0aXZlVHlwZShhcmdWYWx1ZSwgQXJyYXksIGksIGFyZ1JlcXVpcmVkKVxuICAgICAgICBmb3IgKGxldCBhcmcgb2YgYXJnVmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl9jaGVja0FyZ1ByaW1pdGl2ZVR5cGUoYXJnLCBhcmdUeXBlLkFycmF5LCBpLCBhcmdSZXF1aXJlZClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0gbXVsdGktdHlwZXMgdmFsdWVzXG4gICAgICAgIC8vIC0gc2ltcGxlIHByaW1pdGl2ZSB0eXBlc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2hlY2tBcmdQcmltaXRpdmVUeXBlKGFyZ1ZhbHVlLCBhcmdUeXBlLCBpLCBhcmdSZXF1aXJlZClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlZCBieSB0aGUgY29uc3RydWN0b3IgdG8gY2hlY2sgaWYgZ2l2ZW4gYXJnLiB2YWx1ZXMgbWF0Y2ggZ2l2ZW4gYXJnLiB0eXBlcyxcbiAgICogYW5kIGV2ZW50dWFsbHkgdGhyb3cgYW4gZXJyb3IgaWYgaXQgb2NjdXJzLlxuICAgKlxuICAgKiBAcGFyYW0gIHttaXhlZH0gYXJnVmFsdWUgLSBUaGUgYXJndW1lbnQgdmFsdWUgdG8gY2hlY2suXG4gICAqIEBwYXJhbSAge21peGVkfSBhcmdUeXBlIC0gVGhlIGFyZ3VtZW50IHR5cGUgYWdhaW5zdCB3aGljaCB0aGUgY2hlY2sgd2lsbCBiZSBwZXJmb3JtZWQuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYXJnTmFtZSAtIFRoZSBhcmd1bWVudCBuYW1lLCB1c2VkIHdoZW4gdGhyb3dpbmcgYW4gZXJyb3IuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBfY2hlY2tBcmdQcmltaXRpdmVUeXBlIChhcmdWYWx1ZSwgYXJnVHlwZSwgYXJnTmFtZSwgaXNSZXF1aXJlZCkge1xuICAgIGxldCB0eXBlRXJyb3IgPSBudWxsXG5cbiAgICAvLyBNdWx0aS10eXBlIGNoZWNraW5nXG4gICAgaWYgKHRoaXMuX2lzQXJyYXkoYXJnVHlwZSkpIHtcbiAgICAgIGxldCB2YWxpZFR5cGUgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgdHlwZSBvZiBhcmdUeXBlKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0FyZ09mVHlwZShhcmdWYWx1ZSwgdHlwZSkpIHtcbiAgICAgICAgICB2YWxpZFR5cGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICAgIHR5cGVFcnJvciA9IGFyZ1R5cGVcbiAgICAgICAgICAubWFwKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Rm5OYW1lRnJvbURlZmluaXRpb24odHlwZSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICB9XG4gICAgICAvLyBTaW1wbGUgdHlwZSBjaGVja2luZ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQXJnT2ZUeXBlKGFyZ1ZhbHVlLCBhcmdUeXBlKSkge1xuICAgICAgICB0eXBlRXJyb3IgPSB0aGlzLl9nZXRGbk5hbWVGcm9tRGVmaW5pdGlvbihhcmdUeXBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciB0eXBlIGVycm9yIGFuZCB0aHJvdyBhbiBlcnJvciBpZiBpdCBvY2N1cnNcbiAgICBpZiAodHlwZUVycm9yKSB7XG4gICAgICBpZiAoKGlzUmVxdWlyZWQgJiYgYXJnVmFsdWUgPT0gbnVsbCkgfHwgKCFpc1JlcXVpcmVkICYmIGFyZ1ZhbHVlICE9IG51bGwpKSB7XG4gICAgICAgIHRoaXMuX3Rocm93QXJnVHlwZUVycm9yKHR5cGVFcnJvciwgYXJnTmFtZSwgYXJnVmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiBhcmcuIHZhbHVlIG1hdGNoZXMgdGhlIGdpdmVuIGFyZy4gdHlwZS5cbiAgICpcbiAgICogQHBhcmFtICB7bWl4ZWR9IGFyZ1ZhbHVlIC0gVGhlIGFyZy4gdmFsdWUgdG8gY2hlY2suXG4gICAqIEBwYXJhbSAge21peGVkfSBhcmdUeXBlIC0gVGhlIGFyZy4gdHlwZSB0byBjaGVjayB0aGUgdmFsdWUgYWdhaW5zdC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIF9pc0FyZ09mVHlwZSAoYXJnVmFsdWUsIGFyZ1R5cGUpIHtcbiAgICBzd2l0Y2ggKGFyZ1R5cGUpIHtcbiAgICAgIGNhc2UgU3RyaW5nOlxuICAgICAgICBpZiAodGhpcy5faXNTdHJpbmcoYXJnVmFsdWUpKSByZXR1cm4gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgIGlmICh0aGlzLl9pc051bWJlcihhcmdWYWx1ZSkpIHJldHVybiB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgIGlmICh0aGlzLl9pc0Jvb2xlYW4oYXJnVmFsdWUpKSByZXR1cm4gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBEYXRlOlxuICAgICAgICBpZiAodGhpcy5faXNEYXRlKGFyZ1ZhbHVlKSkgcmV0dXJuIHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgIGlmICh0aGlzLl9pc0FycmF5KGFyZ1ZhbHVlKSkgcmV0dXJuIHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICBpZiAodGhpcy5faXNPYmplY3QoYXJnVmFsdWUpKSByZXR1cm4gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGFyZ1ZhbHVlIGluc3RhbmNlb2YgYXJnVHlwZSkgcmV0dXJuIHRydWVcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIF9nZXRGbk5hbWVGcm9tRGVmaW5pdGlvbiAoZm5EZWZpbml0aW9uKSB7XG4gICAgZm5EZWZpbml0aW9uID0gZm5EZWZpbml0aW9uLnRvU3RyaW5nKClcbiAgICBjb25zdCBmbk5hbWUgPSBmbkRlZmluaXRpb25cbiAgICAgIC5zdWJzdHJpbmcoZm5EZWZpbml0aW9uLmluZGV4T2YoJyAnKSwgZm5EZWZpbml0aW9uLmluZGV4T2YoJygnKSlcbiAgICAgIC50cmltKClcblxuICAgIHJldHVybiBmbk5hbWVcbiAgfVxuXG4gIC8qKlxuICAgKiBDdXN0b20gbWV0aG9kcyBmb3IgY2hlY2tpbmcgYXJndW1lbnQgdHlwZXMuXG4gICAqXG4gICAqIEBwYXJhbSAge21peGVkfSAgdmFsdWUgLSBUaGUgdmFsdWUgd2Ugd2FudCB0byBjaGVjay5cbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIF9pc1N0cmluZyAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZ1xuICB9XG4gIF9pc051bWJlciAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpXG4gIH1cbiAgX2lzQm9vbGVhbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgfVxuICBfaXNBcnJheSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXlcbiAgfVxuICBfaXNPYmplY3QgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdFxuICB9XG4gIF9pc0RhdGUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gdGhyb3cgYW4gJ0FyZ3VtZW50RXJyb3InIHJlbGF0ZWQgdG8gZmFpbGVkIGFyZy4gdHlwZSBjaGVja2luZy5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSB0eXBlIC0gVGhlIGFyZ3VtZW50IGV4cGVjdGVkIHR5cGUsIGFzIHN0cmluZy5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBhcmdOYW1lIC0gVGhlIGFyZ3VtZW50IG5hbWUuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBfdGhyb3dBcmdUeXBlRXJyb3IgKHR5cGUsIGFyZ05hbWUsIGFyZ1ZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBhcmdWYWx1ZSA9PT0gJ3N0cmluZycpIGFyZ1ZhbHVlID0gYCcke2FyZ1ZhbHVlfSdgXG4gICAgY29uc3QgbXNnID0gYFtBcmd1bWVudEVycm9yXSBFeHBlY3RlZCB0eXBlKHMpIDwke3R5cGV9PiBmb3IgYXJndW1lbnQgJyR7YXJnTmFtZX0nIChyZWNlaXZlZDogJHthcmdWYWx1ZX0pLmBcbiAgICBjb25zb2xlLmVycm9yKG1zZylcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IobXNnKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXJCQTtBQUNBO0FBdUJBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/model.js\n");

/***/ })

/******/ });