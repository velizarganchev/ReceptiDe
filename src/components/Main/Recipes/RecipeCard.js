import { Link } from "react-router-dom";
const RecipeCard = ({ recipe }) => {
  return (
    <article className="recipeCard">
      <Link to={`/recipeDetails/${recipe._id}`} className="recipeCardImg">
        <img src={recipe.pictureUrl} alt="" />
      </Link>
      <h4>
        <Link to={`/recipeDetails/${recipe._id}`} className="recipeTitle">
          {recipe.title}
        </Link>
      </h4>
    </article>
  );
};
export default RecipeCard;
