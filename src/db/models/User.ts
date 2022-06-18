import { Table, Column, Model, AutoIncrement, PrimaryKey, BelongsToMany, HasMany, Scopes } from 'sequelize-typescript';
import Session from './Session';
import SessionUser from './SessionUser';
import Point from './Point';
import { UserAttributes } from '../../types';

// interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}
@Scopes(() => ({
  sessions: {
    include: [
      {
        model: Session,
        through: { attributes: [] },
      },
    ],
  },
  points: {
    include: [
      {
        model: Point,
        through: { attributes: [] },
      },
    ],
  },
}))
@Table
export default class User extends Model implements UserAttributes {
  // @CreatedAt 
  // readonly createdAt!: Date;

  // @UpdatedAt 
  // readonly updatedAt!: Date;

  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column 
  name: string

  @Column 
  email: string;

  @Column 
  password: string;

  @Column
  isGuest: boolean;

  @BelongsToMany(() => Session, () => SessionUser)
  sessions?: Session[];

  @HasMany(() => Point)
  points?: Point[];
}
