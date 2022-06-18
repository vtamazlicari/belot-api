import db from '../models';

const users = [
  {
    name: 'Jon Doe',
    email: 'jondoe@mail.com',
    password: 'naksdhaskd',
    isGuest: false,
  },
  {
    name: 'Vasile Schiopu',
    email: 'vasileshchiopu@mail.com',
    password: 'naksddsahaskd',
    isGuest: false,
  },
  {
    name: 'Ion Noroc',
    email: 'ionnoroc@mail.com',
    password: 'naksdaAhsasdaskd',
    isGuest: false,
  }
];

export default db.User.bulk