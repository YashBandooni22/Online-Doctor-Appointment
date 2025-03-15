import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-600">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-md text-gray-600">
          <p>
            Welcome To Prescripto, Your Trusted partner In Managing Your
            Healthcare Needs Conveniently And Efficiently. A Prescripto, We
            Understand the Challenge Individuals face When It Comes To
            Scheduling Doctor Appointments And Managing Their Health Records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology, We
            continuously strive to enhance our platform, integrating the latest
            advancement to improve user experience and deliver superior service.
            Whether You're booking your first appointment or managing ongoing
            care. Prescripto is here to support you every step of the way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our Vision at prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            nd healthcare providers, Making it easier for you to access the care
            you need, When you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>Streamlined Appointment Scheduiling That Fits Into Your Busy Lifestyle.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p>Access To A Network Of Trusted HealthCare Professionals In Your Area.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>Tailored Recommendations And Remainders To Help You Stay On Top Of Your Health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
