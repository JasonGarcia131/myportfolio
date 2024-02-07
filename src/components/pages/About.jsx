const About = () => {
  return (
    <div className="w-full flex mt-20 justify-center items-center text-center lg:h-screen lg:w-1/2 lg:mt-0 lg:bg-white lg:text-black">
      <div className="w-full mx-2 lg:w-[70%]">
        <h1 className="text-6xl mb-2 font-roboto lg:text-left lg:text-4xl">About Me</h1>
        <p className="text-xl font-roboto lg:text-left">
          Software developer with 5 years warehouse management experience. Avid learner whom activley seeks for new ways to contribute and grow. When I am not building projects, I enjoy long walks by the beach and motorcycle rides around the city.
        </p>
        {/* <a
          className="mr-2 underline"
          href="https://www.linkedin.com/in/jason-garcia-00b71b245/"
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="underline"
          href="https://github.com/JasonGarcia131/myportfolio"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Portfolio Source Code
        </a> */}
      </div>
    </div>
  );
};

export default About;
