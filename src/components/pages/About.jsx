import Nav from "../Nav"
import { Link } from "react-router-dom"
const About = () => {
    return (
        <div>
            <Nav />
            <div className="absolute top-[25%] bottom-[25%] text-center md:text-left md:w-[60%] md:left-[25%] my-8">
                <h1 className="text-4xl font-montserrat">About Me</h1>
                <p className="my-4 mx-4 md:mx-0">
                    With 5+ years warehouse supervisor experience and 2 years software develpoment experience, I have built a mindset of efficiency, excecution and leadership.
                    Throughout the years, my strengths were highlighted, but, most importantly, my weaknesses were recognized through this journey of professional self-development.
                    As I branch out into a new career path in Software Development, I bring along the experience and passion to create, collaborate, and build.
                </p>
                <a className="mr-2 underline" href="https://www.linkedin.com/in/jason-garcia-00b71b245/">LinkedIn</a>
                <a className='underline' href="https://github.com/JasonGarcia131/Portfolio-React">Portfolio Source Code</a>
            </div>
        </div>
    )
}

export default About