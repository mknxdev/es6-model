export default class Model {
  /**
   * Base constructor method for models. Performs a type checking on each argument provided
   * in the 'args' object. Each argument is a key-value pair composed of the following fields:
   * <argName>: [
   *   <argValue>,    --> The value to check
   *   <typeToCheck>, --> The primitive type to check the value against,
   *                      or an array containing the Array type with its associated type.
   *   <isRequired>   --> A optional boolean indicating if the attribute is required
   * ]
   *
   * @param  {Object} args - Child-class constructor arguments.
   * @return {void}
   */
  constructor (args) {
    for (let i in args) {
      const argValue = args[i][0]
      const argType = args[i][1]
      const argRequired = !!args[i][2]

      // Perform attribute checking for:
      // - Type-based array/objects
      if (this._isObject(argType) && argType.hasOwnProperty('Array')) {
        this._checkArgPrimitiveType(argValue, Array, i, argRequired)
        for (let arg of argValue) {
          this._checkArgPrimitiveType(arg, argType.Array, i, argRequired)
        }

        // - multi-types values
        // - simple primitive types
      } else {
        this._checkArgPrimitiveType(argValue, argType, i, argRequired)
      }
    }
  }

  /**
   * Used by the constructor to check if given arg. values match given arg. types,
   * and eventually throw an error if it occurs.
   *
   * @param  {mixed} argValue - The argument value to check.
   * @param  {mixed} argType - The argument type against which the check will be performed.
   * @param  {String} argName - The argument name, used when throwing an error.
   * @return {Boolean}
   */
  _checkArgPrimitiveType (argValue, argType, argName, isRequired) {
    let typeError = null

    // Multi-type checking
    if (this._isArray(argType)) {
      let validType = false
      for (let type of argType) {
        if (this._isArgOfType(argValue, type)) {
          validType = true
        }
      }
      if (!validType) {
        typeError = argType
          .map((type) => {
            return this._getFnNameFromDefinition(type)
          })
          .toString()
      }
      // Simple type checking
    } else {
      if (!this._isArgOfType(argValue, argType)) {
        typeError = this._getFnNameFromDefinition(argType)
      }
    }

    // Check for type error and throw an error if it occurs
    if (typeError) {
      if ((isRequired && argValue == null) || (!isRequired && argValue != null)) {
        this._throwArgTypeError(typeError, argName, argValue)
      }
    }
  }

  /**
   * Check if the given arg. value matches the given arg. type.
   *
   * @param  {mixed} argValue - The arg. value to check.
   * @param  {mixed} argType - The arg. type to check the value against.
   * @return {Boolean}
   */
  _isArgOfType (argValue, argType) {
    switch (argType) {
      case String:
        if (this._isString(argValue)) return true
        break
      case Number:
        if (this._isNumber(argValue)) return true
        break
      case Boolean:
        if (this._isBoolean(argValue)) return true
        break
      case Date:
        if (this._isDate(argValue)) return true
        break
      case Array:
        if (this._isArray(argValue)) return true
        break
      case Object:
        if (this._isObject(argValue)) return true
        break
      default:
        if (argValue instanceof argType) return true
        break
    }

    return false
  }

  _getFnNameFromDefinition (fnDefinition) {
    fnDefinition = fnDefinition.toString()
    const fnName = fnDefinition
      .substring(fnDefinition.indexOf(' '), fnDefinition.indexOf('('))
      .trim()

    return fnName
  }

  /**
   * Custom methods for checking argument types.
   *
   * @param  {mixed}  value - The value we want to check.
   * @return {Boolean}
   */
  _isString (value) {
    return typeof value === 'string' || value instanceof String
  }
  _isNumber (value) {
    return typeof value === 'number' && Number.isFinite(value)
  }
  _isBoolean (value) {
    return typeof value === 'boolean'
  }
  _isArray (value) {
    return value && typeof value === 'object' && value.constructor === Array
  }
  _isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object
  }
  _isDate (value) {
    return value instanceof Date
  }

  /**
   * Used to throw an 'ArgumentError' related to failed arg. type checking.
   *
   * @param  {String} type - The argument expected type, as string.
   * @param  {String} argName - The argument name.
   * @return {void}
   */
  _throwArgTypeError (type, argName, argValue) {
    if (typeof argValue === 'string') argValue = `'${argValue}'`
    const msg = `[ArgumentError] Expected type(s) <${type}> for argument '${argName}' (received: ${argValue}).`
    console.error(msg)
    // throw new Error(msg)
  }
}
