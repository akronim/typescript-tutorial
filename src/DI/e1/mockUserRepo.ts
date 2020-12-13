import { IUserRepo } from "./userRepo";
import { User } from "./user";

export class MockUserRepo implements IUserRepo {
  private users: User[] = [
    { id: 1, firstName: "Joe", lastName: "Smith", age: 23 },
    { id: 2, firstName: "Ann", lastName: "Smith", age: 22 },
  ];

  constructor() {}

  async getUsers(): Promise<User[]> {
    return this.users;
  }
}
