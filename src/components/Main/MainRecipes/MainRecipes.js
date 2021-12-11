import { useEffect, useState } from "react";
import * as recipeService from "../../../services/recipeService";
import RecipeItem from "../NewRecipes/RecipeItem";

const MainRecipes = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    recipeService
      .GetRecipes()
      .then((res) => {
        let mainDishes = res.filter((x) => x.category === "Main Dishes");
        setRecipe(mainDishes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="container">
      <h2 className="sectionTitle">Main Dishes</h2>
      {recipe.map((x) => (
        <RecipeItem key={x._id} recipe={x} />
      ))}
    </section>
  );
};
export default MainRecipes;
