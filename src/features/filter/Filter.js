import {Form, Button} from "react-bootstrap";
import "./Filter.css";

export default function Filter() {
  return (
    <Form className="filter">
      <Form.Group controlId="title">
        <Form.Label>Search query</Form.Label>
        <Form.Control placeholder="Type your query" />
      </Form.Group>
      <Form.Group controlId="Group">
        <Form.Label>Select group</Form.Label>
        <Form.Select aria-label="Select group">
          <option>All groups</option>
          <option value="1">test</option>
        </Form.Select>
      </Form.Group>
      <div>
        <Form.Check
          inline
          label="NEW"
          name="new"
          type="checkbox"
          checked
        />
        <Form.Check
          inline
          label="IN WORK"
          name="in_work"
          type="checkbox"
          checked
        />
        <Form.Check
          inline
          label="COMPLETED"
          name="completed"
          type="checkbox"
          checked
        />
      </div>
      <Button variant="secondary" type="submit">Filter</Button>
    </Form>
  );
}
