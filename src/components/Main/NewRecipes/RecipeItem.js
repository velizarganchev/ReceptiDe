
import { Link } from "react-router-dom";
const RecipeItem = ({ recipe }) => {
  return (
    <article className="recipeCard">
      <Link to={`/recipeDetails/${recipe._id}`} className="recipeCardImg">
        <img src={recipe.pictureUrl} alt="" />
      </Link>
      <h4>
        <Link to={`/recipeDetails/${recipe._id}`} className="recipeTitle">
        {recipe.title}
        </Link>
      </h4>
    </article>

    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={recipe.pictureUrl} />
    //   <Card.Body>
    //     <Card.Title>{recipe.title}</Card.Title>
    //     <Card.Text>{recipe.method}</Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroupItem>{recipe.cookTime}</ListGroupItem>
    //     <ListGroupItem>{recipe.serves}</ListGroupItem>
    //     <ListGroupItem>{recipe.category}</ListGroupItem>
    //   </ListGroup>
    //   <Card.Body>
    //     <Card.Link as={Link} to={`/recipeDetails/${recipe._id}`}>Details</Card.Link>
    //     <Card.Link href={recipe.videoUrl}>Video</Card.Link>
    //   </Card.Body>
    // </Card>
  );
};
export default RecipeItem;
