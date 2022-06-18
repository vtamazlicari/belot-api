import { createExpressServer, useContainer } from 'routing-controllers';
import bodyParser from 'body-parser';
import httpContext from 'express-http-context';
import { Container } from 'typedi';

import { UserController } from './controllers';
import { GlobalErrorHandler } from "./middleware";
import sequelize from './sequelize';
import expressWs from 'express-ws';
import './services';

useContainer(Container);

const app = createExpressServer({
  controllers: [UserController],
  middlewares: [GlobalErrorHandler],
  defaultErrorHandler: false
});

expressWs(app);

app.use(bodyParser.json());
app.use(httpContext.middleware);

app.ws('/websockets/:id', (ws, req) => {
  ws.on('message', (msg) => {
    console.log(msg)
    ws.send(msg);
  });
});

sequelize.authenticate()
.then(async () => {
  const PORT = process.env.PORT || 8080;
  const server = app.listen(PORT, () => console.log(`App running on port ${PORT}`));

  // websocket(server);
})
.catch(console.error);