import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as recipeService from "../../../services/recipeService";

const Details = () => {
  const [recipe, setRecipe] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => {
    recipeService
      .GetRecipe(recipeId)
      .then((res) => {
        setRecipe(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipeId]);

  return (
    <article className="openRecipe">
      <div className="openRecipeBackground">
        <div className="openRecipeBackgroundFront">
          <h1 className="openRecipeTitle">{recipe.title}</h1>
          <figure className="mainImage">
            <img src={recipe.pictureUrl} alt="" />
          </figure>
        </div>
        <section className="openRecipeRightDetails">
          <div className="detaislCell">
            <div className="detailCellImage">
              <i className="fas fa-clock"></i>
            </div>
            <span className="detailCellNumber">{recipe.cookTime}</span>
          </div>
          <div className="detaislCell">
            <div className="detailCellImage">
              <i className="fas fa-utensils"></i>
            </div>
            <span className="detailCellNumber">x{recipe.serves}</span>
          </div>
        </section>
      </div>
      <div className="openRecipeBootomDetails">
        <div className="LeftSide">
          <section className="ingredients">
            <h3 className="ingredientsTitle">Ingredients</h3>
            <p>{recipe.ingredients}</p>
          </section>
        </div>
        <div className="RightSide">
          <section className="cookingSteps">
            <h3 className="cookingStepsTitle">Cooking Steps</h3>
            <p>{recipe.method}</p>
          </section>
        </div>
      </div>
    </article>
  );
};
export default Details;
