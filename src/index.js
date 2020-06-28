require("dotenv/config");
const app = require("./app");
const io = require("socket.io")(app);
const socket = require("./core/socket.utils")(io)

const { PORT } = process.env;

socket.connection();

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
