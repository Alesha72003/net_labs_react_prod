import { ListGroup } from "react-bootstrap";
import "./page_generator.css";

export function CentralWindow({ children }) {
  return (
    <div className="position-absolute top-50 start-50 translate-middle centralwindow">
      {children}
    </div>
  );
}

export function ListTemplate({ children }) {
  return (
    <ListGroup className="editlist">
    {(Array.isArray(children) ? children : Array(children)).map((el, i) =>
      <ListGroup.Item key={i}>{el}</ListGroup.Item>
    )}
    </ListGroup>
  );
}
