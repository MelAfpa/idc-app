import Header from '../header/Header';
import Footer from '../footer/Footer';
import React, { useState, useEffect } from 'react';
import './Adoptions.css';
import { getDogs } from '../services/dataService';
import { IAnimal } from 'src/types/Animal';
import { Animal } from 'src/animal/Animal';

function Adoption() {
  const [dogs, setDogs] = useState<IAnimal[]>([]);

  useEffect(function () {
    (async function () {
      setDogs(await getDogs());
    })();
  }, []);

  return (
    <div>
      <Header />
      <div className="app-adoption">
        <h1>Adopter</h1>

        <section className="adoption-condition">
          <h2>Conditions</h2>
          <p>
            Les chiens que nous prenons en charge ont souvent un parcours
            difficile : multiples abandons, conditions de vie inadaptées,
            maltraitance. Ainsi, et afin de leur garantir une famille pour la
            vie, nous essayons de prendre des précautions afin de ne pas les
            remettre en situation d'échec. Ces précautions sont avant tout pour
            le bonheur du toutou mais aussi pour être gage d'une adoption
            réussie en trouvant le bon binôme chien/famille.
          </p>
          <p>Nos conditions (non négociables) sont donc :</p>
          <ul>
            <li>
              adoption dans le 49 et départements limitrophes afin de pouvoir
              effectuer une pré-visite avant le placement et d'assurer un
              meilleur suivi de nos adoptés
            </li>
            <li>
              temps d'absence raisonnable : 80% de nos chiens abandonnés le sont
              car leurs anciens maitres étaient absents toute la journée et
              qu'ils ne géraient pas (aboiements, destructions, etc...)
            </li>
            <li>
              terrain clos afin d'éviter tous risques de fugue et d'accident
            </li>
          </ul>
        </section>
        <section className="adoption-price">
          {/* <button className="tarif"> */}
          <h2>Tarif</h2>
          <p>
            Tous nos chiens partent à l'adoption identifiés (par puce), primo
            vaccinés ou vaccinés totalement et stérilisés si leur âge (ou leur
            santé) le permet.
          </p>
          <ul>
            <li>
              <u>Chiots :</u> <br />
              <i>Identifiés + primo-vaccinés :</i> 170€ <br />
              <i>Identifiés + vaccinés :</i> 200€ <br />
              /!\ L'adoptant a l'obligation de le stériliser avant les 7 mois
              (chèque de caution 250€ à joindre au contrat)
            </li>
            <li>
              <u>Chiens adulte de 6 mois à 5 ans :</u> <br />
              <i>stérilisés + identifiés + primo-vaccinés :</i> 250€ <br />
              <i>stérilisés + identifiés + vacciné :</i> 280€
            </li>
            <li>
              <u>Chiennes de 6 mois à 5 ans : </u>
              <br />
              <i>stérilisées + identifiées + primo-vaccinées :</i> 270€ <br />
              <i>stérilisées + identifiées + vaccinées :</i> 300€
            </li>
            <li>
              <u>Chiens adultes de 5 ans à 10 ans : </u>
              <br />
              <i>stérilisés + identifiés + primo-vaccinés :</i> 170€ <br />
              <i>stérilisés + identifiés + vaccinés :</i> 200€
            </li>
            <li>
              <u>Chiennes adultes de 5 ans à 10 ans : </u>
              <br />
              <i>stérilisées + identifiées + primo-vaccinées :</i> 230€ <br />
              <i>stérilisées + identifiées + vaccinées :</i> 260€
            </li>
            <li>
              <u>Chiens adultes de plus de 10 ans : </u>
              <br />
              <i>stérilisés + identifiés + primo-vaccinés ou vaccinés :</i> 80€
            </li>
            <li>
              <u>Chiennes adultes plus de 10 ans : </u>
              <br />
              <i>stérilisées + identifiées + primo-vaccinées ou vaccinées :</i>
              120€
            </li>
          </ul>
          {/* </button> */}
        </section>
        <section>
          {dogs.map((dog, index) => (
            <Animal animal={dog} key={index} />
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Adoption;
