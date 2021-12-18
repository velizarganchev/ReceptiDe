import { useEffect, useState } from "react";
import * as recipeService from "../../services/recipeService";
import RecipeCard from "../Main/Recipes/RecipeCard";
import { useAuthContext } from "../../contexts/AuthContext";


const MyRecipes = () => {
  const { user } = useAuthContext();

  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    recipeService
      .GetRecipes()
      .then((res) => {
        let mainDishes = res.filter((x) => x._ownerId === user._id);
        setRecipe(mainDishes);
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
export default MyRecipes;
