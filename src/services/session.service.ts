import { Service } from "typedi";

import Session from "../db/models/Session";
import { v4 as uuidv4 } from 'uuid';

@Service()
export class SessionService {
  findAll(): Promise<Session[]> {
    return Session.findAll({ raw: true });
  }

  findOne(id: number): Promise<Session | null> {
    return Session.findByPk(id, { raw: true });
  }

  deleteOne(id: number): Promise<number> {
    return Session.destroy({where: { id } });
  }

  async createOne(): Promise<Session> {
    const newUser = await Session.create({ code: uuidv4() });

    return newUser.toJSON();
  }
}
