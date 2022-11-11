import './ProjectCard.scss';
import React from 'react';

export function ProjectCard(props: { title: string; info: string; img: string; link: string }) {
  return (
    <a href={props.link} className="project-card content-block a">
      <img src={props.img} alt="project image" className="project-card__image" />
      <div className="project-card__info-wrapper">
        <h2 className="project-card__title h3">{props.title}</h2>
        <p className="project-card__info p">{props.info}</p>
      </div>
    </a>
  );
}
