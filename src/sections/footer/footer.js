import React from "react";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

class Footer extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="footerStyle" >
                    <Col lg={4} md={4} sm={12}>
                                <div>
                                <h2 className="titleStyle">Interdinamik</h2>
                                <p className="txtStyle">Dirección:<br />
                                    Teléfono:<br />
                                    Email:
                                </p>
                            </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div>
                        <h4 className="sbtStyle">Accesos directos</h4>
                        <p className="txtStyle">Productos<br />
                                Noticias<br />
                                Aviso de Privacidad
                                </p>
                        </div>
                    </Col>
                    
                    <Col lg={4} md={4} sm={12}>
                        <h4 className="sbtStyle">Síguenos en nuestras redes sociales:</h4>
                        <p className="txtStyle">
                                    Facebook<br />
                                    Instagram<br />
                                    Pinterest<br />
                                    Twitter<br />
                                    Google+
                        </p>
                    </Col>
                </Row>
                <Row className="powerBy">
                    <Col>
                    <div>
                        <p className="endTxtStyle">@Interdinamik all rigths reserved. Interdinamik designed by <span>Ubainternet</span></p>
                    </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;