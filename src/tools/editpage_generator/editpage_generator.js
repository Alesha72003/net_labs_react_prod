import { ListGroup } from "react-bootstrap";
import "./editpage_generator.css";

export function CentralWindow({ children }) {
  return (
    <div className="position-absolute top-50 start-50 translate-middle centralwindow">
      {children}
    </div>
  );
}

export function EditList({ children }) {
  return (
    <ListGroup className="editlist">
    {children.map(el => {
      <ListGroup.Item>{el}</ListGroup.Item>
    })}
    </ListGroup>
  );
}
