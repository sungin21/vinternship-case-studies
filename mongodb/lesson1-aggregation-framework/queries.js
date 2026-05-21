// QUERY 1 - Group by genre
db.watchHistory.aggregate([
  {
    $group: {
      _id: "$genre",
      totalViews: { $sum: "$views" },
      avgRating: { $avg: "$rating" }
    }
  }
]);

// QUERY 2 - Match USA movies
db.watchHistory.aggregate([
  {
    $match: {
      country: "USA"
    }
  },
  {
    $group: {
      _id: "$genre",
      totalViews: {
        $sum: "$views"
      }
    }
  }
]);

// QUERY 3 - Project formatted output
db.watchHistory.aggregate([
  {
    $group: {
      _id: "$genre",
      totalViews: { $sum: "$views" },
      avgRating: { $avg: "$rating" }
    }
  },
  {
    $project: {
      _id: 0,
      genre: "$_id",
      totalViews: 1,
      avgRating: { $round: ["$avgRating", 1] }
    }
  }
]);