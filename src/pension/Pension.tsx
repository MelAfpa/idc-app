import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import {
  Flex,
  Heading,
  // Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaPaw } from 'react-icons/fa';
import CarouselPension from '../carouselComponent/CarouselComponentPension';

// import { ICarouselPictures } from 'src/types/PensionPictures';
// import { getCarouselPictures } from 'src/services/dataService';

export default function Pension() {
  return (
    <>
      <Header />
      <Heading
        bgImage={'url(../../img/en_tete/pension3.jpg)'}
        p={'40px'}
        textAlign={'center'}
        fontSize={'4em'}
        color={'white'}
      >
        La pension
      </Heading>
      <Flex
        direction={'row'}
        width={'100%'}
        justifyContent={'space-evenly'}
        backgroundColor={'rgba(162, 162, 162, 0.219)'}
      >
        <Stack width={'40%'} mt={8} textAlign={'center'}>
          <Text mb={10} fontWeight={600}>
            Pour effectuer une demande de réservation : <br />
            ucst.refuge@outlook.fr
          </Text>
          <Text mb={10}>
            Partez l'esprit tranquille, nous veillerons sur votre chien en votre
            absence !
          </Text>
          <List
            spacing={3}
            ml={8}
            textAlign={'start'}
            fontStyle={'italic'}
            margin={'auto'}
          >
            <ListItem>
              <ListIcon as={FaPaw} />
              Maisonnettes individuelles de 1m x 1m50 avec auvent latéral
            </ListItem>
            <ListItem>
              <ListIcon as={FaPaw} />
              Cours privatives de plus de 20 m2
            </ListItem>
            <ListItem>
              <ListIcon as={FaPaw} />
              Grande promenade quotidienne
            </ListItem>
            <ListItem>
              <ListIcon as={FaPaw} />
              Brumisateur l'été et chauffage l'hiver
            </ListItem>
            <ListItem>
              <ListIcon as={FaPaw} />
              Présence jour et nuit d'un responsable{' '}
            </ListItem>
            <ListItem>
              <ListIcon as={FaPaw} />
              Adaptation totale aux besoins de votre toutou
            </ListItem>
          </List>
        </Stack>
        <Stack w={'35%'} mt={8}>
          <CarouselPension />
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
