import { UserController } from "../controllers/useController";
import { type UserService, UserServiceImpl } from "../services/userService";

// IoC Container (Inversion of Control)
// Inversion of Control is a principle in software engineering by which the control of objects or portions of a program is transferred to a container or framework.
// Responsible for registering and resolving dependencies
class Container {
  // The instances property is an object that stores registered instances.
  private instances: { [key: string]: any } = {};

  // Method used to register instances with the container.
  // Args1: key as a string identifier
  // Args2: instance the object to be registered
  register(key: string, instance: any): void {
    this.instances[key] = instance;
  }

  // Method used to retrieve instances from the container
  // Returns the registered instance associated with that key
  resolve<T>(key: string): T {
    return this.instances[key];
  }
}

const container = new Container();

// Register instances
container.register("userService", new UserServiceImpl());

// To register userController, it requires an instance of the UserService.
// so using resolve method in order to retrieve the previously registered UserService instance
// and inject it into the UserController
// This process allows the UserController to have access to the UserService to manage data
container.register(
  "userController",
  new UserController(container.resolve<UserService>("userService"))
);

export default container;
