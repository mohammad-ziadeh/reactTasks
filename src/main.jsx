// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />

//   </StrictMode>
// );



import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';

import Home from "./components/day3/pages/home";
import About from "./components/day3/pages/about";
import Contact from "./components/day3/pages/contact";
import Error from "./components/day3/pages/error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/b",
    element: <About />,
  },
  {
    path: "/c",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
