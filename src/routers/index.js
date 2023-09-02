import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
// import Contacts from "../pages/Contacts";
import Error from "../pages/Error";
import App from "../App.js";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/contacts" element={<Contacts />} /> */}
      <Route path="/*" element={<Error />} />
    </Route>
  )
);
