import React from "react";
import { Form, Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";

const Reset = () => {
  const { AllContexts } = useAuth();
  const { getEmail, passwordReset, error } = AllContexts;
  return (
    <div className="text-center w-25 mx-auto my-5">
      <Form onSubmit={passwordReset}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email address</Form.Label>
          <p className="text-danger">{error}</p>
          <Form.Control
            onBlur={getEmail}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          send
        </Button>
      </Form>
    </div>
  );
};

export default Reset;
