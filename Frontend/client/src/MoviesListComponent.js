import React from "react";
import { Pagination, Card, Button } from "react-bootstrap";

export const MoviesList = props => {
  const onPageClicked = e => {
    props.onPageClick(e);
  };
  if (props.list.length > 0) {
    return (
      <div>
        {props.list.map(element => {
          return (
            <Card key={element.id} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w200/" + element.poster_path}
                />
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.overview}</Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          );
        })}

        <Pagination>
          <Pagination.First />
          {props.list.map(element => {
            return (
              <Pagination.Item
                active={1 === props.currentPage}
                onClick={() => onPageClicked(2)}
              >
                1
              </Pagination.Item>
            );
          })}
          <Pagination.Last />
        </Pagination>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};
