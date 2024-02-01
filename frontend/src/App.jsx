
import { useEffect } from "react";
import './styles/App.css'
import {Outlet} from "react-router-dom";

import Header from "./components/Header.jsx";
import ImageSlider from "./components/ImageSlider.jsx";

function App() {
  return (
    <>
      <Header />
      <main>

      <ImageSlider />

        <Outlet />

      </main>
    </>
  );
}

export default App;
