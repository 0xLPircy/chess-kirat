import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager();

wss.on("connection", function connection(ws) {
  gameManager.addUser(ws);

  // ws.on("error", console.error);

  // ws.on("message", function message(data) {
  //   console.log("received: %s", data);
  // });

  // ws.send("e4 e5");

  ws.on("disconnect", () => gameManager.removeUser(ws));
});
