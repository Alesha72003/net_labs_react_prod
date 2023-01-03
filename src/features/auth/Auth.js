import { Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { selectMe, selectAuthLoading, doLogout } from "./authSlice";
import userIcon from "./user.svg"

export function RequireAuth({ children }) {
  const me = useSelector(selectMe);
  const loading = useSelector(selectAuthLoading);
  const location = useLocation();

  if (loading) {
    return "Loading..."
  }

  if (!me) {
    const authParams = new URLSearchParams();
    authParams.set("from", location.pathname);
    return <Navigate to={"/auth?" + authParams.toString()} replace />
  }

  return children; 
}

export function AuthHeader() {
  const me = useSelector(selectMe);
  const loading = useSelector(selectAuthLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        {loading ? "Loading..." :
        me ? me.username : "Not logined"}
      </Dropdown.Toggle>
      {me ? <Dropdown.Menu>
        {me.admin ?
          <Dropdown.Item
            eventKey="1"
            href="/admin"
          >
            Go to Admin panel
          </Dropdown.Item>
        : null}
        <Dropdown.Divider />
        <Dropdown.Item
          onClick={() => {
            dispatch(doLogout()).then(() => {
              navigate("/auth");
            });

          }}
        >
          Logout
        </Dropdown.Item>
      </Dropdown.Menu> : null}
    </Dropdown>
  );
}
