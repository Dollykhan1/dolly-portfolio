import { FaCircleArrowRight } from "react-icons/fa6";

import { Link } from "react-router-dom";
import CommonTitle from "../../component/CommonTitle";
import MessageButton from "../../component/MessageButton";

const About = () => {
    const myself =
      "My name is Dolly Khan. I am an experienced QA Automastion Engineer & MERN Stack Developer. I have studied QA Automation Engineer and Web Development.";
    const myselfSlice = myself.slice(0, 150);
  
    return (
      <section className="pt-24 lg:h-screen">
        <CommonTitle
          heading="About"
          middleHeading="Me"
          subHeading="About"
        ></CommonTitle>
  
        <div className="flex flex-col lg:flex-row px-4 lg:px-0 justify-between items-center mt-20 gap-3 dark:bg-[#0B061F]">
          <div className="lg:w-1/2 w-full dark:bg-[#0B061F] bg-pink-50 p-4 border-[#231a48fe] dark:border-pink-50 border-y-[6px] rounded-xl hover:scale-105 duration-500">
            <h1 className="text-center text underline underline-offset-8 text-pink-600 font-extrabold font-playwrite text-4xl">
              My <span className="text-[#231a48fe] dark:text-white">Self</span>
            </h1>
            <p className="pt-10 px-5 text-xl text-[#231a48fe] font-bold dark:text-pink-50">
              {myselfSlice}
            </p>
            <div className="px-5 mt-4 flex justify-end">
              <Link to="/myself" className=" font-extrabold px-1 text-lg border border-pink-600 hover:text-pink-600 text-white bg-pink-600 hover:bg-transparent rounded-lg active:scale-95 duration-300 flex justify-center items-center gap-3">
                <span>Read More</span> <FaCircleArrowRight />
              </Link>
            </div>
          </div>
          <span className="h-56 w-1 hidden lg:block bg-pink-600"></span>
          <div className="lg:w-1/2 w-full dark:bg-[#0B061F] bg-pink-50 px-4 py-3 border-[#231a48fe] dark:border-pink-50 border-y-[6px] rounded-xl hover:scale-105 duration-500">
            <h1 className="text-center text underline underline-offset-8 text-pink-600 font-extrabold font-playwrite text-4xl">
              <span className="text-[#231a48fe] dark:text-white">_My</span>{" "}
              Education_
            </h1>
            <div className="my-8 px-5 text-xl text-[#231a48fe] dark:text-pink-50">
              <h3 className="underline text-2xl font-extrabold"></h3>
              <p>
                <span className="font-extrabold text-lg">Institute : </span>{" "}
                <span className="underline">Smart Tech and Programing Hero</span>
              </p>
              <p>
                <span className="font-extrabold text-lg"></span>{" "}
                <span className="underline"></span>{" "}
              </p>
              <p>
                <span className="font-extrabold text-lg">Department : </span>
                <span className="underline">QA Engineer and Web Devolopment</span>
              </p>
              <p>
                <span className="font-extrabold text-lg">Result : </span>{" "}
                <span className="underline">Certified</span>{" "}
              </p>
            </div>
            <div className="px-5 mt-4 flex justify-end">
              <Link to="/myeducation" className=" font-extrabold px-1 text-lg border border-pink-600 hover:text-pink-600 text-white bg-pink-600 hover:bg-transparent rounded-lg active:scale-95 duration-300 flex justify-center items-center gap-3">
                <span>Read More</span> <FaCircleArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <MessageButton></MessageButton>
        </div>
      </section>
    );
  };

export default About;