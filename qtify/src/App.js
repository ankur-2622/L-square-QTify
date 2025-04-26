import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroSection from "./components/Hero/Hero.jsx";
import Section from "./components/Section/Section.jsx";
import SongSection from "./components/Section/SongSection";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section title="Top Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/top" />
      <Section title="New Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/new" />
      <SongSection />

    </div>
  );
}

export default App;
