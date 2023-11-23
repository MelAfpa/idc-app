import React from 'react';
import Footer from '../footer/Footer';
import Header from 'src/header/Header';
import { Flex, Heading } from '@chakra-ui/react';

export default function Pension() {
  return (
    <>
      <Header />
      <Flex bg={'rgba(162, 162, 162, 0.219)'} h={'500px'}>
        <Heading textAlign={'center'}>La pension</Heading>
      </Flex>
      <Footer />
    </>
  );
}
