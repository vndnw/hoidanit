import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
const ManageUser = () => {
  return (
    <div className="manage-user">
      <h3 className="manage-user__title">Manage User</h3>
      <div>
        <div>
          <ModalCreateUser />
        </div>
        <div className="manage-user__table">table user</div>
      </div>
    </div>
  );
};

export default ManageUser;
