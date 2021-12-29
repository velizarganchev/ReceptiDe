import useGetRecipes from "../../../../hooks/useGetRecipes";
import RecipeCard from "../../Recipes/RecipeCard";

const MainDishes = () => {
  const filter = "Main Dishes";
  const [recipe] = useGetRecipes(filter);

  if (recipe.length > 0) {
    return (
      <section className="container">
        <h2 className="sectionTitle">Main Dishes</h2>
        {recipe.map((x) => (
          <RecipeCard key={x._id} recipe={x} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="container">
        <h2 className="sectionTitle">Main Dishes</h2>
        <h2>No Recipes in Databese</h2>
      </section>
    );
  }
};
export default MainDishes;
