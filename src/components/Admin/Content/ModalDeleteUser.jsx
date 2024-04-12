import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./FileUpload.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteUser } from "../../../api/userApi";

function ModalUpdateUser({ userUpdate, onUpdate }) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    ...userUpdate,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteUser = async () => {
    try {
      const response = await deleteUser(user.id);
      if (response.EC) {
        toast.error(response.EM);
        return;
      }
      toast.success(response.EM);
      handleClose();
    } catch (error) {
      console.log(error);
      toast.error(error.EM);
      handleClose();
    }
    onUpdate();
  };
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete the user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure delete users with email <b>{userUpdate.email}?</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleDeleteUser}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdateUser;
