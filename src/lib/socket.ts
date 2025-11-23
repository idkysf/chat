import { io, Socket } from "socket.io-client";

function initialize(token: string) {
  return io("https://api.wasteof.money", {
    path: "/socket.io/",
    auth: {
      token,
      v3: false,
    },
  });
}

export class ChatSocket {
  private token: string;
  public socket: Socket;

  constructor(token: string) {
    this.token = token;
    this.socket = initialize(this.token);
  }

  listen(callback: (data: any) => any) {
    this.socket.on("message", (data) => callback(data));
  }

  send(text: string) {
    this.socket.send(`${text}`);
  }
}
