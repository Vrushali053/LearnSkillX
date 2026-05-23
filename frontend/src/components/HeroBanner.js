import "../components_css/HeroBanner.css";


import c1 from "../Assets/images/c1.jpeg";
import c2 from "../Assets/images/c2.jpeg";
import c3 from "../Assets/images/c3.jpeg";
import c4 from "../Assets/images/c4.jpeg";

function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT SIDE – CONTENT */}
        <div className="hero-left">
          <span className="hero-badge">
            Trusted by Industry Leaders
          </span>

          <h1 className="hero-title">
            <span>Transform Your</span> <span>Career</span>
          </h1>

          <h2 className="hero-subtitle">
            <span>Learn Skills That Matter</span>
          </h2>

          <p className="hero-desc">
            Join thousands of students who've already boosted their careers
            with our practical courses.
            <strong> Real skills, real results.</strong>
          </p>

          <div className="hero-stats">
            <div className="stat">
              <h3>5000+</h3>
              <p>Students</p>
            </div>

            <div className="stat">
              <h3>4.8 ★</h3>
              <p>Rating</p>
            </div>

            <div className="stat">
              <h3>15+</h3>
              <p>Courses</p>
            </div>
          </div>

          <button className="hero-btn">
            Start Learning Today →
          </button>
        </div>

        {/* RIGHT SIDE – CERTIFICATE SLIDER */}
        <div className="hero-right">
          <div className="certificate-container">
            <img
              src={c1}
              alt="Certificate 1"
              className="certificate cert1"
            />

            <img
              src={c2}
              alt="Certificate 2"
              className="certificate cert2"
            />

            <img
              src={c3}
              alt="Certificate 3"
              className="certificate cert3"
            />

            <img
              src={c4}
              alt="Certificate 4"
              className="certificate cert4"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroBanner;