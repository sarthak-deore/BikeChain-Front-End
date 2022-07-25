import Navbar from "./components/navbar";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
