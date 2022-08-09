const express = require("express");
const router = express.Router();
const grocerySchema = require("../models/Schema");
// const  ObjectId = require('mongodb').ObjectId;

router.get("/", (req, res) => {
  // /grocery
  try {
    res.send("hello i am Grocery route");
  } catch (error) {
    console.log("error");
  }
});

//add a grocery by post method

router.post("/add", (req, res) => {
  // /grocery/add
  const groceryProducts = new grocerySchema({
    groceryItem: req.body.groceryItem,
    isPurchased: req.body.isPurchased,
  });
  groceryProducts.save();
  res.json({
    result: "Success",
  });
});

//get all grocery product

router.get("/getall", async (req, res) => {
  // /grocery/getall
  const groceryProducts = await grocerySchema.find();
  res.json(groceryProducts);
});

// update the `isPurchased` value of an individual item by using `_id
router.put("/updatePurchaseStatus/:id", async (req, res) => {
  console.log(req.params.id);
  const findGroceryAndUpdate = await grocerySchema.updateOne(
    { _id: req.params.id },
    {
      $set: { isPurchased: true },
    }
  );
  res.send(findGroceryAndUpdate);
});
//delete method
router.delete("/deleteGroceryItem/:id", async (req, res) => {
  const findGroceryAndDelete = await grocerySchema.deleteOne({
    _id: req.params.id,
  });
  res.send(findGroceryAndDelete);
});

module.exports = router;
