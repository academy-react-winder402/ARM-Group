import { createBrowserRouter, Navigate } from "react-router-dom";
import LogIn from "../../Pages/LogIn/LogIn.jsx";
import SignUp from "../../Pages/SignUp/SignUp.jsx";
import ForgetPass from "../../Pages/ForgetPass/ForgetPass.jsx";
import Courses from "../../Pages/Courses/Courses.jsx";
import Landing from "../../Pages/Landing/Landing.jsx";

/* LayOuts: */
import Header from "../../app/LayOut/Header.jsx";
import Footer_Header from "../../app/LayOut/Header_Footer.jsx";

const Public = new createBrowserRouter([
  { path: "/", element: <Navigate to="/Home" /> },
  {
    element: <Header />,
    children: [
      { path: "/LogIn", element: <LogIn /> },
      { path: "/SignUp", element: <SignUp /> },
      { path: "/ForgetPass", element: <ForgetPass /> },
    ],
  },
  {
    element: <Footer_Header />,
    children: [
      { path: "/Home", element: <Landing /> },
      { path: "/Courses", element: <Courses /> },
    ],
  },
]);

export default Public;
