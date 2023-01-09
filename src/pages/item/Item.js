import { Breadcrumb } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Item } from "../../features/item/Item";
import { CentralWindow } from "../../tools/page_generator/page_generator";
import { Chat } from "../../features/chat/Chat";

export function ItemHeader() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={() => navigate("/")}>Tasks</Breadcrumb.Item>
      <Breadcrumb.Item active>{id}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export function ItemBody() {
  return (
    <CentralWindow>
      <Item />
      <Chat />
    </CentralWindow>
    
  );
}
