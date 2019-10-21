import React from "react";
import { Pagination, Card, Button, Container, Row } from "react-bootstrap";

export const MoviesList = props => {
  const onPageClicked = e => {
    props.onPageClick(e);
  };
  if (props.list.length > 0) {
    return (
      <div>
        <Container>
          <Row>
            {props.list.map(element => {
              return (
                <Card key={element.id} style={{ width: "30rem" }}>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={
                        "https://image.tmdb.org/t/p/w200/" + element.poster_path
                      }
                    />
                    <Card.Title>
                      <h2>{element.title}</h2>
                    </Card.Title>
                    <Card.Text>
                      <b>Genres</b>: {element.genres}
                    </Card.Text>
                    <Card.Text>
                      <b>Release Date:</b> {element.release_date}
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
        <Pagination>
          <Pagination.Prev
            disabled={props.currentPage === 1}
            onClick={() => onPageClicked(props.currentPage - 1)}
          />
          {props.currentPage} of 55
          <Pagination.Next
            onClick={() => onPageClicked(props.currentPage + 1)}
          />
        </Pagination>
        1
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};
