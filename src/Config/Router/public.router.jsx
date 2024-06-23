import { createBrowserRouter, Navigate } from "react-router-dom";
import LogIn from "../../Pages/LogIn/LogIn.jsx";
import SignUp from "../../Pages/SignUp/SignUp.jsx";
import ForgetPass from "../../Pages/ForgetPass/ForgetPass.jsx";
import Courses from "../../Pages/Courses/Courses.jsx";
import CourseDetails from "../../Pages/CoursesDetail/index.jsx";
import Article from "../../Pages/Articless/Article.jsx";
import ArticleDetail from "../../Pages/ArticleDetail/index.jsx";
import Landing from "../../Pages/Landing/Landing.jsx";
import Dashbord_Comment from "../../Pages/Dashbord/Comments/index.jsx";
import Dashbord_Courses from "../../Pages/Dashbord/Courses/index.jsx";
import Dashbord_User from "../../Pages/Dashbord/User/index.jsx";
import UserDetail from "../../Pages/Dashbord/UserDetail/index.jsx";

/* LayOuts: */
import Header from "../../App/LayOut/Header.jsx";
import Footer_Header from "../../App/LayOut/Header_Footer.jsx";

const Public = new createBrowserRouter([
  { path: "/", element: <Navigate to="/Home" /> },
  {
    element: <Header />,
    children: [
      { path: "/LogIn", element: <LogIn /> },
      { path: "/SignUp", element: <SignUp /> },
      { path: "/ForgetPass", element: <ForgetPass /> },
      {
        path: "/Dashbord/Comments",
        element: <Dashbord_Comment />,
      },
      {
        path: "/Dashbord/Courses",
        element: <Dashbord_Courses />,
      },
      {
        path: "/Dashbord/User",
        element: <Dashbord_User />,
      },
      {
        path: "/Dashbord/UserDetail",
        element: <UserDetail />,
      },
    ],
  },
  {
    element: <Footer_Header />,
    children: [
      { path: "/Home", element: <Landing /> },
      { path: "/Courses", element: <Courses /> },
      { path: "/CoursesDetail/:id", element: <CourseDetails /> },
      { path: "/Article", element: <Article /> },
      { path: "/ArticleDetail", element: <ArticleDetail /> },
    ],
  },
]);

export default Public;
