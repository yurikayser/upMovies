import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export const SearchComponent = props => {
  const { onSearchClick } = props;
  const [state, setState] = useState("");
  const onSubmit = event => {
    event.preventDefault();
    onSearchClick(state);
  };

  const onChange = event => {
    setState(event.target.value);
  };

  return (
    <div className="SearchComponent">
      <Form onSubmit={onSubmit}>
        <Row>
          <Col xs="6">
            <Form.Group controlId="searchInput">
              <Form.Control
                size="lg"
                type="text"
                placeholder="Search for a movie"
                onChange={onChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
