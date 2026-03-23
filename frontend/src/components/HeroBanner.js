import "../components_css/HeroBanner.css";

function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT SIDE – CONTENT */}
        <div className="hero-left">
          <span className="hero-badge">Trusted by Industry Leaders</span>

          <h1 className="hero-title">
          <span>  Transform Your</span> <span>Career</span>
          </h1>

          <h2 className="hero-subtitle">
           <span> Learn Skills That Matter</span> 
          </h2>

          <p className="hero-desc">
            Join thousands of students who've already boosted their careers
            with our practical courses. <strong>Real skills, real results.</strong>
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

          <button className="hero-btn">Start Learning Today →</button>
        </div>

        {/* RIGHT SIDE – IMAGE / GRAPHIC */}
        <div className="hero-right">
          {/* Replace this with image / illustration */}
          <div className="image-placeholder">
            Right Side Image
          </div>
        </div>

      </div>
      
    </section>
  );
}

export default HeroBanner;
