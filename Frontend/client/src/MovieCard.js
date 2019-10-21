import React from "react";
import { Card, Button } from "react-bootstrap";

export const MovieCard = props => {
  const [item] = props;
  console.log(item);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>item.title</Card.Title>
        <Card.Text>{item.overview}</Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
};
