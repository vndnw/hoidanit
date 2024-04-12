import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./FileUpload.scss";
import "react-toastify/dist/ReactToastify.css";

function ModalViewUser({ userUpdate, onUpdate }) {
  const [show, setShow] = useState(false);

  const [user, setUser] = useState({
    ...userUpdate,
  });

  const [previewSource, setPreviewSource] = useState(
    userUpdate.image ? `data:image/jpeg;base64,${userUpdate.image}` : null
  );

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        view
      </Button>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  placeholder="Enter username"
                  value={user.username}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  disabled
                  type="password"
                  placeholder="Password"
                  value={user.password}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  disabled
                  placeholder="user@gmail.com"
                  type="email"
                  value={user.email}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridRole">
                <Form.Label>Role</Form.Label>
                <Form.Select disabled value={user.role}>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group controlId="formGridFile" className="mb-3">
              <Form.Label style={{ display: "block" }}>
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  disabled
                  type="file"
                  className="form-control"
                  hidden
                  accept="image/*"
                />
                {previewSource ? (
                  <div
                    className="mt-3"
                    style={{
                      height: "100px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={previewSource}
                      alt="Your image"
                      style={{
                        height: "100%",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>
                ) : (
                  <div className="upload-image">
                    <FaCloudUploadAlt size={100} />
                    <p>Drop or upload your image here</p>
                  </div>
                )}
              </Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalViewUser;
