import { useSelector, useDispatch } from 'react-redux';
import { Route, redirect } from "react-react-router-dom";
import { selectMe, setFrom } from "./authSlice";

export function PrivateRoute({ children, ...rest }) {
  const me = useSelector(selectMe);
  const dispatch = useDispatch();

  return (
    <Route
      {...rest}
      render={({ location }) => {
          if (me) {
            return children;
          }
          dispatch(setFrom(location));
          redirect("/login"); //may be useNavigate()
        }
      }
    />
  );
}
