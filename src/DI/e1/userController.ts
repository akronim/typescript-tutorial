import { MockUserRepo } from "./mockUserRepo";
import { IUserRepo } from "./userRepo"; // Good!

/**
 * @class UserController
 * @desc Responsible for handling API requests for the
 * /user route.
 **/

export class UserController {
  private userRepo: IUserRepo; // like here

  constructor(userRepo: IUserRepo) {
    // and here
    this.userRepo = userRepo;
  }

  async handleGetUsers(): Promise<void> {
    const users = await this.userRepo.getUsers();
    console.log({ users });
  }
}

const userController = new UserController(new MockUserRepo());

userController.handleGetUsers();
