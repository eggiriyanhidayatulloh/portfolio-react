import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/dasboard/home";
import Contact from "./components/contact";
import Tentang from "./components/tentang";
import Portofolio from "./components/portofolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/portofolio" element={<Portofolio />} />
      </Routes>
    </Router>
  );
}

export default App;
