class Socket {
  constructor(io) {
    this.io = io;
  }

  connection() {
    this.io.on("connection", socket => {
      console.log("Client Connected");
    });
  }
}

module.exports = (io) => new Socket(io);
