import { useEffect } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Control, Group } from "../../tools/form_generator/form_generator";
import { ListTemplate } from "../../tools/page_generator/page_generator";
import { selectMe } from "./authSlice";
import { doGetGroup, selectGroupLoading, selectGroupValue } from "./groupSlice";
import userIcon from "./user.svg";
import "./Group.css";

export function GroupModule() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectGroupLoading);
  const value = useSelector(selectGroupValue);
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(doGetGroup(id));
  }, [dispatch, id]);

  return (
    <div className="group-list">
      <ListTemplate>
        <Group label="Name">
          <Control disabled value={!loading ? value.name : "Loading..."}/>
        </Group>
        <Group className="list-users" label="Members">
          <ListGroup>
            {!loading && value.Users ? value.Users.map(el =>
              <ListGroup.Item key={el.id} onClick={() => navigate(`/user/${el.id}`)} action>
                <img
                  alt=""
                  src={userIcon}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                {el.username}
              </ListGroup.Item>
            ) :
              <ListGroup.Item key="loading" disabled>Loading...</ListGroup.Item>
            }
          </ListGroup>
        </Group>
      </ListTemplate>
    </div>
  );
}

export function GroupList() {
  const me = useSelector(selectMe);
  const navigate = useNavigate();

  return (
    <ListGroup className="grouplist">
      {me.Groups.map(el => 
        <ListGroupItem key={el.id} onClick={() => navigate(`/group/${el.id}`)} action>
          {el.name}
        </ListGroupItem>
      )}
    </ListGroup>
  )
}