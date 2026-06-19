import { Server } from "socket.io";

export const initSocket = (server: any) => {
  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("Client connected");

    setInterval(() => {
      socket.emit("stats:update", {
        revenue: Math.floor(Math.random() * 100000),
      });
    }, 5000);
  });

  return io;
};