import { useEffect, useState } from "react";
import * as recipeService from "../../../../services/recipeService";
import RecipeCard from "../../Recipes/RecipeCard";

const Desserts = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    recipeService
      .GetRecipes()
      .then((res) => {
        let mainDishes = res.filter((x) => x.category === "Desserts");
        setRecipe(mainDishes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="container">
      <h2 className="sectionTitle">Desserts</h2>
      {recipe.map((x) => (
        <RecipeCard key={x._id} recipe={x} />
      ))}
    </section>
  );
};
export default Desserts;
