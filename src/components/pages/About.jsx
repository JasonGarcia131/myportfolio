const About = () => {
  return (
    <div className="w-full flex mt-20 justify-center items-center text-center lg:h-screen lg:w-1/2 lg:mt-0 lg:bg-white lg:text-black">
      <div className="w-full mx-2 lg:w-[70%]">
        <h1 className="text-6xl  mb-4 font-roboto lg:text-left lg:text-4xl">About Me</h1>
        <p className="text-xl font-roboto lg:text-left">
          Software developer with 5 years warehouse management experience. Skills, such as time management, team playing,
          and problem solving have been tested and strengthened throughout the years in a warehouse environment. As I branch out
          to a new career path in software development, I bring all the transferable skills to a new environment where I can continue to
          learn, contribute, and grow.
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
