import React from 'react';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';

export function Tarif() {
  // const [folded, setFolded] = useState<boolean>(false);

  return (
    <Stack
      w={'1000px'}
      m={'auto'}
      fontSize={'1.2em'}
      textAlign={'justify'}
      p={'10px'}
    >
      <Heading textAlign={'center'} mt={10}>
        {/*onClick={() => {
          setFolded(!folded);
        }}
      >
      Tarif {folded ? <FaChevronUp /> : <FaChevronDown />}*/}
        Tarif
      </Heading>
      {/* {folded && ( */}
      <>
        {' '}
        <Text>
          Tous nos chiens partent à l'adoption identifiés (par puce), primo
          vaccinés ou vaccinés totalement et stérilisés si leur âge (ou leur
          santé) le permet.
        </Text>
        <Accordion allowMultiple>
          <AccordionItem mt={-2}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={'larger'}
                  textDecoration={'underline'}
                >
                  Chiots :
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={'0.9em'}>
              Identifiés + primo-vaccinés : 170€ <br />
              Identifiés + vaccinés : 200€ <br />
              /!\ L'adoptant a l'obligation de le stériliser avant les 7 mois
              (chèque de caution 250€ à joindre au contrat)
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mt={-2}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={'larger'}
                  textDecoration={'underline'}
                >
                  Chiens adulte de 6 mois à 5 ans :
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={'0.9em'}>
              Stérilisés + identifiés + primo-vaccinés : 250€ <br />
              Stérilisés + identifiés + vacciné : 280€
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mt={-2}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={'larger'}
                  textDecoration={'underline'}
                >
                  Chiennes de 6 mois à 5 ans :
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={'0.9em'}>
              Stérilisées + identifiées + primo-vaccinées : 270€ <br />
              Stérilisées + identifiées + vaccinées : 300€
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mt={-2}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={'larger'}
                  textDecoration={'underline'}
                >
                  Chiens adultes de 5 ans à 10 ans :
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={'0.9em'}>
              Stérilisés + identifiés + primo-vaccinés : 170€ <br />
              Stérilisés + identifiés + vaccinés : 200€
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mt={-2}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={'larger'}
                  textDecoration={'underline'}
                >
                  Chiennes adultes de 5 ans à 10 ans :
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={'0.9em'}>
              Stérilisées + identifiées + primo-vaccinées : 230€ <br />
              Stérilisées + identifiées + vaccinées : 260€
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mt={-2}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={'larger'}
                  textDecoration={'underline'}
                >
                  Chiens adultes de plus de 10 ans :
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={'0.9em'}>
              Stérilisés + identifiés + primo-vaccinés ou vaccinés : 80€
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mt={-2}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={'larger'}
                  textDecoration={'underline'}
                >
                  Chiennes adultes plus de 10 ans :
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={'0.9em'}>
              Stérilisées + identifiées + primo-vaccinées ou vaccinées : 120€
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </>
      {/* )} */}
    </Stack>
  );
}
