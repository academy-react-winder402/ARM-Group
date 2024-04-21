import { RouterProvider } from "react-router-dom";

import Public from "../config/router/public.router.jsx";
import { useState } from "react";

function App() {
  const [IsLoggedIn] = useState(false);

  return <RouterProvider router={IsLoggedIn ? null : Public} />;
}

export default App;
