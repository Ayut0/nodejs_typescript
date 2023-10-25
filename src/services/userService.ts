import { User } from "../models/userModel";

export interface UserService {
  createUser(user: User): User;
  getUserById(id: number): User | undefined;
  getAllUsers(): User[];
}

// Define a class that implements the UserService interface
// It's required to provide implementations for all the methods specified in the interface
// Responsible for managing the data
export class UserServiceImpl implements UserService {
  private users: User[] = [];

  createUser(user: User): User {
    user.id = this.users.length + 1;
    this.users.push(user);
    return user;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
