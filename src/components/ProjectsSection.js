import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Fantasy Premier League App",
    description:
      `En FPL webapplikasjon for oversikt over rank/poeng, ligaer og diverse. Løsningen fetcher data fra det offisielle Fantasy Premier League API'et
      og visualiserer dette gjennom de ulike featuresene. Bygget med React (JSX) og standard CSS.`,
    getImageSrc: () => require("../images/fantasy-app.png"),
    liveUrl: "https://fantasy-app-petter-saatvedts-projects.vercel.app/",
    repositoryUrl: "https://github.com/PetterTSaatvedt/fantasy-app",
  },
  {
    title: "Landingsside for Meet",
    description:
      "En landingsside for en fiksjonell gruppechat-applikasjon, med fokus på responsivt design. Designfiler er produsert av teamet på Frontend Mentor. Bygget med HTML og CSS.",
    getImageSrc: () => require("../images/meet.png"),
    liveUrl: "https://meet-landing-page-tau-five.vercel.app/",
    repositoryUrl: "https://github.com/PetterTSaatvedt/meet-landing-page",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#0c1821"
      isDarkBackground
      p={{base: 8, md: 12}}
      spacing={12}
      id="projects-section"
    >
      <Heading as="h1" color="#cad2c5">
        Kodeprosjekter
      </Heading>
      <SimpleGrid columns={{base: 1, md: 2}} spacing={{base: 12, md: 8, lg: 12}}>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            liveUrl={project.liveUrl}
            repositoryUrl={project.repositoryUrl}
          />
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;