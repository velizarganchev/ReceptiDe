import { Form, Button, FormGroup } from "react-bootstrap";
import * as recipeService from "../../services/recipeService";
import { useState, useEffect } from "react";
import useRecipeState from "../../hooks/useRecipeState"
import { useParams } from "react-router-dom";

const EditRecipe = () => {
  const [categories, setCategories] = useState([]);
  const { recipeId } = useParams();
  console.log(recipeId)
  const [recipe, setRecipe] = useRecipeState(recipeId);
  console.log(recipe)

  useEffect(() => {
    recipeService.GetCategories().then((res) => {
      setCategories(Object.values(res));
    });
  }, []);

  const onRecipeEdit = (e) => {
    e.preventDefault();

    let recipeData = Object.fromEntries(new FormData(e.currentTarget));

    recipeService.update(recipe._id, recipeData);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12 offset-lg-2 col-lg-8 offset-xl-2 col-xl-8">
          <h2 className="heading-margin text-center text-dark">
            Edite Recipe
          </h2>
          <Form onSubmit={onRecipeEdit} method="PUT">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pork belly recipes"
                name="title"
                defaultValue={recipe.title}
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
export default EditRecipe;
