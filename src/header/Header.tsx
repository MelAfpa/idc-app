import { Flex, Image, Link } from '@chakra-ui/react';

import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

function Header() {
  return (
    <Flex
      justifyContent={'space-between'}
      m={'10px'}
      alignItems={'center'}
      fontSize={'1.2em'}
      bgColor={'white'}
    >
      <Link as={ReactRouterLink} to="/" p={'10px 20px 10px 0px'}>
        <Image
          src="img/banniere.png"
          alt="logo"
          w={'350px'}
          verticalAlign={'middle'}
        />
      </Link>
      <Link
        as={ReactRouterLink}
        to="/pension"
        color={'white'}
        bgColor={'#8ead76'}
        m={'10px'}
        p={'10px 20px 10px 20px'}
        fontWeight={600}
      >
        La Pension
      </Link>
      <Link
        as={ReactRouterLink}
        to="/adoption"
        color={'white'}
        bgColor={'#8ead76'}
        m={'10px'}
        p={'10px 20px 10px 20px'}
        fontWeight={600}
      >
        Adopter
      </Link>
      <Link
        as={ReactRouterLink}
        to="/parrainer"
        color={'white'}
        bgColor={'#8ead76'}
        m={'10px'}
        p={'10px 20px 10px 20px'}
        fontWeight={600}
      >
        Parrainer
      </Link>
      <Link
        as={ReactRouterLink}
        to="/benevolat"
        color={'white'}
        bgColor={'#8ead76'}
        m={'10px'}
        p={'10px 20px 10px 20px'}
        fontWeight={600}
      >
        Bénévolat
      </Link>
      <Link
        as={ReactRouterLink}
        to="/dons"
        color={'white'}
        bgColor={'#8ead76'}
        m={'10px'}
        p={'10px 20px 10px 20px'}
        fontWeight={600}
      >
        Faire un don
      </Link>
    </Flex>
  );
}

export default Header;
