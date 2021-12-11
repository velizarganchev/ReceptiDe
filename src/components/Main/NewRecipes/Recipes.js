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
    <section className="container">
      <h2 className="sectionTitle">New Recipes</h2>
        {recipe.map((x) => (
          <RecipeItem key={x._id} recipe={x} />
        ))}
    </section>
  );
};
export default NewRecipes;
