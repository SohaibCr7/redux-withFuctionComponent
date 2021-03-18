import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";

const app = express();
const PORT = 8081;

// DataBase Connection
mongoose.Promisse = global.Promise;
mongoose.connect("mongodb://localhost/UserLogin", {
  userNewUrlParser: true,
  useUnifiedTopology: true,
});

// Bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send(`Our Application is Running ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
