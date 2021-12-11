import SearchBox from "../../Header/SearchBox";
import Categories from "../Categories/Categories";
import MainDishes from "../Categories/MainDishes/MainDishes";
import NewRecipes from "../Recipes/Recipes";



const Dashboard = () => {
  return (
    <>
      <SearchBox />
      <Categories />
      <NewRecipes/>
      <MainDishes/>
    </>
  );
};
export default Dashboard;
