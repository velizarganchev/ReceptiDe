import useGetRecipes from "../../../../hooks/useGetRecipes";
import RecipeCard from "../../Recipes/RecipeCard";

const Salads = () => {
  const filter = "Salads";
  const [recipe, setRecipe] = useGetRecipes(filter);

  if (recipe.length > 0) {
    return (
      <section className="container">
        <h2 className="sectionTitle">Salads</h2>
        {recipe.map((x) => (
          <RecipeCard key={x._id} recipe={x} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="container">
        <h2 className="sectionTitle">Salads</h2>
        <h2>No Recipes in Databese</h2>
      </section>
    );
  }
};
export default Salads;
