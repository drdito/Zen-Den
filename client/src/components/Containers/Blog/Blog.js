import React, { Component } from "react";
import Nav from "../../Nav";
import Container from "../../Bootstrap/Container";
import Row from "../../Bootstrap/Row";
import Col from "../../Bootstrap/Col";
import API from "../../../utils/API";
import { List, ListItem } from "../../../components/List";
import Jumbotron from "../../../components/Jumbotron";
import "./Blog.css";

class Blog extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBlogPosts()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          {/* <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit Book</FormBtn>
            </form>
          </Col> */}
          <Col size="md-6">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.synopsis}
                      </strong>
                    </a>
                    {/* <DeleteBtn /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
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

export default Blog;
