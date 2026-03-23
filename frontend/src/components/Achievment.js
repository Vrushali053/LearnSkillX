// import React from "react";
// import "../components_css/Achievment.css";

// function Achievment() {
//   const stats = [
//     { value: "80%", label: "Average Salary Hike" },
//     { value: "25+", label: "Industry-Led Projects" },
//     { value: "92%", label: "Placement Rate" },
//     { value: "50+", label: "Expert Mentors" },
//     { value: "5000+", label: "Career Transitions" },
//     { value: "100+", label: "Companies Whose Employees Trust Us" },
//     { value: "10,000+", label: "Hours of Live Content" },
//     { value: "4.8+", label: "Average Mentor Rating" },
//   ];

//   return (
//     <section className="achievement">
//       <div className="achievement-container">

//         {/* Badge */}
//         <div className="achievement-badge">
//           <span className="badge-icon">
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M3 17L9 11L13 15L21 7"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M21 7H15"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M21 7V13"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </span>
//           Our Impact & Achievements
//         </div>

//         <h2 className="achievement-title">
//           Numbers That Define <span>Excellence</span>
//         </h2>

//         <p className="achievement-subtitle">
//           Leading the revolution in AI-powered education with measurable
//           impact and unprecedented success rates.
//         </p>

//         <div className="achievement-grid">
//           {stats.map((item, index) => (
//             <div className="achievement-card" key={index}>
//               <h3>{item.value}</h3>
//               <p>{item.label}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Achievment;

import React from "react";
import "../components_css/Achievment.css";

function Achievment() {
  const stats = [
    {
      value: "80%",
      label: "Average Salary Hike",
      color: "green",
      icon: <path d="M3 17L9 11L13 15L21 7" />,
    },
    {
      value: "25+",
      label: "Industry-Led Projects",
      color: "orange",
      icon: <circle cx="12" cy="12" r="5" />,
    },
    {
      value: "92%",
      label: "Placement Rate",
      color: "purple",
      icon: (
        <>
          <circle cx="12" cy="8" r="3" />
          <path d="M12 11V21" />
        </>
      ),
    },
    {
      value: "50+",
      label: "Expert Mentors",
      color: "blue",
      icon: (
        <path d="M12 3C8 3 6 6 6 9c0 2 1 3 2 4v4h8v-4c1-1 2-2 2-4 0-3-2-6-6-6z" />
      ),
    },
    {
      value: "5000+",
      label: "Career Transitions",
      color: "yellow",
      icon: <path d="M13 2L3 14h7l-1 8 10-12h-7z" />,
    },
    {
      value: "100+",
      label: "Companies Whose Employees Trust Us",
      color: "cyan",
      icon: <rect x="7" y="3" width="10" height="18" rx="2" />,
    },
    {
      value: "10,000+",
      label: "Hours of Live Content",
      color: "pink",
      icon: (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 3" />
        </>
      ),
    },
    {
      value: "4.8+",
      label: "Average Mentor Rating",
      color: "gold",
      icon: (
        <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
      ),
    },
  ];

  return (
    <section className="achievement">
      <div className="achievement-container">

        {/* Badge */}
        <div className="achievement-badge">
          <span className="badge-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 17L9 11L13 15L21 7" />
              <path d="M21 7H15" />
              <path d="M21 7V13" />
            </svg>
          </span>
          Our Impact & Achievements
        </div>

        <h2 className="achievement-title">
          Numbers That Define <span>Excellence</span>
        </h2>

        <p className="achievement-subtitle">
          Leading the revolution in AI-powered education with measurable impact
          and unprecedented success rates.
        </p>

        <div className="achievement-grid">
          {stats.map((item, index) => (
            <div className="achievement-card" key={index}>
              <div className={`icon-circle ${item.color}`}>
                <svg viewBox="0 0 24 24" fill="none">
                  {item.icon}
                </svg>
              </div>

              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievment;
