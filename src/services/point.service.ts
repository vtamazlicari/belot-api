import { Service } from "typedi";

import Point from "../db/models/Point";
import { PointAttributes } from '../types';

@Service()
export class PointService {
  findAll(): Promise<Point[]> {
    return Point.findAll({ raw: true });
  }

  findOne(id: number): Promise<Point | null> {
    return Point.findByPk(id, { raw: true });
  }

  async updateOne(id: number, point: PointAttributes): Promise<Point | null> {
    await Point.update(point, { where: { id } });

    return this.findOne(id);
  }

  deleteOne(id: number): Promise<number> {
    return Point.destroy({where: { id } });
  }

  async createOne(point: PointAttributes): Promise<Point> {
    const newUser = await Point.create(point);

    return newUser.toJSON();
  }
}
