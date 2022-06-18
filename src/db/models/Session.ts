import { Table, Column, Model, AutoIncrement, PrimaryKey, HasMany, BelongsToMany } from 'sequelize-typescript';
import User from './User';
import SessionUser from './SessionUser';
import Point from './Point';
import {SessionAttributes } from '../../types';

@Table({})
export default class Session extends Model implements SessionAttributes {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  code: string;

  @BelongsToMany(() => User, () => SessionUser)
  users: User[];

  @HasMany(() => Point)
  points: Point[];
}