import {Form, Button} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import "./Filter.css";
import { selectLoading, getData } from "./listSlice";
import { useState } from "react";

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

function GenerateItems(config) {
  return (
    <Form.Group controlId={config.name}>
      <Form.Label>{config.label}</Form.Label>
      {config.item}
    </Form.Group>
  );
}

function GenerateCheckbox(config) {
  const [checked, setChecked] = useState(true);
  return (
    <Form.Check
      inline
      label={config.label}
      name={config.name}
      type="checkbox"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
}


export default function Filter() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  let items = {
    ...configAutogenGroups.reduce((a, v) => ({...a, [v.name]: GenerateItems(v)}), {}),
    ...configAutogenCheckbox.reduce((a, v) => ({...a, [v.name]: GenerateCheckbox(v)}), {})
  }

  function onSubmitHandle(e) {
    e.preventDefault();
    const formData = Object.keys(items).reduce((a, v) => ({...a, [v]: e.target[v].type === "checkbox" ? e.target[v].checked : e.target[v].value}), {});
    dispatch(getData(formData));
  }

  return (
    <Form className="filter" onSubmit={(e) => !loading ? onSubmitHandle(e) : null}>
      {items.title}
      {items.group}
      <div>
        {items.new}
        {items.in_work}
        {items.completed}
      </div>
      <Button
        variant="secondary"
        disabled={loading}
        type="submit"
      >
      {!loading ? "Filter" : "Loading..."}
      </Button>
    </Form>
  );
}
