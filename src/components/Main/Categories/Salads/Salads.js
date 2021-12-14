import { useEffect, useState } from "react";
import * as recipeService from "../../../../services/recipeService";
import RecipeCard from "../../Recipes/RecipeCard";

const Salads = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    recipeService
      .GetRecipes()
      .then((res) => {
        let salads = res.filter((x) => x.category === "Salads");
        setRecipe(salads);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (recipe.length > 0) {
    return (
      <section className="container">
        <h2 className="sectionTitle">Salads</h2>
        {recipe.map((x) => (
          <RecipeCard key={x._id} recipe={x} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="container">
        <h2 className="sectionTitle">Salads</h2>
        <h2>No Recipes in Databese</h2>
      </section>
    );
  }
};
export default Salads;
