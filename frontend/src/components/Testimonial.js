// import React from "react";
// import "../components_css/Testimonial.css";

// function Testimonial() {
//   return (
//     <section className="testimonial-section">
//       <h1 className="testimonial-title">
//         Transforming Dreams into Reality <span>Reality</span>
//       </h1>
//       <p className="testimonial-subtitle">
//         Join thousands of successful students who achieved their goals with our AI-powered education platform.
//       </p>

//       <div className="testimonial-grid">
//         <div className="testimonial-card">
//           <div className="quote">“</div>
//           <div className="stars">★★★★★</div>
//           <p className="testimonial-text">
//             The hands-on projects in Figma and focus on design thinking were amazing.
//             I built a solid portfolio and learned product design principles that got me hired.
//           </p>
//           <div className="profile">
//             <div className="avatar"></div>
//             <div>
//               <h4>Rohan Sharma</h4>
//               <span>UI/UX Design</span>
//             </div>
//           </div>
//         </div>

//         <div className="testimonial-card">
//           <div className="quote">“</div>
//           <div className="stars">★★★★★</div>
//           <p className="testimonial-text">
//             I learned to build end-to-end automation pipelines with ML models.
//             The focus on practical efficiency and scalable solutions is exactly what the industry demands.
//           </p>
//           <div className="profile">
//             <div className="avatar"></div>
//             <div>
//               <h4>Vikram Kumar</h4>
//               <span>AI-ML Automation Mastery</span>
//             </div>
//           </div>
//         </div>

//         <div className="testimonial-card">
//           <div className="quote">“</div>
//           <div className="stars">★★★★★</div>
//           <p className="testimonial-text">
//             Learning about generative AI & training LLMs on real data was incredible.
//             The course goes beyond theory into building real-world AI applications & solutions.
//           </p>
//           <div className="profile">
//             <div className="avatar"></div>
//             <div>
//               <h4>Anjali Mehta</h4>
//               <span>AI Generalist to Specialist</span>
//             </div>
//           </div>
//         </div>

//         <div className="testimonial-card">
//           <div className="quote">“</div>
//           <div className="stars">★★★★★</div>
//           <p className="testimonial-text">
//             From SQL to advanced Power BI, the program was intensely practical.
//             I learned to derive insights and tell stories with data, which was key in my interviews.
//           </p>
//           <div className="profile">
//             <div className="avatar"></div>
//             <div>
//               <h4>Sameer Khan</h4>
//               <span>Data Analytics</span>
//             </div>
//           </div>
//         </div>

//         <div className="testimonial-card">
//           <div className="quote">“</div>
//           <div className="stars">★★★★★</div>
//           <p className="testimonial-text">
//             This course was a game-changer.
//             I mastered performance marketing, SEO, and how to drive real campaign ROI.
//           </p>
//           <div className="profile">
//             <div className="avatar"></div>
//             <div>
//               <h4>Priya Singh</h4>
//               <span>Digital Marketing</span>
//             </div>
//           </div>
//         </div>

//         <div className="testimonial-card">
//           <div className="quote">“</div>
//           <div className="stars">★★★★★</div>
//           <p className="testimonial-text">
//             Building product roadmaps with agile methodology was the best part.
//             We worked on market analysis and sprint planning, which prepared me for my PM role.
//           </p>
//           <div className="profile">
//             <div className="avatar"></div>
//             <div>
//               <h4>Neha Gupta</h4>
//               <span>Product Management</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonial;
import React from "react";
import "../components_css/Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial-section">
      <p className="testimonial-tag">
        <span className="trophy-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 3h10v2H7V3Z" fill="#22c55e" />
            <path d="M8 5h8v3c0 2.8-2 5-4 5s-4-2.2-4-5V5Z" fill="#22c55e" />
            <path d="M6 8h12v2c0 3.3-2.7 6-6 6s-6-2.7-6-6V8Z" fill="#22c55e" />
            <path d="M10 18h4v3h-4v-3Z" fill="#22c55e" />
            <path d="M5 4h2v6H5V4Zm12 0h2v6h-2V4Z" fill="#22c55e" />
          </svg>
        </span>
        Success Stories
      </p>

      <h1 className="testimonial-title">
        Transforming Dreams into Reality <span>Reality</span>
      </h1>
      <p className="testimonial-subtitle">
        Join thousands of successful students who achieved their goals with our AI-powered education platform.
      </p>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          <div className="card-header">
            <span className="quote">“</span>
            <span className="stars">★★★★★</span>
          </div>
          <p className="testimonial-text">
            The hands-on projects in Figma and focus on design thinking were amazing.
            I built a solid portfolio and learned product design principles that got me hired.
          </p>
          <div className="profile">
            <div className="avatar"></div>
            <div>
              <h4>Aditya Kulkarni</h4>
              <span>React Frontend Mastery</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="card-header">
            <span className="quote">“</span>
            <span className="stars">★★★★★</span>
          </div>
          <p className="testimonial-text">
            I learned to build end-to-end automation pipelines with ML models.
            The focus on practical efficiency and scalable solutions is exactly what the industry demands.
          </p>
          <div className="profile">
            <div className="avatar"></div>
            <div>
              <h4>Rahul Deshmukh</h4>
              <span>Manual & Automation Testing</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="card-header">
            <span className="quote">“</span>
            <span className="stars">★★★★★</span>
          </div>
          <p className="testimonial-text">
            Learning about generative AI & training LLMs on real data was incredible.
            The course goes beyond theory into building real-world AI applications & solutions.
          </p>
          <div className="profile">
            <div className="avatar"></div>
            <div>
              <h4>Priyanka More</h4>
              <span>Java Full Stack Developer</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="card-header">
            <span className="quote">“</span>
            <span className="stars">★★★★★</span>
          </div>
          <p className="testimonial-text">
            From SQL to advanced Power BI, the program was intensely practical.
            I learned to derive insights and tell stories with data, which was key in my interviews.
          </p>
          <div className="profile">
            <div className="avatar"></div>
            <div>
              <h4>Shubham Patil</h4>
              <span>Full stack Developer</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="card-header">
            <span className="quote">“</span>
            <span className="stars">★★★★★</span>
          </div>
          <p className="testimonial-text">
            This course was a game-changer.
            I mastered performance marketing, SEO, and how to drive real campaign ROI.
          </p>
          <div className="profile">
            <div className="avatar"></div>
            <div>
              <h4>Sayali Jadhav</h4>
              <span>Data Science</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="card-header">
            <span className="quote">“</span>
            <span className="stars">★★★★★</span>
          </div>
          <p className="testimonial-text">
            Building product roadmaps with agile methodology was the best part.
            We worked on market analysis and sprint planning, which prepared me for my PM role.
          </p>
          <div className="profile">
            <div className="avatar"></div>
            <div>
              <h4>Rashmi Shinde</h4>
              <span>AWS(Amazon web Services)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-cta">
        <p>Ready to write your own success story?</p>
        <a
          href="https://chat.whatsapp.com/FRIq1mxuIIFBLbm1aUKWRs?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Join Our Community
        </a>
      </div>
    </section>
  );
}

export default Testimonial;
