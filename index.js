const express = require("express");
const hbs = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(require("./routes/index.route"))

app.engine(".hbs", hbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

mongoose
  .connect(
    "mongodb+srv://Rakhim:Kunfu_77@cluster1.z4fac.mongodb.net/libraryProject",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(3101, () => {
      console.log("Успешное подключение к серверу...");
    });
    console.log("Успешное подключение к базе данных...");
  });
