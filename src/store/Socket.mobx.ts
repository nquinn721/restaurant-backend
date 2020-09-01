import io from "socket.io-client";

class SocketStore {
  socket = io("https://restaurant-server-288018.ue.r.appspot.com/");
  // socket = io(Service.baseUrl);

  emit(name: string, data: object) {
    this.socket.emit(name, data);
  }

  on(name: string, cb: Function) {
    this.socket.on(name, cb);
  }
}

export const Socket = new SocketStore();
