const express = require("express");

const usersRouter = require("./routes/usersRouter");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", usersRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
