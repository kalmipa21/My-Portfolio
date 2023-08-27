import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./assets/css/NavBar.css";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
