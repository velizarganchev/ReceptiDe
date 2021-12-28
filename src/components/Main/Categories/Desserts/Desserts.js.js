import RecipeCard from "../../Recipes/RecipeCard";
import useGetRecipes from "../../../../hooks/useGetRecipes";

const Desserts = () => {
  const filter = "Desserts";
  const [recipe, setRecipe] = useGetRecipes(filter);

  if (recipe.length > 0) {
    return (
      <section className="container">
        <h2 className="sectionTitle">Desserts</h2>
        {recipe.map((x) => (
          <RecipeCard key={x._id} recipe={x} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="container">
        <h2 className="sectionTitle">Desserts</h2>
        <h2>No Recipes in Databese</h2>
      </section>
    );
  }
};
export default Desserts;
