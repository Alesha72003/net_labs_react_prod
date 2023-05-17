import { Breadcrumb } from "react-bootstrap";
import { ChatList } from "../../features/chat/ChatList";
import { CentralWindow } from "../../tools/page_generator/page_generator";

export function ChatListHeader() {
  return (
      <Breadcrumb>
          <Breadcrumb.Item active>Chats</Breadcrumb.Item>
      </Breadcrumb>
  )
}

export function ChatListBody() {
  return (
      <CentralWindow>
          <ChatList />
      </CentralWindow>
  )
}