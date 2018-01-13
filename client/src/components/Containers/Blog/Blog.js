import React, { Component } from "react";
import Nav from "../../Nav";
import Container from "../../Bootstrap/Container";
import Row from "../../Bootstrap/Row";
import Col from "../../Bootstrap/Col";
import API from "../../../utils/API";
import { FormBtn, Input, TextArea } from "../../../components/Form";
import { List, ListItem } from "../../../components/List";
import Jumbotron from "../../../components/Jumbotron";
import "./Blog.css";
import BlogPostForm from "../../BlogPostForm";
import BlogPostEntries from "../../BlogPostEntries/BlogPostEntries";

class Blog extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col size="lg-12">
            <Nav />
          </Col>
        </Row>
        <Container> 
            <Row>
              <Col size="lg-12">
              <Row>
                <Col size="lg-6">
                  <BlogPostForm />
                </Col>
                <Col size="lg-6">
                  <BlogPostEntries />
                </Col>
                </Row>
              </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default Blog;
