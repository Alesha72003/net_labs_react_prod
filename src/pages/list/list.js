import logo from './logo.svg';
import "./list.css";
import {Container, Breadcrumb, Navbar} from "react-bootstrap";
import Filter from "../../features/filter/Filter";
import List from "../../features/list/List";

export default function ListPage({tasks}) {
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
        <Filter />
        <List tasks={tasks}/>
      </Container>
    </>
  );
}
