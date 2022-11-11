import './Projects.scss';
import React from 'react';
import { ProjectCard } from 'components/ProjectCard/ProjectCard';

import projectsData from '../../data/ProjectsData.json';
import { ProjectInterface } from '../../data/ProjectInterface';

export function Projects() {
  const cardGenerator = (array: ProjectInterface[]): JSX.Element[] => {
    return array.map((item, index) => (
      <ProjectCard
        key={index}
        title={item.title}
        info={item.info}
        img={item.img}
        link={item.link}
      />
    ));
  };

  return (
    <section className="projects-section section">
      <div className="projects-section__content content-block">
        <div className="projects-section__title title">
          <span className="title__start-symbol">&#47;&#47;</span>
          <h2 className="title__h2 h2">Projects</h2>
        </div>
        <div className="projects-section__projects-wrapper">{cardGenerator(projectsData)}</div>
      </div>
    </section>
  );
}
