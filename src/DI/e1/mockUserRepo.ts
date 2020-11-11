import { IUserRepo } from "./userRepo";
import { User } from "./user";

export class MockUserRepo implements IUserRepo {
  private users: User[] = [];

  constructor() {}

  async getUsers(): Promise<User[]> {
    return this.users;
  }
}
