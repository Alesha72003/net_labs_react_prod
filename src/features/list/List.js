import {Card, Col, Row, Button} from "react-bootstrap";
import "./List.css";


export default function List({tasks}) {
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
