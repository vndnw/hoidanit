import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModalResult({ show, setShow, result }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(result);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete the user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Tổng câu hỏi: {result.countTotal}</h3>
          Điểm: {result.countCorrect}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalResult;
