import "./list.css";
import {Container, Breadcrumb} from "react-bootstrap";
import Filter from "../../features/list/Filter";
import List from "../../features/list/List";

export function ListHeader() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item active>Orders</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export function ListBody() {
  return (
    <Container>
      <Filter />
      <List />
    </Container>
  );
}
