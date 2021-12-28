import RecipeCard from "./RecipeCard";

const NewRecipes = ({recipes}) => {

  if (recipes.length > 0) {
    return (
      <section className="container">
        <h2 className="sectionTitle">New Recipes</h2>
        {recipes.map((x) => (
          <RecipeCard key={x._id} recipe={x} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="container">
        <h2 className="sectionTitle">New Recipes</h2>
        <h2>No Recipes in Databese</h2>
      </section>
    );
  }
};
export default NewRecipes;
