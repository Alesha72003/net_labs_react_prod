import {Card, Col, Row, Button} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import "./List.css";
import {getData, selectValue, selectStatus} from "./listSlice";


export default function List() {
  const tasks = useSelector(selectValue);

  return (
    <Row>
    {tasks.map(item => {
    return <Col>
        <Card>
          {item.image ? <Card.Img variant="top" src={`/img/${item.image}`} /> : null}
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="card-body-text">{item.description}</Card.Text>
            <Button variant="primary" href={`/item/${item.id}`}>Перейти</Button>
          </Card.Body>
        </Card>
      </Col>
    })}
    </Row>
  );
}
