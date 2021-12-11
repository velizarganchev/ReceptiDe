import SearchBox from "../../Header/SearchBox";
import Categories from "../Categories/Categories";
import MainRecipes from "../MainRecipes/MainRecipes";
import NewRecipes from "../NewRecipes/Recipes";



const Dashboard = () => {
  return (
    <>
      <SearchBox />
      <Categories />
      <NewRecipes/>
      <MainRecipes/>
    </>
  );
};
export default Dashboard;
