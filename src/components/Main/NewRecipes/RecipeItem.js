import { Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeItem = ({recipe}) => {
  return (
    <Card>
      <Card.Img variant="top" src={recipe.pictureUrl} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>{recipe.ingredients}</Card.Text>
        <Link className="button" to={`/details/${recipe._id}`}>Details</Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{recipe.cookTime}</small>
      </Card.Footer>
    </Card>
  );
};
export default RecipeItem;
