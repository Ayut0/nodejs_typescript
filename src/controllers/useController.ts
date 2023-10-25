import { Request, Response } from "express";
import { UserService } from "../services/userService";

// Of course, you can define the interfaces for each request and response
interface CreateUserRequest{
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

interface GetUserResponse{
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

// constructor runs when the class is instantiated
// Responsible for handling the requests and responses
export class UserController {
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
  constructor(private userService: UserService) {}

  createUser(req: Request, res: Response): void {
    const user = req.body;
    const newUser = this.userService.createUser(user);
    res.status(201).json(newUser);
  }

  getUser(req: Request, res: Response): void {
    const userId = parseInt(req.params.id, 10);
    const user = this.userService.getUserById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  }

  getAllUsers(req: Request, res: Response): void{
    const allUsers = this.userService.getAllUsers();
    res.json(allUsers);
  }
}
