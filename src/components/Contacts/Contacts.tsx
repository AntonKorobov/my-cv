import './Contacts.scss';
import React from 'react';

export function Contacts() {
  return (
    <section className="contacts-section section content-block">
      <h2 className="h2">Contacts:</h2>
      <ul className="contacts-section__list list">
        <li className="list__item">
          <h3 className="list__title h3">Location:</h3>
          <p className="list__info">Republic of Belarus, Minsk</p>
        </li>
        <li className="list__item">
          <h3 className="list__title h3">Email:</h3>
          <a href="mailto: 1anton1korobov@gmail.com" className="list__info a">
            1anton1korobov@gmail.com
          </a>
        </li>
        <li className="list__item">
          <h3 className="list__title h3">GitHub:</h3>
          <a href="https://github.com/NewAnton" className="list__info a">
            github.com/NewAnton
          </a>
        </li>
      </ul>
    </section>
  );
}
