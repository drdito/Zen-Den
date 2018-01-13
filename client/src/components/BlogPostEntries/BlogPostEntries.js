import React, { Component } from "react";
import Nav from "../Nav";
import Container from "../Bootstrap/Container";
import Row from "../Bootstrap/Row";
import Col from "../Bootstrap/Col";
import API from "../../utils/API";
import { FormBtn, Input, TextArea } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";
import Moment from "react-moment";
// import "./Blog.css";

class BlogPostEntries extends Component {
  state = {
    blogposts: []
  };

  componentDidMount() {
    this.loadBlogPosts();
  }

  loadBlogPosts = () => {
    API.getBlogPosts()
      .then(res => this.setState({ blogposts: res.data }))
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Col size="md-6">
        <Jumbotron>
          <h1>Prior Blog Posts</h1>
        </Jumbotron>
        {this.state.blogposts.length ? (
          <List>
            {this.state.blogposts.map(blogposts => (
              <ListItem key={blogposts._id}>
                {/* <a> tag could expand, commented out */}
                {/* <a href={"/blogposts/" + blogposts._id}> */}
                {blogposts.title}:
                <br />
                <Moment format="MM/DD/YYYY">
                  {blogposts.date}
                </Moment>
                <br />
                <br />
                {blogposts.synopsis}
                {/* </a> */}
                {/* <DeleteBtn /> */}
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Col>
    );
  }
}

/* const Blog = () => (
  <div>
    <Row>
      <Col size="lg-12">
        <Nav />
      </Col>
    </Row>
    //  <link href="blog.css" rel="stylesheet"/>
    <Container>
      <div className="row justify-content-center">
        <Col size="lg-8">
          <div class="card">
            <div class="card-body">
              <div class="center-div">
                <h2 class="blog-post-title">A blog post</h2>
                <p class="blog-post-meta">
                  December 23, 2013 by <a href="#">Carson</a>
                </p>

                <p>
                  Cum sociis natoque penatibus et magnis{" "}
                  <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Sed posuere consectetur est at lobortis.
                  Cras mattis consectetur purus sit amet fermentum.
                </p>
                <blockquote>
                  <p>
                    Curabitur blandit tempus porttitor.{" "}
                    <strong>Nullam quis risus eget urna mollis</strong> ornare
                    vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
                    elit.
                  </p>
                </blockquote>
                <p>
                  Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                  mattis consectetur purus sit amet fermentum. Aenean lacinia
                  bibendum nulla sed consectetur.
                </p>
                <p>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor. Duis mollis, est non commodo luctus, nisi erat
                  porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </div>

      <div className="row justify-content-center">
        <Col size="lg-8">
          <div class="card">
            <div class="card-body">
              <div class="blog-post">
                <h2 class="blog-post-title">Another blog post</h2>
                <p class="blog-post-meta">
                  December 23, 2013 by <a href="#">Alex</a>
                </p>

                <p>
                  Cum sociis natoque penatibus et magnis{" "}
                  <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Sed posuere consectetur est at lobortis.
                  Cras mattis consectetur purus sit amet fermentum.
                </p>
                <blockquote>
                  <p>
                    Curabitur blandit tempus porttitor.{" "}
                    <strong>Nullam quis risus eget urna mollis</strong> ornare
                    vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
                    elit.
                  </p>
                </blockquote>
                <p>
                  Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                  mattis consectetur purus sit amet fermentum. Aenean lacinia
                  bibendum nulla sed consectetur.
                </p>
                <p>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor. Duis mollis, est non commodo luctus, nisi erat
                  porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </div>

    </Container>
  </div>
); */

export default BlogPostEntries;
