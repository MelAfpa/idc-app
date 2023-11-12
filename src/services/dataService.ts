import { IAnimal } from "src/types/Animal";

export async function getDogs(){
    const response = await fetch("http://localhost/idc-app/donnees.json", {mode:"cors"});

    return (await response.json()) as IAnimal[];
}

