const express = require("express");

const router = express.Router();

let products = [
  {
    id: "1",
    name: "Bananas",
    price: 1.5,
    inStock: true
  },
  {
    id: "2",
    name: "Apples",
    price: 2.0,
    inStock: false
  }
];

// GET all products
router.get("/", (req, res) => {
  res.status(200).json(products);
});

// GET product by ID
router.get("/:id", (req, res) => {
  const product = products.find(
    p => p.id === req.params.id
  );

  if (!product) {
    return res
      .status(404)
      .json({ error: "Product not found" });
  }

  res.status(200).json(product);
});

// POST new product
router.post("/", (req, res) => {

  const { name, price, inStock } = req.body;

  if (
    !name ||
    price === undefined ||
    inStock === undefined
  ) {
    return res
      .status(400)
      .json({ error: "Missing fields" });
  }

  const newProduct = {
    id: (products.length + 1).toString(),
    name,
    price,
    inStock
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

// PUT update product
router.put("/:id", (req, res) => {

  const index = products.findIndex(
    p => p.id === req.params.id
  );

  if (index === -1) {
    return res
      .status(404)
      .json({ error: "Product not found" });
  }

  const { name, price, inStock } = req.body;

  products[index] = {
    id: req.params.id,
    name,
    price,
    inStock
  };

  res.status(200).json(products[index]);
});

// PATCH product price
router.patch("/:id/price", (req, res) => {

  const product = products.find(
    p => p.id === req.params.id
  );

  if (!product) {
    return res
      .status(404)
      .json({ error: "Product not found" });
  }

  product.price = req.body.price;

  res.status(200).json(product);
});

// DELETE product
router.delete("/:id", (req, res) => {

  const index = products.findIndex(
    p => p.id === req.params.id
  );

  if (index === -1) {
    return res
      .status(404)
      .json({ error: "Product not found" });
  }

  products.splice(index, 1);

  res.sendStatus(204);
});

module.exports = router;