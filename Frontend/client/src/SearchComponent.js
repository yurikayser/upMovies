import React from "react";
import { Form, Button } from "react-bootstrap";

export const SearchComponent = () => {
  const onSubmit = value => {
    console.log(value);
  };

  return (
    <div className="SearchComponent">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="searchInput">
          <Form.Control type="text" placeholder="Search for a movie" />
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};
