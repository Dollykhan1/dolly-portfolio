import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import About from "../pages/About/About";
import Home from "../pages/Home/Home/Home";
import Skill from "../pages/Skill/Skill";
import Project from "../pages/Project/Project";
import MyEducation from "../pages/About/MyEducation";
import MySelf from "../pages/About/MySelf";
import Contactme from "../pages/Contactme/Contactme";
// import Signup from "../pages/Signup/Signup";
// import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "myeducation",
        element: <MyEducation></MyEducation>,
      },
      {
        path: "myself",
        element: <MySelf></MySelf>,
      },
      {
        path: "skill",
        element: <Skill></Skill>,
      },
      {
        path: "project",
        element: <Project></Project>,
      },
      {
        path: "contactme",
        element: <Contactme></Contactme>
      },

      // {
      //   path: "/login",
      //   element:<Login></Login>
      // },
      // {
      //   path: "/signup",
      //   element:<Signup></Signup>
      // }
    ],
  },
]);
