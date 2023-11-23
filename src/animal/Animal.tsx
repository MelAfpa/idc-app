import React from 'react';
import { IAnimal } from 'src/types/Animal';
import './Animal.css';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { FaBaby, FaCat, FaDog } from 'react-icons/fa';

interface IProps {
  animal: IAnimal;
}

export function Animal({ animal }: IProps) {
  //   console.log(props);
  return (
    <>
      <Card className="animalCard" maxW="sm">
        <CardHeader className="cardHeader">
          <img
            className="animalPicture"
            src={animal.picture}
            alt={animal.name}
          />
        </CardHeader>
        <CardBody className="cardBody">
          <header className="cardBodyHeader">{animal.name}</header>
          <body className="cardBodyBody">{animal.description}</body>
        </CardBody>
        <CardFooter className="cardFooter">
          {animal.cat_ok && <FaCat />}
          {animal.dog_ok && <FaDog />}
          {animal.baby_ok && <FaBaby />}
        </CardFooter>
      </Card>
    </>
  );
}
