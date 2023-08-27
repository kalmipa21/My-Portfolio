import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import News from "../pages/News";
import Error from "../pages/Error";
import App from "../App.js";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/*" element={<Error />} />
    </Route>
  )
);
