import { useEffect, useState } from "react";
import * as recipeService from "../../../services/recipeService";
import RecipeItem from "../NewRecipes/RecipeItem"


const MainDishes = () => {

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    recipeService
      .GetRecipes()
      .then((res) => {
        let mainDishes = res.filter(x => x.category === "Main Dishes");
        setRecipe(mainDishes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <div className="newRecipes">
        {recipe.map((x) => (
          <RecipeItem key={x._id} recipe={x} />
        ))}
      </div>
    </section>
  );
};
export default MainDishes;
