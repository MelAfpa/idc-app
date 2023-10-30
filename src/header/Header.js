import './Header.css';
import logo from '../uploads/banniere.png';

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Header() {
    console.log("HEADER");

    return(
        <Navbar bg="light">
            <Nav className="App-header">
              <Nav.Link href="App.js" className='home'><img src={logo} href="App.js" className="App-logo" alt="logo"/></Nav.Link>
              <Nav.Link href="../team/Team.js" className='team'>Qui sommes nous ?</Nav.Link>
              <Nav.Link href="#" className='pension'>La Pension</Nav.Link>
              <Nav.Link href="#" className='adoption'>Adopter</Nav.Link>
              <Nav.Link href="#" className='sponsor'>Parrainer</Nav.Link>
              <Nav.Link href="#" className='volunteer'>Bénévolat</Nav.Link>
              <Nav.Link href="#" className='donation'>Faire un don</Nav.Link>
            </Nav>

        </Navbar>

    );
}

export default Header;


