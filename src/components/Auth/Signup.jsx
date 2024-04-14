import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Login.scss";
import { postRegister } from "../../api/userApi";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      return toast.error("Please fill all fields");
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid email");
      return;
    }
    try {
      const response = await postRegister(email, username, password);
      if (response.EC === 0) {
        toast.success(response.EM);
        return navigate("/login");
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
          <span className="me-2">Already have an account?</span>
          <Button
            onClick={() => navigate("/login")}
            className="me-5"
            variant="outline-dark"
          >
            Login
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
                  type="email"
                />
              </div>
              <div className="form-group my-3">
                <label>Username</label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control mt-1"
                  placeholder="bruce"
                />
              </div>
              <div className="form-group my-3">
                <label>Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className="form-control mt-1"
                  placeholder="At least 8 characters"
                />
              </div>
              <div className="form-group my-3 ">
                <input
                  onClick={() => setShowPassword(!showPassword)}
                  checked={showPassword}
                  className="me-1"
                  type="checkbox"
                  name="show"
                  id=""
                />
                <label>Show password</label>
              </div>

              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-dark"
                >
                  Signup in to HoiDanIt
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
