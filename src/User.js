class User {
  static all = [];
  static findByName(name) {
    return User.all.find((user) => user.name === name);
  }

  static findByAgeRange(minAge, maxAge) {
    // let usersInRange = [];
    if (!minAge) {
      minAge = 0;
    }
    if (!maxAge) {
      maxAge = Infinity;
    }
    // for (let i = 0; i <= User.all.length - 1; i++) {
    //   if (User.all[i].age >= minAge && User.all[i].age <= maxAge) {
    //     usersInRange.push(User.all[i]);
    //   }
    // }

    return User.all.filter((user) => user.age >= minAge && user.age <= maxAge);
  }
  constructor(name, age, online) {
    this.name = name;
    this.age = age;
    this.online = online;
    User.all.push(this);
  }

  render() {
    console.log(`
  [${this.name}] ${this.online ? "●" : "○"}
  `);
  }
}
