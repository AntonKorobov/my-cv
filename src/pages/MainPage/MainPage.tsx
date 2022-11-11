import './MainPage.scss';
import React from 'react';
import { About } from 'components/About/About';
import { Projects } from 'components/Projects/Projects';
import { Contacts } from 'components/Contacts/Contacts';

export default function MainPage() {
  return (
    <div className="main-page container">
      <div className="main-page__logo logo">
        <h1 className="logo__h1 h1">Anton_Korobov</h1>
        <span className="logo__start-symbol">&#123;</span>
      </div>
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}
