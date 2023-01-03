import {Card, Col, Row, Button} from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "./List.css";
import {selectValue} from "./listSlice";


export default function List() {
  const tasks = useSelector(selectValue);
  const navigate = useNavigate();

  return (
    <Row>
    {tasks.map(item => 
      <Col key={item.id}>
        <Card>
          {item.image ? <Card.Img variant="top" src={`/img/${item.image}`} /> : null}
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="card-body-text">{item.description}</Card.Text>
            <Button variant="primary" onClick={() => navigate(`/item/${item.id}`)}>Перейти</Button>
          </Card.Body>
        </Card>
      </Col>
    )}
    </Row>
  );
}
