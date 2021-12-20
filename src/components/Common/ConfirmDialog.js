import { Modal, Button } from "react-bootstrap";

const ConfirmDialog = ({ show, close, onDelete }) => {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Recipe</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to delete the recipe?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="danger" onClick={onDelete}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ConfirmDialog;
