import React from 'react';
import Btn from '../components/btn';
import about from '../assets/img/about.png';

function About() {
  return (
    <div className="p-2 overflow-x-hidden xl:pt-12 xl:pb-6 ">
      <div className="">
        <h3 className="text-center text-2xl xl:text-3xl xl:font-bold lg:pt-8 font-bold p-4 mt-4 xl:hidden">
          Our Story, Your Success
        </h3>
        <h4 className="lg:text-xl xl:hidden mx-auto text-center md:pb-4 sm:px-8">
              At Technotix, we bring creativity and technical expertise together to build websites that not only look great but also deliver measurable results. We specialize in custom web solutions, tailored to help businesses grow their online presence.
        </h4>
      </div>

      <div className="xl:grid xl:grid-cols-2  ">
        <div className="p-4 md:px-16 xl:px-16 xl:w-full md:m-auto ">
          <img
            className="rounded-xl xl:w-full justify-self-center"
            src={about}
            alt="About Us"
          />
        </div>

          {/* Text Section */}
        <div className="p-2 flex flex-col xl:m-10 md:m-4 xl:pt-8 md:content-center md:justify-center ">
          {/* Intro Text */}
          <div className="">
            <h3 className="text-center text-2xl xl:text-3xl xl:font-bold  font-bold p-4  hidden xl:block">
            Our Story, Your Success
            </h3>
          </div>
          <div className="">
            <h4 className="xl:text-xl hidden text-center xl:block">
              At Technotix, we bring creativity and technical expertise together to build websites that not only look great but also deliver measurable results. We specialize in custom web solutions, tailored to help businesses grow their online presence.
            </h4>
          </div>

          <div className="py-4 xl:py-6" >
            <h5 className="font-bold md:py-4 text-2xl xl:text-3xl p-2 mx-auto flex justify-center">
              Why We Do It
            </h5>
            <p className="xl:text-xl text-center md:px-8">
              Our passion lies in helping businesses thrive in the digital world. We believe every brand deserves a strong online presence, and we’re here to make that happen.
            </p>
          </div>

          <div className="flex justify-center p-2">
            <Btn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;