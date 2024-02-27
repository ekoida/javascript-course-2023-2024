class User {
  constructor(name, age, online) {
    this.name = name;
    this.age = age;
    this.online = online;
  }

  render() {
    console.log(`
    [${this.name}] ${this.online ? "●" : "○"}
    `);
  }
}

let user_1 = new User("Johni", 20, true);
let user_2 = new User("Marry", 21, false);
let user_3 = new User("Peter", 22, true);

class Message {
  constructor(content, status, from_user, to_user) {
    (this.content = content), (this.status = status), (this.from_user = from_user), (this.to_user = to_user);
  }

  render() {
    console.log(`
    ${this.from_user.name} to ${this.to_user.name}: ${this.content}
    `);
  }
}

let message_1 = new Message("Hi, how are you?", "sent", user_1, user_2);
let message_2 = new Message("I'm fine", "pending", user_2, user_1)
