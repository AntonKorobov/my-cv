import './Contacts.scss';
import React from 'react';

export function Contacts() {
  return (
    <section className="contacts-section section">
      <div className="contacts-section__content content-block">
        <div className="contacts-section__title title">
          <h2 className="title__h2 h2">Contacts:</h2>
          <span className="title__start-symbol">&#123;</span>
        </div>
        <ul className="contacts-section__list list">
          <li className="list__item">
            <h3 className="list__title">Location:</h3>
            <p className="list__info">Republic of Belarus, Minsk</p>
          </li>
          <li className="list__item">
            <h3 className="list__title">Email:</h3>
            <a href="mailto: 1anton1korobov@gmail.com" className="list__info a">
              1anton1korobov@gmail.com
            </a>
          </li>
          <li className="list__item">
            <h3 className="list__title">GitHub:</h3>
            <a href="https://github.com/NewAnton" className="list__info a">
              github.com/NewAnton
            </a>
          </li>
        </ul>
        <span className="title__start-symbol">&#125;</span>
      </div>
    </section>
  );
}
