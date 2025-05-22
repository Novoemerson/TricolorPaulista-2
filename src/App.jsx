import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Matches from "./pages/Matches";
import Players from "./pages/Players";
import About from "./pages/About";
import "./styles/theme.css";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: "80vh", padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/players" element={<Players />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
