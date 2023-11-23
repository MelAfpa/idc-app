import Header from '../header/Header';
import Footer from '../footer/Footer';
import React from 'react';
// import './Adoptions.css';
import { Tarif } from 'src/tarif/Tarif';
import { Animals } from 'src/animals/Animals';
import {
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function Adoption() {
  return (
    <>
      <Header />
      <Stack bg={'rgba(162, 162, 162, 0.219)'}>
        <Heading
          bgImage={'url(../../img/adopter.jpg)'}
          p={'40px'}
          textAlign={'center'}
          fontSize={'4em'}
          color={'white'}
        >
          Adopter
        </Heading>

        <Stack
          w={'1000px'}
          m={'auto'}
          fontSize={'1.2em'}
          textAlign={'justify'}
          p={'20px'}
          border={'4px'}
          borderColor={'red'}
          borderStyle={'dashed'}
        >
          <Heading textAlign={'center'} mt={2}>
            Conditions
          </Heading>
          <Text>
            Les chiens que nous prenons en charge ont souvent un parcours
            difficile : multiples abandons, conditions de vie inadaptées,
            maltraitance. Ainsi, et afin de leur garantir une famille pour la
            vie, nous essayons de prendre des précautions afin de ne pas les
            remettre en situation d'échec. Ces précautions sont avant tout pour
            le bonheur du toutou mais aussi pour être gage d'une adoption
            réussie en trouvant le bon binôme chien/famille.
            <br />
            <br />
            Nos conditions (non négociables) sont donc :
            <List spacing={3} fontStyle={'italic'}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" marginLeft={8} />
                Adoption dans le 49 et départements limitrophes afin de pouvoir
                effectuer une pré-visite avant le placement et d'assurer un
                meilleur suivi de nos adoptés{' '}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" marginLeft={8} />
                Temps d'absence raisonnable : 80% de nos chiens abandonnés le
                sont car leurs anciens maitres étaient absents toute la journée
                et qu'ils ne géraient pas (aboiements, destructions, etc...){' '}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" marginLeft={8} />
                Terrain clos afin d'éviter tous risques de fugue et d'accident
              </ListItem>
            </List>
          </Text>
        </Stack>
        <Tarif />
        <Animals />
      </Stack>
      <Footer />
    </>
  );
}

export default Adoption;
