// INSERT ONE
db.products.insertOne({
  name: "Tofu Buddha Bowl",
  cuisine: "Asian",
  price: 9.50,
  tags: ["vegan", "gluten-free"],
  available: true
});

// FIND
db.products.find();

// INSERT MANY
db.products.insertMany([
  {
    name: "Veggie Pizza",
    cuisine: "Italian",
    price: 11,
    tags: ["vegan"],
    available: true
  },
  {
    name: "Chicken Burger",
    cuisine: "American",
    price: 14,
    tags: ["spicy"],
    available: true
  },
  {
    name: "Old Special Soup",
    cuisine: "Chinese",
    price: 8,
    tags: ["soup"],
    available: false
  }
]);

// FIND WITH FILTER
db.products.find({
  available: true,
  price: { $lt: 12 },
  tags: "vegan"
});

// UPDATE
db.products.updateOne(
  {
    name: "Tofu Buddha Bowl"
  },
  {
    $set: {
      price: 10
    }
  }
);

// PUSH TAG
db.products.updateOne(
  {
    name: "Tofu Buddha Bowl"
  },
  {
    $push: {
      tags: "popular"
    }
  }
);

// DELETE
db.products.deleteOne({
  name: "Old Special Soup"
});