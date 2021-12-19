import { FormControl, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import * as recipeService from "../../services/recipeService";
import { useNavigate } from "react-router";

//izvikvam get recipes i filtriram po ime !!!!!!!!!

const SearchBox = () => {
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();

    const imput = new FormData(e.currentTarget);
    var recipeName = imput.get("searchImput");

    recipeService
      .GetRecipes()
      .then((res) => {
        const searcedRecipe = res.find((recipe) => recipe.title === recipeName);
        if (searcedRecipe) {
          navigate(`recipeDetails/${searcedRecipe._id}`);
        } else {
          navigate("/recipe-not-fount");
        }
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
