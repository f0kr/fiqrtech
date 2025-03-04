import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import OurWorkPage from "./OurWorkPage";
import "./index.css";
import LoadingCanvas from "./LoadingCanvas";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LoadingCanvas/>
      },
      { path: 'ourwork', element: <OurWorkPage /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
