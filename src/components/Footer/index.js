import React from"react";
import {Navbar, Container, Nav} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <footer className="footer">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Collapse>
                    <Nav  className="mx-auto">
                      <Nav.Link href="https://github.com/ChidoGang" target="_blank"><FontAwesomeIcon icon={faGithub}/>Github</Nav.Link>
                      <Nav.Link href="https://www.linkedin.com/in/edgar-quintanilla-8b7603228/" target="_blank"> <FontAwesomeIcon icon={faLinkedin}/>LinkedIn </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </footer>
    )
}

export default Footer;