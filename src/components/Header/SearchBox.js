import { FormControl, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import * as recipeService from "../../services/recipeService";
import { useNavigate } from "react-router";

//izvikvam get recipes i filtriram po ime !!!!!!!!!

const SearchBox = () => {
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   recipeService
  //     .GetRecipes()
  //     .then((res) => {
  //       let currRecipe = res.filter((x) => x.title === " Family one-pot recipes");
  //       console.log(currRecipe)
  //       setRecipe(currRecipe);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const onSearch = (e) => {
    e.preventDefault();

    const imput = new FormData(e.currentTarget);
    var search = imput.get("searchImput");
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
