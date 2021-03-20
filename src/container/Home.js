import React from "react";
import { Jumbotron } from 'react-bootstrap'
import Layout from '../components/Layout'

function Home() {
  return (
    <Layout>
      <Jumbotron
        style={{ margin: "5rem", background: "white" }}
        className="text-center ">
        <h1>Welcome to Todos List</h1>
        <p>Hey!! Keep Your Todo list Updated!</p>
      </Jumbotron>
    </Layout>
  );
}

export default Home;
