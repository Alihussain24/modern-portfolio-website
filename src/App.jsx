import React, { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/works/Work";
import Protfolio from "./components/protfolio/Protfolio";
import Intro from "./components/intro/Intro";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import Menu from "./components/menu/Menu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="sections">
          <Intro />
          <Protfolio />
          <Work />
          <Testimonials />  
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
