import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import facebook from "../../assets/images/facebook.png";
import google from "../../assets/images/google.png";
import github from "../../assets/images/github.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const Login = () => {
  const { contexts } = useAuth();
  const {
    signInWithEmail,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    getPassword,
    getEmail,
    setError,
    setUser,
    error,
    setLoading,
  } = contexts;
  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || "/courses";
  return (
    <div className="text-center my-4">
      <h2>Please Login</h2>
      <p className=" mt-2">Login with Email & Password</p>
      <p className="text-danger text-center">{error}</p>
      <div className="w-25 mx-auto">
        <Form onSubmit={signInWithEmail}>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  onClick={getEmail}
                  type="email"
                  autoComplete="current-email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="password" visuallyHidden>
                Your Password
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  onClick={getPassword}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
          </Row>

          <button type="submit" className="btn btn-primary mt-2 w-100">
            Login
          </button>
        </Form>
      </div>
      <p className="mt-2">
        <NavLink className="text-decoration-none" to="/signup">
          Need an Account? Please Sign up!
        </NavLink>
      </p>
      <p className="mt-3">Or</p>
      <p> Login with</p>
      <div>
        <button
          onClick={() => {
            signInWithGoogle()
              .then((result) => {
                const user = result.user;
                setUser(user);
                history.push(redirect);
              })
              .catch((err) => {
                const errorMessage = err.message;
                setError(errorMessage);
              });
          }}
          className="btn"
        >
          <img src={google} width="46px" alt="google-icon" />
        </button>
        <button onClick={signInWithFacebook} className="btn">
          <img width="50px" src={facebook} alt="facebook-icon" />
        </button>
        <button className="btn">
          <img
            onClick={signInWithGithub}
            width="55px"
            src={github}
            alt="github-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Login;
