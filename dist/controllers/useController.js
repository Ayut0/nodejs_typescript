"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
// constructor runs when the class is instantiated
// Responsible for handling the requests and responses
class UserController {
    // Dependency injection, where the userService is injected into the  UserController
    // If the constructor's body is empty, this means that there a re no statements or logic inside it
    // This is a shorthand way of defining a constructor
    // That code is equivalent to the following:
    // export class UserController{
    //     private userService: UserService;
    //     constructor(userService: UserService){
    //         this.userService = userService;
    //     }
    // }
    constructor(userService) {
        this.userService = userService;
    }
    createUser(req, res) {
        const user = req.body;
        const newUser = this.userService.createUser(user);
        res.status(201).json(newUser);
    }
    getUser(req, res) {
        const userId = parseInt(req.params.id, 10);
        const user = this.userService.getUserById(userId);
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    }
}
exports.UserController = UserController;
