import { useNavigate } from "react-router";
import { FormControl, Form, Button } from "react-bootstrap";
import * as recipeService from "../../services/recipeService";

const SearchBox = () => {
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();

    const imput = new FormData(e.currentTarget);
    var recipeName = imput.get("searchImput");

    recipeService
      .GetRecipes()
      .then((res) => {
        const searcedRecipe = res.filter((recipe) => recipe.title.includes(recipeName));
        console.log(searcedRecipe)
        // if (searcedRecipe) {
        //   navigate(`recipeDetails/${searcedRecipe._id}`);
        // } else {
        //   navigate("/recipe-not-fount");
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
  );
};
export default SearchBox;
