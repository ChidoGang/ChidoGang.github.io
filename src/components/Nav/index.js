import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import reactpdf from "../../assets/files/resume.pdf";


function CustomNav(props){
    const {
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
    } = props;

    function handleClick(target){
        setContactSelected(false);
        setPortfolioSelected(false);
        setAboutSelected(false);

        if (target===0){
            setContactSelected(true);
        }
        if (target===1){
            setAboutSelected(true);
        }
        if(target===2){
            setPortfolioSelected(true);
        }
    }

    return(
        <header>
        <Navbar bg="dark" variant="dark" className="w-100">
            <Navbar.Brand href="/" className="mx-auto pink">Edgar Quintanilla</Navbar.Brand>
        </Navbar>
  
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Collapse>
              <Nav className="mx-auto">
                
              {aboutSelected ? (
                  <>
                  <Nav.Link id="nav-selected">About Me</Nav.Link>
                  </>
                ) : (
                  <><Nav.Link onClick={() => handleClick(1)}> About Me </Nav.Link></>
                )}
  
              {portfolioSelected ? (
                  <>
                  <Nav.Link id="nav-selected">Portfolio</Nav.Link>
                  </>
                ) : (
                  <><Nav.Link onClick={() => handleClick(2)}> Portfolio </Nav.Link></>
                )}
  
                {contactSelected ? (
                  <>
                  <Nav.Link id="nav-selected">Contact</Nav.Link>
                  </>
                ) : (
                  <><Nav.Link onClick={() => handleClick(0)}> Contact </Nav.Link></>
                )}
                
                <NavDropdown title="Resume" id="nav-dropdown">
                  <NavDropdown.Item href={reactpdf} target="_blank" rel="noreferrer noopener" download>Download Resume</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )}

    export default CustomNav;
