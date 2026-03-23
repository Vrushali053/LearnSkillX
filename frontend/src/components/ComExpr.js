// // import React from "react";
// // import "../components_css/ComExpr.css";

// // function ComExpr() {
// //   return (
// //     <section className="comexpr">
// //       <div className="comexpr-container">
        
// //         <span className="badge">⚡ AI-Powered Learning Experience</span>

// //         <h1 className="title">
// //           Experience the Future of <span>Education</span><br />
// //           <span className="highlight">Technology</span>
// //         </h1>

// //         <p className="subtitle">
// //           Revolutionary AI technology transforms traditional learning into an
// //           intelligent, personalized, and effective educational experience.
// //         </p>

// //         <div className="card-grid">
// //           <div className="card">
// //             <h3>Skills That Pay</h3>
// //             <p>Get paid for real projects, and build valuable experience.</p>
// //           </div>

// //           <div className="card">
// //             <h3>Real-World Projects</h3>
// //             <p>Work on real-world case studies to build a strong portfolio.</p>
// //           </div>

// //           <div className="card">
// //             <h3>Dedicated Career Support</h3>
// //             <p>From resumes to mock interviews, we prepare you for jobs.</p>
// //           </div>

// //           <div className="card">
// //             <h3>Hands-on Tool Mastery</h3>
// //             <p>Practice with the latest tools used by top companies.</p>
// //           </div>

// //           <div className="card">
// //             <h3>Exclusive Peer Community</h3>
// //             <p>Collaborate, solve problems, and grow together.</p>
// //           </div>

// //           <div className="card">
// //             <h3>Flexible Learning</h3>
// //             <p>Learn at your own pace with live & recorded sessions.</p>
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// // export default ComExpr;

// import React from "react";
// import "../components_css/ComExpr.css";
// import {
//   FaMoneyBillWave,
//   FaBriefcase,
//   FaUserCheck,
//   FaTools,
//   FaUsers,
//   FaBook
// } from "react-icons/fa";

// function ComExpr() {
//   return (
//     <section className="expr">
//       <div className="expr-wrapper">

//         <div className="expr-grid">

//           <div className="expr-card">
//             <div className="icon blue">
//               <FaMoneyBillWave />
//             </div>
//             <h3 className="blue-text">Skills That Pay</h3>
//             <p>Get paid for real projects, and build valuable experience.</p>
//           </div>

//           <div className="expr-card">
//             <div className="icon purple">
//               <FaBriefcase />
//             </div>
//             <h3>Real-World Projects</h3>
//             <p>
//               Work on real-world case studies to build a portfolio that
//               impresses recruiters.
//             </p>
//           </div>

//           <div className="expr-card">
//             <div className="icon green">
//               <FaUserCheck />
//             </div>
//             <h3>Dedicated Career Support</h3>
//             <p>
//               From resume building to mock interviews, we prepare you to land
//               your dream job.
//             </p>
//           </div>

//           <div className="expr-card">
//             <div className="icon orange">
//               <FaTools />
//             </div>
//             <h3>Hands-on Tool Mastery</h3>
//             <p>
//               Practice with the latest software and tools used by top companies
//               in your field.
//             </p>
//           </div>

//           <div className="expr-card">
//             <div className="icon violet">
//               <FaUsers />
//             </div>
//             <h3>Exclusive Peer Community</h3>
//             <p>
//               Collaborate on projects, solve problems, & network with learners.
//             </p>
//           </div>

//           <div className="expr-card">
//             <div className="icon yellow">
//               <FaBook />
//             </div>
//             <h3>Flexible Learning</h3>
//             <p>
//               Learn at your own pace with a mix of live classes and recordings.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default ComExpr;

import React from "react";
import "../components_css/ComExpr.css";
import {
  FaMoneyBillWave,
  FaBriefcase,
  FaUserCheck,
  FaTools,
  FaUsers,
  FaBook
} from "react-icons/fa";

function ComExpr() {
  return (
    <section className="expr">
      <div className="expr-wrapper">

        {/* ===== TOP CONTENT ===== */}
        <div className="expr-head">

          <div className="expr-badge">
            <span className="crown">👑</span>
            AI-Powered Learning Experience
          </div>

          <h1 className="expr-title">
            Experience the Future of <span>Education</span><br />
            <span className="gradient-text">Technology</span>
          </h1>

          <p className="expr-subtitle">
            Revolutionary AI technology transforms traditional learning into an
            intelligent, personalized, and effective educational experience.
          </p>

        </div>

        {/* ===== CARDS ===== */}
        <div className="expr-grid">

          <div className="expr-card">
            <div className="icon blue"><FaMoneyBillWave /></div>
            <h3 className="blue-text">Skills That Pay</h3>
            <p>Get paid for real projects, and build valuable experience.</p>
          </div>

          <div className="expr-card">
            <div className="icon purple"><FaBriefcase /></div>
            <h3>Real-World Projects</h3>
            <p>Work on real-world case studies to build a portfolio that impresses recruiters.</p>
          </div>

          <div className="expr-card">
            <div className="icon green"><FaUserCheck /></div>
            <h3>Dedicated Career Support</h3>
            <p>From resume building to mock interviews, we prepare you to land your dream job.</p>
          </div>

          <div className="expr-card">
            <div className="icon orange"><FaTools /></div>
            <h3>Hands-on Tool Mastery</h3>
            <p>Practice with the latest software and tools used by top companies in your field.</p>
          </div>

          <div className="expr-card">
            <div className="icon violet"><FaUsers /></div>
            <h3>Exclusive Peer Community</h3>
            <p>Collaborate on projects, solve problems, & network with fellow learners.</p>
          </div>

          <div className="expr-card">
            <div className="icon yellow"><FaBook /></div>
            <h3>Flexible Learning</h3>
            <p>Learn at your own pace with a mix of live classes and recorded content.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ComExpr;
