import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./FileUpload.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postCreateUser } from "../../../api/userApi";

function ModalCreateUser({ onUpdate }) {
  const [show, setShow] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    role: "user",
    userImage: "",
  });

  const handleClose = () => {
    setUser({
      username: "",
      password: "",
      email: "",
      role: "user",
      userImage: "",
    });
    setPreviewSource(null);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleAddUser = async () => {
    const { username, password, email, role, userImage } = user;
    if (!username || !password || !email || !role || !userImage) {
      toast.error("Please fill all fields");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid email");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("username", user.username);
      formData.append("password", user.password);
      formData.append("email", user.email);
      formData.append("role", user.role);
      formData.append("userImage", user.userImage);
      const response = await postCreateUser(formData);
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

  const [previewSource, setPreviewSource] = useState();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setUser({
      ...user,
      userImage: file,
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (e.dataTransfer.items && e.dataTransfer.items[0]) {
      const file = e.dataTransfer.items[0].getAsFile();
      previewFile(file);
      setUser({
        ...user,
        userImage: file,
      });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.items && e.dataTransfer.items[0]) {
      const file = e.dataTransfer.items[0].getAsFile();
      previewFile(file);
      setUser({
        ...user,
        userImage: file,
      });
    }
  };

  const previewFile = (file) => {
    if (!file) return;
    const src = URL.createObjectURL(file);
    setPreviewSource(src);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new user
      </Button>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="user@gmail.com"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridRole">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  value={user.role}
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group controlId="formGridFile" className="mb-3">
              <Form.Label
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                style={{ display: "block" }}
              >
                <Form.Label>Upload userImage</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleFileInputChange}
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
          <Button variant="primary" onClick={handleAddUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default ModalCreateUser;
