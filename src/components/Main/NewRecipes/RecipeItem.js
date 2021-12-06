import { Card } from "react-bootstrap";

const RecipeItem = ({recipe}) => {
  return (
    <Card>
      <Card.Img variant="top" src={recipe.pictureUrl} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>{recipe.ingredients}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{recipe.cookTime}</small>
      </Card.Footer>
    </Card>
  );
};
export default RecipeItem;
