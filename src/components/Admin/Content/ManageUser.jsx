import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import TableUser from "./TableUser";
const ManageUser = () => {
  return (
    <div className="manage-user">
      <h3 className="manage-user__title">Manage User</h3>
      <div>
        <div>
          <ModalCreateUser />
        </div>
        <div className="manage-user__table">
          <TableUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
