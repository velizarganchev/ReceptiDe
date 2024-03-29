import { useState, useEffect } from "react";
import * as recipeService from "../services/recipeService"

const useGetRecipes = (filter) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    recipeService
      .GetRecipes()
      .then((res) => {
        let data = res[0].filter((x) => x.category.name === filter);
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter]);

  return [state, setState];
};
export default useGetRecipes;
