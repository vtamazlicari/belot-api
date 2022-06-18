import { Service } from "typedi";

import User from "../db/models/User";
import { UserAttributes } from '../types';

@Service()
export class UserService {
  findAll(): Promise<User[]> {
    return User.findAll({ raw: true });
  }

  findOne(id: number): Promise<User | null> {
    return User.findByPk(id, { raw: true });
  }

  async updateOne(id: number, user: UserAttributes): Promise<User | null> {
    await User.update(user, { where: { id } });

    return this.findOne(id);
  }

  deleteOne(id: number): Promise<number> {
    return User.destroy({where: { id } });
  }

  async createOne(user: UserAttributes): Promise<User> {
    const newUser = await User.create(user);

    return newUser.toJSON();
  }
}
