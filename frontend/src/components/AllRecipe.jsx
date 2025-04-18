import { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import axios from "axios";

function AllRecipe() {
  const [recipe, setrecipe] = useState([]);
  useEffect(() => {
    const getRecipe = async () => {
      const res = await axios.get("http://localhost:5000/recipe");
      setrecipe(res.data);
      console.log(recipe);
      try {
      } catch (error) {
        console.log(error);
      }
    };
    getRecipe();
  }, []);

  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">All Recipes</h3>
      <div className="row">
        {recipe.map((rec) => {
          return (
            <div className="col-md-4 mb-4" key={rec._id}>
              <div
                className="card"
                style={{ width: "100%", borderRadius: "10px" }}
              >
                <img
                  src="https://via.placeholder.com/300x200"
                  className="card-img-top"
                  alt="Recipe"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />
                <div className="card-body" style={{ padding: "1.25rem" }}>
                  <h5
                    className="card-title"
                    style={{ fontSize: "1.25rem", fontWeight: "bold" }}
                  >
                    {rec.title}
                  </h5>
                  <p
                    className="card-text"
                    style={{ fontSize: "1rem", color: "#555" }}
                  >
                    <strong>Instructions:</strong> {rec.instruction}
                  </p>
                  <p
                    className="card-text"
                    style={{ fontSize: "1rem", color: "#555" }}
                  >
                    <strong>Ingredients:</strong> {rec.ingredient}
                  </p>
                  <p
                    className="card-text"
                    style={{ fontSize: "1rem", color: "#555" }}
                  >
                    <strong>Time:</strong> {rec.time}
                    <button className="bg-white border border-0 ms-4">
                      <CiEdit />
                    </button>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllRecipe;
