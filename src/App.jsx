import NavbarHome from "./Components/Navbar/NavbarHome.jsx";
import NavbarApp from "./Components/Navbar/NavbarProfile.jsx";
import Home from "./Pages/Home/Home.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from "./Pages/Profile/Profile.jsx";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
  )
}

export default App
