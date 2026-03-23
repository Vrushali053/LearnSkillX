// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../pages_css/Contact.css";

// function Contact() {
//   const [popup, setPopup] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPopup(true);
//     setTimeout(() => setPopup(false), 3000);
//     e.target.reset();
//   };

//   return (
//     <div className="contact-page">
//       {/* HERO SECTION */}
//       <section className="contact-hero">
//         <div className="hero-content">
//           <h1>Get in Touch</h1>
//           <p>We'd Love to Hear From You</p>
//           <span>
//             Have questions? We're here to help. Reach out to us through any of the
//             channels below.
//           </span>
//         </div>
//       </section>

//       {/* INFO CARDS */}
//       <section className="contact-cards">
//         <div className="contact-card">
//           <i className="fas fa-envelope contact-icon"></i>
//           <h3>Email Us</h3>
//           <p>Send us your queries anytime</p>
//           <a href="mailto:hello@skillorbit.live">hello@skillorbit.live</a>
//         </div>

//         <div className="contact-card">
//           <i className="fas fa-phone-alt contact-icon"></i>
//           <h3>Call Us</h3>
//           <p>Mon–Sat | 10 AM – 7 PM</p>
//           <a href="tel:+917083398545">+91 70833 98545</a>
//         </div>

//         <div className="contact-card">
//           <i className="fas fa-clock contact-icon"></i>
//           <h3>Business Hours</h3>
//           <p>Monday – Friday: 10:00 AM – 7:00 PM IST</p>
//         </div>
//       </section>

//       {/* FORM + INFO */}
//       <section className="contact-main">
//         <div className="contact-form">
//           <h2>Send us a Message</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-row">
//               <input type="text" placeholder="Full Name *" required />
//               <input type="email" placeholder="Email Address *" required />
//             </div>

//             <div className="form-row">
//               <input type="tel" placeholder="Phone Number" />
//               <select required>
//                 <option value="">Select Subject</option>
//                 <option>Course Inquiry</option>
//                 <option>Support</option>
//                 <option>Partnership</option>
//               </select>
//             </div>

//             <textarea
//               rows="5"
//               placeholder="Tell us how we can help you..."
//               required
//             ></textarea>

//             <button type="submit">Send Message</button>
//           </form>
//         </div>

//         <div className="contact-info">
//           <h2>Contact Information</h2>
//           <p><strong>Email:</strong> hello@skillorbit.live</p>
//           <p><strong>Phone:</strong> +91 7083398545 / 7822873120</p>

//           <div className="info-hours">
//             <h4>Business Hours</h4>
//             <p>Mon – Fri: 10 AM – 7 PM IST</p>
//             <p>Sunday: Closed</p>
//           </div>
//         </div>
//       </section>

//       {/* POPUP TOAST */}
//       {popup && (
//         <div className="popup">
//           <div className="popup-content">
//             <i className="fas fa-check-circle"></i>
//             <p>Thank you! Your message has been sent.</p>
//           </div>
//         </div>
//       )}

//       {/* FAQ SECTION */}
//       <section className="contact-faq">
//         <div className="faq-content">
//           <h2>Looking for Quick Answers?</h2>
//           <p>Check out our FAQ section for immediate answers to common questions.</p>
//           <Link to="/faq" className="faq-button">
//             Visit FAQs
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Contact;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages_css/Contact.css";

function Contact() {
  const [popup, setPopup] = useState(false);

  // 🔥 UPDATED SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        setPopup(true);
        setTimeout(() => setPopup(false), 3000);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-page">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We'd Love to Hear From You</p>
          <span>
            Have questions? We're here to help. Reach out to us through any of the
            channels below.
          </span>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="contact-cards">
        <div className="contact-card">
          <i className="fas fa-envelope contact-icon"></i>
          <h3>Email Us</h3>
          <p>Send us your queries anytime</p>
          <a href="mailto:hello@skillorbit.live">hello@skillorbit.live</a>
        </div>

        <div className="contact-card">
          <i className="fas fa-phone-alt contact-icon"></i>
          <h3>Call Us</h3>
          <p>Mon–Sat | 10 AM – 7 PM</p>
          <a href="tel:+917083398545">+91 70833 98545</a>
        </div>

        <div className="contact-card">
          <i className="fas fa-clock contact-icon"></i>
          <h3>Business Hours</h3>
          <p>Monday – Friday: 10:00 AM – 7:00 PM IST</p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="contact-main">
        <div className="contact-form">
          <h2>Send us a Message</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                name="name"
                type="text"
                placeholder="Full Name *"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address *"
                required
              />
            </div>

            <div className="form-row">
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
              />

              <select name="subject" required>
                <option value="">Select Subject</option>
                <option>Course Inquiry</option>
                <option>Support</option>
                <option>Partnership</option>
              </select>
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us how we can help you..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> hello@skillorbit.live</p>
          <p><strong>Phone:</strong> +91 7083398545 / 7822873120</p>

          <div className="info-hours">
            <h4>Business Hours</h4>
            <p>Mon – Fri: 10 AM – 7 PM IST</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </section>

      {/* POPUP TOAST */}
      {popup && (
        <div className="popup">
          <div className="popup-content">
            <i className="fas fa-check-circle"></i>
            <p>Thank you! Your message has been sent.</p>
          </div>
        </div>
      )}

      {/* FAQ SECTION */}
      <section className="contact-faq">
        <div className="faq-content">
          <h2>Looking for Quick Answers?</h2>
          <p>Check out our FAQ section for immediate answers to common questions.</p>
          <Link to="/faq" className="faq-button">
            Visit FAQs
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Contact;