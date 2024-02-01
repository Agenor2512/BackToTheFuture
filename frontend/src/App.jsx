import "./styles/App.css";
import ThermesCatalog from "./components/ThermesCatalog";
// import ThermesCard from "./components/ThermesCard";
import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
