import { useEffect, useState } from "react";
import * as recipeService from "../../services/recipeService";
import RecipeCard from "../Main/Recipes/RecipeCard";
import isOwner from "../../hoc/isAuth";

const MyRecipes = ({ user }) => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    recipeService
      .GetMyRecipes(user._id)
      .then((res) => {
        setRecipe(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user._id]);

  return (
    <section className="container">
      <h2 className="sectionTitle">My Recipes</h2>
      {recipe.map((x) => (
        <RecipeCard key={x._id} recipe={x} />
      ))}
    </section>
  );
};
export default isOwner(MyRecipes);
