import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import useAuth from "../../hooks/useAuth.js";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { selectedCourse, setSelectedCourse, removeItem } = useAuth();
  const totalCost = selectedCourse.reduce(
    (previous, course) => previous + course.price,
    0
  );

  return (
    <div className="my-4">
      {totalCost ? (
        <Container>
          <Row>
            <Col md={8}>
              {selectedCourse.map((course) => (
                <Row className="bg-info my-3">
                  <Col
                    className="p-0 d-flex align-items-center justify-content-center"
                    md={4}
                  >
                    <img width="100%" src={course.img} alt="" />
                  </Col>
                  <Col className="py-2">
                    <h6 md={8}>{course.title}</h6>
                    <p className="m-0">{course.desc}</p>
                    <Row>
                      <Col>
                        <Row>
                          <h6 className="my-1">Price:${course.price}</h6>
                        </Row>
                        <Row>
                          <Col>
                            <Rating
                              readonly
                              style={{ color: "goldenrod" }}
                              initialRating={course.rating}
                              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                            />{" "}
                            {course.rating}
                            <p className="m-0">
                              Total Review: {course.ratingCount}
                            </p>
                          </Col>
                          <Col className="d-flex align-items-center">
                            <NavLink
                              to={`/courses/${course.key}`}
                              className="w-50 btn py-2 btn-primary"
                            >
                              View Details
                            </NavLink>
                            <button
                              onClick={() => {
                                removeItem(course.key);
                              }}
                              className="btn py-2 ms-1 w-50 btn-primary"
                            >
                              Remove
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))}
            </Col>
            <Col
              className="position-fixed"
              style={{ top: "100px", right: "30px" }}
              md={4}
            >
              <div className="text-center my-2">
                <h3>Total {selectedCourse.length} Course Selected</h3>
                <h4>Cost: {totalCost}$</h4>
                <button
                  onClick={() => {
                    setSelectedCourse([]);
                    alert("Thanks for purchasing!!");
                  }}
                  className="btn btn-primary"
                >
                  Proceed to purchase
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <h1 className="text-center my-5 py-5">No Course Selected</h1>
      )}
    </div>
  );
};

export default Cart;
