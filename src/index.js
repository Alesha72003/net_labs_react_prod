import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { store } from './app/store';
import { ListBody, ListHeader} from './pages/list/list';
import { AuthPageBody, AuthPageHeader } from './pages/auth/auth';
import { Navbar, Container } from 'react-bootstrap';
import { AuthHeader, RequireAuth } from "./features/auth/Auth";
import { doWhoami } from "./features/auth/authSlice";
import { ItemHeader, ItemBody } from "./pages/item/Item";
import logo from './logo.svg';
import { UserBody, UserHeader } from './pages/user/User';

const root = ReactDOM.createRoot(document.getElementById('root'));

function TemplateHeader({header}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
        {header}
        <AuthHeader />
      </Container>
    </Navbar>
  );
}

function Template({header, body}) {
  return (
    <>
      <div id="header">
        <TemplateHeader header={header} />
      </div> 
      <div id="body">
        {body}
      </div>
    </>
  );
}

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Template header={<ListHeader />} body={<ListBody />} />
            </RequireAuth>
          }
        />
        <Route
          path="/item/:id"
          element={
            <RequireAuth>
              <Template header={<ItemHeader />} body={<ItemBody />} />
            </RequireAuth>
          }
        />
        <Route
          path="/testuser"
          element={
            <Template header={<UserHeader />} body={<UserBody />} />
          }
        />
        <Route path="/auth" element={<Template header={<AuthPageHeader />} body={<AuthPageBody />} />} />
      </Routes>
    </Router>
  );
}

store.dispatch(doWhoami())

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
