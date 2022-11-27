import Navbar from "./Components/Navbar";
import NewsFeed from "./Pages/NewsFeed";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" title="News Feed" element={<NewsFeed />} />
        <Route path="/home" title="Home" element={<Home />} />
        <Route path="/about" title="About Us" element={<About />} />
        <Route path="/contact" title="Contact Us" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
