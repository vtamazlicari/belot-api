import {Sequelize} from 'sequelize-typescript';

const env = process.env.ENV || 'development';
const { username, password, database, host, dialect } = require('../config/config')[env];

export default new Sequelize({
  username,
  password,
  database,
  host,
  dialect,
  validateOnly: false,
  models: [__dirname + '/db/models/'],
  storage: ':memory:',
});
