const express = require("express");
const {
  getrecipe,
  getrecipeById,
  addrecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controller/recipe");

const router = express.Router();

router.get("/", getrecipe); //get all recipe
router.get("/:id", getrecipeById); //get recipe by id
router.post("/", addrecipe); //add new recipe
router.put("/:id", updateRecipe); //update recipe by id
router.delete("/:id", deleteRecipe); //delete recipe by id

module.exports = router;
