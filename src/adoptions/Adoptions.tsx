import Header from '../header/Header';
import Footer from '../footer/Footer';
import React from 'react';
import './Adoptions.css';
import { Tarif } from 'src/tarif/Tarif';
import { Animals } from 'src/animals/Animals';

function Adoption() {
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
        <Tarif />
        <Animals />
      </div>
      <Footer />
    </div>
  );
}

export default Adoption;
