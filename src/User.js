class User {
  static all = []

  constructor(name, age, online) {
    this.name = name;
    this.age = age;
    this.online = online;
    User.all.push(this)
  }

  render() {
    console.log(`
    [${this.name}] ${this.online ? "●" : "○"}
    `);
  }
}
