import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import tailwind from "../../assets/images/tailwind.png";
import js from "../../assets/images/JavaScript-logo.png";
import firebase from "../../assets/images/firebase.png";
import react from "../../assets/images/reactt.png";
import node from "../../assets/images/Layer 1.png";
import express from "../../assets/images/express.png";
import mongodb from "../../assets/images/mongodb.png";
import CommonTitle from "../../component/CommonTitle";
import MessageButton from "../../component/MessageButton";
import Java from "../../assets/images/Java.jpeg";
import ec from "../../assets/images/eclipse.jpeg"
import selenium from "../../assets/images/selenium.png"

const Skill = () => {
  return (
    <section className="pt-24 min-h-screen">
      <CommonTitle
        heading="My"
        middleHeading="Skill"
        subHeading="Knowladge"
      ></CommonTitle>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4  grid-cols-1 px-16 lg:px-0 mt-16">
        <figure className="bg-pink-50 flex flex-col justify-center items-center py-5 dark:border-2 dark:border-pink-600 dark:bg-[#0B061F] hover:scale-105 duration-500 hover:rounded-xl">
          <img src={html} alt="" className="w-[100px] h-[100px]" />
          <h1 className="text-2xl font-extrabold text-[#0B061F] mt-5 dark:text-pink-600 font-playwrite">
            HTML5
          </h1>
        </figure>
        <figure className="bg-pink-50 flex flex-col justify-center items-center py-5 dark:border-2 dark:border-pink-600 dark:bg-[#0B061F] hover:scale-105 duration-500 hover:rounded-xl">
          <img src={css} alt="" className="w-[100px] h-[100px]" />
          <h1 className="text-2xl font-extrabold text-[#0B061F] mt-5 dark:text-pink-600 font-playwrite">
            CSS3
          </h1>
        </figure>
        <figure className="bg-pink-50 flex flex-col justify-center items-center py-5 dark:border-2 dark:border-pink-600 dark:bg-[#0B061F] hover:scale-105 duration-500 hover:rounded-xl">
          <img src={tailwind} alt="" className="w-[100px] h-[100px]" />
          <h1 className="text-2xl font-extrabold text-[#0B061F] mt-5 dark:text-pink-600 font-playwrite">
            Tailwind CSS
          </h1>
        </figure>
        <figure className="bg-pink-50 flex flex-col justify-center items-center py-5 dark:border-2 dark:border-pink-600 dark:bg-[#0B061F] hover:scale-105 duration-500 hover:rounded-xl">
          <img src={js} alt="" className="w-[100px] h-[100px]" />
          <h1 className="text-2xl font-extrabold text-[#0B061F] mt-5 dark:text-pink-600 font-playwrite">
            JavaScript
          </h1>
        </figure>
        <figure className="bg-pink-50 flex flex-col justify-center items-center py-5 dark:border-2 dark:border-pink-600 dark:bg-[#0B061F] hover:scale-105 duration-500 hover:rounded-xl">
          <img src={firebase} alt="" className="w-[100px] h-[100px]" />
          <h1 className="text-2xl font-extrabold text-[#0B061F] mt-5 dark:text-pink-600 font-playwrite">
            Firebase
          </h1>
        </figure>
        <figure className="bg-pink-50 flex flex-col justify-center items-center py-5 dark:border-2 dark:border-pink-600 dark:bg-[#0B061F] hover:scale-105 duration-500 hover:rounded-xl">
          <img src={react} alt="" className="w-[100px] h-[100px]" />
          <h1 className="text-2xl font-extrabold text-[#0B061F] mt-5 dark:text-pink-600 font-playwrite">
            React JS
          </h1>
        </figure>
        <figure className="bg-pink-50 flex flex-col justify-center items-center py-5 dark:border-2 dark:border-pink-600 dark:bg-[#0B061F] hover:scale-105 duration-500 hover:rounded-xl">
          <img src={node} alt="" className="w-[100px] h-[100px]" />
          <h1 className="text-2xl font-extrabold text-[#0B061F] mt-5 dark:text-pink-600 font-playwrite">
            Node JS
          </h1>
        </figure>
        <figure className="bg-pink-50 flex flex-col justify-center items-center py-5 dark:border-2 dark:border-pink-600 dark:bg-[#0B061F] hover:scale-105 duration-500 hover:rounded-xl">
          <img src={express} alt="" className="w-[100px] h-[100px]" />
          <h1 className="text-2xl font-extrabold text-[#0B061F] mt-5 dark:text-pink-600 font-playwrite">
            Express JS
          </h1>
        </figure>
        <figure className="bg-pink-50 flex flex-col justify-center items-center py-5 dark:border-2 dark:border-pink-600 dark:bg-[#0B061F] hover:scale-105 duration-500 hover:rounded-xl">
          <img src={mongodb} alt="" className="w-[100px] h-[100px]" />
          <h1 className="text-2xl font-extrabold text-[#0B061F] mt-5 dark:text-pink-600 font-playwrite">
            MongoDB
          </h1>
        </figure>
        <figure className="bg-pink-50 flex flex-col justify-center items-center py-5 dark:border-2 dark:border-pink-600 dark:bg-[#0B061F] hover:scale-105 duration-500 hover:rounded-xl">
          <img src={Java} alt="" className="w-[100px] h-[100px]" />
          <h1 className="text-2xl font-extrabold text-[#0B061F] mt-5 dark:text-pink-600 font-playwrite">
            Java
          </h1>
        </figure>
        <figure className="bg-pink-50 flex flex-col justify-center items-center py-5 dark:border-2 dark:border-pink-600 dark:bg-[#0B061F] hover:scale-105 duration-500 hover:rounded-xl">
          <img src={ec} alt="" className="w-[100px] h-[100px]" />
          <h1 className="text-2xl font-extrabold text-[#0B061F] mt-5 dark:text-pink-600 font-playwrite">
           Eclipse
          </h1>
        </figure>
        <figure className="bg-pink-50 flex flex-col justify-center items-center py-5 dark:border-2 dark:border-pink-600 dark:bg-[#0B061F] hover:scale-105 duration-500 hover:rounded-xl">
          <img src={selenium} alt="" className="w-[100px] h-[100px]" />
          <h1 className="text-2xl font-extrabold text-[#0B061F] mt-5 dark:text-pink-600 font-playwrite">
          Selenium
          </h1>
        </figure>
      </div>

      <div>
        <MessageButton></MessageButton>
      </div>
    </section>
  );
};

export default Skill;