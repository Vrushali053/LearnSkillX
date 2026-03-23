// import React from "react";
// import "../components_css/CourseCard.css";
// import awsImg from "../Assets/images/aws.jpeg";

// function CourseCard() {
//   return (
//     <div className="course-card">
//       {/* TOP IMAGE */}
//       <div className="course-image">
//         <img src={awsImg} alt="AWS Course" />
//         <span className="badge">Most Popular</span>
//         <span className="rating">⭐ 4.7</span>
//       </div>

//       {/* CONTENT */}
//       <div className="course-content">
//         <h3 className="course-title">AI Generalist to Specialist</h3>
//         <p className="course-desc">
//           Start your AI journey with core concepts and practical real-world applications.
//         </p>

//         <div className="course-meta">
//           <span>⏱ 6 Levels</span>
//           <span>👥 15K+</span>
//         </div>

//         <div className="learn-section">
//           <h4>What you'll learn:</h4>
//           <ul>
//             <li>70+ Hours of Learning</li>
//             <li>Capstone Project</li>
//             <li>1000+ Global Community</li>
//             <li className="more">+3 more skills</li>
//           </ul>
//         </div>

//         <div className="course-footer">
//           <button className="details-btn">View Details →</button>
//           <button className="enroll-btn">Enroll Now →</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourseCard;

import React from "react";
import "../components_css/CourseCard.css";

function CourseCard({
  image,
  title,
  desc,
  rating,
  levels,
  learners,
  badge,
  enrollColor,
}) {
  return (
    <div className="course-card">
      {/* TOP IMAGE */}
      <div className="course-image">
        <img src={image} alt={title} />

        {badge && <span className="badge">{badge}</span>}
        <span className="rating">⭐ {rating}</span>
      </div>

      {/* CONTENT */}
      <div className="course-content">
        <h3 className="course-title">{title}</h3>
        <p className="course-desc">{desc}</p>

        <div className="course-meta">
          <span>⏱ {levels}</span>
          <span>👥 {learners}</span>
        </div>

        <div className="learn-section">
          <h4>What you'll learn:</h4>
          <ul>
            <li>70+ Hours of Learning</li>
            <li>Capstone Project</li>
            <li>1000+ Global Community</li>
            <li className="more">+3 more skills</li>
          </ul>
        </div>

        <div className="course-footer">
          <button className="details-btn">View Details →</button>
          <button
            className="enroll-btn"
            style={{ background: enrollColor }}
          >
            Enroll Now →
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
