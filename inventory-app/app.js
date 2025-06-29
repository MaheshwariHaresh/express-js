const express = require("express");
require("dotenv").config();
const path = require("path");
const { categoryRouter } = require("./routes/categoryRoutes");
const { productRouter } = require("./routes/productRoutes");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.render("home", { title: "Inventory App" }); // Renders `views/home.ejs`
});

// Category routes
app.use("/categories", categoryRouter);

// Product routes
app.use("/products", productRouter);

// Error handling
app.use((req, res) => {
  res
    .status(404)
    .render("errors", { title: "404 Error", message: "Page not found" }); // Renders `views/error.ejs`
});

app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
