import SearchBox from "../../Header/SearchBox";
import Categories from "../Categories/Categories";
import NewRecipes from "../NewRecipes/Recipes";
import WithMeat from "../MainDishes/MainDish";

const Dashboard = () => {
  return (
    <>
      <SearchBox />
      <Categories />
      <NewRecipes/>
      <WithMeat />
    </>
  );
};
export default Dashboard;
