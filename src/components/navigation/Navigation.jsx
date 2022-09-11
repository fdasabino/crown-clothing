import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutUser } from "../../utils/firebase";
import { selectIsCartOpen } from "../../store/cart/cartSelector";
import { selectCategoriesMap } from "../../store/categories/categoriesSelector";
import { selectCurrentUser } from "../../store/user/userSelector";
import CartDropDown from "../cart-dropdown/CartDropDown";
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import CartIcon from "../cart-icon/CartIcon";
import { toast } from "react-toastify";
import "./Navigation.scss";

const onLogoutHandler = () => {
  logoutUser();
  toast.info("User logged out successfully...");
};

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Navbar fixed="top" expand="lg" bg="light" variant="light" className="py-4">
      <Container className="px-5">
        <Navbar.Brand as={Link} to="/">
          Crown Clothing
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>MENU</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Container className="d-flex justify-content-center align-items-center px-5">
              <Nav>
                <Nav.Link as={Link} to="/">
                  home
                </Nav.Link>

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
                <Container className="d-flex justify-content-center align-items-center">
                  <CartIcon />
                  {isCartOpen && <CartDropDown />}
                </Container>
              </Nav>
            </Container>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
