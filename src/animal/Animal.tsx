import React from 'react';
import { IAnimal } from 'src/types/Animal';

interface IProps {
  animal: IAnimal;
}

export function Animal({ animal }: IProps) {
  //   console.log(props);
  return <div>{animal.name}</div>;
}
