import img1 from "./images/blackjack-homepage-thumbnail.png";
import img10 from "./images/startsHomePage.png";
import img13 from "./images/timecard-thumbnail.png";
import img6 from "./images/insperity-thumbnail.png";
import img18 from "./images/instagram-clone-thumbnail.png";
import img2 from "./images/twitter-interface-thumbnail.png";
import img3 from "./images/bank-thumbnail.png";
import img4 from "./images/postgres-thumbnail.png";

export const ProjectData = [
    {
        imgUrl: img3,
        name: "Bank Frontend",
        techStack: "Vite, React, Tailwindcss",
        description: "Frontend project that demonstrates UX/UI. This application mimics an online banking and payment system landing page where information is presented to the user. Color gradient and font size all working together to attract user attention.",
        codeLink: "https://github.com/JasonGarcia131/bank-frontend",
        pageLink: "https://jasongarcia131.github.io/bank-frontend/"
    },
     {
        imgUrl: img6,
        name: "Insperity",
        techStack: "Vite, React, Tailwindcss",
        description: "Redesign of an employee clock in/out dashboard. Original site was not mobile responsive, which inspired me to build this mock webpage.",
        codeLink: "https://github.com/JasonGarcia131/insperity",
        pageLink: "https://jasongarcia131.github.io/insperity/"
    },
    {
        imgUrl: img10,
        name: "Social Stars",
        techStack: "Mongoose, Express, React, Node",
        description: "Stars is a journaling app that allows users to register, login, switch themes, publish public or private comments, and upload profile/ header pictures. User authentication and authorization is achieved using jwt tokens in the backend. This app was built to understand the workflow of user authentication and authorization with jwt tokens, interceptors with axios, and persistant logins with refresh tokens. Backend code repo is under Stars-Backend",
        codeLink: "https://github.com/JasonGarcia131/socialstars",
        pageLink: "https://socialstars.onrender.com/"
    },
    {
        imgUrl: img4,
        name: "Warehouse Management System",
        techStack: "Nodejs, Express, Sequelize, Postgres",
        description: "Backend api that mocks a warehouse management system for a handbag company. This api performs all the CRUD operations with users and sales orders to mimick data entry for sales reps. Tables are referenced through foreign keys and have one-to-one, one-to-many, and many-to-many relationships.",
        codeLink: "https://github.com/JasonGarcia131/wms-backend",
        pageLink: "#"
    },
    {
        imgUrl: img18,
        name: "Instagram Clone",
        techStack: "React Native, Expo, Firebase",
        description: "Instagram clone demonstrating mobile UX/UI desgin. Full stack application with authentication and authorization with firebase. Url image uploader with form validation with Formik.",
        codeLink: "https://github.com/JasonGarcia131/Instagram-Clone",
        pageLink: "#"
    },
    {
        imgUrl: img2,
        name: "Twitter Message",
        techStack: "React, Redux",
        description: "Messaging interface with a search bar function and screen stack navigation to mock Twitter's messaging feature. Data is fetched from a db file using a json-server. Navigation was achieved with react-router-dom.",
        codeLink: "https://github.com/JasonGarcia131/Twitter-Messaging-Interface",
        pageLink: "https://jasongarcia131.github.io/Twitter-Messaging-Interface/"
    },
    // {
    //     imgUrl: img6,
    //     name: "React-A-Mole",
    //     techStack: "React",
    //     description: "Classic arcade inspired whack-a-mole. Project was built for a milestone project for class to understand flexbox and useState/ useEffect hooks in react.",
    //     codeLink: "https://github.com/JasonGarcia131/react-a-mole",
    //     pageLink: "https://jasongarcia131.github.io/react-a-mole/"
    // },
    // {
    //     imgUrl: img1,
    //     name: "Halloween BlackJack",
    //     techStack: "Vanilla Javascript",
    //     description: "Halloween themed multiplayer blackjack game. Users take turns drawing cards to sum their hand to 21. Focused around object oriented programming and functional programming. Custom methods for drawing cards, adding cards to hand, and ending user turn.",
    //     codeLink: "https://github.com/JasonGarcia131/Halloween-BlackJack",
    //     pageLink: "https://jasongarcia131.github.io/Halloween-BlackJack/"
    // }
]