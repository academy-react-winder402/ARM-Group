import { createBrowserRouter } from "react-router-dom";
import LogIn from "../../Pages/LogIn/LogIn.jsx";
import Courses from "../../Pages/Courses/Courses.jsx";
import Landing from "../../Pages/Landing/Landing.jsx";

const Public = new createBrowserRouter([
  { path: "/Landing", element: <Landing /> },
  { path: "/LogIn", element: <LogIn /> },
  { path: "/Courses", element: <Courses /> },
]);

export default Public;
