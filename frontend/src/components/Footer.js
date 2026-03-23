
// import React from "react";
// import "../components_css/Footer.css";
// import logoImg from "../logo/LearnSkillX.jpeg"; // ← your logo path

// export default function Footer() {
//   return (
//     <footer className="so-footer">
//       <div className="footer-top">
//         {/* Logo + Intro */}
//         <div className="footer-col">
//            <img src={logoImg} alt="logo" className="brand-logo" />
//                     <span className="brand-title">LearnSkillX</span>

//           <p className="footer-tagline">
//             “For Bharat, Of Bharat, By Bharat.”
//           </p>
//           <p className="footer-desc">
//             India’s Own Learning Revolution.
//           </p>

//           {/* <p className="footer-address">
//             Corporate Office: 10th floor, Tower C, Bhutani Cyber Park,
//             Sec 62, Noida, Uttar Pradesh 201309
//           </p> */}

//           <p className="footer-contact">
//             Call: <a href="tel:+919999999999">+91 7083398545 / 7822873120</a><br />
//             Email: <a href="mailto:hello@skillorbit.live">hello@skillorbit.live</a>
//           </p>

//           <div className="footer-social">
//             <a href="#"><i className="fab fa-facebook"></i></a>
//             <a href="#"><i className="fab fa-instagram"></i></a>
//             <a href="#"><i className="fab fa-youtube"></i></a>
//             <a href="#"><i className="fab fa-linkedin"></i></a>
//           </div>
//         </div>

//         {/* Upcoming Courses */}
//         <div className="footer-col">
//           <h3>Upcoming Courses</h3>
//           <ul>
//             <li>UI/UX Design</li>
//             <li>Digital Marketing</li>
//             <li>Data Analytics</li>
//             <li>AI Generalist to Specialist</li>
//             <li>AI+ML Automation Mastery</li>
//             <li>Product Management</li>
//           </ul>
//         </div>

//         {/* Useful Links */}
//         <div className="footer-col">
//           <h3>Useful Links</h3>
//           <ul>
//             <li>FAQs</li>
//             <li>Privacy Policy</li>
//             <li>Terms & Conditions</li>
//             <li>Cancellation & Refund Policy</li>
//             <li>Shipping & Exchange Policy</li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div className="footer-col">
//           <h3>Company</h3>
//           <ul>
//             <li>About Us</li>
//             <li>Careers</li>
//             <li>Blog</li>
//             <li >Contact Us</li>
//             <li>Media</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Copy */}
//       <div className="footer-bottom">
//         <p>LearnSkillX Education Services Pvt. Ltd</p>
//         <p>© 2026 All Rights Reserved</p>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import "../components_css/Footer.css";
import logoImg from "../logo/LearnSkillX.jpeg";

export default function Footer() {
  return (
    <footer className="so-footer">
      <div className="footer-top">
        <div className="footer-col">
          <img src={logoImg} alt="logo" className="brand-logo" />
          <span className="brand-title">LearnSkillX</span>

          <p className="footer-tagline">“For Bharat, Of Bharat, By Bharat.”</p>
          <p className="footer-desc">India’s Own Learning Revolution.</p>

          <p className="footer-contact">
            Call: <a href="tel:+917083398545">+91 7083398545 / 7822873120</a><br />
            Email: <a href="mailto:hello@skillorbit.live">hello@skillorbit.live</a>
          </p>
        </div>

        <div className="footer-col">
          <h3>Upcoming Courses</h3>
          <ul>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
            <li>Data Analytics</li>
            <li>AI Generalist to Specialist</li>
            <li>AI+ML Automation Mastery</li>
            <li>Product Management</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Useful Links</h3>
          <ul>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cancellation & Refund Policy</li>
            <li>Shipping & Exchange Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>

            {/* 🔥 Bulletproof routing */}
            <Link to="/contact" className="footer-link">
              <li>Contact Us</li>
            </Link>

            <li>Media</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>LearnSkillX Education Services Pvt. Ltd</p>
        <p>© 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
}
