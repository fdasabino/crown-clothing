import React from "react";
import { Link } from "react-router-dom";
import { selectIsCartOpen } from "../../store/cart/cartSelector";
import { selectCategoriesMap } from "../../store/categories/categoriesSelector";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logoutUser } from "../../utils/firebase";
import { selectCurrentUser } from "../../store/user/userSelector";
import CrownLogo from "../../assets/crown.png";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropDown";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { CgMenuRightAlt } from "react-icons/cg";

const onLogoutHandler = () => {
  logoutUser();
  toast.info("User logged out successfully...");
};

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Navbar expand="lg" fixed="top" className="p-3 navbar-custom">
      <Container className="mx-5">
        <Navbar.Brand as={Link} to="/">
          <img src={CrownLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span>Menu</span>
          <CgMenuRightAlt />
        </Navbar.Toggle>
      </Container>

      <Navbar.Collapse id="basic-navbar-nav">
        <Container className="d-flex justify-content-center">
          <Nav className="">
            <Nav.Link as={Link} to="/shop">
              shop
            </Nav.Link>

            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {Object.keys(categoriesMap).map((title) => {
                return (
                  <NavDropdown.Item as={Link} to={`/shop/${title}`} key={title}>
                    {title}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>

            {!currentUser && (
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/auth">
                  login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/auth/signup">
                  sign-up
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {currentUser && (
              <NavDropdown
                title={currentUser && currentUser.email.split("@")[0]}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/">
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  Orders
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as="button" onClick={onLogoutHandler}>
                  LOGOUT
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Container>

        <Container className="d-flex justify-content-center">
          <CartIcon />
          {isCartOpen && <CartDropDown />}
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
