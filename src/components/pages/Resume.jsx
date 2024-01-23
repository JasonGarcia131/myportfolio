import Nav from "../Nav";
import { Experience, Databases, Languages, Frameworks } from "../../ResumeData";

const Resume = () => {
  const mappedExperience = Experience.map((job, index) => {
    return (
      <div className="mb-8" key={index}>
        <p className="italic">{job.employeedDate}</p>
        <h3 className="text-2xl font-bold underline">
          {job.jobTitle} — {job.company}
        </h3>
        <p className="text-lg">{job.description}</p>
        {job.list.map((item) => (
          <ul className="list-disc ml-10">
            <li>{item}</li>
          </ul>
        ))}
      </div>
    );
  });

  const mappedLanguages = Languages.map((language, index) => {
    return (
      <ul className="my-4 text-lg" key={index}>
        <li>{language}</li>
      </ul>
    );
  });

  const mappedFrameworks = Frameworks.map((framework, index) => {
    return (
      <ul className="my-4 text-lg" key={index}>
        <li>{framework}</li>
      </ul>
    );
  });

  const mappedDatabases = Databases.map((database, index) => {
    return (
      <ul className="my-4 text-lg" key={index}>
        <li>{database}</li>
      </ul>
    );
  });

  return (
    <div className="flex flex-col justify-between mt-20">
      <Nav />
      <section className="w-full h-[30%] text-center my-6 p-4 flex flex-col items-center">
        <h1 className="text-4xl mb-6 font-bold">Professional Summary</h1>
        <p className="mx-2 w-[80%] text-lg">
          Software developer with experience in developing and designing web
          applications using HTML, CSS, JavaScript, Node.js, and React. Adept at
          developing and deploying complex backend systems, web services and
          databases. 5+ years in warehouse management in a shipping/ receiving
          environment.
        </p>
      </section>
      <div className="px-6 my-6 flex flex-col  justify-between md:flex-row">
        <section className="w-full md:w-[50%]">
          <div className="lg:mb-6">
            <h2 className="text-4xl my-4 font-bold">Education</h2>
            <p className="w-full text-lg flex-shrink">
              Software Development - California State University, Long Beach
            </p>
            <br />
          </div>
          <div>
            <h2 className="text-4xl mb-4 font-bold">Experience</h2>
            {mappedExperience}
          </div>
        </section>
        <section className="w-[100%] md:w-[50%]">
          <div className="my-2 md:text-right">
            <h2 className="text-4xl font-bold">Languages</h2>
            {mappedLanguages}
            <h2 className="text-4xl font-bold">Frameworks/Libraries</h2>
            {mappedFrameworks}
            <h2 className="text-4xl font-bold">Databases</h2>
            {mappedDatabases}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
