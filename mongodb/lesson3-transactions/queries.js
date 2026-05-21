// CREATE USERS
db.users.insertMany([
  {
    name: "Alice",
    balance: 500
  },
  {
    name: "Bob",
    balance: 300
  }
]);

// PSEUDO TRANSACTION FLOW

try {

  // Deduct from Alice
  db.users.updateOne(
    { name: "Alice" },
    { $inc: { balance: -100 } }
  );

  // Add to Bob
  db.users.updateOne(
    { name: "Bob" },
    { $inc: { balance: 100 } }
  );

  // Log transaction
  db.transactions.insertOne({
    from: "Alice",
    to: "Bob",
    amount: 100,
    status: "completed",
    date: new Date()
  });

  print("Transaction Successful");

} catch (e) {

  print("Transaction Failed");

}