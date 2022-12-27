import { Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from "react-router-dom";
import { selectMe, setFrom } from "./authSlice";
import userIcon from "./user.svg"

export function RequireAuth({ children }) {
  const me = useSelector(selectMe);
  const dispatch = useDispatch();
  const location = useLocation();

  if (!me) {
    dispatch(setFrom(location.pathname));
    return <Navigate to="/auth" replace />
  }

  return children; 
}

export function AuthHeader() {
  const me = useSelector(selectMe);
  //const dispatch = useDispatch();

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <img
          alt=""
          src={userIcon}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        {me ? me.username : "Not loggined"}
      </Dropdown.Toggle>
      {me ? <Dropdown.Menu>
        {me.admin ? <Dropdown.Item eventKey="1">Go to Admin panel</Dropdown.Item> : null}
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2">Logout</Dropdown.Item>
      </Dropdown.Menu> : null}
    </Dropdown>
  );
}