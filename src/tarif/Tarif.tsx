import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export function Tarif() {
  const [folded, setFolded] = useState<boolean>(false);

  return (
    <section className="adoption-price">
      <h2
        onClick={() => {
          setFolded(!folded);
        }}
      >
        Tarif {folded ? <FaChevronUp /> : <FaChevronDown />}
      </h2>
      {folded && (
        <>
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
        </>
      )}
    </section>
  );
}
