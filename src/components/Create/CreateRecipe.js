import { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Button, FormGroup } from "react-bootstrap";
import * as recipeService from "../../services/recipeService";
import { AuthContext } from "../../contexts/AuthContext";

const CreateRecipe = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    recipeService.GetCategories().then((res) => {
      setCategories(Object.values(res));
    });
  }, []);

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
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                as="textarea"
                name="ingredients"
                rows={3}
                placeholder="1.3kg piece pork belly, boned, rind left on and scored (ask your butcher to do this, 2 tsp sunflower oil)"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Method</Form.Label>
              <Form.Control
                as="textarea"
                name="method"
                rows={3}
                placeholder="Heat oven to 180C/fan 160C/gas 4. Lay the pork, skin-side up, on a rack in a roasting tin. Trickle with a little oil,....... "
              />
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
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Serves</Form.Label>
              <Form.Control type="text" placeholder="6" name="serves" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Picture Url</Form.Label>
              <Form.Control
                type="url"
                placeholder="https://www.recepis.de"
                name="pictureUrl"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Video Url</Form.Label>
              <Form.Control
                type="url"
                placeholder="https://www.recepis.de"
                name="videoUrl"
              />
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
export default CreateRecipe;
