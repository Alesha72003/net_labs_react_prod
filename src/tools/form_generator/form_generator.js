import { Form } from "react-bootstrap";
import { useState } from "react";

export function Group(config) {
  return (
    <Form.Group className={"formgroup" + (config.className ? ` ${config.className}` : '')} controlId={config.name} name={config.name} id={config.id}>
      <Form.Label>{config.label}</Form.Label>
      {config.children}
    </Form.Group>
  );
}

export function Checkbox(config) {
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

export function CustomForm({children, onSubmitData}) {

  function onSubmitHandle(e) {
    e.preventDefault();
    const items = Object.keys(e.target.elements).map(el => e.target.elements[el].name || e.target.elements[el].id).filter(el => el)
    console.log(e, items);
    const formData = items.reduce((a, v) => ({...a, [v]: e.target[v].type === "checkbox" ? e.target[v].checked : e.target[v].value}), {});
    return onSubmitData(formData);
  }

  return (
    <Form onSubmit={onSubmitHandle}>
      {children}
    </Form>
  )

}
