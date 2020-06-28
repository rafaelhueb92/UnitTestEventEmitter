const express = require("express");
const path = require("path");

class Application {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(require("helmet")());
  }

  routes() {
    this.app.get("/", (req, res) =>
      res.sendfile(path.resolve(__dirname,"..","..","public", "index.html"))
    );
  }
}

module.exports = require("http").createServer(new Application().app);
