import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function NavBar() {
    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">GrasasBio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">¿Quiénes somos?</Nav.Link>
            <Nav.Link href="#features">Servicios</Nav.Link>
            <Nav.Link href="#pricing">¿Cómo lo hacemos?</Nav.Link>
            <Nav.Link href="#pricing">A.C.U.</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <Nav.Link href="#pricing">Grabitec</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}