import React from "react";
import "../components_css/ComScroll.css";

import lo1 from "../logo/lo11.jpg";
import lo2 from "../logo/lo2.jpg";
import lo3 from "../logo/lo3.png";
import lo4 from "../logo/lo4.png";
import lo5 from "../logo/lo5.jpg";
import lo6 from "../logo/lo6.png";
import lo7 from "../logo/lo7.jpg";
import lo8 from "../logo/lo8.avif";
import lo9 from "../logo/lo9.png";

function ComScroll() {
  const logos = [
    lo1,
    lo2,
    lo3,
    lo4,
    lo5,
    lo6,
    lo7,
    lo8,
    lo9
  ];

  return (
    <div className="companies-section">
      <h2 className="title">
        <span></span> Recently Featured In <span></span>
      </h2>

      <div className="slider">
        <div className="slide-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt="company-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComScroll;
