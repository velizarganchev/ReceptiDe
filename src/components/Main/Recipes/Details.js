import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as recipeService from "../../../services/recipeService";
import { AuthContext } from "../../../contexts/AuthContext";

const Details = () => {
  const { user } = useContext(AuthContext);
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
      <div>
        {user._id && recipe._ownerId === user._id ? 
          <>
            <Link to={"/edit"} type="button" className="btn btn-warning">
              Edit
            </Link>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </>
         : 
          <button type="button" className="btn btn-info">
            Like
          </button>
        }

        <div className="likes">
          <span>Likes: {recipe.likes?.length}</span>
        </div>
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
