import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";
import useRecipeState from "../hooks/useRecipeState";

export const isOwner = (Component) => {
  const Wrapper = (props) => {
    const { user } = useAuthContext();
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useRecipeState(recipeId);
    
    return user._id === recipe._ownerId ? (
      <Component {...props} />
    ) : (
      <Navigate to="/" />
    );
  };
  return Wrapper;
};
export default isOwner;
