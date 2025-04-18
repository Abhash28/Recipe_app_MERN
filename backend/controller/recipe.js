const Recipes = require("../model/recipeschema");

const getrecipe = async (req, res) => {
  const findRecipe = await Recipes.find();
  return res.json(findRecipe);
};

const getrecipeById = async (req, res) => {
  const getDataByid = await Recipes.findById(req.params.id);
  res.json(getDataByid);
};

const addrecipe = async (req, res) => {
  const { title, ingredient, instruction, time } = req.body;

  if (!title || !ingredient || !instruction) {
    return res.json({ message: "Required field can not empty" });
  }
  try {
    const addRecipeData = await Recipes.create({
      title,
      ingredient,
      instruction,
      time,
    });
    return res.json(addRecipeData);
  } catch (error) {
    console.error("Error adding recipe:", error);
    return res
      .status(500)
      .json({ message: "Server error while adding recipe" });
  }
};

const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { title, ingredient, instruction, time } = req.body;
  const recipe = await Recipes.findById(id);
  try {
    if (recipe) {
      await Recipes.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json({ title, ingredient, instruction, time });
    }
  } catch (error) {
    return res.status(404).json({ message: "Error" }, error);
  }
};

const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  const deleteData = await Recipes.findByIdAndDelete(id);
  return res.json(deleteData);
};
module.exports = {
  getrecipe,
  getrecipeById,
  addrecipe,
  updateRecipe,
  deleteRecipe,
};
