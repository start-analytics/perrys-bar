import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Access from "./components/Access/Access";
import Footer from "./components/Footer/Footer";
import { initializeScripts } from "./assets/js/main";
import Slider from "./components/Slider/Slider";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import routing components

function App() {
  useEffect(() => {
    initializeScripts();

    return () => {
      // Cleanup event listeners
    };
  }, []);

  return (
      <>
          <BrowserRouter>
              <Header/>
              <Routes> {/* Define routes */}
                  <Route path="" element={<Page/>}/>
                  <Route path="/menu" element={<Menu/>}/> {/* Route for Menu page */}
              </Routes>

              {/* Preloader */}
          </BrowserRouter>
          <div id="preloader"></div>
      </>
  );
}

function Page() {
    return (<>
        <Hero/>
        <Slider />
        <Access />
        <Footer />
    </>)
}

export default App;
