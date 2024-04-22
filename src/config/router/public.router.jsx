import { createBrowserRouter, Navigate } from "react-router-dom";
import LogIn from "../../Pages/LogIn/LogIn.jsx";
import SignUp from "../../Pages/SignUp/SignUp.jsx";
import ForgetPass from "../../Pages/ForgetPass/ForgetPass.jsx";
import Courses from "../../Pages/Courses/Courses.jsx";
import Landing from "../../Pages/Landing/Landing.jsx";
import Header from "../../app/LayOut/Header.jsx";

const Public = new createBrowserRouter([
  { path: "/", element: <Navigate to="/Home" /> },
  {
    element: <Header />,
    children: [
      { path: "/Home", element: <Landing /> },
      { path: "/LogIn", element: <LogIn /> },
      { path: "/SignUp", element: <SignUp /> },
      { path: "/ForgetPass", element: <ForgetPass /> },
      { path: "/Courses", element: <Courses /> },
    ],
  },
]);

export default Public;
