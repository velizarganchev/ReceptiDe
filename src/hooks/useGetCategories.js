import { useState, useEffect } from "react";
import * as recipeService from "../services/recipeService";
const useGetCategories = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    recipeService
      .GetCategories()
      .then((res) => {
        setState(Object.values(res));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return [state, setState];
};
export default useGetCategories;
