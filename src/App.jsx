import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import "./css/font.css";
import "../App.css";

function App() {
  return (
    <Router>
      <CustomCursor />
      <MenuBar />
      <Routes>
        <Route path="/vite-react-sample/" element={<Home />} />
        <Route path="/vite-react-sample/pages/about" element={<About />} />
        <Route path="/vite-react-sample/pages/project" element={<Project />} />
        <Route path="/vite-react-sample/pages/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
