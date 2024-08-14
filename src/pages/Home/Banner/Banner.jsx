import { Typewriter } from "react-simple-typewriter";
import banner0 from "../../../assets/images/Dolly2.jpg";
import "./banner.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaCloudArrowDown } from "react-icons/fa6";
const PDF_FILE_URL ="https://66b213c12a5e6204550ff05a--clinquant-selkie-d46594.netlify.app/Resume.pdf";
const Banner = () => {
  const downloadFileATUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="lg:h-screen h-auto flex pt-28 pb-5 lg:pb-0 lg:pt-0 flex-col lg:flex-row justify-between dark:text-white bg-pink-50 dark:bg-[#0B061F] items-center">
      <div className="lg:w-[60%] w-full lg:pl-12 pl-6">
        <div className="flex justify-center items-start flex-col">
          <h3 className="lg:text-3xl text-2xl font-bold">
            Hi, I am Dolly Khan
          </h3>
          <h1 className="lg:text-5xl text-2xl font-extrabold text-pink-600 font-playwrite mt-2">
            <Typewriter
              words={["QA Automastion Engineer & MERN Stack Developer"]}
              cursor
              loop
              cursorStyle="_|"
              typeSpeed={200}
              deleteSpeed={200}
              delaySpeed={1000}
            />
          </h1>
          <p className="font-bold lg:text-xl text-lg pt-5">
            I break down complex user experience problems to create integrity
            focused solutions that connect millions of people
          </p>

          <div className="mt-5 flex justify-start items-center gap-6">
            <a href="https://www.facebook.com/profile.php?id=61551619454538" target="_blank">
              <FaFacebook className="text-4xl  hover:text-pink-600 text-blue-900" />
            </a>
            <a href="https://github.com/Dollykhan1" target="_blank">

              <FaGithub className="text-4xl hover:text-pink-600" />
            </a>
            <Link>
              <FcGoogle className="text-4xl hover:text-pink-600" />
            </Link>
            <a href="https://www.linkedin.com/in/dolly-khan-300661291/">
              <FaLinkedin className="text-4xl hover:text-pink-600 text-blue-800" />
            </a>
          </div>
          <div className="mt-5">
            <button onClick={() => downloadFileATUrl(PDF_FILE_URL)} className=" font-extrabold px-5 py-2 lg:text-lg text-base border border-pink-600 hover:text-pink-600 text-white bg-pink-600 hover:bg-transparent rounded-lg active:scale-95 duration-300 flex justify-center items-center gap-3">
            
              <FaCloudArrowDown /> <span>Download My Resume</span>
              
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 w-full pt-10 hidden lg:block">
        <figure className="flex justify-center items-center">
          <img
            src={banner0}
            alt=""
            className="bg-pink-600 px-10 animation lg:h-[30rem] md:h-[30rem] h-[25rem] w-[15rem] md:w-[350px]  border-r-8 border-gray-800 border-b-8 rounded-3xl"
          />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
