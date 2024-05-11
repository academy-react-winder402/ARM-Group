import { createBrowserRouter, Navigate } from "react-router-dom";
import LogIn from "../../Pages/LogIn/LogIn.jsx";
import SignUp from "../../Pages/SignUp/SignUp.jsx";
import ForgetPass from "../../Pages/ForgetPass/ForgetPass.jsx";
import Courses from "../../Pages/Courses/Courses.jsx";
import Article from "../../Pages/Articless/Article.jsx";
import Landing from "../../Pages/Landing/Landing.jsx";

/* LayOuts: */
import Header from "../../App/LayOut/Header.jsx";
import Footer_Header from "../../App/LayOut/Header_Footer.jsx";
import Dashbord from "../../App/LayOut/Dashbord.jsx";

const Public = new createBrowserRouter([
  { path: "/", element: <Navigate to="/Home" /> },
  {
    element: <Header />,
    children: [
      { path: "/LogIn", element: <LogIn /> },
      { path: "/SignUp", element: <SignUp /> },
      { path: "/ForgetPass", element: <ForgetPass /> },
      { path: "/Dashbord", element: <Dashbord /> },
    ],
  },
  {
    element: <Footer_Header />,
    children: [
      { path: "/Home", element: <Landing /> },
      { path: "/Courses", element: <Courses /> },
      { path: "/Article", element: <Article /> },
    ],
  },
]);

export default Public;
