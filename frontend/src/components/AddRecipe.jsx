import React, { useState } from "react";
import axios from "axios";

function AddRecipe() {
  const [title, settitle] = useState("");
  const [ingredient, setingredient] = useState("");
  const [instruction, setinstruction] = useState("");
  const [time, settime] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    if (!title || !ingredient || !instruction) {
      alert("All fields except time are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/recipe", {
        title,
        instruction,
        ingredient,
        time,
      });
      console.log("data added", res.data);
      settitle("");
      setinstruction("");
      setingredient("");
      settime("");
      alert("✅ Recipe added successfully!");
    } catch (error) {
      console.log(
        "while adding new recipe haine some error",
        error.response?.data || error.message
      );
      alert("❌ Failed to add recipe");
    }
  };

  return (
    <div
      className="container mt-5 mb-5 p-4 shadow-lg rounded bg-light"
      style={{ maxWidth: "600px" }}
    >
      <h2 className="mb-4 text-center text-primary">Add a New Recipe</h2>
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Recipe Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ingredient:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Ingredient"
            value={ingredient}
            onChange={(e) => setingredient(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Instruction:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Recipe Instruction"
            value={instruction}
            onChange={(e) => setinstruction(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Time:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Time (optional)"
            value={time}
            onChange={(e) => settime(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success px-5">
            Save Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
