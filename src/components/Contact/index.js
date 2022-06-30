import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function ContactForm(){
    return(
        <Container>

        <Row>
          <h1>Contact Me</h1>
        </Row>
  
        <Row className='center'>
          <center>
            <Col md={12} lg={8}>
              <Card className="card">
                <Card.Body className="cardBody">
                  <Card.Title>
                    <FontAwesomeIcon icon={faGithub} />
                    Github
                  </Card.Title>
  
                  <Card.Link target="blank_" href="https://github.com/ChidoGang" className="linkDark">
                    https://github.com/ChidoGang
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            
  
  
            <Col md={12} lg={8}>
              <Card className="card">
                <Card.Body className="cardBody">
                  <Card.Title>
                    <FontAwesomeIcon icon={faLinkedin} />
                    LinkedIn
                  </Card.Title>
  
                  <Card.Link target="blank_" href="https://www.linkedin.com/in/edgar-quintanilla-8b7603228/" className="linkDark">
                    https://www.linkedin.com/in/edgar-quintanilla-8b7603228/
                  </Card.Link>
                </Card.Body>
              </Card>
  
            </Col>
  
            <Col md={12} lg={8}>
              <Card className="card">
                <Card.Body className="cardBody">
                  <Card.Title>
                    <FontAwesomeIcon icon={ faEnvelope } />
                    Email
                  </Card.Title>
  
                  <Card.Link target="blank_" href="mailto: edgarquintanilla50@yahoo.com" className="linkDark">
                    edgarquintanilla50@yahoo.com
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </center>
        </Row>
      </Container>
    );
}
export default ContactForm;