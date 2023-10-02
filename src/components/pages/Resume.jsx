import Nav from "../Nav";

const Resume = () => {
    return (
        <div className="flex flex-col justify-between">
            <Nav />
            <section className="w-full h-[30%] text-center my-6 p-4 border border-gray-300 flex flex-col items-center">
                <h1 className="text-4xl mb-6">Professional Summary</h1>
                <p className="mx-2 w-[80%]">
                    Software developer with experience in developing and designing web applications using HTML,
                    CSS, JavaScript, Angular, Node.js, and React. Adept at developing and deploying complex backend
                    systems, web services and databases. 5+ years in warehouse management in a shipping/ receiving environment.
                </p>
            </section>
            <div className="px-6 my-6 flex flex-col md:flex-row md:justify-between">
                <section className="w-[100%] text-center md:text-left md:w-[50%]">
                    <div className="lg:mb-6">
                        <h2 className="text-2xl my-4">Education</h2>
                        <p className="w-full flex-shrink">Software Development-California State University, Long Beach</p>
                        <br />
                    </div>
                    <div>
                        <h2 className="text-2xl">
                            Experience
                        </h2>
                        <div className="my-4">
                            <p>01/2019-current</p>
                            <h3>Warehouse Supervisor- Deluxity Inc</h3>
                            <p>
                                Oversee and coordinate general warehouse operations
                                including: shipping, receiving, inventory management,
                                train employees, and standardize optimal procedures for efficient exceution.
                            </p>
                        </div>
                        <div className="mb-4">
                            <p>10/2021-current</p>
                            <h3>Fullstack Software Developer</h3>
                            <p>
                                Build fullstack MERN and PERN stack CRUD applications designed for optimal UX/ UI experience using REST.
                                Designed and built applications from games using vanilla javascript to social media applications through client side rending and server side rendering.
                                Experience with data fetching tools such as redux toolkit and rtk query. Version control using git.
                            </p>
                        </div>
                        <div className="mb-4">
                            <p>11/2017-11/2019</p>
                            <h3>Warehouse Supervisor- Dolphin International</h3>
                            <p> Managed a team of 15 warehouse employees to meet and improve
                                a set productivity time in an Import/Export live tropical fish warehouse.
                                Responsibilities included: Scheduling crew, dispatch drivers, and meet cargo ship-out
                                deadlines, evaluate employee performance, and interview/ hire.</p>
                        </div>
                        <div>
                            <p>01/2018-01/2019</p>
                            <h3>Supplemental Instructor/ Tutor- El Camino College</h3>
                            <p>
                                Lead after-class study sessions at El Camino College. The goal
                                was to create a collaborative learning environment where students were taught how
                                to collaborate as a group to solve problems and facilitate group learning.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-[100%] text-center md:text-left md:w-[50%]">
                    <div className="my-2 md:text-right">
                        <h2 className="text-2xl">Languages</h2>
                        <ul>
                            <li className="my-4"> Javascript </li>
                            <li className="my-4"> Typescript </li>
                            <li className="my-4"> Python </li>
                            <li className="my-4"> C++ </li>
                        </ul>
                        <h2 className="text-2xl">Frameworks/Libraries</h2>
                        <ul>
                            <li className="my-4"> React </li>
                            <li className="my-4"> Express </li>
                            <li className="my-4"> Flask </li>
                            <li className="my-4"> Sass  </li>
                        </ul>
                        <h2 className="text-2xl">Databases</h2>
                        <ul>
                            <li className="my-4"> Mongoose + MongoDb </li>
                            <li className="my-4"> Postgres + PGadmin</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Resume;
