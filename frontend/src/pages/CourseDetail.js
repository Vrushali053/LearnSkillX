import { useParams } from "react-router-dom";
import "../pages_css/CourseDetail.css";

function CourseDetail() {
  const { id } = useParams();

  return (
    <div className="course-detail">
      <h1>Course Details</h1>
      <p>Course ID: {id}</p>
      <button>Enroll Now</button>
    </div>
  );
}

export default CourseDetail;