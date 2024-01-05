import React from "react";
import "./style/index.scss";
import { Header } from "./components/header/Header";
import { Main } from "./components/Main";
import { HeroSec } from "./components/heroSec/HeroSec";
import { AboutMeSec } from "./components/aboutMe/AboutMeSec";
import { SkillsSec } from "./components/skillsSec/SkillsSec";
import { PortfolioSec } from "./components/portfSec/PortfolioSec";
import { Footer } from "./components/footer/Footer";
import { Gallery } from "./components/gallery/Gallery";

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <HeroSec />
        <AboutMeSec />
        <SkillsSec />
        <Gallery />
        {/* <PortfolioSec /> */}
      </Main>
      <Footer />
    </>
  );
};
