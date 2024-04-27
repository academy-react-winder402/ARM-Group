/* eslint-disable no-unused-vars */
import { RouterProvider } from "react-router-dom";

import Public from "../config/router/public.router.jsx";
import { useState } from "react";

import { Provider } from "react-redux";
import store from "./Redux/store.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  const [IsLoggedIn] = useState(false);

  return (
    <Provider store={store}>
      <div>
        <Toaster />
      </div>
      <RouterProvider router={IsLoggedIn ? null : Public} />
    </Provider>
  );
}

export default App;
