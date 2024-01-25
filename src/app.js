const express = require("express");
const cors = require("cors");
const register = require("./routes/register");
const login = require("./routes/login");
const orders = require("./routes/orders");
const products = require("./routes/products");

require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "https://we-sell-five.vercel.app",
  methods: "GET, HEAD, POST",
  preflightContinue: false,
  optionSuccessStatus: 204,
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/orders", orders);
app.use("/api/products", products);

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

module.exports = app;
