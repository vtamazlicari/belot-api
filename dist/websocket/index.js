"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const query_string_1 = __importDefault(require("query-string"));
class Websocket {
    constructor(expressServer) {
        this.websocketServer = this._websocketServer;
        expressServer.on("upgrade", this._onUpdate);
    }
    get _websocketServer() {
        return new ws_1.default.Server({
            noServer: true,
            path: "/websockets",
        });
    }
    _onUpdate(request, socket, head) {
        this.websocketServer.handleUpgrade(request, socket, head, (websocket) => {
            this.websocketServer.emit("connection", websocket, request);
        });
    }
}
exports.default = (expressServer) => __awaiter(void 0, void 0, void 0, function* () {
    const websocketServer = new ws_1.default.Server({
        noServer: true,
        path: "/websockets",
    });
    expressServer.on("upgrade", (request, socket, head) => {
        websocketServer.handleUpgrade(request, socket, head, (websocket) => {
            websocketServer.emit("connection", websocket, request);
        });
    });
    websocketServer.on("connection", function connection(websocketConnection, connectionRequest) {
        var _a;
        const [_path, params] = (_a = connectionRequest === null || connectionRequest === void 0 ? void 0 : connectionRequest.url) === null || _a === void 0 ? void 0 : _a.split("?");
        const connectionParams = query_string_1.default.parse(params);
        // NOTE: connectParams are not used here but good to understand how to get
        // to them if you need to pass data with the connection to identify it (e.g., a userId).
        console.log(connectionParams);
        websocketConnection.on("message", (message) => {
            const parsedMessage = JSON.parse(message);
            console.log(parsedMessage);
            websocketConnection.send(JSON.stringify({ message: 'There be gold in them thar hills.' }));
        });
    });
    return websocketServer;
});
//# sourceMappingURL=index.js.map