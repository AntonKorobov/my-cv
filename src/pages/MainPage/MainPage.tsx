import './MainPage.scss';
import React from 'react';
import { About } from 'components/About/About';
import { Projects } from 'components/Projects/Projects';
import { Contacts } from 'components/Contacts/Contacts';

export default function MainPage() {
  return (
    <main className="main-page container">
      <div className="main-page__logo logo">
        <h1 className="logo__h1 h1">Anton_Korobov</h1>
      </div>
      <About />
      <Projects />
      <Contacts />
    </main>
  );
}
