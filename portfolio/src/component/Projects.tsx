import React from 'react';
import ComparePhoneSpecs from "./img/Compare-Phone-Specs-1.png"
import CryptocurrencyTradingPlatform from "./img/Cryptocurrency-Trading-Platform.png"
import CardGameWar from "./img/Card-Game-War.png"

import Project from './Project';

function Projects(){
    
    const projects = [
        {
          id: 1,
          title: "Portfolio",
          description: "Portfolio was created to show off my skills to potential employers.",
          imgSrc: ""
        },
        {
          id: 2,
          title: "Compare Phone Specs",
          description: "Simple app that you can use to compare phones and see specs like when was this phone released, what's the price and how much battery it has.",
          imgSrc: ComparePhoneSpecs
        },
        {
          id: 3,
          title: "Cryptocurrency Trading Platform",
          description: "This application is a crypto wallet simulator that keeps track of your bitcoin, ethereum or dollar. You can buy and sell between the three currencies.",
          imgSrc: CryptocurrencyTradingPlatform
        },
        {
          id: 4,
          title: "Card Game War",
          description: "This was my first project. It's a card game where the person with the higher card wins the round and the cards.",
          imgSrc:CardGameWar
        }
    ];
    
    return(
        <>
        <div id='project'>
            <h1>PROJECTS</h1>
            <hr />
            <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
        </div>
        <div>
        {projects.map((project, index) => (
        <Project
          key={index}
          id={project.id}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
        />
      ))}
      </div>
        </>
    )
}
export default Projects