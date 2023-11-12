import React from 'react';
import './Footer.css';
import { FaFacebook, FaCommentAlt } from 'react-icons/fa';

function Footer() {
  console.log('FOOTER');

  return (
    <footer className="App-footer">
      <a href="https://www.facebook.com/UnCoeurSansToit" className="fb">
        <FaFacebook color="#8ead76" size={40} />
      </a>
      <a href="#" className="contact">
        <FaCommentAlt color="#8ead76" size={40} />
      </a>
      <a href="#" className="mentions">
        Mentions légales
      </a>
    </footer>
  );
}

export default Footer;
