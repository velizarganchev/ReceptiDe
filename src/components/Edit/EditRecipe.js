import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, FormGroup, Alert } from "react-bootstrap";

import * as recipeService from "../../services/recipeService";
import { useState } from "react";
import useRecipeState from "../../hooks/useRecipeState";
import isAuth from "../../hoc/isAuth";
import useGetCategories from "../../hooks/useGetCategories";

const EditRecipe = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useGetCategories();

  const { recipeId } = useParams();
  const [recipe, setRecipe] = useRecipeState(recipeId);

  const [errors, setErrors] = useState({
    title: "",
    ingredient: "",
    pictureUrl: "",
    method: "",
  });

  const titleErrorHandler = (e) => {
    let currTitle = e.target.value;

    if (currTitle.length < 3) {
      setErrors((state) => ({
        ...state,
        title: "Your name sould be at least 3 characters!",
      }));
    } else {
      setErrors((state) => ({ ...state, title: false }));
    }
  };

  const onRecipeEdit = (e) => {
    e.preventDefault();
    let recipeData = Object.fromEntries(new FormData(e.currentTarget));
    recipeService
      .Update(recipe._id, recipeData)
      .then(navigate("/my-recipes"))
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12 offset-lg-2 col-lg-8 offset-xl-2 col-xl-8">
          <h2 className="heading-margin text-center text-dark">Edite Recipe</h2>
          <Form onSubmit={onRecipeEdit} method="PUT">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pork belly recipes"
                name="title"
                onBlur={titleErrorHandler}
                defaultValue={recipe.title}
              />
              <Alert variant="danger" show={errors.title}>
                {errors.title}
              </Alert>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                as="textarea"
                name="ingredients"
                defaultValue={recipe.ingredients}
                rows={3}
                placeholder="1.3kg piece pork belly, boned, rind left on and scored (ask your butcher to do this, 2 tsp sunflower oil)"
              />
              <Alert variant="danger" show={errors.ingredient}>
                {errors.ingredient}
              </Alert>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Method</Form.Label>
              <Form.Control
                as="textarea"
                name="method"
                defaultValue={recipe.method}
                rows={3}
                placeholder="Heat oven to 180C/fan 160C/gas 4. Lay the pork, skin-side up, on a rack in a roasting tin. Trickle with a little oil,....... "
              />
              <Alert variant="danger" show={errors.method}>
                {errors.method}
              </Alert>
            </Form.Group>
            <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Categories</Form.Label>
              <Form.Select name="category">
                {categories.map((x) => (
                  <option key={x._id} value={x.name}>
                    {x.name}
                  </option>
                ))}
              </Form.Select>
            </FormGroup>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cook Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="3 hrs and 30 mins"
                name="cookTime"
                defaultValue={recipe.cookTime}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Serves</Form.Label>
              <Form.Control
                type="text"
                placeholder="6"
                name="serves"
                defaultValue={recipe.serves}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Picture Url</Form.Label>
              <Form.Control
                type="url"
                placeholder="https://www.recepis.de"
                name="pictureUrl"
                defaultValue={recipe.pictureUrl}
              />
              <Alert variant="danger" show={errors.pictureUrl}>
                {errors.pictureUrl}
              </Alert>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Video Url</Form.Label>
              <Form.Control
                type="url"
                placeholder="https://www.recepis.de"
                name="videoUrl"
                defaultValue={recipe.videoUrl}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Edit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default isAuth(EditRecipe);
