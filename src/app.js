const express = require("express");
const cors = require("cors");
const register = require("./routes/register");
const login = require("./routes/login");
const orders = require("./routes/orders");
const products = require("./routes/products");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/orders", orders);
app.use("/api/products", products);

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

module.exports = app;
