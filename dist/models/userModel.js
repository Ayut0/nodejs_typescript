"use strict";
// Usage
// const user1 = new User(1, 'John', 'john@example.com', '123456', true);
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password, isAdmin) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}
exports.User = User;
