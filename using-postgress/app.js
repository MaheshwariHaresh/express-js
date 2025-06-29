const express = require("express");
const path = require("node:path");
const userRouter = require("./routes/usersRoutes");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
