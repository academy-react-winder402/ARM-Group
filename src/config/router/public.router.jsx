import { createBrowserRouter } from "react-router-dom";
import LogIn from "../../Pages/LogIn/LogIn.jsx";
import ForgetPass from "../../Pages/ForgetPass/ForgetPass.jsx";
import Courses from "../../Pages/Courses/Courses.jsx";
import Landing from "../../Pages/Landing/Landing.jsx";
import Header from "../../app/LayOut/Header.jsx";

const Public = new createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/Landing", element: <Landing /> },
      { path: "/LogIn", element: <LogIn /> },
      { path: "/ForgetPass", element: <ForgetPass /> },
      { path: "/Courses", element: <Courses /> },
    ],
  },
]);

export default Public;
