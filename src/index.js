import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./mainApp/pages/App";
import P_App from "./mainApp/pages/P_App";
import HeaderTop from "./mainApp/components/HeaderTop";
import Signup from "./mainApp/pages/signup";
import Login from "./mainApp/pages/login";
import { Provider } from 'react-redux'
import store from "./mainApp/pages/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeaderTop />}>
      <Route index element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path="/products/:name" element={<P_App />} />
      <Route path="/products/id/:id" element={<P_App />} />

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store = {store}><RouterProvider router = {router} /></Provider>);
