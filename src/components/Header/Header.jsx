import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const { account, isAuth } = useSelector((state) => state.user);
  console.log(account, isAuth);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid="">
        <Link className="navbar-brand" to="/">
          Hỏi Dân IT Fake
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/user">
              User
            </NavLink>
            <NavLink className="nav-link" to="/admin">
              Admin
            </NavLink>
          </Nav>
          <Nav
            className="ms-auto my-2 my-lg-0 gap-2"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {isAuth ? (
              <NavDropdown title="Settings" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Button
                  onClick={handleLogin}
                  className="border border-dark"
                  variant="light"
                >
                  Log in
                </Button>
                <Button onClick={handleSignup} variant="dark">
                  Sign up
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
