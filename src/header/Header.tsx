import './Header.css';
import logo from '../uploads/banniere.png';

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  console.log('HEADER');

  return (
    <div className="App-header">
      <Link to="/" className="home">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <Link to="/team" className="team">
        Qui sommes nous ?
      </Link>
      <Link to="/" className="pension">
        La Pension
      </Link>
      <Link to="/adoption" className="adoption">
        Adopter
      </Link>
      <Link to="/" className="sponsor">
        Parrainer
      </Link>
      <Link to="/" className="volunteer">
        Bénévolat
      </Link>
      <Link to="/" className="donation">
        Faire un don
      </Link>
    </div>
  );
}

export default Header;
