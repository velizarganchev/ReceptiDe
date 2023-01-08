import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import useRecipeState from "../../../hooks/useRecipeState";
import * as recipeService from "../../../services/recipeService";
import { useAuthContext } from "../../../contexts/AuthContext";
import ConfirmDialog from "../../Common/ConfirmDialog";

const Details = () => {

  const navigate = useNavigate();
  const { recipeId } = useParams();
  const [recipe] = useRecipeState(recipeId);
  const { user } = useAuthContext();
  const [deleteDialog, setDeleteDialog] = useState(false);

  console.log(user.userId)
  console.log(recipe.id)
  const onDeleteHandler = () => {
    recipeService
      .Remove(recipeId, user.accessToken)
      .then(() => {
        navigate("/Home");
      })
      .finally(() => {
        setDeleteDialog(false);
      })
      .catch((err) => {
        console.log(err.message);
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
            <div className="mainImage">
              <img className="details-img" src={recipe.pictureUrl} alt="" />
            </div>
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
          {user.userId &&
            (recipe.id === user.userId ? ownerButton : guestButton)}
          {/* <div className="likes">
            <span>Likes: {recipe.likes?.length}</span>
          </div> */}
        </div>
        <div className="openRecipeBootomDetails">
          <div className="LeftSide">
            <section className="ingredients">
              <h3 className="ingredientsTitle">Ingredients</h3>
              {
                recipe.ingredients?.map((item => <p key={item.name}>{item.name} - {item.quantity}</p>))
              }
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
