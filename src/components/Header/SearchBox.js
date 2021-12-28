import { useState } from "react";
import { FormControl, Form, Button, Alert } from "react-bootstrap";

import RecipeCard from "../Main/Recipes/RecipeCard";

const SearchBox = ({ recipes }) => {
  const [recipe, setRecipe] = useState([]);
  const [errors, setErrors] = useState({
    search: "",
  });

  const onSearch = (e) => {
    e.preventDefault();

    const imput = new FormData(e.currentTarget);
    let recipeName = imput.get("searchImput");

    const searcedRecipes = recipes.filter((recipe) =>
      recipe.title.includes(recipeName)
    );
    setRecipe(searcedRecipes);

    console.log(searcedRecipes.length);
    if (searcedRecipes.length === 0) {
      setErrors((state) => ({
        ...state,
        search: "Recipe Not Found!",
      }));
    } else {
      setErrors((state) => ({
        ...state,
        search: "",
      }));
    }
  };

  return (
    <>
      <Form className="d-flex search" onSubmit={onSearch}>
        <FormControl
          name="searchImput"
          type="search"
          placeholder="Search Recipe"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
      <Alert variant="danger" show={errors.search}>
        {errors.search}
      </Alert>
      {recipe.length > 0 ? (
        <section className="container">
          <h2 className="sectionTitle">Recipes found</h2>
          {recipe.map((x) => (
            <RecipeCard key={x._id} recipe={x} />
          ))}
        </section>
      ) : (
        <section className="container"></section>
      )}
    </>
  );
};
export default SearchBox;
