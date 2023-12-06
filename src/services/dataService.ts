import { IAnimal } from "src/types/Animal";
import { ITarif } from "src/types/Tarif";



export async function getDogs(){
    const response = await fetch("http://localhost/idc-app/donnees.json", {mode:"cors"});

    return (await response.json()) as IAnimal[];
}

export async function getTarifs(){
    console.log("getTarifs");

    const response = await fetch("http://localhost/idc-app/tarifs.json", {mode:"cors"});

    return (await response.json()) as ITarif[];
}
