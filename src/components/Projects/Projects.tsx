import React from 'react';
import { ProjectCard } from 'components/ProjectCard/ProjectCard';

export function Projects() {
  return (
    <section className="projects-section section">
      <div className="projects-section__title title">
        <span className="title__start-symbol">&#47;&#47;</span>
        <h2 className="title__h2 h2">Projects</h2>
      </div>
      <div className="projects-section__cards-container">
        <ProjectCard
          title="RS Lang"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          img="assets/image-not-found.jpg"
        />
      </div>
      <div className="projects-section__cards-container">
        <ProjectCard
          title="RS Lang"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          img="assets/image-not-found.jpg"
        />
      </div>
      <div className="projects-section__cards-container">
        <ProjectCard
          title="RS Lang"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          img="assets/image-not-found.jpg"
        />
      </div>
      <div className="projects-section__cards-container">
        <ProjectCard
          title="RS Lang"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          img="assets/image-not-found.jpg"
        />
      </div>
    </section>
  );
}
