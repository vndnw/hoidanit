import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Login.scss";
import { postLogin } from "../../api/userApi";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postLogin(email, password);
      if (response.EC === 0) {
        toast.success(response.EM);
        return navigate("/");
      }
      toast.error(response.EM);
    } catch (error) {
      console.log("Failed to login", error);
    }
  };
  return (
    <>
      <div className="auth-container">
        <div className="auth-header mt-2">
          <span className="me-2">Don&apos;t have an account?</span>
          <Button className="me-5" variant="outline-dark">
            Sign up
          </Button>
        </div>
        <div className="container">
          <form className="auth-form">
            <div className="auth-form-content">
              <h1 className="auth-form-title">HoiDanIt Fake</h1>
              <h3 className="auth-form-sub-title">Hello, who&apos;s this?</h3>
              <div className="form-group mt-3">
                <label>Email </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control mt-1"
                  placeholder="bruce@wayne.com"
                />
              </div>
              <div className="form-group my-3">
                <label>Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control mt-1"
                  placeholder="At least 8 characters"
                />
              </div>
              <p className=" text-right mt-2">
                <Link className="forgot-password" to="/forgot-password">
                  Forgot password?
                </Link>
              </p>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-dark"
                >
                  Login in to HoiDanIt
                </button>
              </div>
              <div className="my-2 go-home ">
                &#10152;
                <Link to={"/"}> Go to Home</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
