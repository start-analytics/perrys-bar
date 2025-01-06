import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Access from "./components/Access/Access";
import Footer from "./components/Footer/Footer";
import { initializeScripts } from "./assets/js/main";
import "./App.css";

function App() {
  useEffect(() => {
    initializeScripts();

    return () => {
      // Cleanup event listeners
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Access />
      <Footer />
      <div id="preloader"></div>
      {/* Preloader */}
    </>
  );
}

export default App;
