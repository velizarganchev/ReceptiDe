import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import * as recipeService from "../../../services/recipeService";

const Details = () => {
  const [recipe, setRecipe] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => {
    recipeService
      .GetRecipe(recipeId)
      .then((res) => {
        setRecipe(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipeId]);

  return (
    <Card className="text-center details">
      <Card.Header>{recipe.title}</Card.Header>
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          {recipe.ingredients}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{recipe.cookTime}</Card.Footer>
    </Card>
  );
};
export default Details;
