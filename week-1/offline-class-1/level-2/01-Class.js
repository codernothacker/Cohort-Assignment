
class Animal {
  constructor(name, legCount) {
    this.name = name
    console.log(name)
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}


