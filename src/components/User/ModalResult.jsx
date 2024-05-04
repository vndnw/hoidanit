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
          <Modal.Title>Kết quả bài kiểm tra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Tổng câu hỏi: {result.countTotal}</div>
          <div>Điểm: {result.countCorrect}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary">Xem chi tiết</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalResult;
