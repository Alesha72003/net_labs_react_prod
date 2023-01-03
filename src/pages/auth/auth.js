import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { selectAuthLoading, selectError, doLogin, selectMe} from '../../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Alert } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

export function AuthPageHeader() {
    return null;
}

export function AuthPageBody() {
    const loading = useSelector(selectAuthLoading);
    const me = useSelector(selectMe);
    const error = useSelector(selectError);
    const location = useLocation();
    const from = new URLSearchParams(location.search).get("from") || "/";
    const dispatch = useDispatch();

    function handlerSubmit(e) {
        const data = {
            login: e.target.login.value,
            password: e.target.password.value
        };

        e.preventDefault();
        dispatch(doLogin(data));
    }

    return (
        <Container>
            {error ? <Alert variant="danger">{error}</Alert> : null}
            {me ? <Navigate to={from} /> : null}
            <Form onSubmit={(e) => !loading ? handlerSubmit(e) : null}>
                <Form.Group controlId="login">
                    <Form.Label>Login</Form.Label>
                    <Form.Control placeholder="Enter login"></Form.Control>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={false ? "password" : null} placeholder="Enter password"></Form.Control>
                </Form.Group>
                <Button type="submit" disabled={loading}>{loading ? "Loading..." : "Login"}</Button>
            </Form>
        </Container>
    );
}
