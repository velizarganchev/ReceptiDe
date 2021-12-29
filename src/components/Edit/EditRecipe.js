import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, FormGroup, Alert } from "react-bootstrap";

import * as recipeService from "../../services/recipeService";
import useGetCategories from "../../hooks/useGetCategories";
import useRecipeState from "../../hooks/useRecipeState";
import useValidate from "../../hooks/useValidate";
import isAuth from "../../hoc/isAuth";

const EditRecipe = () => {
  const navigate = useNavigate();
  const [categories] = useGetCategories();

  const { recipeId } = useParams();
  const [recipe] = useRecipeState(recipeId);

  const [errors, setErrors] = useValidate();

  const titleErrorHandler = (e) => {
    let value = e.target.value;
    setErrors(value, "title");
  };
  const ingredientErrorHandler = (e) => {
    let value = e.target.value;
    setErrors(value, "ingredient");
  };
  const methodErrorHandler = (e) => {
    let value = e.target.value;
    setErrors(value, "method");
  };
  const cookTimeErrorHandler = (e) => {
    let value = e.target.value;
    console.log(value);
    setErrors(value, "cookTime");
  };
  const servesErrorHandler = (e) => {
    let value = e.target.value;
    setErrors(value, "serves");
  };
  const imageErrorHandler = (e) => {
    let value = e.target.value;
    setErrors(value, "pictureUrl");
  };
  const videoErrorHandler = (e) => {
    let value = e.target.value;
    setErrors(value, "videoUrl");
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
                onBlur={ingredientErrorHandler}
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
                onBlur={methodErrorHandler}
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
                onBlur={cookTimeErrorHandler}
                defaultValue={recipe.cookTime}
              />
              <Alert variant="danger" show={errors.cookTime}>
                {errors.cookTime}
              </Alert>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Serves</Form.Label>
              <Form.Control
                type="number"
                placeholder="6"
                name="serves"
                onBlur={servesErrorHandler}
                defaultValue={recipe.serves}
              />
              <Alert variant="danger" show={errors.serves}>
                {errors.serves}
              </Alert>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="url"
                placeholder="https://www.recepis.de"
                name="pictureUrl"
                onBlur={imageErrorHandler}
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
                onBlur={videoErrorHandler}
                defaultValue={recipe.videoUrl}
              />
              <Alert variant="danger" show={errors.videoUrl}>
                {errors.videoUrl}
              </Alert>
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
