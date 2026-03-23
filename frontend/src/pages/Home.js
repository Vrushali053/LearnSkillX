
import HeroBanner from "../components/HeroBanner";
import Achievment from "../components/Achievment";
import CourseCard from "../components/CourseCard";
import Testimonial from "../components/Testimonial";
import "../pages_css/Home.css";
import CommunityCTA from "../components/CommunityCTA";
import ComScroll from "../components/ComScroll";
import ComExpr from "../components/ComExpr";

// images
import aws from "../Assets/images/aws.jpeg";
import data from "../Assets/images/data_science.jpg";
import fullstack from "../Assets/images/full-stack-web-developer.png";
import java from "../Assets/images/java developer.jpeg";
import testing from "../Assets/images/Manual-testing.jpg";
import react from "../Assets/images/react developer.webp";

function Home() {
  return (
    <div className="home">
      <HeroBanner />
      <Achievment />
      <CommunityCTA />
      <ComScroll />
      <ComExpr />

      {/* 🔥 COURSES SECTION */}
      <h2 className="section-title">Popular Courses</h2>

      <div className="course-wrapper">
        <CourseCard
          image={aws}
          title="AWS(Amazon web Services)"
          desc="Learn cloud computing with practical projects.."
          rating="4.7"
          levels="6 Levels"
          learners="15K+"
          badge="Most Popular"
          enrollColor="linear-gradient(90deg,#ff5722,#ff9800)"
        />

        <CourseCard
          image={data}
          title="Data Science"
          desc="Kickstart your Data Science journey with real projects."
          levels="6 Weeks"
          learners="5K+"
          enrollColor="linear-gradient(90deg,#22c55e,#16a34a)"
        />

        <CourseCard
          image={fullstack}
          title="Full stack Developer"
          desc="Build end-to-end web applications with modern tools"
          rating="4.8"
          levels="8 Weeks"
          learners="9K+"
          enrollColor="linear-gradient(90deg,#6366f1,#4f46e5)"
        />

        <CourseCard
          image={java}
          title="Java Full Stack Developer"
          desc="Master Java front-end and back-end development."
          rating="4.6"
          levels="10 Weeks"
          learners="12K+"
          enrollColor="linear-gradient(90deg,#ec4899,#db2777)"
        />

        <CourseCard
          image={testing}
          title="Manual & Automation Testing"
          desc="Test applications efficiently using manual and automation techniques."
          rating="4.5"
          levels="6 Weeks"
          learners="7K+"
          enrollColor="linear-gradient(90deg,#14b8a6,#0d9488)"
        />

        <CourseCard
          image={react}
          title="React Frontend Mastery"
          desc="Master React to create interactive web interfaces."
          rating="4.8"
          levels="5 Weeks"
          learners="11K+"
          enrollColor="linear-gradient(90deg,#0ea5e9,#0284c7)"
        />
      </div>

      <Testimonial />
    </div>
  );
}

export default Home;
