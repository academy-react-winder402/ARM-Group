import { RouterProvider } from "react-router-dom";

import Public from "../config/router/public.router.jsx";
import { useState } from "react";

import { Provider } from "react-redux";
import store from "./Redux/store.jsx";

function App() {
  const [IsLoggedIn] = useState(false);

  return (
    <Provider store={store}>
      <RouterProvider router={IsLoggedIn ? null : Public} />
    </Provider>
  );
}

export default App;
