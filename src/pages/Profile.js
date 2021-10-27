import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";

const Profile = () => {
  const { AllContexts } = useAuth();
  const { user } = AllContexts;
  const { displayName, photoURL, email } = user;
  return (
    <div>
      <h1 className="text-center">Profile</h1>
      <Container className="my-2">
        <Row>
          <Col md={4}>
            <div className="align-items-center d-flex flex-column">
              <img
                width="220px"
                className="rounded-circle"
                src={photoURL}
                alt=""
              />
              <button className="btn mt-3 btn-primary">Edit Profile</button>
            </div>
          </Col>
          <Col md={8}>
            <h6>Full name</h6>
            <h4>{displayName}</h4>
            <h6>Email Address</h6>
            <h4>{email}</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
