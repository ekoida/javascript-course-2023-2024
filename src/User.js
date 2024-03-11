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

    return User.all.filter((user) => user.age >= minAge && user.age <= maxAge);
  }
  constructor(name, age, online) {
    this.name = name;
    this.age = age;
    this.online = online;
    this.avatar = avatar;
    this.sentMessages = [];
    this.receivedMessages = [];
    this.friends = [];
    User.all.push(this);
  }
  findFriendByName(name) {
    return this.friends.find((friend) => friend.name === name);
  }

  addFriend(user) {
    const isUserAlreadyAdded = this.friends.some((friend) => friend.name === user.name);
    if (!isUserAlreadyAdded) {
      this.friends.push(user);
      user.friends.push(this);
    }
  }

  removeFriend(user) {
    const userIndex = this.friends.findIndex((friend) => friend.name === user.name);
    const curentUserIndex = user.friends.findIndex((friend) => friend.name === this.name);
    if (userIndex !== -1) {
      this.friends.splice(userIndex, 1);
    }
    if (curentUserIndex !== -1) {
      user.friends.splice(curentUserIndex, 1);
    }
  }

  sendMessage(messageContent, user) {
    let message = new Message(messageContent, this, user, null);
    this.sentMessages.push(message);
    user.receivedMessages.push(message);
  }ы

  render() {
    console.log(`
  [${this.name}] ${this.online ? "●" : "○"}
  `);
  }
}
