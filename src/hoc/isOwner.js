import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import * as recipeService from "../services/recipeService"

export const isOwner = (Component) => {
  const Wrapper = (props) => {
    const [user] = useAuthContext();
    const [recipeId] = useParams();
    const [recipe, setRecipe] = useState();


    useEffect(() => {
      recipeService
        .GetEditRecipe(recipeId)
        .then((recipe) => {
          setRecipe(recipe);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, [recipeId]);

    console.log(user._id)
    console.log(recipe);

    return user._id  ? (
      <Component {...props} />
    ) : (
      <Navigate to="/my-recipes" />
    );
  };
  return Wrapper;
};
export default isOwner;
