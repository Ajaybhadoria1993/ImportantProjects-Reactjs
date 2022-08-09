const express = require("express"); //use for routing
const mongoose = require("mongoose"); //for connect the mongodb and making of Schema
const bodyparser = require("body-parser");
const cors = require("cors");

require("dotenv/config"); // have envirnoment variable like connection string username and password
const app = express(); //
app.use(bodyparser.json());
app.use(cors());
const port = process.env.PORT || 7000;
const groceryRoute = require("./routes/routes"); //import routes
app.use(express.json());

app.use("/grocery", groceryRoute); //use as a middleware this works when someone hits the /grocery (groceryRoute comes into the picture)

app.get("/", (req, res) => {
  //base route
  res.send("hello from the homepage");
});

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connect to MONGO_DB");
});
app.listen(port, () =>
  console.log(`server is sucessfully running on port ${port}`)
);
