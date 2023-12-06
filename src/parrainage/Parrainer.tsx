import React from 'react';
import Footer from '../footer/Footer';
import Header from 'src/header/Header';
import {
  Flex,
  Heading,
  // List,
  // ListIcon,
  // ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'src/carousel/CarouselComponent';

export default function Parrainer() {
  return (
    <>
      <Heading position={'fixed'}>
        <Header />
      </Heading>
      <Flex
        backgroundColor={'rgba(162, 162, 162, 0.219)'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <Stack width={'1000px'} mt={8} textAlign={'center'} fontSize={'1.2em'}>
          <Text mb={10}>
            Beaucoup de nos prises en charge concernent des chiens soit âgés
            soit ayant des pathologies qui les rendent inadoptables. Ces prises
            en charge ont un coût non négligeable pour l'association car , en
            plus de l'identification, de la vaccination et de la stérilisation,
            s'ajoutent de nombreux frais vétérinaires comme de nombreuses
            consultations vétérinaires associées à de la nourriture spécifique
            et à des médicaments.
          </Text>
          <Text mb={10}>
            Certains chiens sont encore jeunes et malheureusement, nous ne
            pouvons les proposer à l'adoption car certains ont des problèmes
            comportementaux qui les rendent inadoptables. Ainsi, ceux là,
            resteront à charge toute leur vie par l'association et vieilliront
            dans leur famille d'accueil.
          </Text>
          <Text mb={10}>
            Pour chaque toutou, nous essayons de trouver des parrains et
            marraines afin de nous aider à subvenir à tous ces frais mensuels et
            leur assurer le meilleur confort de vie possible. En contrepartie,
            nous nous engageons à leur donner des nouvelles de leur petit(s)
            protégé(s).
          </Text>
          <Text fontWeight={'bold'} textAlign={'center'} mb={10}>
            Si vous souhaitez plus de renseignements sur le parrainage ou mettre
            en place un virement mensuel/trimestriel/annuel pour un de nos
            petits protégés, n'hésitez pas à nous appeler au 06 15 29 09 56 ou
            par mail (ucst.refuge@outlook.fr).
          </Text>
        </Stack>
        <Stack w={'1000px'} mt={8}>
          <Carousel />
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
