import { FormControl, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBox = () => {
  return (
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search Recipe"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
  );
};
export default SearchBox;
