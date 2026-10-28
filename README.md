# belot-api

Backend for a Belot score-keeping app. Express + TypeScript REST API with a MySQL database (Sequelize) and a WebSocket endpoint.

## Stack

- [routing-controllers](https://github.com/typestack/routing-controllers) on Express, with [TypeDI](https://github.com/typestack/typedi) for dependency injection
- [sequelize-typescript](https://github.com/sequelize/sequelize-typescript) + MySQL 8
- [express-ws](https://github.com/HenningM/express-ws) for WebSockets

## Getting started

Requirements: Node.js 12+ and a MySQL 8 server.

```bash
npm install

# start MySQL only (root password is "password")
docker compose up -d db

# create the database defined in config/config.js
npm run db:create

# dev server with auto-reload
npm run server:watch
```

The server listens on `PORT` (default `8080`).

### Configuration

| Variable | Default       | Purpose                                          |
| -------- | ------------- | ------------------------------------------------ |
| `PORT`   | `8080`        | HTTP port                                        |
| `ENV`    | `development` | Which block of `config/config.js` to use for DB  |

Database credentials (user, password, database name, host) live in [config/config.js](config/config.js), one block per environment (`development`, `test`, `production`).

## Scripts

| Command                  | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| `npm run server:watch`   | Run `src/app.ts` with ts-node-dev and auto-reload        |
| `npm run build`          | Compile TypeScript to `dist/`                            |
| `npm start`              | Build, then run `dist/app.js`                            |
| `npm run lint`           | ESLint (`lint:fix` to auto-fix)                          |
| `npm run db:create`      | Create the database                                      |
| `npm run db:drop`        | Drop the database                                        |
| `npm run db:migrate`     | Generate a migration from the current models             |
| `npm run db:migrate:run` | Run pending migrations                                   |

## API

### Users

| Method   | Path         | Description      |
| -------- | ------------ | ---------------- |
| `GET`    | `/users`     | List users       |
| `POST`   | `/users`     | Create a user    |
| `GET`    | `/users/:id` | Get one user     |
| `PUT`    | `/users/:id` | Update a user    |
| `DELETE` | `/users/:id` | Delete a user    |

User body:

```json
{ "name": "Ana", "email": "ana@example.com", "password": "secret", "isGuest": false }
```

Errors are returned as `{ "ERROR": ... }` by the global error handler.

### WebSocket

`ws://localhost:8080/websockets/:id` — currently echoes back every message it receives.

## Data model

- **User** — `name`, `email`, `password`, `isGuest`
- **Session** — a game, identified by a generated UUID `code`
- **SessionUser** — join table linking users to sessions
- **Point** — a score entry: `point`, `idUser`, `idSession`

`SessionService` and `PointService` exist in `src/services` but have no HTTP routes yet.

## Project layout

```
src/
  app.ts          # server bootstrap, routes, websocket
  sequelize.ts    # DB connection
  controllers/    # HTTP controllers
  services/       # data access (TypeDI services)
  db/models/      # Sequelize models
  db/migrations/  # generated migrations
  db/seeders/
  middleware/     # global error handler
  types/          # attribute interfaces
config/config.js  # DB settings per environment
```

## Docker

```bash
docker compose up --build
```

Starts MySQL and the API (exposed on port 80). Note: the app reads its DB host from `config/config.js` (`127.0.0.1`), not from the `MYSQL_URI` variable set in `docker-compose.yml`, so the containerised API won't reach the `db` service until that host is changed to `db`.
