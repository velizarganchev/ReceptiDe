import { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem";
import * as recipeService from "../../../services/recipeService";

const NewRecipes = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    recipeService
      .GetRecipes()
      .then((res) => {
        setRecipe(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <h2>New Recipes</h2>
      <div className="newRecipes">
        {recipe.map((x) => (
          <RecipeItem key={x._id} recipe={x} />
        ))}
      </div>
    </section>
  );
};
export default NewRecipes;
