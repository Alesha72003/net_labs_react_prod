import {Form, Button} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import "./Filter.css";
import { selectLoading, getData } from "./listSlice";

const configAutogenGroups = [{
  name: "title",
  label: "Search query",
  item: <Form.Control placeholder="Type your query" />
}, {
  name: "group",
  label: "Select Group",
  item: <Form.Select aria-label="Select group">
          <option>All groups</option>
          <option value="1">test</option>
        </Form.Select>
}];

const configAutogenCheckbox = [{
  name: "new",
  label: "NEW"
}, {
  name: "in_work",
  label: "IN WORK"
}, {
  name: "completed",
  label: "COMPLETED"
}];

function generateItems(config) {
  return (
    <Form.Group controlId={config.name}>
      <Form.Label>{config.label}</Form.Label>
      {config.item}
    </Form.Group>
  );
}

function generateCheckbox(config) {
  return (
    <Form.Check
      inline
      label={config.label}
      name={config.name}
      type="checkbox"
      inline
    />
  );
}

function onSubmitHandle(e) {
  console.log(e)
  e.preventDefault();
  console.log(Object.keys(e.target).reduce((a, el) => ({...a, [e.target[el].name]: e.target[el].value}), {}));
}

const items = {
  ...configAutogenGroups.reduce((a, v) => ({...a, [v.name]: generateItems(v)}), {}),
  ...configAutogenCheckbox.reduce((a, v) => ({...a, [v.name]: generateCheckbox(v)}), {})
}

console.log(items)

export default function Filter() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);



  return (
    <Form className="filter" onSubmit={onSubmitHandle}>
      {items.title}
      {items.group}
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
      <Button
        variant="secondary"
        onClick={() => !loading ? dispatch(getData({})) : null}
        disabled={loading}
        type="submit"
      >
      {!loading ? "Filter" : "Loading..."}
      </Button>
    </Form>
  );
}
