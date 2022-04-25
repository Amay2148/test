const express = require("express");
const app = express();
require("dotenv").config();
//const bodyparser = require("body-parser");

// middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//routers
const userRoutes = require("./routes/User.js");
app.use("/user", userRoutes);
const taskRoutes = require("./routes/Task.js");
app.use("/task", taskRoutes);
//static Images Folder

app.use("/Images", express.static("./Images"));

//server
app.listen(process.env.PORT || 8000, () => {
  console.log(`App Started on PORT ${process.env.PORT || 8000}`);
});
