import {

  MobileNav,
  Typography,
  IconButton,
 

} from "@material-tailwind/react";
import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";


const NavbarSticky = () => {
 


  const [openNav, setOpenNav] = useState(false);
  const [theme, setheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = (dark) => {
    if (dark == "dark") {
      setheme("dark");
    } else {
      setheme("light");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 lg:border-b-2 font-nunito font-extrabold underline-offset-2 border-pink-600 text-lg dark:text-white"
              : " text-lg font-nunito font-extrabold dark:text-white"
          }
        >
          HOME
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 lg:border-b-2 font-nunito font-extrabold underline-offset-2 border-pink-600 text-lg dark:text-white"
              : " text-lg font-nunito font-extrabold dark:text-white"
          }
        >
          ABOUT
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="skill"
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 lg:border-b-2 font-nunito font-extrabold underline-offset-2 border-pink-600 text-lg dark:text-white"
              : " text-lg font-nunito font-extrabold dark:text-white"
          }
        >
          SKILL
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="project"
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 lg:border-b-2 font-nunito dark:text-white font-extrabold underline-offset-2 border-pink-600 text-lg "
              : " text-lg font-nunito font-extrabold dark:text-white"
          }
        >
          PROJECT
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="contactme"
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 lg:border-b-2 font-nunito dark:text-white font-extrabold underline-offset-2 border-pink-600 text-lg "
              : " text-lg font-nunito font-extrabold dark:text-white"
          }
        >
          CONTACT ME
        </NavLink>
      </Typography>
    </ul>
  );


  const darkLight = (
    <>
      <button onClick={() => handleToggle("dark")} className="dark:hidden">
        <MdDarkMode className="text-4xl text-pink-600 active:rotate-[360deg] duration-500" />
      </button>
      <button
        onClick={() => handleToggle("light")}
        className="dark:block hidden text-white"
      >
        <CiLight className="text-4xl active:rotate-[360deg] duration-1000" />
      </button>
    </>
  );


  return (
    <nav
      className={`fixed max-w-screen-xl px-5 py-3 mx-auto top-0 z-[999] bg-pink-50 lg:border-0 border-b-2 border-pink-600 dark:bg-[#0B061F] ${
        sticky
          ? "bg-pink-50 text-gray-900 w-full px-5 py-3 shadow-lg dark:shadow-[#312858] dark:bg-[#0B061F] shadow-white"
          : "text-pink-600 w-full px-5 py-3"
      }`}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          to=""
          className="mr-4 cursor-pointer py-1.5 text-3xl font-nunito text-pink-600 font-extrabold"
        >
          DK Khan
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="lg:flex items-center gap-x-5 hidden">
            <div className="mt-2">{darkLight}</div>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 dark:text-white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav} className="flex">
        <div>
          <div>{navList}</div>
        </div>
        <div className="mt-2">{darkLight}</div>
      </MobileNav>
  </nav>
  );



};

export default NavbarSticky;