import { Container } from "react-bootstrap";
import { User } from "../../features/auth/User";
import { CentralWindow } from "../../tools/page_generator/page_generator";
import "./User.css"

export function UserHeader() {
  return (
    null
  );
}

export function UserBody() {
  return (
    <CentralWindow>
      <User />
    </CentralWindow>
  );
}