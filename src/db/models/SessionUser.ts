import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey } from 'sequelize-typescript';
import Session from './Session';
import User from './User';
import {SessionUserAttributes } from '../../types';

@Table({})
export default class SessionUser extends Model implements SessionUserAttributes {
  @ForeignKey(() => Session)
  @Column
  idSession: number;

  @ForeignKey(() => User)
  @Column
  idUser: number;
}