import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = () => {
  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {
    setUpdate((prevState) => !prevState);
  };
  return (
    <>
      <div className="manage-user">
        <h3 className="manage-user__title">Manage User</h3>
        <div>
          <div>
            <ModalCreateUser onUpdate={handleUpdate} />
          </div>
          <div className="manage-user__table">
            {/* <TableUser onUpdate={handleUpdate} update={update} /> */}
            <TableUserPaginate onUpdate={handleUpdate} update={update} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ManageUser;
