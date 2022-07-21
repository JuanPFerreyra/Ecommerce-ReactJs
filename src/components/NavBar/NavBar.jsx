import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';
import { useCartContext } from '../Contexts/CartContexts';


function NavBar() {
    const {itemCartWidget} = useCartContext() 
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">JT Indumentaria</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Preguntas Frecuentes</Nav.Link>
                    <NavDropdown title="Prendas" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Abrigos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Pantalones</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Tabla de talles</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <div>
                    <CartWidget />
                    <div>{itemCartWidget() !== 0 && itemCartWidget()}</div>
                </div>
            </Container>
        </Navbar>
    )
  }

  export default NavBar;