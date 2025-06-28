import { useState, createContext } from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from "/src/pages/Home";
import About from "/src/pages/About"
import Projects from "/src/pages/ProjectsPage"
import './App.css'
import NotFound from './pages/NotFound';
const ThemeContext = createContext('null');
import MobileNavbar from './MobileNavbar'; // Import the mobile version


function App() {
  const [theme, setTheme] = useState('light');
  let classNameBody = "body-" + theme;

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
    <BrowserRouter>

    {/* Desktop Navbar */}
      <nav className="navbar desktop-navbar">
        <div className="brand">
          <img src="/src/assets/B.png" width="30rem" style={{paddingRight: "10px"}}></img>
          A.G.</div>
        <div className="nav-links">
          <Link to="/" className="nav-item" style={{marginRight:"10px"}} >Home</Link>
          <Link to="/About" className="nav-item" style={{marginRight:"10px"}}>About Me</Link>
          <Link to="/Projects" className="nav-item" >Projects</Link>
          <button
            onClick={toggleTheme}>
            {theme === 'light' ? ' 🌘︎' : '🔆'}
          </button>
        </div>
        <div className="spacer" />
      </nav>

      {/* Mobile Navbar */}
      <MobileNavbar toggleTheme={toggleTheme} theme={theme} />

      <div className={classNameBody}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
       </div>

  
    </BrowserRouter>

    </ThemeContext.Provider>
  )
}

export default App
export { ThemeContext }