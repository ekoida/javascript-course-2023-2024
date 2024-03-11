class Message {
  static all = [];
  constructor(content, status, from_user, to_user) {
    (this.content = content), (this.status = status), (this.from_user = from_user), (this.to_user = to_user);
    Message.all.push(this);
  }

  render() {
    console.log(`
    ${this.from_user.name} to ${this.to_user.name}: ${this.content}
    `);
  }
}

