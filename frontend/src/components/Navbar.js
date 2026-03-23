import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "../components_css/Navbar.css";
import logoImg from "../logo/LearnSkillX.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [schoolOpen, setSchoolOpen] = useState(false);
  const courseRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (courseRef.current && !courseRef.current.contains(e.target)) {
        setCoursesOpen(false);
        setSchoolOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LEFT SIDE (Logo + Dropdowns) */}
        <div className="nav-left">

          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img src={logoImg} alt="logo" className="brand-logo" />
            <span className="brand-title">LearnSkillX</span>
          </Link>

          {/* Courses Dropdown */}
          <div className="courses-wrapper" ref={courseRef}>
            <span
              className="courses-link"
              onClick={() => {
                setCoursesOpen(!coursesOpen);
                setSchoolOpen(false); // close other
              }}
            >
              <i className="fa-solid fa-book"></i>
              Courses ▾
            </span>

            {coursesOpen && (
              <div className="courses-dropdown">
                <Link to="/courses/ai">AWS(Amazon Web Services)</Link>
                <Link to="/courses/ml">Data Science</Link>
                <Link to="/courses/product">Full Stack Developer</Link>
                <Link to="/courses/marketing">Java Full Stack Developer</Link>
                <Link to="/courses/data">Manual & Automation Testing</Link>
                <Link to="/courses/uiux">React Frontend Mastery</Link>
              </div>
            )}
          </div>

          {/* Skills for School Dropdown */}
          <div className="courses-wrapper" ref={courseRef}>
            <span
              className="courses-link"
              onClick={() => {
                setSchoolOpen(!schoolOpen);
                setCoursesOpen(false); // close other
              }}
            >
              <i className="fa-solid fa-school"></i>
              Skills for School ▾
            </span>

            {schoolOpen && (
              <div className="courses-dropdown">
                <Link to="/courses/ai">AI for Student</Link>
                <Link to="/courses/ml">AI for Teacher</Link>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}

        
        <ul className="nav-links">
          <li>
            <Link to="/contact" className="login-btn">
              {/* Sign-in */}  Contact Us
            </Link>
          </li>
        </ul>    
                


 

        <ul className="nav-links">
          <li>
            <Link to="/login" className="login-btn">
              {/* Sign-in */}  Login
            </Link>
          </li>
        </ul>

        

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      {/* MOBILE MENU */}
      <ul className={menuOpen ? "mobile-menu mobile-menu-open" : "mobile-menu"}>
        <li>
          {/* <Link to="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </Link> */}
        </li>
        <li>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
           Sign-in
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
