const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chinamoon");

const chinamoonSeed = [

  {
    menuType: "All Day Menu",
    categoryName: "dinner",
    itemName: "water",
    price: 2.99
  },
  {
    menuType: "All Day Menu",
    categoryName: "lunch",
    itemName: "Chicken Fried Rice",
    price: 10.99
  },
  {
    menuType: "All Day Menu",
    categoryName: "appetizers",
    itemName: "Egg Roll (2)",
    price: 2.60
  },
  {
    menuType: "All Day Menu",
    categoryName: "appetizers",
    itemName: "Spring Rolls (2)",
    price: 2.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "appetizers",
    itemName: "Fried Wonton (8)",
    price: 2.10
  },
  {
    menuType: "All Day Menu",
    categoryName: "appetizers",
    itemName: "Sesame Donuts",
    price: 4.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "appetizers",
    itemName: "Fried Chicken Wings (8)",
    price: 5.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "appetizers",
    itemName: "Crab Rangoon (6)",
    price: 4.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "appetizers",
    itemName: "Fried Shrimp (6)",
    price: 5.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "appetizers",
    itemName: "Beef Teriyaki (4)",
    price: 5.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "appetizers",
    itemName: "BBQ Sliced Pork",
    price: 5.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "appetizers",
    itemName: "Pot Stickers (6)",
    price: 5.55
  },
  {
    menuType: "All Day Menu",
    categoryName: "appetizers",
    itemName: "Steamed or Fried Pork Dumpling (6)",
    price: 5.55
  },
  {
    menuType: "All Day Menu",
    categoryName: "appetizers",
    itemName: "Pu Pu Platter (For Two) ... Includes Egg Rolls, Wings, Fried Dumplings, Fried Wonton, Crab Rangoon, Fried Shrimp and Beef Teriyaki.",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "appetizers",
    itemName: " Buffalo, Honey Garlic, Hot Braised, Lemon Pepper wings or Teriyaki wings ... 10 Pieces……….$6.25     20 Pieces………. $10.95 15 Pieces………. $9.25    30 Pieces………. $15.45",
    price: 6.25
  },
  // chicken
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Almond Fried Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Sweet & Sour Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Lemon Fried Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Honey Garlic Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Moo Goo Gai Pan (Snow White Chicken)Sautéed Chicken breast with bamboo shoots, mushroom and Chinese Vegetables.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Chicken with Mixed Vegetables",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Chicken with Broccoli",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Chicken with Snow Peas ... Sauteed white Chicken meat with snow peas, water chestnuts, carrots in white sauce.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Hunan Chicken ... Chicken with broccoli, green pepper, Snow Peas, Carrot, Mushroom,baby corn, bamboo shoots, water chestnuts sautéed in Spicy Brown Sauce.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Szechuan Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Chicken with Garlic Sauce",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Curry Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Moo Shu Chicken (with 4 Crepes) ... Fancy-flavored egg with white meat Chicken and green onions, cabbage, mushroom, carrot served with thin Chinese pancakes",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Imperial Chicken...Sliced Chicken breast stir fried with white peas, carrots, onion in chef’s special hot sauce.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Mongolian Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Green Pepper Chicken ... Chicken Breast stir fried with green pepper and white onions in Brown sauce.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Chicken with Cashew Nuts .. Diced Chicken with celery, carrots, onions and cashew nuts.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Garlic Chicken ...  Diced Chicken with celery, carrots, and mushroom.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Kung Pao Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Chicken with Black Bean Sauce",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Sesame Chicken",
    price: 10.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "General Tso’s Chicken",
    price: 10.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "chicken",
    itemName: "Orange Chicken ... Fried in thin batter and covered in our special orange sauce.",
    price: 10.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Beef with Fresh Broccoli...Beef with Broccoli, Carrots.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Green Pepper Steak...Sliced tender Beef sautéed with green pepper and onion in our special sauce.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Beef with Snow Peas...Snow pea pods toss cooked with water chestnuts, carrots.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Kung Pao Beef...Beef with water chestnuts, celery, carrots, green pepper, onions and peanuts in spicy brown sauce.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Beef with Mixed Vegetables...Bamboo shoots, water chestnuts, mushrooms, napa, baby corn, snow peas, carrots, broccoli.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Hunan Beef...Tender beef sautéed with bamboo shoots, water chestnuts, mushrooms, baby corn, snow peas, carrots, and broccoli in spicy blown sauce.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Mongolian Beef...Beef stir fried with Green Onion and white Onion in a sweet blown sauce.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Curry Beef",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Beef with Mushrooms..Beef, carrots, onion and mushroom with brown sauce.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Szechuan Beef",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Spicy Beef with Garlic Sauce",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Beef with Black Bean Sauce...Tasty black bean sauce sautéed with beef, onion, bell peppers, water chestnuts, bamboo shoots and mushroom in a popular oriental recipe",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Sesame Beef",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Orange Beef...Crispy fried bread beef in a sweet orange sauce with few slice orange peel.",
    price: 10.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "beef",
    itemName: "Moo Shu Beef (with 4 Crepes)...Fancy-flavored egg with beef and green onions, cabbage, mushroom served with thin pancakes.",
    price: 10.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Sweet & Sour Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Almond Fried Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Lemon Fried Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Honey Garlic Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Shrimp with Snow Peas",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Moo Shu Shrimp (with 4 Crepes)",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Hunan Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Shrimp with Broccoli",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Curry Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Hot Braised Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Shrimp with Lobster Sauce...Jumbo Shrimp with water chestnuts, peas, carrots, egg and mushrooms.",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Shrimp with Mushrooms...Jumbo Shrimp with mushrooms, carrots, onions in brown sauce.",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Shrimp with Cashew Nuts",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Shrimp with Garlic Sauce...Jumbo Shrimp mixed vegetables in a light tasty medium spicy garlic ginger sauce.",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Green Pepper Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Imperial Shrimp...Fried in a thin batter, white peas, carrots, onion in chef’s special hot sauce.",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Garlic Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Kung Pao Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Shrimp with Chinese Vegetables...Jumbo Shrimp mix with different vegetables",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "seafood",
    itemName: "Shrimp with Black Bean Sauce",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "pork",
    itemName: " Sweet & Sour Pork",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "pork",
    itemName: "Hot Braised Pork",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "pork",
    itemName: "Roast Pork with Broccoli",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "pork",
    itemName: "Roast Pork with Snow Peas...Snow pea pods toss cooked with water chestnuts, carrots...Snow pea pods toss cooked with water chestnuts, carrots.",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "pork",
    itemName: "Roast Pork with Vegetables",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "pork",
    itemName: "Hunan Roast Pork",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "pork",
    itemName: "Kung Pao Pork...Pork with celery, carrots, green pepper, onions and peanuts in spicy brown sauce",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "pork",
    itemName: "Double Cooked Pork",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "pork",
    itemName: "Pork with Garlic Sauce...Shredded Pork in a light tasty medium spicy garlic ginger sauce",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "pork",
    itemName: "Ma Po To Fu...Soft bean curd and minced Pork in a hot spicy Szechuan sauce with chopped scallions.",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "pork",
    itemName: "Moo Shu Pork (with 4 Crepes)",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "vegetables",
    itemName: "General Tus Tofu",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "vegetables",
    itemName: "Kung Pao Tofu",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "vegetables",
    itemName: "Tofu with Mushrooms",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "vegetables",
    itemName: "Steamed Mixed Vegetables",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "vegetables",
    itemName: "Vegetables Deluxe",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "vegetables",
    itemName: " Home Style Bean Curd",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "vegetables",
    itemName: "Spicy Vegetables with Garlic Sauce",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "vegetables",
    itemName: "Broccoli with Oyster Sauce",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "loMein",
    itemName: "Chicken",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "loMein",
    itemName: "Beef",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "loMein",
    itemName: "Vegetables",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "loMein",
    itemName: "Crab Meat",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "loMein",
    itemName: "Pork",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "loMein",
    itemName: "Shrimp",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "loMein",
    itemName: "House Special",
    price: 8.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "loMein",
    itemName: "Tofu",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "loMein",
    itemName: "House Special Pan Fried Noodles",
    price: 9.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "loMein",
    itemName: "Singapore Noodle...Popcorn shrimp and shredded roast pork stir fried with thin crystal rice noodles in a Asian curry flavor",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "loMein",
    itemName: "Pad Thai Noodle",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Phoenix and Dragon",
    price: 11.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Chicken and Beef with Mixed Vegetables",
    price: 11.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Shrimp and Chicken with Cashew Nuts",
    price: 11.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Three delicacies with Black Bean Sauce",
    price: 10.65
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Shrimp and Beef with Broccoli",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Sesame Shrimp",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "General Tus Shrimp",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Sweet and Sour Combination...Combination of Shrimp, Pork and Chicken.",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Sizzling Scallop and Steak...Sliced steak, scallop and Chinese Vegetables served on a hot plate.",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Triple Crown...Jumbo Shrimp, sliced Chicken breast, and tender Beef sautéed with mixed Vegetables in brown sauce",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Triple Delight...Jumbo Shrimp, sliced Chicken breast, scallops, stir fried with mixed Vegetables in a white sauce",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Mongolian Triple...Green Onion and White Onion stir fried with Chicken, Beef and Shrimp",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Szechuan Triple...Vegetable Stir fried with Chicken, Beef and Shrimp in a blown spicy sauce",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Four Happiness...Tender Beef, jumbo Shrimp, sliced Chicken breast and roast pork sautéed with Vegetables in a brown spicy sauce",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Sizzling Happy Family...Combination of scallops, crab meat, jumbo Shrimp, tender Beef and sliced Chicken breast sautéed with mixed Vegetables",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Salt & Pepper Shrimp",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Sizzling Seafood Deluxe (White Sauce)",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Scallop with Mixed Vegetables (Blown Sauce)",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "houseSpecial",
    itemName: "Scallop with Snow Peas (White Sauce)",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "chowMein",
    itemName: "Chicken",
    price: 7.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "chowMein",
    itemName: "Beef",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "chowMein",
    itemName: "Vegetables",
    price: 7.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "chowMein",
    itemName: "Pork",
    price: 7.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "chowMein",
    itemName: "Shrimp",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "chowMein",
    itemName: "House Special",
    price: 8.55
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Chicken Egg Fu Yung",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Beef Egg Fu Yung",
    price: 8.55
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Vegetables Egg Fu Yung",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Crab Meat Egg Fu Yung",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Roast Pork Egg Fu Yung",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Shrimp Egg Fu Yung",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "House Special Egg Fu Yung",
    price: 8.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Seafood Egg Fu Yung",
    price: 8.95
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Chicken Fried Rice",
    price: 7.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Tofu Fried Rice",
    price: 7.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Pork Fried Rice",
    price: 7.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Vegetables Fried Rice",
    price: 7.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Shrimp Fried Rice",
    price: 7.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Crab Meat Fried Rice",
    price: 7.45
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Beef Fried Rice",
    price: 7.75
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "Seafood Fried Rice",
    price: 8.55
  },
  {
    menuType: "All Day Menu",
    categoryName: "eggFuYungandFriedRice",
    itemName: "House Special Fried Rice",
    price: 8.55
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Vegetables Deluxe",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Moo Goo Gai Pan",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Chicken with Broccoli",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Chicken Vegetable",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Hunan Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Garlic Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Chicken with Cashew Nuts",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Kung Pao Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Sweet & Sour Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Lemon Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Almond Fried Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Mongolian Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "General Tso’s Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Sesame Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Sweet & Sour Pork",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Mongolian Beef",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Green Pepper Steak",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Hunan Beef",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Hunan Beef",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Beef with Broccoli",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Beef with Vegetables",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Kung Pao Beef",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Garlic Shrimp",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Kung Pao Shrimp",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Shrimp with Broccoli",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Shrimp with Mixed Vegetables",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Hunan Shrimp",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "comboDinner",
    itemName: "Shrimp with Lobster Sauce",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    categoryName: "kidMenu",
    itemName: "Sweet & Sour Chicken",
    price: 4.85
  },
  {
    menuType: "All Day Menu",
    categoryName: "kidMenu",
    itemName: "Sweet & Sour Pork",
    price: 4.85
  },
  {
    menuType: "All Day Menu",
    categoryName: "kidMenu",
    itemName: "Sweet & Sour Shrimp",
    price: 4.85
  },
  {
    menuType: "All Day Menu",
    categoryName: "kidMenu",
    itemName: "Fried Chicken Wings (5)",
    price: 4.85
  },
  {
    menuType: "All Day Menu",
    categoryName: "kidMenu",
    itemName: "Chicken Fried Rice",
    price: 4.85
  },
  {
    menuType: "All Day Menu",
    categoryName: "kidMenu",
    itemName: "Shrimp Fried Rice",
    price: 4.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Vegetables Deluxe",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Moo Goo Gai Pan",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Chicken with Broccoli",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Green Pepper Chicken",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Chicken with Mixed Vegetables",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Hunan Chicken",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Spicy Chicken with Garlic Sauce",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Garlic Chicken",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Chicken with Cashew Nuts",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Kung Pao Chicken",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Mongolian Chicken",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Sweet & Sour Chicken",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Lemon Chicken",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Almond Fried Chicken",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Hot Braised Chicken",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "General Tso’s Chicken",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Sesame Chicken",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Sweet & Sour Pork",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Hot Braise Pork",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Spicy Pork with Garlic Sauce",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Kung Pao Roast Pork",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Mongolian Beef",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Green Pepper Steak",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Beef with Broccoli",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Hunan Beef",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Beef with Mixed Vegetable",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Kung Pao Beef",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Almond Fried Shrimp",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Sweet & Sour Shrimp",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Hot Braised Shrimp",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Shrimp with Broccoli",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Spicy Shrimp with Garlic Sauce",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Shrimp with Mixed Vegetable",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Kung Pao Shrimp",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Garlic Shrimp",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Hunan Shrimp",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Shrimp with Lobster Sauce",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Phoenix and Dragon",
    price: 6.15
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Beef Fried Rice",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Chicken Fried Rice",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Pork Fried Rice",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Vegetable Fried Rice",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Shrimp Fried Rice",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Beef Lo Mein",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Chicken Lo Mein",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Pork Lo Mein",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Vegetable Lo Mein",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "Shrimp Lo Mein",
    price: 5.65
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "House Special Chou Mein",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "House Special Fried Rice",
    price: 5.85
  },
  {
    menuType: "Lunch Special",
    categoryName: "lunch",
    itemName: "House Special Lo Mein",
    price: 5.85
  },
  {
    menuType: "Family Dinner",
    categoryName: "famDin",
    itemName: "For Two Person...Sizzling Rice Soup, Egg Rolls, Mongolian Beef,Sweet & Sour Chicken, Sweet & Sour Chicken",
    price: 24.55
  },
  {
    menuType: "Family Dinner",
    categoryName: "famDin",
    itemName: "For Three Person...Sizzling Rice Soup, Egg Rolls, Mongolian Beef, Moo Goo Gai Pan",
    price: 32.95
  },
  {
    menuType: "Family Dinner",
    categoryName: "famDin",
    itemName: "For Four Person...Sizzling Rice Soup, Egg Rolls, Mongolian Beef, Moo Goo Gai Pan, Sweet & Sour Chicken, Shrimp with Lobster Sauce",
    price: 42.55
  },
  {
    menuType: "Family Dinner",
    categoryName: "famDin",
    itemName: "For Five Person...Sizzling Rice Soup, Egg Rolls, Mongolian Beef, Moo Goo Gai Pan, Sweet & Sour Chicken, Triple Crown, Shrimp with Lobster Sauce",
    price: 32.95
  },

  { menuType: "All Day Menu", categoryName: "Chicken", itemName: "kabab", price: 2.99 }
];

db.ChinaMenu.remove({})
  .then(() => db.ChinaMenu.collection.insertMany(chinamoonSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
