const express = require("express");
const cors = require("cors");

const data = require("./data");

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.json(data);
});

app.listen(5001, () => {
  console.log("server is running in port 5001");
});
