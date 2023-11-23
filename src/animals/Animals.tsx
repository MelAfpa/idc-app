import { Checkbox } from '@chakra-ui/react';
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

  const [okChat, setOkChat] = useState(false);
  const [okChien, setOkChien] = useState(false);
  const [okBaby, setOkBaby] = useState(false);

  useEffect(
    function () {
      setFilteredDogs(filterDogs(dogs, okBaby, okChat, okChien));
    },
    [dogs, okBaby, okChat, okChien]
  );

  return (
    <section className="dogsCard">
      <div className="dogFilter">
        <Checkbox
          colorScheme="purple"
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
      </div>
      <div className="allPictures">
        {filteredDogs.map((dog, index) => (
          <Animal animal={dog} key={index} />
        ))}
      </div>
    </section>
  );
}
