import React from 'react';
import { Component } from "react";
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router } from "react-router-dom";
  import {HashLink as Link} from 'react-router-hash-link';
import "./header.css";

class Header extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={12} lg={12} sm={12}>
                        <Router>
                        <Navbar className="navbar_header" expand="lg">
                            <Navbar.Brand href="#home"><img src="images/logo.jpg" width="200px" alt="Interdinamik_logo" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Item className="nav-item"><Nav.Link><Link to="#inicio" >Inicio</Link></Nav.Link></Nav.Item>
                                    <Nav.Item className="nav-item"><Nav.Link><Link to="#productos" className="nav-item">Productos</Link></Nav.Link></Nav.Item>
                                    <Nav.Item className="nav-item"><Nav.Link><Link to="#ubicacion" className="nav-item">Ubicación</Link></Nav.Link></Nav.Item>
                                    <Nav.Item className="nav-item"><Nav.Link><Link to="#contacto" className="nav-item">Contacto</Link></Nav.Link></Nav.Item>
                                    <Nav.Item className="nav-item"><Nav.Link><Link to="#noticias" className="nav-item">Noticias</Link></Nav.Link></Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        </Router>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;