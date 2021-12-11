import { useEffect, useState } from "react";
import * as recipeService from "../../services/recipeService";
import RecipeCard from "../Main/Recipes/RecipeCard";

const MyRecipes = ({
  user
}) => {
  const [recipe, setRecipe] = useState([]);
  console.log()
  useEffect(() => {
    recipeService
      .GetRecipes()
      .then((res) => {
        let mainDishes = res.filter((x) => x.user === {user});
        setRecipe(mainDishes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <section className="container">
      <h2 className="sectionTitle">My Recipes</h2>
      {recipe.map((x) => (
        <RecipeCard key={x._id} recipe={x} />
      ))}
    </section>
  );
};
export default MyRecipes;
