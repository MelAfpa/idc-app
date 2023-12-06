import {
  AccordionIcon,
  AccordionPanel,
  Box,
  AccordionItem,
  AccordionButton,
  Accordion,
} from '@chakra-ui/react';

import React from 'react';

import { ITarif } from 'src/types/Tarif';
import { FaExclamationTriangle } from 'react-icons/fa';

interface IProps {
  tarif: ITarif;
}

export default function TarifComponent({ tarif }: IProps) {
  console.log('TarifComponent');
  return (
    <div>
      <Accordion allowMultiple>
        <AccordionItem mt={-3}>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={'larger'}
                textDecoration={'underline'}
              >
                {tarif.type}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize={'0.9em'}>
            {tarif.tarifA} <br />
            {tarif.tarifB} <br />
            {tarif.type === 'Chiots'
              ? " L'adoptant a l'obligation de le stériliser avant les 7 mois " +
                (
                  <FaExclamationTriangle
                    name="FaExclamationTriangle"
                    color="red"
                    size={40}
                  />
                ) +
                ' (chèque de caution 250€ à joindre au contrat)'
              : !''}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
