const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chinamoon");

const chinamoonSeed = [
  { catagoryName: "dinner", itemName: "kabab", price: 2.99 },
  {
    menuType: "All Day Menu",
    catagoryName: "dinner",
    itemName: "water",
    price: 2.99
  },
  {
    menuType: "All Day Menu",
    catagoryName: "lunch",
    itemName: "Chicken Fried Rice",
    price: 10.99
  },
  {
    menuType: "All Day Menu",
    catagoryName: "appetizers",
    itemName: "Egg Roll (2)",
    price: 2.60
  },
  {
    menuType: "All Day Menu",
    catagoryName: "appetizers",
    itemName: "Spring Rolls (2)",
    price: 2.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "appetizers",
    itemName: "Fried Wonton (8)",
    price: 2.10
  },
  {
    menuType: "All Day Menu",
    catagoryName: "appetizers",
    itemName: "Sesame Donuts",
    price: 4.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "appetizers",
    itemName: "Fried Chicken Wings (8)",
    price: 5.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "appetizers",
    itemName: "Crab Rangoon (6)",
    price: 4.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "appetizers",
    itemName: "Fried Shrimp (6)",
    price: 5.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "appetizers",
    itemName: "Beef Teriyaki (4)",
    price: 5.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "appetizers",
    itemName: "BBQ Sliced Pork",
    price: 5.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "appetizers",
    itemName: "Pot Stickers (6)",
    price: 5.55
  },
  {
    menuType: "All Day Menu",
    catagoryName: "appetizers",
    itemName: "Steamed or Fried Pork Dumpling (6)",
    price: 5.55
  },
  {
    menuType: "All Day Menu",
    catagoryName: "appetizers",
    itemName: "Pu Pu Platter (For Two) ... Includes Egg Rolls, Wings, Fried Dumplings, Fried Wonton, Crab Rangoon, Fried Shrimp and Beef Teriyaki.",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "appetizers",
    itemName: " Buffalo, Honey Garlic, Hot Braised, Lemon Pepper wings or Teriyaki wings ... 10 Pieces……….$6.25     20 Pieces………. $10.95 15 Pieces………. $9.25    30 Pieces………. $15.45",
    price: 6.25
  },
  // chicken
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Almond Fried Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Sweet & Sour Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Lemon Fried Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Honey Garlic Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Moo Goo Gai Pan (Snow White Chicken)Sautéed Chicken breast with bamboo shoots, mushroom and Chinese Vegetables.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Chicken with Mixed Vegetables",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Chicken with Broccoli",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Chicken with Snow Peas ... Sauteed white Chicken meat with snow peas, water chestnuts, carrots in white sauce.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Hunan Chicken ... Chicken with broccoli, green pepper, Snow Peas, Carrot, Mushroom,baby corn, bamboo shoots, water chestnuts sautéed in Spicy Brown Sauce.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Szechuan Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Chicken with Garlic Sauce",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Curry Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Moo Shu Chicken (with 4 Crepes) ... Fancy-flavored egg with white meat Chicken and green onions, cabbage, mushroom, carrot served with thin Chinese pancakes",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Imperial Chicken...Sliced Chicken breast stir fried with white peas, carrots, onion in chef’s special hot sauce.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Mongolian Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Green Pepper Chicken ... Chicken Breast stir fried with green pepper and white onions in Brown sauce.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Chicken with Cashew Nuts .. Diced Chicken with celery, carrots, onions and cashew nuts.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Garlic Chicken ...  Diced Chicken with celery, carrots, and mushroom.",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Kung Pao Chicken",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Chicken with Black Bean Sauce",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Sesame Chicken",
    price: 10.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "General Tso’s Chicken",
    price: 10.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chicken",
    itemName: "Orange Chicken ... Fried in thin batter and covered in our special orange sauce.",
    price: 10.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Beef with Fresh Broccoli...Beef with Broccoli, Carrots.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Green Pepper Steak...Sliced tender Beef sautéed with green pepper and onion in our special sauce.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Beef with Snow Peas...Snow pea pods toss cooked with water chestnuts, carrots.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Kung Pao Beef...Beef with water chestnuts, celery, carrots, green pepper, onions and peanuts in spicy brown sauce.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Beef with Mixed Vegetables...Bamboo shoots, water chestnuts, mushrooms, napa, baby corn, snow peas, carrots, broccoli.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Hunan Beef...Tender beef sautéed with bamboo shoots, water chestnuts, mushrooms, baby corn, snow peas, carrots, and broccoli in spicy blown sauce.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Mongolian Beef...Beef stir fried with Green Onion and white Onion in a sweet blown sauce.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Curry Beef",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Beef with Mushrooms..Beef, carrots, onion and mushroom with brown sauce.",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Szechuan Beef",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Spicy Beef with Garlic Sauce",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Beef with Black Bean Sauce...Tasty black bean sauce sautéed with beef, onion, bell peppers, water chestnuts, bamboo shoots and mushroom in a popular oriental recipe",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Sesame Beef",
    price: 10.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Orange Beef...Crispy fried bread beef in a sweet orange sauce with few slice orange peel.",
    price: 10.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "beef",
    itemName: "Moo Shu Beef (with 4 Crepes)...Fancy-flavored egg with beef and green onions, cabbage, mushroom served with thin pancakes.",
    price: 10.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Sweet & Sour Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Almond Fried Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Lemon Fried Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Honey Garlic Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Shrimp with Snow Peas",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Moo Shu Shrimp (with 4 Crepes)",
    price: 9.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Hunan Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Shrimp with Broccoli",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Curry Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Hot Braised Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Shrimp with Lobster Sauce...Jumbo Shrimp with water chestnuts, peas, carrots, egg and mushrooms.",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Shrimp with Mushrooms...Jumbo Shrimp with mushrooms, carrots, onions in brown sauce.",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Shrimp with Cashew Nuts",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Shrimp with Garlic Sauce...Jumbo Shrimp mixed vegetables in a light tasty medium spicy garlic ginger sauce.",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Green Pepper Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Imperial Shrimp...Fried in a thin batter, white peas, carrots, onion in chef’s special hot sauce.",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Garlic Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Kung Pao Shrimp",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Shrimp with Chinese Vegetables...Jumbo Shrimp mix with different vegetables",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "seafood",
    itemName: "Shrimp with Black Bean Sauce",
    price: 10.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "pork",
    itemName: " Sweet & Sour Pork",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "pork",
    itemName: "Hot Braised Pork",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "pork",
    itemName: "Roast Pork with Broccoli",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "pork",
    itemName: "Roast Pork with Snow Peas...Snow pea pods toss cooked with water chestnuts, carrots...Snow pea pods toss cooked with water chestnuts, carrots.",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "pork",
    itemName: "Roast Pork with Vegetables",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "pork",
    itemName: "Hunan Roast Pork",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "pork",
    itemName: "Kung Pao Pork...Pork with celery, carrots, green pepper, onions and peanuts in spicy brown sauce",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "pork",
    itemName: "Double Cooked Pork",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "pork",
    itemName: "Pork with Garlic Sauce...Shredded Pork in a light tasty medium spicy garlic ginger sauce",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "pork",
    itemName: "Ma Po To Fu...Soft bean curd and minced Pork in a hot spicy Szechuan sauce with chopped scallions.",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "pork",
    itemName: "Moo Shu Pork (with 4 Crepes)",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "vegetables",
    itemName: "General Tus Tofu",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "vegetables",
    itemName: "Kung Pao Tofu",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "vegetables",
    itemName: "Tofu with Mushrooms",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "vegetables",
    itemName: "Steamed Mixed Vegetables",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "vegetables",
    itemName: "Vegetables Deluxe",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "vegetables",
    itemName: " Home Style Bean Curd",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "vegetables",
    itemName: "Spicy Vegetables with Garlic Sauce",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "vegetables",
    itemName: "Broccoli with Oyster Sauce",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "loMein",
    itemName: "Chicken",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "loMein",
    itemName: "Beef",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "loMein",
    itemName: "Vegetables",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "loMein",
    itemName: "Crab Meat",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "loMein",
    itemName: "Pork",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "loMein",
    itemName: "Shrimp",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "loMein",
    itemName: "House Special",
    price: 8.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "loMein",
    itemName: "Tofu",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "loMein",
    itemName: "House Special Pan Fried Noodles",
    price: 9.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "loMein",
    itemName: "Singapore Noodle...Popcorn shrimp and shredded roast pork stir fried with thin crystal rice noodles in a Asian curry flavor",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "loMein",
    itemName: "Pad Thai Noodle",
    price: 8.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Phoenix and Dragon",
    price: 11.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Chicken and Beef with Mixed Vegetables",
    price: 11.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Shrimp and Chicken with Cashew Nuts",
    price: 11.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Three delicacies with Black Bean Sauce",
    price: 10.65
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Shrimp and Beef with Broccoli",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Sesame Shrimp",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "General Tus Shrimp",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Sweet and Sour Combination...Combination of Shrimp, Pork and Chicken.",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Sizzling Scallop and Steak...Sliced steak, scallop and Chinese Vegetables served on a hot plate.",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Triple Crown...Jumbo Shrimp, sliced Chicken breast, and tender Beef sautéed with mixed Vegetables in brown sauce",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Triple Delight...Jumbo Shrimp, sliced Chicken breast, scallops, stir fried with mixed Vegetables in a white sauce",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Mongolian Triple...Green Onion and White Onion stir fried with Chicken, Beef and Shrimp",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Szechuan Triple...Vegetable Stir fried with Chicken, Beef and Shrimp in a blown spicy sauce",
    price: 11.55
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Four Happiness...Tender Beef, jumbo Shrimp, sliced Chicken breast and roast pork sautéed with Vegetables in a brown spicy sauce",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Sizzling Happy Family...Combination of scallops, crab meat, jumbo Shrimp, tender Beef and sliced Chicken breast sautéed with mixed Vegetables",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Salt & Pepper Shrimp",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Sizzling Seafood Deluxe (White Sauce)",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Scallop with Mixed Vegetables (Blown Sauce)",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "houseSpecial",
    itemName: "Scallop with Snow Peas (White Sauce)",
    price: 11.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chowMein",
    itemName: "Chicken",
    price: 7.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chowMein",
    itemName: "Beef",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chowMein",
    itemName: "Vegetables",
    price: 7.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chowMein",
    itemName: "Pork",
    price: 7.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chowMein",
    itemName: "Shrimp",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "chowMein",
    itemName: "House Special",
    price: 8.55
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Chicken Egg Fu Yung",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Beef Egg Fu Yung",
    price: 8.55
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Vegetables Egg Fu Yung",
    price: 7.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Crab Meat Egg Fu Yung",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Roast Pork Egg Fu Yung",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Shrimp Egg Fu Yung",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "House Special Egg Fu Yung",
    price: 8.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Seafood Egg Fu Yung",
    price: 8.95
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Chicken Fried Rice",
    price: 7.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Tofu Fried Rice",
    price: 7.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Pork Fried Rice",
    price: 7.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Vegetables Fried Rice",
    price: 7.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Shrimp Fried Rice",
    price: 7.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Crab Meat Fried Rice",
    price: 7.45
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Beef Fried Rice",
    price: 7.75
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "Seafood Fried Rice",
    price: 8.55
  },
  {
    menuType: "All Day Menu",
    catagoryName: "eggFuYungandFriedRice",
    itemName: "House Special Fried Rice",
    price: 8.55
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Vegetables Deluxe",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Moo Goo Gai Pan",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Chicken with Broccoli",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Chicken Vegetable",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Hunan Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Garlic Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Chicken with Cashew Nuts",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Kung Pao Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Sweet & Sour Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Lemon Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Almond Fried Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Mongolian Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "General Tso’s Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Sesame Chicken",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Sweet & Sour Pork",
    price: 8.25
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Mongolian Beef",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Green Pepper Steak",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Hunan Beef",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Hunan Beef",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Beef with Broccoli",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Beef with Vegetables",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Kung Pao Beef",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Garlic Shrimp",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Kung Pao Shrimp",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Shrimp with Broccoli",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Shrimp with Mixed Vegetables",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Hunan Shrimp",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "comboDinner",
    itemName: "Shrimp with Lobster Sauce",
    price: 8.50
  },
  {
    menuType: "All Day Menu",
    catagoryName: "kidMenu",
    itemName: "Sweet & Sour Chicken",
    price: 4.85
  },
  {
    menuType: "All Day Menu",
    catagoryName: "kidMenu",
    itemName: "Sweet & Sour Pork",
    price: 4.85
  },
  {
    menuType: "All Day Menu",
    catagoryName: "kidMenu",
    itemName: "Sweet & Sour Shrimp",
    price: 4.85
  },
  {
    menuType: "All Day Menu",
    catagoryName: "kidMenu",
    itemName: "Fried Chicken Wings (5)",
    price: 4.85
  },
  {
    menuType: "All Day Menu",
    catagoryName: "kidMenu",
    itemName: "Chicken Fried Rice",
    price: 4.85
  },
  {
    menuType: "All Day Menu",
    catagoryName: "kidMenu",
    itemName: "Shrimp Fried Rice",
    price: 4.85
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
