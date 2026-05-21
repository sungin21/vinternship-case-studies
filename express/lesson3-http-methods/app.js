
const express = require("express");

const app = express();

const productRoutes = require("./routes/products");

// middleware
app.use(express.json());

// routes
app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});