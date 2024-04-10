const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
console.log(process.env.NODE_ENV)

mongoose
  .connect(DB)
  .then(() => console.log("mongoDb connected...."))
  .catch((err) => console.log(err));
  

const PORT = process.env.Port || 5000

app.listen(PORT, (req, res) => console.log(`app is running on ${PORT} `));
