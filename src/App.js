import "./App.css";
import NavigationBar from "./NavigationBar";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="hero">
        <h1>Hi, my name is Gretha.</h1>
        <p className="mb-4">Front-end Developer based in Vienna.</p>
        <div className="text-center">
          <a href="/contact.html" className="btn contact-btn">
            contact me
          </a>
        </div>
      </div>
      <h3 className="custom-heading">recent projects</h3>
      <Projects />
      <Footer />
      <div class="footer-text">
        This project was coded by Gretha Gall and is
        <a href="https://github.com/grethaga">open-sourced on GitHub</a>
      </div>
    </div>
  );
}

export default App;
