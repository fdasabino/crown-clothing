import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutUser } from "../../utils/firebase";
import { selectIsCartOpen } from "../../store/cart/cartSelector";
import { selectCategoriesMap, selectIsLoading } from "../../store/categories/categoriesSelector";
import { selectCurrentUser } from "../../store/user/userSelector";
import CartDropDown from "../cart-dropdown/CartDropDown";
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import CartIcon from "../cart-icon/CartIcon";
import { toast } from "react-toastify";
import { AiOutlineCrown } from "react-icons/ai";
import "./Navigation.scss";
import Spinner from "../spinner/Spinner";

const onLogoutHandler = () => {
  logoutUser();
  toast.info("User logged out successfully...");
};

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Navbar fixed="top" expand="lg" bg="light" variant="light" className="py-4">
      <Container className="px-4">
        <Navbar.Brand as={Link} to="/">
          <div className="logo">
            Crown <AiOutlineCrown className="logo__icon" /> Clothing
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow} />
      </Container>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Offcanvas
          show={show}
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="end"
        >
          <Offcanvas.Header closeButton onClick={handleClose}>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>MENU</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Container className="d-flex justify-content-center align-items-center px-5">
              <Nav>
                <Nav.Link as={Link} to="/" onClick={handleClose}>
                  home
                </Nav.Link>

                <Nav.Link as={Link} to="/shop" onClick={handleClose}>
                  shop
                </Nav.Link>

                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    Object.keys(categoriesMap).map((title) => {
                      return (
                        <NavDropdown.Item
                          as={Link}
                          to={`/shop/${title}`}
                          key={title}
                          onClick={handleClose}
                        >
                          {title}
                        </NavDropdown.Item>
                      );
                    })
                  )}
                </NavDropdown>

                {!currentUser && (
                  <NavDropdown title="Login" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/auth" onClick={handleClose}>
                      login
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/auth/signup" onClick={handleClose}>
                      sign-up
                    </NavDropdown.Item>
                  </NavDropdown>
                )}

                {currentUser && (
                  <NavDropdown
                    title={currentUser && currentUser.email.split("@")[0]}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item as={Link} to="/" onClick={handleClose}>
                      Dashboard
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/" onClick={handleClose}>
                      Orders
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/" onClick={handleClose}>
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as="button"
                      onClick={() => {
                        onLogoutHandler();
                        handleClose();
                      }}
                    >
                      LOGOUT
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
                <Container className="d-flex justify-content-center align-items-center">
                  <CartIcon />
                  {isCartOpen && <CartDropDown handleClose={handleClose} />}
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
