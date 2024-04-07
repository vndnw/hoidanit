import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FileUpload = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [imageName, setImageName] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        setImageName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveUpload = () => {
    setImageSrc("");
    setImageName("");
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="file-upload">
      <Button
        className="file-upload-btn"
        onClick={() => document.querySelector(".file-upload-input").click()}
        onMouseEnter={() =>
          document.querySelector(".file-upload-btn").classList.add("hover")
        }
        onMouseLeave={() =>
          document.querySelector(".file-upload-btn").classList.remove("hover")
        }
      >
        Add Image
      </Button>

      <div
        className={`image-upload-wrap ${isDragging ? "image-dropping" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <Form.Control
          className="file-upload-input"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />
        <div className="drag-text">
          <h3>Drag and drop a file or select add Image</h3>
        </div>
      </div>
      {imageSrc && (
        <div className="file-upload-content">
          <img className="file-upload-image" src={imageSrc} alt="your image" />
          <div className="image-title-wrap">
            <Button onClick={handleRemoveUpload} className="remove-image">
              Remove <span className="image-title">Uploaded Image</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
