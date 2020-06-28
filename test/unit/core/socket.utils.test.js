const { EventEmitter } = require("events");

describe("Test Socket Core", () => {
  const fakeSocket = new EventEmitter();
  const socketCore = require("../../../src/core/socket.utils")(fakeSocket);

  it("connected", (done) => {
    socketCore.connection();
    fakeSocket.emit("connection", { test: true });
    done();
  });
});
