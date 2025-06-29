class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 1;
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }
  deleteUser(id) {
    delete this.storage[id];
  }

  searchUser(email) {
    return Object.values(this.storage).filter((user) => user.email == email);
  }
}

module.exports = new UsersStorage();
