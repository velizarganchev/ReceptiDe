import useGetRecipes from "../../../../hooks/useGetRecipes";
import RecipeCard from "../../Recipes/RecipeCard";

const Soups = () => {
  const filter = "Soups";
  const [recipe, setRecipe] = useGetRecipes(filter);

  if (recipe.length > 0) {
    return (
      <section className="container">
        <h2 className="sectionTitle">Soups</h2>
        {recipe.map((x) => (
          <RecipeCard key={x._id} recipe={x} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="container">
        <h2 className="sectionTitle">Soups</h2>
        <h2>No Recipes in Databese</h2>
      </section>
    );
  }
};
export default Soups;
