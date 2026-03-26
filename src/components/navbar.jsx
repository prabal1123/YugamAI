// import React from "react";
// import "../../styles/navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">

//       <div className="nav-container">

//         <div className="logo">
//           Yugamai
//         </div>

//         <ul className="nav-links">
//           <li>About</li>
//           <li>Services</li>
//           <li>Portfolio</li>
//           <li>Process</li>
//           <li>Testimonials</li>
//           <li>Contact</li>
//           <li><a href="/privacy-policy">Privacy Policy</a></li>
//         </ul>

//         <button className="nav-btn">
//           Start a Project
//         </button>

//       </div>

//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          Yugamai
        </div>

        <ul className="nav-links">
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Process</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
           <li>
            <Link to="/delete-account">Delete Account</Link>
          </li> 
        </ul>

        <button className="nav-btn">
          Start a Project
        </button>

      </div>
    </nav>
  );
};

export default Navbar;