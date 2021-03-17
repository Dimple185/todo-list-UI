import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import Input from "../components/Ui";
import axios from "axios";
import { useDispatch, connect } from "react-redux";
import {
  setUserName,
  setUserEmail,
  setUserPassword,
} from "../Redux/Actions/actionCreator";
import { signUpUser } from "../Redux/Actions/signInAction";

function SignUp({ userData }) {
  const dispatch = useDispatch();

  const handleUserNameChange = (event) => {
    // setValues({ ...values, userName: event.target.value });
    dispatch(setUserName(event.target.value));
  };

  const handleEmailChange = (event) => {
    // setValues({ ...values, email: event.target.value });
    dispatch(setUserEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    // setValues({ ...values, password: event.target.value });
    dispatch(setUserPassword(event.target.value));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('data', userData);
    dispatch(signUpUser(userData))
  };

  return (
    <Layout>
      <Container>
        <Row style={{ margin: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form
              onSubmit={(e) => {
                handleSignUp(e);
              }}
            >
              <Row>
                <Col>
                  <Input
                    label="userName"
                    placeholder="userName"
                    value={userData.userName}
                    type="text"
                    onChange={handleUserNameChange}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                placeholder="Email"
                value={userData.email}
                type="email"
                onChange={handleEmailChange}
              />
              <Input
                label="Password"
                placeholder="Password"
                value={userData.password}
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
    userData: state.user,
  };
};

export default connect(mapStateToProps)(SignUp);
