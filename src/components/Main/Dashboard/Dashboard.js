import { useEffect, useState } from "react";
import SearchBox from "../../Header/SearchBox";
import Categories from "../Categories/Categories";
import NewRecipes from "../Recipes/NewRecipes";
import * as recipeService from "../../../services/recipeService";

const Dashboard = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService
      .GetRecipes()
      .then((res) => {
        setRecipes(res); 
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <SearchBox recipes={recipes}/>
      <Categories />
      <NewRecipes recipes={recipes}/>
    </>
  );
};
export default Dashboard;
