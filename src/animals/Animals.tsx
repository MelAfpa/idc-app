import { Checkbox, Flex, Heading, Stack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Animal } from 'src/animal/Animal';
import { getDogs } from 'src/services/dataService';
import { IAnimal } from 'src/types/Animal';

function filterDogs(
  dogs: IAnimal[],
  okBaby: boolean,
  okChat: boolean,
  okChien: boolean
) {
  return dogs.filter(
    (dog) =>
      (!okBaby || (okBaby && dog.baby_ok)) &&
      (!okChat || (okChat && dog.cat_ok)) &&
      (!okChien || (okChien && dog.dog_ok))
  );
}

export function Animals() {
  const [dogs, setDogs] = useState<IAnimal[]>([]);
  const [filteredDogs, setFilteredDogs] = useState<IAnimal[]>([]);

  useEffect(function () {
    (async function () {
      setDogs(await getDogs());
    })();
  }, []);

  const [okChat, setOkChat] = useState(true);
  const [okChien, setOkChien] = useState(true);
  const [okBaby, setOkBaby] = useState(true);

  useEffect(
    function () {
      setFilteredDogs(filterDogs(dogs, okBaby, okChat, okChien));
    },
    [dogs, okBaby, okChat, okChien]
  );

  return (
    <Stack className="dogsCard">
      <Heading textAlign={'center'} mt={10}>
        A l'adoption
      </Heading>
      <Flex flexDirection="row" justifyContent="space-around" mt={25} mb={8}>
        <Checkbox
          textShadow="5px 5px 10px black"
          colorScheme="purple"
          color="black"
          isChecked={okChat}
          onChange={(event) => {
            setOkChat(event.target.checked);
          }}
        >
          Sociable chat
        </Checkbox>
        <Checkbox
          colorScheme="green"
          isChecked={okChien}
          onChange={(event) => {
            setOkChien(event.target.checked);
          }}
        >
          Sociable chien
        </Checkbox>
        <Checkbox
          colorScheme="blue"
          isChecked={okBaby}
          onChange={(event) => {
            setOkBaby(event.target.checked);
          }}
        >
          Sociable enfants
        </Checkbox>
      </Flex>
      <Stack className="allPictures">
        <Flex justifyContent="space-around" flexWrap="wrap" m={1}>
          {filteredDogs.map((dog, index) => (
            <Animal animal={dog} key={index} />
          ))}
        </Flex>
      </Stack>
    </Stack>
  );
}
