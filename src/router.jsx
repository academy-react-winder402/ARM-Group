import { createBrowserRouter } from "react-router-dom";

import LogIn from "./Pages/LogIn/LogIn.jsx";
import Courses from "./Pages/Courses/Courses.jsx";

const router = new createBrowserRouter([
  { path: "/LogIn", element: <LogIn /> },
  { path: "/Courses", element: <Courses /> },
  { path: "*", element: <h1>Page not found!</h1> },
]);

export default router;
