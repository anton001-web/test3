import React from "react";
import { projects } from "./projects";
import { PetPListItem } from "./PetPListItem";

export const PortfolioSec = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-section__body">
          <h1 className="portfolio-section__title">Pet projects</h1>
          <div className="portfolio-section__pet-projects__list">
            {projects.map((item, ind) => (
              <PetPListItem key={ind} item={item} />
            ))}
          </div>
          <p className="portfolio-section__pet-projects__text">
            Here{" "}
            <a
              href="https://github.com/anton001-web"
              target="_blank"
              className="prtf-gt__link"
            >
              github
            </a>
            you can find more my pet web projects
          </p>
        </div>
      </div>
    </section>
  );
};
