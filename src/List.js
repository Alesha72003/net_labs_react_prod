import logo from './logo.svg';
import './List.css';
import {Card, Col, Row, Button, Container, Breadcrumb, Navbar, Form} from "react-bootstrap";

function List({tasks}) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Breadcrumb>
            <Breadcrumb.Item active>Orders</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </Navbar>
      <Container>
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
      </Container>
    </>
  )
}

export default List;
