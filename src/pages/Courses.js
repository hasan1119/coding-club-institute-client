import { Container, Row } from "react-bootstrap";
import useAuth from "./../hooks/useAuth.js";
import Slide from "react-reveal/Slide";
import sectionBG from "./../assets/images/sectionBg.png";
import Course from "../components/course/Course.js";

const Courses = () => {
  const { courses, totalPage, currentPage, setCurrentPage } = useAuth();

  function pageHandler(number) {
    setCurrentPage(number);
  }

  return (
    <div className="py-5" style={{ background: `url(${sectionBG})` }}>
      <div className="text-center text-white">
        <Slide left>
          <h1> Our All Courses</h1>
        </Slide>

        <Slide right>
          <p className="mb-0">
            Here you can find our all latest courses. Choose some of them and
            try to grow up your skills.
          </p>
        </Slide>
      </div>

      <Container>
        <div className="my-3 d-flex flex-wrap justify-content-between ">
          <Row>
            {courses.map((course) => (
              <Course key={course._id} course={course} />
            ))}
          </Row>
        </div>
        <div className="d-flex justify-content-center">
          {[...Array(totalPage).keys()].map((number) => (
            <button
              onClick={() => pageHandler(number)}
              key={number}
              className={
                number === currentPage
                  ? "btn btn-primary rounded-0 border"
                  : "btn bg-dark text-white rounded-0 border"
              }
            >
              {number + 1}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Courses;
