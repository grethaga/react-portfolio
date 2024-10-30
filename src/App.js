import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./style/App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
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
