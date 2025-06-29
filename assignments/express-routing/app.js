const bookRouter = require("./routes/bookRouter");
const authorRouter = require("./routes/authorRouter");
const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const orderRouter = require("./routes/orderRouter");
const path = require("node:path");

const express = require("express");

const app = express();
// Routers
// app.use("/", indexRouter);
app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/orders", orderRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!" });
});

// set up of Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
