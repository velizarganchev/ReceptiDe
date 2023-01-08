import { useNavigate } from "react-router-dom";
import { Form, Button, FormGroup, Alert, Row, Col } from "react-bootstrap";

import * as recipeService from "../../services/recipeService";
import useGetCategories from "../../hooks/useGetCategories";
import useValidate from "../../hooks/useValidate";
import { isAuth } from "../../hoc/isAuth";

const CreateRecipe = ({ user }) => {
  const navigate = useNavigate();

  const [categories] = useGetCategories();
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

  const onRecipeCreate = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title");
    const ingredients = formData.get("ingredients");
    const method = formData.get("method");
    const category = formData.get("category");
    const cookTime = formData.get("cookTime");
    const serves = formData.get("serves");
    const pictureUrl = formData.get("pictureUrl");
    const videoUrl = formData.get("videoUrl");

    recipeService
      .Create(
        {
          title,
          ingredients,
          method,
          category,
          cookTime,
          serves,
          pictureUrl,
          videoUrl,
        },
        user.accessToken
      )
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12 offset-lg-2 col-lg-8 offset-xl-2 col-xl-8">
          <h2 className="heading-margin text-center text-dark">
            Create Recipe
          </h2>
          <Form onSubmit={onRecipeCreate} method="POST">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pork belly recipes"
                name="title"
                onBlur={titleErrorHandler}
              />
              <Alert variant="danger" show={errors.title}>
                {errors.title}
              </Alert>
            </Form.Group>
            <Row className="align-items-center">
              <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                <Form.Label>Ingredients Name</Form.Label>
                <Form.Control
                  className="mb-3"
                  type="text"
                  name="ingredients"
                  onBlur={ingredientErrorHandler}
                  placeholder=""
                />
                <Alert variant="danger" show={errors.ingredient}>
                  {errors.ingredient}
                </Alert>
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                <Form.Label>Ingredients Quantity</Form.Label>
                <Form.Control
                  className="mb-3"
                  type="text"
                  name="ingredients"
                  onBlur={ingredientErrorHandler}
                  placeholder=""
                />
                <Alert variant="danger" show={errors.ingredient}>
                  {errors.ingredient}
                </Alert>
              </Form.Group>
              <FormGroup as={Col}>
                <Button variant="outline-secondary">
                  Add
                </Button>
              </FormGroup>
              <FormGroup>
                <Form.Control
                  className="mb-3"
                  as="textarea"
                  name="ingredients"
                  onBlur={ingredientErrorHandler}
                  rows={3}
                  placeholder=""
                />
              </FormGroup>
            </Row>


            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Method</Form.Label>
              <Form.Control
                as="textarea"
                name="method"
                onBlur={methodErrorHandler}
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
              />
              <Alert variant="danger" show={errors.cookTime}>
                {errors.cookTime}
              </Alert>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Serves</Form.Label>
              <Form.Control
                type="text"
                placeholder="6"
                name="serves"
                onBlur={servesErrorHandler}
              />
              <Alert variant="danger" show={errors.serves}>
                {errors.serves}
              </Alert>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Picture Url</Form.Label>
              <Form.Control
                type="url"
                placeholder="https://www.recepis.de"
                name="pictureUrl"
                onBlur={imageErrorHandler}
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
              />
              <Alert variant="danger" show={errors.videoUrl}>
                {errors.videoUrl}
              </Alert>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default isAuth(CreateRecipe);
