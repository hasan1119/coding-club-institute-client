import React from "react";
import bgImage from "./../assets/images/sectionBg.png";
import Bg from "./../assets/images/bg.png";
import { Container, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import Course from "../components/course/Course.js";

const Home = () => {
  const { courses } = useAuth();
  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-white">Learn to be creative</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-white fs-5">
                  Learn exciting technologies from web development, design, game
                  development and more!
                </p>
              </Bounce>

              <Bounce>
                <NavLink
                  to="/courses"
                  className="rounded-pill btn btn-primary fs-5 py-2 px-4"
                >
                  View Courses
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>

      <div
        id="feature"
        className="py-5"
        style={{ background: `url(${bgImage})` }}
      >
        <div className="text-center text-white">
          <Slide left>
            <h1>Our Feature Courses</h1>
          </Slide>

          <Slide right>
            <p className="mb-0">
              Here you can find our all latest courses. Choose some of them and
              try to grow up your skills.
            </p>
          </Slide>
        </div>

        <Container>
          <div className="my-3 d-flex flex-wrap justify-content-between">
            <Row>
              {courses.slice(0, 6)?.map((course) => (
                <Course key={course.key} course={course} />
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
