import { IAnimal } from "src/types/Animal";
// import { ICarouselPictures } from "src/types/PensionPictures";
import { ITarif } from "src/types/Tarif";



export async function getDogs(){
    const response = await fetch("http://localhost/idc-app/donnees.json", {mode:"cors"});

    return (await response.json()) as IAnimal[];
}

export async function getTarifs(){
    const response = await fetch("http://localhost/idc-app/tarifs.json", {mode:"cors"});

    return (await response.json()) as ITarif[];
}

// export async function getCarouselPictures(){
//     console.log("getCarouselPictures");

//     const response = await fetch("http://localhost/idc-app/carouselPictures.json", {mode:"cors"});

//     return (await response.json()) as ICarouselPictures[];
// }