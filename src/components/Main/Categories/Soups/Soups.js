import { useEffect, useState } from "react";
import * as recipeService from "../../../../services/recipeService";
import RecipeCard from "../../Recipes/RecipeCard";

const Soups = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    recipeService
      .GetRecipes()
      .then((res) => {
        let soups = res.filter((x) => x.category === "Soups");
        setRecipe(soups);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (recipe.length > 0) {
    return (
      <section className="container">
        <h2 className="sectionTitle">Soups</h2>
        {recipe.map((x) => (
          <RecipeCard key={x._id} recipe={x} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="container">
        <h2 className="sectionTitle">Soups</h2>
        <h2>No Recipes in Databese</h2>
      </section>
    );
  }
};
export default Soups;
