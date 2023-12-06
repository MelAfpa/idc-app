import React from 'react';
import { IAnimal } from 'src/types/Animal';
// import './Animal.css';
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
  Stack,
} from '@chakra-ui/react';
import { FaBaby, FaCat, FaDog } from 'react-icons/fa';

interface IProps {
  animal: IAnimal;
}

export function Animal({ animal }: IProps) {
  //   console.log(props);
  return (
    <>
      <Card
        width="sm"
        maxH="550px"
        mt="2"
        shadow={'15px 15px 10px #8ead76'}
        mb={7}
      >
        <CardBody p={3}>
          <Image
            height="250px"
            margin="auto"
            borderRadius={10}
            src={animal.picture}
            alt={animal.name}
          />
          <Stack mt="3">
            <Heading size="md" textAlign="center">
              {animal.name}
            </Heading>
            <Text fontSize={15} textAlign="center" fontStyle="italic" mt="-2">
              Né en {animal.birth}
            </Text>
            <Text
              textAlign="justify"
              maxH="95px"
              overflowY="scroll"
              // textOverflow="ellipsis"
            >
              {animal.description}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter p={3}>
          <Stack direction="row" spacing="3" margin="auto" fontSize={30}>
            {animal.cat_ok && <FaCat />}
            {animal.dog_ok && <FaDog />}
            {animal.baby_ok && <FaBaby />}
          </Stack>
        </CardFooter>
      </Card>
    </>
  );
}
