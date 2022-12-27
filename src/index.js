import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { store } from './app/store';
import { ListBody, ListHeader} from './pages/list/list';
import { AuthPageBody, AuthPageHeader } from './pages/auth/auth';
import { Navbar, Container } from 'react-bootstrap';
import { AuthHeader, RequireAuth } from "./tools/auth/Auth";
import logo from './logo.svg';

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
        {header()}
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
        {body()}
      </div>
    </>
  );
}



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <RequireAuth>
                <Template header={ListHeader} body={ListBody} />
              </RequireAuth>
            } 
          />
          <Route path="/auth" element={<Template header={AuthPageHeader} body={AuthPageBody} />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
