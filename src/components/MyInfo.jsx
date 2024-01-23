import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const MyInfo = () => {
  return (
    <div className="flex flex-col mt-20 lg:border lg:border-white lg:w-[50%] lg:mt-0">
      <div className="m-auto text-center lg:text-left lg:w-[70%]">
        <h1 className="text-8xl mb-2 font-roboto">Jason Garcia</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Let's collaborate.",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "Let's build.",
            2000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1.5em", fontFamily: "roboto", display: "inline-block" }}
          repeat={Infinity}
        />
        {/* <p className="text-xl mb-2 font-roboto italic">
          "Let's collaborate and build."
        </p> */}
        <div className="flex justify-center mt-2 lg:justify-start">
          <FaPhoneAlt /> <span className="mx-2 font-roboto">323-316-8978</span>
          <a className="mr-2 ml-2" href="mailto:jaygarcia0530@gmail.com">
            <FaEnvelope className="translate-y-0.5" />
          </a>
          <a
            className="-translate-y-1 text-lg font-roboto"
            href="mailto:jaygarcia0530@gmail.com"
          >
            jaygarcia0530@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
