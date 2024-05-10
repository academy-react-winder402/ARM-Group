/* eslint-disable no-unused-vars */
import { RouterProvider } from "react-router-dom";

import Public from "../Config/Router/public.router";
import { useState } from "react";

import { Provider } from "react-redux";
import store from "../Redux/store";
import { Toaster } from "react-hot-toast";

import { NextUIProvider } from "@nextui-org/react";

function App() {
  const [IsLoggedIn] = useState(false);

  return (
    <Provider store={store}>
      <div>
        <Toaster />
      </div>
      <NextUIProvider>
        <RouterProvider router={IsLoggedIn ? null : Public} />
      </NextUIProvider>
    </Provider>
  );
}

export default App;
