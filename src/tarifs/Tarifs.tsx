import React, { useEffect, useState } from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';
import { ITarif } from 'src/types/Tarif';
import { getTarifs } from 'src/services/dataService';
import TarifComponent from 'src/tarif/TarifComponent';

export function Tarifs() {
  const [tarifs, setTarifs] = useState<ITarif[]>([]);

  useEffect(function () {
    (async function () {
      setTarifs(await getTarifs());
    })();
  }, []);

  return (
    <Stack
      w={'1000px'}
      m={'auto'}
      fontSize={'1.2em'}
      textAlign={'justify'}
      p={'10px'}
    >
      <Heading textAlign={'center'} mt={10}>
        Tarif
      </Heading>
      <>
        <Text>
          Tous nos chiens partent à l'adoption identifiés (par puce), primo
          vaccinés ou vaccinés totalement et stérilisés si leur âge (ou leur
          santé) le permet.
        </Text>
        <Stack>
          {tarifs.map((tarif, index) => (
            <TarifComponent tarif={tarif} key={index} />
          ))}
        </Stack>
      </>
      {/* )} */}
    </Stack>
  );
}
