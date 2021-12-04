import {CardGroup} from "react-bootstrap";
import RecipeWithMeat from "./RecipeWithMeat";

const WithMeat = () => {
  return (
    <section>
      <h2>With Meat</h2>
      <CardGroup>
        <RecipeWithMeat />
      </CardGroup>
    </section>
  );
};
export default WithMeat;