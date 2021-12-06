import {Card} from "react-bootstrap"
import { Link } from "react-router-dom";

const AllProdukts = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link><Link to="produkt">Produkt Name</Link></Card.Link>
      </Card.Body>
    </Card>
  );
};
export default AllProdukts;
