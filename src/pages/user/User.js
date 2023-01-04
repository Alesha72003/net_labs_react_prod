import { Container } from "react-bootstrap";
import { User } from "../../features/auth/User";

export function UserHeader() {
  return (
    null
  );
}

export function UserBody() {
  return (
    <Container>
      <User disabled={true}/>
    </Container>
  );
}