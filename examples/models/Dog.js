import Model from  '@/model'

export default class Dog extends Model {
  name = 'Brutus'
  age = 3

  constructor(name, age) {
    super({
      name: [name, String, true],
      age: [age, Number, true]
    })

    this.name = name
    this.age = age
  }
}
