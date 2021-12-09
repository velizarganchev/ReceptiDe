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
        console.log(res)
        setRecipe(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Card className="text-center details">
      <Card.Header>{recipe.title}</Card.Header>
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};
export default Details;
