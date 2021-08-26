# es6-model [NOT MAINTAINED] [![version][version-badge]][CHANGELOG]

**Disclaimer**: _As I currently have other packages to maintain, and other hobbies that take me time,
I cannot and don't want to maintain this tool for the moment.
I will certainly take the work back on this project in the future, but no date is planned for this yet._

ES6-model is a simple base-class helper designed for data-models in JavaScript.

## Prerequisites

As this package use the `class` ES6-based syntax, your app needs to integrate
an ES6-compatible transpiler like [Babel](https://github.com/babel/babel).  
*This guide assumes that you are using this transpiler so some instructions will refer to this specific package.  
Please refer to the corresponding package documentation if you are using another one.*

In addition to the Babel package, you'll need to install this plugin to make your models working:
[@babel/plugin-proposal-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties).

*Note: This package is currently needed because the "class properties" concept is not an official
ECMA standard yet. This repo will be updated when the standard will become available.*

## Installation

**npm**

```shell
npm install es6-model --save-dev
```

**yarn**

```shell
yarn add -d es6-model
```

## Usage

Import es6-model in your code where you want to define your app's models, then
use it as a base class.

```javascript
// Import es6-model
import Model from 'es6-model'

// Extends the base class to create your own
class Pet extends Model {
  // ...
}

// You can also extend your own model-based classes
class Cat extends Pet {
  // ...
}

```

Declare your class properties, then in your `constructor` method, pass them to the `super`
magic method call before assigning them.

```javascript
class Pet extends Model {
  // Declare your class properties
  name = null
  age = null

  constructor (name, age) {
    super({
      name: [name, String],
      age: [age, Number]
    })

    this.name = name
    this.age = age
  }
}
```
By calling the **es6-model** constructor method with `super()`, several type & value checkings
will be performed on your constructor arguments. This will force your model data to be strictly
the types you define.

## Documentation

Your constructor arguments **must** be passed to the `super()` method through an object, with each field
representing an argument with its associated constraints:

```javascript
propName: [propValue, propType, propRequired]
```

#### propName
Name of the property you want to assign (same as the corresponding argument name).

#### propValue
The property value, directly retrieved from the constructor arguments.

#### propType
The type you want to use for the argument.

#### propRequired
A boolean indicating if the property is required or not.  
*A required property tells the Base Model to check if the value is different from `null` and
`undefined`.*

```javascript
constructor (name, children) {
  super({
    name: [name, String, true], // required property
    children: [children, Array] // optional property
  })
}
```

You can also provide a custom object type.

```javascript
class Pet extends Model {
  // ...
}
```
```javascript
constructor (pet) {
  super({
    // Declare 'pet' prop to be a <Pet> object
    pet: [pet, Pet, true]
  })
}
```

Sometimes you want to use an array as value, but what if you want to restrict your array to a specific type?

```javascript
class People extends Model {
  // ...
}
```
```javascript
constructor (children) {
  super({
    // Declare 'children' prop to be an Array of <People> objects
    children: [children, { Array: People }, true]
  })
}
```

In some cases, we also want to accept multiple types for a given property.

```javascript
constructor (id) {
  super({
    // Declare 'id' prop to be either a Number or a String
    id: [id, [Number, String], true]
  })
}
```

## Examples

You can see a demo of this package by running these commands in the project root:

```shell
yarn install
yarn start
```

Go to `http://localhost:<PORT>/examples/`, and select an example directory.


## License

[MIT](https://opensource.org/licenses/MIT)

[CHANGELOG]: ./CHANGELOG.md
[version-badge]: https://img.shields.io/badge/version-1.0.2-blue.svg
