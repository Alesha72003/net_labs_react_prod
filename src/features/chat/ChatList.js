import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { doGetChats, selectChats } from "./chatlistSlice";
import { useEffect } from "react";
import "./ChatList.css"
import { useNavigate } from "react-router-dom";

export function ChatList() {
  const value = useSelector(selectChats);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(doGetChats());
  }, [])

  return (
    <ListGroup>
      {value.map(el => 
        <ListGroupItem key={el.id} action className="chatlist-item" onClick={() => navigate(`/user/${el.id}`)}>
          <strong>{el.username}</strong>
          <p>{el.text}</p>
        </ListGroupItem>
      )}
    </ListGroup>
  );
}