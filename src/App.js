import { useState } from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'

import {Container} from "react-bootstrap";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] =useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  return(
    <div>
      <CustomNav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></CustomNav>

      <main>
        <Container>
        {contactSelected ? (
          <>
            <Contact></Contact>
          </>
        ) : (
          <></>
        )}
        {aboutSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <></>
        )}
        {portfolioSelected ? (
          <>
            <Portfolio></Portfolio>
          </>
        )  : (
          <></>
        )}
        </Container>
      </main>
     
      <Footer></Footer>
      

    </div>
  )
}

export default App;