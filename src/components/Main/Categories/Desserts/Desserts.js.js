import { useEffect, useState } from "react";
import * as recipeService from "../../../../services/recipeService";
import RecipeCard from "../../Recipes/RecipeCard";

const Desserts = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    recipeService
      .GetRecipes()
      .then((res) => {
        let desserts = res.filter((x) => x.category === "Desserts");
        setRecipe(desserts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (recipe.length > 0) {
    return (
      <section className="container">
        <h2 className="sectionTitle">Desserts</h2>
        {recipe.map((x) => (
          <RecipeCard key={x._id} recipe={x} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="container">
        <h2 className="sectionTitle">Desserts</h2>
        <h2>No Recipes in Databese</h2>
      </section>
    );
  }
};
export default Desserts;
