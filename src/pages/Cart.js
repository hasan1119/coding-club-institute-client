import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import useAuth from "../hooks/useAuth.js";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const { selectedCourse, remove, setSelectedCourse, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;

  const history = useHistory();
  const totalPrice = selectedCourse.reduce(
    (total, course) => total + course.price,
    0
  );

  return (
    <div className="my-4">
      <Container>
        {selectedCourse.length ? (
          <Row>
            <Col md={8}>
              {selectedCourse.map((course) => {
                const { img, _id, title, desc, rating, ratingCount, price } =
                  course;

                return (
                  <Row className="my-2 bg-info" key={_id}>
                    <Col sm={5}>
                      <img className="img-fluid" src={img} alt="" />
                    </Col>
                    <Col sm={7}>
                      <h5>{title}</h5>
                      <p className="mb-0">{desc}</p>
                      <h4>Price: {price}</h4>
                      <Row>
                        <Col sm={4}>
                          <Col>
                            <Rating
                              initialRating={rating}
                              readonly
                              emptySymbol={
                                <FontAwesomeIcon
                                  className="text-warning"
                                  icon={emptyStar}
                                />
                              }
                              fullSymbol={
                                <FontAwesomeIcon
                                  className="text-warning"
                                  icon={fullStar}
                                />
                              }
                            />
                            <span>{rating}</span>
                          </Col>
                          <Col>Total review {ratingCount}</Col>
                        </Col>
                        <Col sm={8}>
                          <div className="d-flex">
                            <NavLink
                              to={`/courses/${_id}`}
                              className="btn btn-primary w-100 me-1"
                            >
                              View Details
                            </NavLink>

                            <button
                              onClick={() => remove(_id)}
                              className="btn btn-primary  w-100"
                            >
                              Remove
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
            </Col>
            <Col className="text-center" md={4}>
              <h4>Total {selectedCourse.length} course selected</h4>
              <h6>Total Price: {totalPrice.toFixed(2)} $</h6>

              <button
                onClick={() => {
                  fetch(
                    `https://aqueous-dawn-65962.herokuapp.com/purchase/${uid}`,
                    {
                      method: "delete",
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.deletedCount > 0) {
                        alert("This for purchasing");
                        setSelectedCourse([]);
                        history.push("/home");
                      }
                    });
                }}
                className="btn btn-primary"
              >
                Check Out
              </button>
            </Col>
          </Row>
        ) : (
          <div className="text-center my-5 py-5">
            <h1>No Course Selected!</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
