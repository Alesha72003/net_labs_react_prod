import { useEffect } from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { selectMe, selectAuthLoading, doLogout, setFrom, doLogin, selectFrom } from "./authSlice";
import { CustomForm, Group } from '../../tools/form_generator/form_generator';
import userIcon from "./user.svg"

export function RequireAuth({ children }) {
  const me = useSelector(selectMe);
  const loading = useSelector(selectAuthLoading);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !me) {
      dispatch(setFrom(location.pathname));
      navigate("/auth");
    }
  }, [location, dispatch, loading, me, navigate]);

  if (loading) {
    return "Loading...";
  }

  if (!me) {
    return null;
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
        <Dropdown.Item
          onClick={() => {
            navigate(`/user/${me.id}`);
          }}
        >
          My profile
        </Dropdown.Item>
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

export function Auth() {
  const loading = useSelector(selectAuthLoading);
  const me = useSelector(selectMe);
  const from = useSelector(selectFrom);
  const dispatch = useDispatch();

  return (
    <>
      {me ? <Navigate to={from} /> : null}
      <CustomForm onSubmitData={(data) => !loading ? dispatch(doLogin(data)) : null}>
        <Group label="Login" name="username">
          <Form.Control />
        </Group>
        <Group label="Password" name="password">
          <Form.Control />
        </Group>
        <Button type="submit">{loading ? "Loading..." : "Login"}</Button>
      </CustomForm>
    </>
  );
}