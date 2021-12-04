import {CardGroup} from "react-bootstrap";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  return (
    <section>
      <h2>New Recipes</h2>
      <CardGroup>
        <Recipe />
      </CardGroup>
    </section>
  );
};
export default Recipes;