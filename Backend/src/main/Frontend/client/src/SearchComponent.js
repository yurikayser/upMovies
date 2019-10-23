import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

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
    <div className="search-component">
      <Form onSubmit={onSubmit}>
        <InputGroup className="mb-3" size="lg">
          <Form.Control
            type="text"
            placeholder="Search for a movie"
            onChange={onChange}
          />
          <InputGroup.Append>
            <Button type="submit">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  );
};
