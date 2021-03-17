import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import Input from "../components/Ui";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  compareUserEmail,
  compareUserPassword,
  signInUser,
} from "../Redux/Actions/signInAction";
import { Redirect } from "react-router-dom";
import TodosForm from "../components/TodosForm";

function SignIn({ signInData }) {
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    // setState({ ...state, email: event.target.value });
    dispatch(compareUserEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    // setState({ ...state, password: event.target.value });
    dispatch(compareUserPassword(event.target.value));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signInUser(signInData));
  };

  return (
    <Layout>
      <Container>
        <Row style={{ margin: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form
              onSubmit={(e) => {
                handleLogin(e);
              }}
            >
              <Input
                label="Email"
                name="email"
                placeholder="Email"
                value={signInData.email}
                type="email"
                onChange={handleEmailChange}
              />
              <Input
                label="Password"
                name="password"
                placeholder="Password"
                value={signInData.password}
                type="password"
                onChange={handlePasswordChange}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    signInData: state.signIn,
  };
};

export default connect(mapStateToProps)(SignIn);
