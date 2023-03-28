// import React from 'react';
// import InfoList from './InfoList';
import ComparePhoneSpecs from "./img/Compare-Phone-Specs-1.png"
import CryptocurrencyTradingPlatform from "./img/Cryptocurrency-Trading-Platform.png"
import CardGameWar from "./img/Card-Game-War.png"
import Portfolio from "./img/portfolio.png"
export const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "Portfolio was created to show off my skills to potential employers.",
    imgSrc: Portfolio,
    url:'Portfolio',
    ProjectPageMeetDescription:"This is my show case to show off my work to potenal companies of some of my prevous projects.",
    projectLink:"https://github.com/dyschaf/typescriptPortfolio",
    projectsDescription:"After considerable effort and dedication, I am thrilled to announce the successful completion of my updated portfolio. In an effort to enhance my skills and broaden my knowledge, I undertook the task of teaching myself Typescript for the very first time, and I am proud to say that it was a challenging yet rewarding experience. This newly updated portfolio, which I have written with the React framework, serves as a testament to my unwavering commitment to self-improvement and growth as a developer. It is a tangible representation of the work I have done and the progress I have made throughout my career thus far. As I showcase this portfolio to potential employers, I am confident that it will serve as a testament to my skills and my dedication to my craft. I am excited to demonstrate the depth of my knowledge and expertise, and to prove that I am a valuable asset to any team. Overall, this project has been an immensely fulfilling endeavor, and I am excited to see where my continued growth and development will take me in the future.",
    skillsUsed:["React","TypeScript","HTML","CSS","GIT","GitHub"],
    liveLink:""
  },
  {
    id: 2,
    title: "Compare Phone Specs",
    description: "Simple app that you can use to compare phones and see specs like when was this phone released, what's the price and how much battery it has.",
    imgSrc: ComparePhoneSpecs,
    url:'Compare-Phone-Specs',
    ProjectPageMeetDescription:"This is a site I made to research phones it has all the info you'll ever need, from batter to screen size.",
    projectLink:"https://github.com/dyschaf/Final-Project",
    projectsDescription:"As a kid I loved to keep track of the latest hardware and software on phones. This inspired me to find an api that holds all the specs and display it on the page. First, you need sign up and then login using Express server with Node.JS for the application's backend and Postgres for as DBMS. Then with the React the user has two inputs that holds texts and I take the value of the input and attach it to the api. After you click search, the reseult of the fetch gets added to a state using Hooks to display the name of the phones relevent to the search. With a picture displayed you click the right phone that you want and it displays a table with all the specs.",
    skillsUsed:["React","JavaScript","Hooks","Node","Express","Postgres","HTML","CSS","GIT","GitHub"],
    liveLink:"https://github.com/dyschaf/Final-Project"
  },
  {
    id: 3,
    title: "Cryptocurrency Trading Platform",
    description: "This application is a crypto wallet simulator that keeps track of your bitcoin, ethereum or dollar. You can buy and sell between the three currencies.",
    imgSrc: CryptocurrencyTradingPlatform,
    url:"Cryptocurrency-Trading-Platform",
    ProjectPageMeetDescription:"This site I made with a friend we did this for our hackathon it was a crypto wallet that you can sell and buy between ETH BTC and USD.",
    projectLink:"https://github.com/shaul613/crypto_world_hackathon/",
    projectsDescription:"I built this Cryptocurrency exchange simulator with a friend for a bootcamp hackathon at Developers Institute. We made a simple databsae with a few tables to store user information, login information, currency rates, and transactions. We used Node.JS for the application's backend and Postgres for as DBMS. At the home page, our website gives the user a choice between logging in or signing up. If the user chooses to create a new account, all the information entered gets saved in the user table in our database. By default we give each user 0.2 Bitcoin upon signup. If the user decides to log in with existing credentials, the entered information gets saved in the login table in our database as well as a unique login id and whether the login was successful. Once the user is logged in, they have the option to exchange between the differnt currencies we offer! So far we only offer Bitcoin, Etherium, and USDC, but hey... we're still new to this game, so please understand.",
    skillsUsed:["React","JavaScript","Node","Express","Postgres","HTML","CSS","GIT","GitHub"],
    liveLink:"https://github.com/shaul613/crypto_world_hackathon/"
  },
  {
    id: 4,
    title: "Card Game War",
    description: "This was my first project. It's a card game where the person with the higher card wins the round and the cards.",
    imgSrc:CardGameWar,
    url :"Card-Game-War",
    ProjectPageMeetDescription:"This was my first ever project I've grown alot since then it's just a simlple War card game.",
    projectLink:"https://github.com/dyschaf/Hackathon",
    projectsDescription:`This was one of my first real projects writen in JavaScript. I used an array of objects to holds my cards. These object's also stored the value of each card and img background path. The first thing that runs is the shuffle that each object will be in random order, then splits the deck for player one and player two. On the page you can either click player one's button or player two's button and it causes the screen to show the first card of each player. Whoever wins gets both players object index 0 witch would be push in the back of the deck "array". When there is a tie, I built into the DOM a container holding "war container" it will displayed five cards and the only the bottom and the top card showing for each player. Then I set a set interval to wait three seconds to see which card the winner won and then pushes the cards to the winning player.`,
    skillsUsed:["JavaScript","HTML","CSS","GIT","GitHub"],
    liveLink:"https://dyschaf.github.io/Hackathon/"
  }
];

// function App() {
//   return <InfoList infoList={infoList} />;
// }

// export default App;