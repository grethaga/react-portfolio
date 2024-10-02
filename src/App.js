import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import "./App.css";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div class="footer-text">
          This project was coded by Gretha Gall and is
          <a href="https://github.com/grethaga"> open-sourced on GitHub</a>
        </div>
      </div>
    </Router>
  );
}

export default App;
