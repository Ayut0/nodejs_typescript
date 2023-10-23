"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useController_1 = require("../controllers/useController");
const userService_1 = require("../services/userService");
// IoC Container (Inversion of Control)
// Inversion of Control is a principle in software engineering by which the control of objects or portions of a program is transferred to a container or framework.
// Responsible for registering and resolving dependencies
class Container {
    constructor() {
        // The instances property is an object that stores registered instances.
        this.instances = {};
    }
    // Method used to register instances with the container.
    // Args1: key as a string identifier
    // Args2: instance the object to be registered
    register(key, instance) {
        this.instances[key] = instance;
    }
    // Method used to retrieve instances from the container
    // Returns the registered instance associated with that key
    resolve(key) {
        return this.instances[key];
    }
}
const container = new Container();
// Register instances
container.register("userService", new userService_1.UserServiceImpl());
// To register userController, it requires an instance of the UserService.
// so using resolve method in order to retrieve the previously registered UserService instance
// and inject it into the UserController
// This process allows the UserController to have access to the UserService to manage data
container.register("userController", new useController_1.UserController(container.resolve("userService")));
exports.default = container;
