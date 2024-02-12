import React from "react";
import { SkillItem } from "./SkillItem";
import { skills } from "./skills";

export const SkillsSec = () => {
  return (
    <section className="skills-section" id="qualities">
      <div className="container">
        <div className="skills-section__body">
          <h1 className="skills-section__title">Компании-партнёры</h1>
          <span className="skills-section__subTitle">
            Компании с которымы я сотрудничаю
          </span>
          <div className="skills-slider__wrap">
            <div className="skills-slider__container">
              <div className="skills-slider animate">
                {skills.map((item, ind) => (
                  <SkillItem key={ind} skItem={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
