import React from 'react';
import { Component } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import "./page_one.css";


class PageOne extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col lg={4} md={4} sm={12}><img src="images/clothes.png" alt="Ropa" width="100%" /></Col>
                    <Col lg={4} md={4} sm={12}><img src="images/running.png" alt="Deportes" width="100%" /></Col>
                    <Col lg={4} md={4} sm={12}><img src="images/shoes.png" alt="Calzado" width="100%" /></Col>
                </Row>
                <Row>
                    <Col lg={4} md={4} sm={12}><img src="images/electronics.png" alt="Electrónica" width="100%" /></Col>
                    <Col lg={4} md={4} sm={12}><img src="images/home.png" alt="Hogar" width="100%" /></Col>
                    <Col lg={4} md={4} sm={12}><img src="images/office.png" alt="Oficina" width="100%" /></Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="enterpriseMsg">
                        <h1>Interdinamik</h1>
                        <h3 className="txtStyle">Buscamos productos de una calidad increible, para <br />
                            ofrecerlos a nuestros clientes a un precio irresistible.
                        </h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={12} sm={12}>
                        <div className="description">
                        <h3 className="sbtStyle">Nosotros</h3>
                        <img src="images/nosotros.png" alt="Nosotros" width="100%"/>
                            <p className="txtStyle">Interdinamik es una comercializadora que cuenta con un equipo de buscadores de oportunidades. Localizamos productos
                        con una relacion calidad - precio excelente y los ofrecemos a nuestros clientes para
                    que ellos puedan revenderlos o para su uso personal.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <div className="description">
                        <h3 className="sbtStyle">Acción Social</h3>
                        <img src="images/accion.png" alt="Acción social" width="100%"/>
                        <p className="txtStyle">Interdinamik también se enfoca en la acción social ya que entendemos que los productos
                        que ofrecemos impactan la vida de nuestros clientes. De tal manera que organizamos actividades
                    de impacto social como carreras deportivas o jornadas de limpieza, reforestación y capacitación</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <div className="description">
                        <h3 className="sbtStyle">Distribución</h3>
                        <img src="images/distribucion.png" alt="Distribución" width="100%"/>
                        <p className="txtStyle">Actualmente contamos con nuestro show room y envio a domicilio. Los costos pueden variar dependiendo
                            de la cantidad de piezas y de los productos que se adquieran. En los productos domiciliados
                            que generan un costo de envio, este se especificará al momento de realizar su compra.
                    </p>
                        </div>
                    </Col>
                </Row>
                <Row className="ubicationStyle">
                    <Col lg={6}>
                        <div id="ubicacion">
                        <h2 className="titleStyle">Ubicación</h2>
                        <p className="txtStyle">
                            Puedes visitar nuestro Show Room y tienda física en:</p>
                        <p className="txtStyle">
                             Dirección:<br />
                                Teléfono:<br/>
                                Whatsapp:<br/>
                                Email:
                        </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                        <p>Aquí va un mapa ...</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}></Col>
                    <Col lg={4}>
                    <div id="contacto" className="infoStyle">
                    <h2 className="titleStyle">Información y Contacto</h2>
                        <Form className="txtStyle">
                            <Form.Group controlId="formName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Su nombre por favor"></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formEmail">    
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    Nunca compartiremos tu correo con nadie más.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formPhone">
                                <Form.Label>Teléfono:</Form.Label>
                                <Form.Control type="text" placeholder="Teléfono de contacto" />
                                <Form.Text className="text-muted">No es obligatorio, pero nos ayudará a contactarte más rápido.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label>¿Cómo te ayudamos?</Form.Label>
                                <Form.Control as="textarea" rows="3"></Form.Control>
                                <Form.Text className="text-muted">Consulta nuestro aviso de privacidad <span>aquí</span></Form.Text>
                            </Form.Group>
                            <Button className="btnStyle" variant="primary" type="submit">
                                Enviar
                            </Button>   
                        </Form>
                    </div>
                    </Col>
                    <Col lg={4}></Col>
                </Row>
                <Row className="ubicationStyle">
                    <Col lg={4} md={4} sm={12}>
                        <p className="backStyle">Anterior</p>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div id="noticias">
                        <h2 className="titleStyle">Noticias Interdinamik</h2> 
                        </div> 
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <p className="nextStyle">Siguiente</p>
                    </Col>
                </Row>
                <Row className="ubicationStyle">
                    <Col lg={4} md={4} sm={12}>
                        <div>
                        <h4 className="sbtStyle">Noticia Uno</h4>
                        <p className="txtStyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.</p>
                        </div>
                        <p className="txtLinkStyle"><i>Leer más</i></p>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div>
                        <h4 className="sbtStyle">Noticia Dos</h4>
                        <p className="txtStyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.</p>
                        </div>
                        <p className="txtLinkStyle"><i>Leer más</i></p>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                       <div>
                       <h4 className="sbtStyle">Noticia Tres</h4>
                        <p className="txtStyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.</p>
                            <p className="txtLinkStyle"><i>Leer más</i></p>
                        </div> 
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PageOne;