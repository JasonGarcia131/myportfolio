import img1 from "./images/blackjack-homepage-thumbnail.png";
import img10 from "./images/startsHomePage.png";
import img13 from "./images/timecard-thumbnail.png";
import img6 from "./images/react-a-mole-thumbnail.png";
import img18 from "./images/instagram-clone-thumbnail.png";
import img2 from "./images/twitter-interface-thumbnail.png";
import img3 from "./images/redux-art-gallery-thumbnail.png";

export const ProjectData = [
    {
        imgUrl: img2,
        name: "Twitter Message Interface",
        techStack: "React, Redux",
        description: "Messaging interface with a search bar function and screen stack navigation to mock Twitter's messaging feature. Data is fetched from a db file using a json-server. Navigation was achieved with react-router-dom.",
        codeLink: "https://github.com/JasonGarcia131/Twitter-Messaging-Interface",
        pageLink: "https://jasongarcia131.github.io/Twitter-Messaging-Interface/"
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
        imgUrl: img3,
        name: "Redux Art Gallery",
        techStack: "React, Redux",
        description: "Mock art gallery that fetches data from an art api using slices, dispatch, and persist data with a global store.",
        codeLink: "https://github.com/JasonGarcia131/redux-art-gallery",
        pageLink: "#"
    },
    {
        imgUrl: img6,
        name: "React-A-Mole",
        techStack: "React",
        description: "Classic arcade inspired whack-a-mole. Project was built for a milestone project for class to understand flexbox and useState/ useEffect hooks in react.",
        codeLink: "https://github.com/JasonGarcia131/react-a-mole",
        pageLink: "https://jasongarcia131.github.io/react-a-mole/"
    },
    {
        imgUrl: img10,
        name: "Stars",
        techStack: "Mongoose, Express, React, Node",
        description: "Stars is a journaling app that allows users to register, login, switch themes, publish public or private comments, and upload profile/ header pictures. User authentication and authorization is achieved using jwt tokens in the backend. This app was built to understand the workflow of user authentication and authorization with jwt tokens, interceptors with axios, and persistant logins with refresh tokens.",
        codeLink: "https://github.com/JasonGarcia131/Stars-Frontend",
        pageLink: "https://socialstars.onrender.com/"
    },
    {
        imgUrl: img1,
        name: "Halloween BlackJack",
        techStack: "Vanilla Javascript",
        description: "Halloween themed multiplayer blackjack game. Users take turns drawing cards to sum their hand to 21. Focused around object oriented programming and functional programming. Custom methods for drawing cards, adding cards to hand, and ending user turn.",
        codeLink: "https://github.com/JasonGarcia131/Halloween-BlackJack",
        pageLink: "https://jasongarcia131.github.io/Halloween-BlackJack/"
    },
    {
        imgUrl: img13,
        name: "Time-Card-Calculator",
        techStack: "React",
        description: "This app calculates employee hours worked in a week. Simple frontend project with a custom time conversion function for employee punch in/ punch out.",
        codeLink: "https://github.com/JasonGarcia131/Time-Card-Calculator",
        pageLink: "https://jasongarcia131.github.io/Time-Card-Calculator/"
    },
]