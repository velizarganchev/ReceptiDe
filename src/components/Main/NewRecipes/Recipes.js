import { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import RecipeItem from "./RecipeItem";
import * as recipeService from "../../../services/recipeService";

const NewRecipes = () => {
  const [recipe, setRecipe] = useState([]);
  
  useEffect(() => {
    recipeService.GetNewRecipes().then((res) => {
      setRecipe(res);
    })
    .catch(err => { 
      console.log(err)
    });
  }, []);

  return (
    <section>
      <h2>New Recipes</h2>
      <CardGroup>
        {recipe.map((x) => (
          <RecipeItem key={x._id} recipe={x} />
        ))}
      </CardGroup>
    </section>
  );
};
export default NewRecipes;
