const http = require("http");
const connectDb = require("./utils/dbConfig");
const app = require("./app");
const httpServer = http.createServer(app);

require("dotenv").config();

const port = process.env.PORT || 5000;

const startServer = async () => {
  await connectDb();
  httpServer.listen(port, () => {
    console.log(`Server running on port: ${port}...`);
  });
};

startServer();
