import RecipeCard from "./RecipeCard";

const NewRecipes = ({ recipes }) => {
  if (recipes[1]) {
    return (
      <section className="container">
        <h2 className="sectionTitle">New Recipes</h2>
        {recipes[0].map((x) => (
          <RecipeCard key={x.id} recipe={x} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="container">
        <h2 className="sectionTitle">New Recipes</h2>
        <h2>{recipes[2]}</h2>
      </section>
    );
  }
};
export default NewRecipes;
