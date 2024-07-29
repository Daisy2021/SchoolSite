import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import Home from "./Pages/Home.js";
import AboutUs from "./Pages/About.js";
import Academics from "./Pages/Academics";
import Admission from "./Pages/Admission";
import Contact from "./Pages/Contact";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Academics" element={<Academics />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
