import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
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

  if (recipe.length > 0 ) {
    return (
      <section className="container">
        <h2 className="sectionTitle">New Recipes</h2>
        {recipe.map((x) => (
          <RecipeCard key={x._id} recipe={x} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="container">
        <h2 className="sectionTitle">New Recipes</h2>
        <h2>No Recipes in Databese</h2>
      </section>
    );
  }
};
export default NewRecipes;
