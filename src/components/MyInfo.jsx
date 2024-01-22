import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const MyInfo = () => {
  return (
    <div className="flex flex-col mt-20 lg:border lg:border-white lg:w-1/2 lg:mt-0">
      <div className="m-auto text-center lg:text-left">
        <h1 className="text-8xl mb-2 font-roboto">Jason Garcia</h1>
        <p className="text-xl mb-2 font-poppins italic">
          "Let's collaborate and build."
        </p>
        <div className="flex justify-center lg:justify-start">
          <FaPhoneAlt /> <span className="mx-2">323-316-8978</span>
          <a className="mr-2 ml-2" href="mailto:jaygarcia0530@gmail.com">
            <FaEnvelope className="translate-y-0.5" />
          </a>
          <a className="-translate-y-1 text-lg" href="mailto:jaygarcia0530@gmail.com">
            jaygarcia0530@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
