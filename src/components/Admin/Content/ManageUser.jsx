import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import TableUser from "./TableUser";
const ManageUser = () => {
  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {
    setUpdate((prevState) => !prevState);
  };
  const test = 50;
  return (
    <div className="manage-user">
      <h3 className="manage-user__title">Manage User</h3>
      <div>
        <div>
          <ModalCreateUser onUpdate={handleUpdate} />
        </div>
        <div className="manage-user__table">
          <TableUser update={update} />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
