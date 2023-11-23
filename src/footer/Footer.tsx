import React from 'react';
// import './Footer.css';
import { FaFacebook, FaCommentAlt } from 'react-icons/fa';
import { Flex, Link } from '@chakra-ui/react';

function Footer() {
  console.log('FOOTER');

  return (
    <Flex
      justifyContent={'space-evenly'}
      alignItems={'center'}
      p={'10px'}
      mt={'10px'}
      fontSize={'1.2em'}
    >
      <Link href="https://www.facebook.com/UnCoeurSansToit" className="fb">
        <FaFacebook color="#8ead76" size={40} />
      </Link>
      <Link href="#" className="contact">
        <FaCommentAlt color="#8ead76" size={40} />
      </Link>
      <Link href="#" className="mentions" color="#8ead76">
        Mentions légales
      </Link>
    </Flex>
  );
}

export default Footer;
