"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceImpl = void 0;
// Define a class that implements the UserService interface
// It's required to provide implementations for all the methods specified in the interface
// Responsible for managing the data
class UserServiceImpl {
    constructor() {
        this.users = [];
    }
    createUser(user) {
        user.id = this.users.length + 1;
        this.users.push(user);
        return user;
    }
    getUserById(id) {
        return this.users.find((user) => user.id === id);
    }
}
exports.UserServiceImpl = UserServiceImpl;
