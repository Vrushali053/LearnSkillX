import React from "react";
import "../components_css/CommunityCTA.css";

function CommunityCTA() {
  return (
    <section className="community-cta">
      <div className="community-cta-container">
        <h2>Ready to Join the Community?</h2>

        <p>
          Experience the difference that has helped 50,000+ students achieve
          their dreams.
        </p>

        <a
          href="https://chat.whatsapp.com/FRIq1mxuIIFBLbm1aUKWRs?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="community-btn"
        >
          Join the Community
          <span className="btn-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14" />
              <path d="M13 5l6 7-6 7" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}

export default CommunityCTA;
