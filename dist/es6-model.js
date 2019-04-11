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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! @/model */ \"./src/model.js\")[\"default\"];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ0AvbW9kZWwnKS5kZWZhdWx0XG4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Model =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Base constructor method for models. Performs a type checking on each argument provided\n   * in the 'args' object. Each argument is a key-value pair composed of the following fields:\n   * <argName>: [\n   *   <argValue>,    --> The value to check\n   *   <typeToCheck>, --> The primitive type to check the value against,\n   *                      or an array containing the Array type with its associated type.\n   *   <isRequired>   --> A optional boolean indicating if the attribute is required\n   * ]\n   *\n   * @param  {Object} args - Child-class constructor arguments.\n   * @return {void}\n   */\n  function Model(args) {\n    _classCallCheck(this, Model);\n\n    for (var i in args) {\n      var argValue = args[i][0];\n      var argType = args[i][1];\n      var argRequired = !!args[i][2]; // Perform attribute checking for:\n      // - Type-based array/objects\n\n      if (this._isObject(argType) && argType.hasOwnProperty('Array')) {\n        this._checkArgPrimitiveType(argValue, Array, i, argRequired);\n\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = argValue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var arg = _step.value;\n\n            this._checkArgPrimitiveType(arg, argType.Array, i, argRequired);\n          } // - multi-types values\n          // - simple primitive types\n\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n              _iterator[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n      } else {\n        this._checkArgPrimitiveType(argValue, argType, i, argRequired);\n      }\n    }\n  }\n  /**\n   * Used by the constructor to check if given arg. values match given arg. types,\n   * and eventually throw an error if it occurs.\n   *\n   * @param  {mixed} argValue - The argument value to check.\n   * @param  {mixed} argType - The argument type against which the check will be performed.\n   * @param  {String} argName - The argument name, used when throwing an error.\n   * @return {Boolean}\n   */\n\n\n  _createClass(Model, [{\n    key: \"_checkArgPrimitiveType\",\n    value: function _checkArgPrimitiveType(argValue, argType, argName, isRequired) {\n      var _this = this;\n\n      var typeError = null; // Multi-type checking\n\n      if (this._isArray(argType)) {\n        var validType = false;\n        var _iteratorNormalCompletion2 = true;\n        var _didIteratorError2 = false;\n        var _iteratorError2 = undefined;\n\n        try {\n          for (var _iterator2 = argType[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n            var type = _step2.value;\n\n            if (this._isArgOfType(argValue, type)) {\n              validType = true;\n            }\n          }\n        } catch (err) {\n          _didIteratorError2 = true;\n          _iteratorError2 = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n              _iterator2[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError2) {\n              throw _iteratorError2;\n            }\n          }\n        }\n\n        if (!validType) {\n          typeError = argType.map(function (type) {\n            return _this._getFnNameFromDefinition(type);\n          }).toString();\n        } // Simple type checking\n\n      } else {\n        if (!this._isArgOfType(argValue, argType)) {\n          typeError = this._getFnNameFromDefinition(argType);\n        }\n      } // Check for type error and throw an error if it occurs\n\n\n      if (typeError) {\n        if (isRequired && argValue === null || !isRequired && argValue !== null) {\n          this._throwArgTypeError(typeError, argName, argValue);\n        }\n      }\n    }\n    /**\n     * Check if the given arg. value matches the given arg. type.\n     *\n     * @param  {mixed} argValue - The arg. value to check.\n     * @param  {mixed} argType - The arg. type to check the value against.\n     * @return {Boolean}\n     */\n\n  }, {\n    key: \"_isArgOfType\",\n    value: function _isArgOfType(argValue, argType) {\n      switch (argType) {\n        case String:\n          if (this._isString(argValue)) return true;\n          break;\n\n        case Number:\n          if (this._isNumber(argValue)) return true;\n          break;\n\n        case Boolean:\n          if (this._isBoolean(argValue)) return true;\n          break;\n\n        case Date:\n          if (this._isDate(argValue)) return true;\n          break;\n\n        case Array:\n          if (this._isArray(argValue)) return true;\n          break;\n\n        case Object:\n          if (this._isObject(argValue)) return true;\n          break;\n\n        default:\n          if (argValue instanceof argType) return true;\n          break;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"_getFnNameFromDefinition\",\n    value: function _getFnNameFromDefinition(fnDefinition) {\n      fnDefinition = fnDefinition.toString();\n      var fnName = fnDefinition.substring(fnDefinition.indexOf(' '), fnDefinition.indexOf('(')).trim();\n      return fnName;\n    }\n    /**\n     * Custom methods for checking argument types.\n     *\n     * @param  {mixed}  value - The value we want to check.\n     * @return {Boolean}\n     */\n\n  }, {\n    key: \"_isString\",\n    value: function _isString(value) {\n      return typeof value === 'string' || value instanceof String;\n    }\n  }, {\n    key: \"_isNumber\",\n    value: function _isNumber(value) {\n      return typeof value === 'number' && Number.isFinite(value);\n    }\n  }, {\n    key: \"_isBoolean\",\n    value: function _isBoolean(value) {\n      return typeof value === 'boolean';\n    }\n  }, {\n    key: \"_isArray\",\n    value: function _isArray(value) {\n      return value && _typeof(value) === 'object' && value.constructor === Array;\n    }\n  }, {\n    key: \"_isObject\",\n    value: function _isObject(value) {\n      return value && _typeof(value) === 'object' && value.constructor === Object;\n    }\n  }, {\n    key: \"_isDate\",\n    value: function _isDate(value) {\n      return value instanceof Date;\n    }\n    /**\n     * Used to throw an 'ArgumentError' related to failed arg. type checking.\n     *\n     * @param  {String} type - The argument expected type, as string.\n     * @param  {String} argName - The argument name.\n     * @return {void}\n     */\n\n  }, {\n    key: \"_throwArgTypeError\",\n    value: function _throwArgTypeError(type, argName, argValue) {\n      if (typeof argValue === 'string') argValue = \"'\".concat(argValue, \"'\");\n      var msg = \"[ArgumentError] Expected type(s) <\".concat(type, \"> for argument '\").concat(argName, \"' (received: \").concat(argValue, \").\");\n      console.error(msg);\n      throw new Error(msg);\n    }\n  }]);\n\n  return Model;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwuanM/NGFiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gIC8qKlxuICAgKiBCYXNlIGNvbnN0cnVjdG9yIG1ldGhvZCBmb3IgbW9kZWxzLiBQZXJmb3JtcyBhIHR5cGUgY2hlY2tpbmcgb24gZWFjaCBhcmd1bWVudCBwcm92aWRlZFxuICAgKiBpbiB0aGUgJ2FyZ3MnIG9iamVjdC4gRWFjaCBhcmd1bWVudCBpcyBhIGtleS12YWx1ZSBwYWlyIGNvbXBvc2VkIG9mIHRoZSBmb2xsb3dpbmcgZmllbGRzOlxuICAgKiA8YXJnTmFtZT46IFtcbiAgICogICA8YXJnVmFsdWU+LCAgICAtLT4gVGhlIHZhbHVlIHRvIGNoZWNrXG4gICAqICAgPHR5cGVUb0NoZWNrPiwgLS0+IFRoZSBwcmltaXRpdmUgdHlwZSB0byBjaGVjayB0aGUgdmFsdWUgYWdhaW5zdCxcbiAgICogICAgICAgICAgICAgICAgICAgICAgb3IgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgQXJyYXkgdHlwZSB3aXRoIGl0cyBhc3NvY2lhdGVkIHR5cGUuXG4gICAqICAgPGlzUmVxdWlyZWQ+ICAgLS0+IEEgb3B0aW9uYWwgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBhdHRyaWJ1dGUgaXMgcmVxdWlyZWRcbiAgICogXVxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGFyZ3MgLSBDaGlsZC1jbGFzcyBjb25zdHJ1Y3RvciBhcmd1bWVudHMuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjb25zdHJ1Y3RvciAoYXJncykge1xuICAgIGZvciAobGV0IGkgaW4gYXJncykge1xuICAgICAgY29uc3QgYXJnVmFsdWUgPSBhcmdzW2ldWzBdXG4gICAgICBjb25zdCBhcmdUeXBlID0gYXJnc1tpXVsxXVxuICAgICAgY29uc3QgYXJnUmVxdWlyZWQgPSAhIWFyZ3NbaV1bMl1cblxuICAgICAgLy8gUGVyZm9ybSBhdHRyaWJ1dGUgY2hlY2tpbmcgZm9yOlxuICAgICAgLy8gLSBUeXBlLWJhc2VkIGFycmF5L29iamVjdHNcbiAgICAgIGlmICh0aGlzLl9pc09iamVjdChhcmdUeXBlKSAmJiBhcmdUeXBlLmhhc093blByb3BlcnR5KCdBcnJheScpKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrQXJnUHJpbWl0aXZlVHlwZShhcmdWYWx1ZSwgQXJyYXksIGksIGFyZ1JlcXVpcmVkKVxuICAgICAgICBmb3IgKGxldCBhcmcgb2YgYXJnVmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl9jaGVja0FyZ1ByaW1pdGl2ZVR5cGUoYXJnLCBhcmdUeXBlLkFycmF5LCBpLCBhcmdSZXF1aXJlZClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0gbXVsdGktdHlwZXMgdmFsdWVzXG4gICAgICAgIC8vIC0gc2ltcGxlIHByaW1pdGl2ZSB0eXBlc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2hlY2tBcmdQcmltaXRpdmVUeXBlKGFyZ1ZhbHVlLCBhcmdUeXBlLCBpLCBhcmdSZXF1aXJlZClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlZCBieSB0aGUgY29uc3RydWN0b3IgdG8gY2hlY2sgaWYgZ2l2ZW4gYXJnLiB2YWx1ZXMgbWF0Y2ggZ2l2ZW4gYXJnLiB0eXBlcyxcbiAgICogYW5kIGV2ZW50dWFsbHkgdGhyb3cgYW4gZXJyb3IgaWYgaXQgb2NjdXJzLlxuICAgKlxuICAgKiBAcGFyYW0gIHttaXhlZH0gYXJnVmFsdWUgLSBUaGUgYXJndW1lbnQgdmFsdWUgdG8gY2hlY2suXG4gICAqIEBwYXJhbSAge21peGVkfSBhcmdUeXBlIC0gVGhlIGFyZ3VtZW50IHR5cGUgYWdhaW5zdCB3aGljaCB0aGUgY2hlY2sgd2lsbCBiZSBwZXJmb3JtZWQuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYXJnTmFtZSAtIFRoZSBhcmd1bWVudCBuYW1lLCB1c2VkIHdoZW4gdGhyb3dpbmcgYW4gZXJyb3IuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBfY2hlY2tBcmdQcmltaXRpdmVUeXBlIChhcmdWYWx1ZSwgYXJnVHlwZSwgYXJnTmFtZSwgaXNSZXF1aXJlZCkge1xuICAgIGxldCB0eXBlRXJyb3IgPSBudWxsXG5cbiAgICAvLyBNdWx0aS10eXBlIGNoZWNraW5nXG4gICAgaWYgKHRoaXMuX2lzQXJyYXkoYXJnVHlwZSkpIHtcbiAgICAgIGxldCB2YWxpZFR5cGUgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgdHlwZSBvZiBhcmdUeXBlKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0FyZ09mVHlwZShhcmdWYWx1ZSwgdHlwZSkpIHtcbiAgICAgICAgICB2YWxpZFR5cGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICAgIHR5cGVFcnJvciA9IGFyZ1R5cGVcbiAgICAgICAgICAubWFwKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Rm5OYW1lRnJvbURlZmluaXRpb24odHlwZSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICB9XG4gICAgICAvLyBTaW1wbGUgdHlwZSBjaGVja2luZ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQXJnT2ZUeXBlKGFyZ1ZhbHVlLCBhcmdUeXBlKSkge1xuICAgICAgICB0eXBlRXJyb3IgPSB0aGlzLl9nZXRGbk5hbWVGcm9tRGVmaW5pdGlvbihhcmdUeXBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciB0eXBlIGVycm9yIGFuZCB0aHJvdyBhbiBlcnJvciBpZiBpdCBvY2N1cnNcbiAgICBpZiAodHlwZUVycm9yKSB7XG4gICAgICBpZiAoKGlzUmVxdWlyZWQgJiYgYXJnVmFsdWUgPT09IG51bGwpIHx8ICghaXNSZXF1aXJlZCAmJiBhcmdWYWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dBcmdUeXBlRXJyb3IodHlwZUVycm9yLCBhcmdOYW1lLCBhcmdWYWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIGFyZy4gdmFsdWUgbWF0Y2hlcyB0aGUgZ2l2ZW4gYXJnLiB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gIHttaXhlZH0gYXJnVmFsdWUgLSBUaGUgYXJnLiB2YWx1ZSB0byBjaGVjay5cbiAgICogQHBhcmFtICB7bWl4ZWR9IGFyZ1R5cGUgLSBUaGUgYXJnLiB0eXBlIHRvIGNoZWNrIHRoZSB2YWx1ZSBhZ2FpbnN0LlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgX2lzQXJnT2ZUeXBlIChhcmdWYWx1ZSwgYXJnVHlwZSkge1xuICAgIHN3aXRjaCAoYXJnVHlwZSkge1xuICAgICAgY2FzZSBTdHJpbmc6XG4gICAgICAgIGlmICh0aGlzLl9pc1N0cmluZyhhcmdWYWx1ZSkpIHJldHVybiB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIE51bWJlcjpcbiAgICAgICAgaWYgKHRoaXMuX2lzTnVtYmVyKGFyZ1ZhbHVlKSkgcmV0dXJuIHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgaWYgKHRoaXMuX2lzQm9vbGVhbihhcmdWYWx1ZSkpIHJldHVybiB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIERhdGU6XG4gICAgICAgIGlmICh0aGlzLl9pc0RhdGUoYXJnVmFsdWUpKSByZXR1cm4gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgaWYgKHRoaXMuX2lzQXJyYXkoYXJnVmFsdWUpKSByZXR1cm4gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgIGlmICh0aGlzLl9pc09iamVjdChhcmdWYWx1ZSkpIHJldHVybiB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoYXJnVmFsdWUgaW5zdGFuY2VvZiBhcmdUeXBlKSByZXR1cm4gdHJ1ZVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgX2dldEZuTmFtZUZyb21EZWZpbml0aW9uIChmbkRlZmluaXRpb24pIHtcbiAgICBmbkRlZmluaXRpb24gPSBmbkRlZmluaXRpb24udG9TdHJpbmcoKVxuICAgIGNvbnN0IGZuTmFtZSA9IGZuRGVmaW5pdGlvblxuICAgICAgLnN1YnN0cmluZyhmbkRlZmluaXRpb24uaW5kZXhPZignICcpLCBmbkRlZmluaXRpb24uaW5kZXhPZignKCcpKVxuICAgICAgLnRyaW0oKVxuXG4gICAgcmV0dXJuIGZuTmFtZVxuICB9XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBtZXRob2RzIGZvciBjaGVja2luZyBhcmd1bWVudCB0eXBlcy5cbiAgICpcbiAgICogQHBhcmFtICB7bWl4ZWR9ICB2YWx1ZSAtIFRoZSB2YWx1ZSB3ZSB3YW50IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgX2lzU3RyaW5nICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nXG4gIH1cbiAgX2lzTnVtYmVyICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSlcbiAgfVxuICBfaXNCb29sZWFuICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xuICB9XG4gIF9pc0FycmF5ICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBBcnJheVxuICB9XG4gIF9pc09iamVjdCAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0XG4gIH1cbiAgX2lzRGF0ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlXG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byB0aHJvdyBhbiAnQXJndW1lbnRFcnJvcicgcmVsYXRlZCB0byBmYWlsZWQgYXJnLiB0eXBlIGNoZWNraW5nLlxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGUgLSBUaGUgYXJndW1lbnQgZXhwZWN0ZWQgdHlwZSwgYXMgc3RyaW5nLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGFyZ05hbWUgLSBUaGUgYXJndW1lbnQgbmFtZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIF90aHJvd0FyZ1R5cGVFcnJvciAodHlwZSwgYXJnTmFtZSwgYXJnVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGFyZ1ZhbHVlID09PSAnc3RyaW5nJykgYXJnVmFsdWUgPSBgJyR7YXJnVmFsdWV9J2BcbiAgICBjb25zdCBtc2cgPSBgW0FyZ3VtZW50RXJyb3JdIEV4cGVjdGVkIHR5cGUocykgPCR7dHlwZX0+IGZvciBhcmd1bWVudCAnJHthcmdOYW1lfScgKHJlY2VpdmVkOiAke2FyZ1ZhbHVlfSkuYFxuICAgIGNvbnNvbGUuZXJyb3IobXNnKVxuICAgIHRocm93IG5ldyBFcnJvcihtc2cpXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFDQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBckJBO0FBQ0E7QUF1QkE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/model.js\n");

/***/ })

/******/ });