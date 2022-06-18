import { Table, Column, Model, AutoIncrement, PrimaryKey, BelongsTo, ForeignKey } from 'sequelize-typescript';
import User from './User';
import Session from './Session';
import { PointAttributes } from '../../types';

@Table({})
export default class Point extends Model implements PointAttributes {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  point: number;

  @ForeignKey(() => User)
  @Column
  idUser: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Session)
  @Column
  idSession: number;

  @BelongsTo(() => Session)
  session: Session;
}