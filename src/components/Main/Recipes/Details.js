import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import useRecipeState from "../../../hooks/useRecipeState";
import * as recipeService from "../../../services/recipeService";
import { useAuthContext } from "../../../contexts/AuthContext";
import ConfirmDialog  from "../../Common/ConfirmDialog";

const Details = () => {

  const navigate = useNavigate();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useRecipeState(recipeId);
  const { user } = useAuthContext();
  const [deleteDialog, setDeleteDialog] = useState(false);

  const onDeleteHandler = () => {
    recipeService
      .Remove(recipeId, user.accessToken)
      .then(() => {
        navigate("/Home");
      })
      .finally(() => {
        setDeleteDialog(false);
      });
  };

  const onDeleteClickHandler = () => {
    setDeleteDialog(true);
  };

  const ownerButton = (
    <>
      <Link
        to={`/edit/${recipeId}`}
        type="button"
        className="btn btn-warning btnDetails"
      >
        Edit
      </Link>
      <button
        type="button"
        className="btn btn-danger btnDetails"
        onClick={onDeleteClickHandler}
      >
        Delete
      </button>
    </>
  );
  const guestButton = (
    <button type="button" className="btn btn-info">
      Like
    </button>
  );

  return (
    <>
      <ConfirmDialog
        show={deleteDialog}
        close={() => setDeleteDialog(false)}
        onDelete={onDeleteHandler}
      />
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
                <i className="fas fa-clock fa-3x"></i>
              </div>
              <span className="detailCellNumber">{recipe.cookTime}</span>
            </div>
            <div className="detaislCell">
              <div className="detailCellImage">
                <i className="fas fa-utensils fa-3x"></i>
              </div>
              <span className="detailCellNumber serves">x{recipe.serves}</span>
            </div>
          </section>
        </div>
        <div>
          {user._id &&
            (recipe._ownerId === user._id ? ownerButton : guestButton)}
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
    </>
  );
};
export default Details;
