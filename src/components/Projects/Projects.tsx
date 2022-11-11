import './Projects.scss';
import React from 'react';
import { ProjectCard } from 'components/ProjectCard/ProjectCard';

export function Projects() {
  return (
    <section className="projects-section section">
      <div className="projects-section__content content-block">
        <div className="projects-section__title title">
          <span className="title__start-symbol">&#47;&#47;</span>
          <h2 className="title__h2 h2">Projects</h2>
        </div>
        <div className="projects-section__projects-wrapper">
          <ProjectCard
            title="RS Lang"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            img="assets/image-not-found.jpg"
          />
          <ProjectCard
            title="RS Lang"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            img="assets/image-not-found.jpg"
          />
          <ProjectCard
            title="RS Lang"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            img="assets/image-not-found.jpg"
          />
          <ProjectCard
            title="RS Lang"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            img="assets/image-not-found.jpg"
          />
        </div>
      </div>
    </section>
  );
}
