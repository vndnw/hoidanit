import AdminSidebar from "./AdminSidebar";
import "./Admin.scss";
import { Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <div className="d-flex vh-100">
      <div>
        <AdminSidebar />
      </div>
      <div style={{ width: "100%" }}>
        <header className="admin-header">Admin header</header>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
