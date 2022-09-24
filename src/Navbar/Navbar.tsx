import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function AppNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand>EASE</Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="3 items"
                        >
                            <NavDropdown.Item>Item 1 - 27$</NavDropdown.Item>
                            <NavDropdown.Item>Item 2 - 27$</NavDropdown.Item>
                            <NavDropdown.Item>Item 3 - 27$</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Container>
                                    View cart
                                </Container>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;