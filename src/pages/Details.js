import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "./../hooks/useAuth.js";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const Details = () => {
  const history = useHistory();
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const { addToCart, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;

  useEffect(() => {
    fetch(`http://localhost:5000/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?._id) {
          setCourse(data);
        } else {
          alert("something went wrong!");
        }
      });
  }, [id]);

  return (
    <div className="my-4">
      {course?.title ? (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <img className="img-fluid" src={course.img} alt="" />
            </Col>
            <Col md={6} className="d-flex justify-content-center flex-column">
              <h2>{course.title}</h2>
              <h5>{course.desc}</h5>
              <Row>
                <Col>
                  <h1>Price:{course.price}$</h1>
                  <div className="my-2">
                    <Rating
                      initialRating={course.rating}
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
                    <span> {course.rating}</span>
                    <p className="mb-3">Total Review: {course.ratingCount}</p>
                    <button
                      onClick={() => {
                        if (uid) {
                          addToCart(course);
                        } else {
                          history.push("/login");
                        }
                      }}
                      className="btn btn-primary  w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <img
                      width="120px"
                      className="rounded-circle"
                      src={course.sellerThumb}
                      alt=""
                    />
                    <h5>Seller: {course.provider}</h5>
                    <p className="mb-0">Web Apps Developer</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">NO Course Found</h1>
        </div>
      )}
    </div>
  );
};

export default Details;
