import Nav from "../Nav";
const About = () => {
  return (
    <div className=" w-full flex mt-20 justify-center items-center lg:h-screen lg:w-1/2 lg:mt-0 lg:bg-white lg:text-black">
      <div className="w-[50%]">
        <h1 className="text-6xl text-center font-roboto lg:text-left lg:text-4xl">About Me</h1>
        <p className="my-4 text-xl">
          Software developer with 5 years warehouse management experience. Skills, such as time management, team playing,
          and problem solving have been tested and strengthened throughout the years in a warehouse environment. As I branch out
          to a new career path in software development, I bring all the transferable skills to a new environment where I can continue to
          learn, contribute, and grow.
        </p>
        <a
          className="mr-2 underline"
          href="https://www.linkedin.com/in/jason-garcia-00b71b245/"
        >
          LinkedIn
        </a>
        <a
          className="underline"
          href="https://github.com/JasonGarcia131/Portfolio-React"
        >
          Portfolio Source Code
        </a>
      </div>
    </div>
  );
};

export default About;
