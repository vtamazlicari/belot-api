import WebSocket from "ws";
import queryString from "query-string";

class Websocket {
  websocketServer;

  constructor(expressServer) {
    this.websocketServer = this._websocketServer;

    expressServer.on("upgrade", this._onUpdate);
  }

  private get _websocketServer() {
    return new WebSocket.Server({
      noServer: true,
      path: "/websockets",
    });
  }

  private _onUpdate(request, socket, head) {
    this.websocketServer.handleUpgrade(request, socket, head, (websocket) => {
      this.websocketServer.emit("connection", websocket, request);
    });
  }
}


export default async (expressServer) => {
  const websocketServer = new WebSocket.Server({
    noServer: true,
    path: "/websockets",
  });

  expressServer.on("upgrade", (request, socket, head) => {
    websocketServer.handleUpgrade(request, socket, head, (websocket) => {
      websocketServer.emit("connection", websocket, request);
    });
  });

  websocketServer.on(
    "connection",
    function connection(websocketConnection, connectionRequest) {
      const [_path, params] = connectionRequest?.url?.split("?");
      const connectionParams = queryString.parse(params);

      // NOTE: connectParams are not used here but good to understand how to get
      // to them if you need to pass data with the connection to identify it (e.g., a userId).
      console.log(connectionParams);

      websocketConnection.on("message", (message) => {
        const parsedMessage = JSON.parse(message);
        console.log(parsedMessage);
        websocketConnection.send(JSON.stringify({ message: 'There be gold in them thar hills.' }));
      });
    }
  );

  return websocketServer;
};