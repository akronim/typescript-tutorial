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

  async handleGetUsers(req: any, res: any): Promise<void> {
    const users = await this.userRepo.getUsers();
    return res.status(200).json({ users });
  }
}
