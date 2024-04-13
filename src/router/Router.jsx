import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "../App";
import Home from "../components/Home/Home";
import User from "../components/User/User";
import Admin from "../components/Admin/Admin";
import DashBoard from "../components/Admin/Content/DashBoard";
import ManageUser from "../components/Admin/Content/ManageUser";
import Login from "../components/Auth/Login";
import { ToastContainer } from "react-toastify";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="manage-user" element={<ManageUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default Router;
