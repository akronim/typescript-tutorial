import { User } from "./user";

/**
 * @interface IUserRepo
 * @desc Responsible for pulling users from persistence.
 **/

export interface IUserRepo {
  // Exported
  getUsers(): Promise<User[]>;
}

/**
 * @class UserRepo
 * @desc Responsible for pulling users from persistence.
 **/

class UserRepo implements IUserRepo {
  // Not exported
  constructor() {}

  getUsers(): Promise<User[]> {
    let users: User[] = [
      { id: 1, firstName: "Joe", lastName: "Smith", age: 23 },
      { id: 2, firstName: "Ann", lastName: "Smith", age: 22 },
    ];

    const promise: Promise<User[]> = new Promise((resolve, reject) => {
      resolve(users);
    });

    return promise;
  }
}
