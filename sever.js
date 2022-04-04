const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Todolistapplication = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
todolistapplication.use(cors(corsOptions));
todolistapplication.use(bodyParser.json());
todolistapplication.use(bodyParser.urlencoded({ extended: true }));
const db = require("./todolistapplication/models")
db.sequelize.sync();
app.get("/", (req, res) => {
  res.json({ message: "Welcome to todo application." });
});
require("./todolistapplication/routes/todo.routes")(Todolistapplication)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const todolistapplication = express();
todolistapplication.use();
const db = require("./Todolistapplication/models");
db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});