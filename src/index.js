import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { store } from './app/store';
import { ListBody, ListHeader} from './pages/list/list';
import { AuthPageBody, AuthPageHeader } from './pages/auth/auth';
import { Container, Navbar } from 'react-bootstrap';
import { AuthHeader, RequireAuth } from "./features/auth/Auth";
import { doWhoami } from "./features/auth/authSlice";
import { ItemHeader, ItemBody } from "./pages/item/Item";
import logo from './logo.svg';
import { UserBody, UserHeader } from './pages/user/User';
import { GroupHeader, GroupBody } from './pages/group/group';
import "./index.css";
import { GroupListHeader, GroupListBody } from './pages/groupList/groupList';
import { ChatBody, ChatHeader } from './pages/chat/chat';
import { doConnect } from './features/websocket/websocketSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));

function TemplateHeader({header}) {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} href="#">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
        <div id="pageheader">
          {header}
        </div>
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
        <Route path="/" element={
          <RequireAuth>
            <Template header={<ListHeader />} body={<ListBody />} />
          </RequireAuth>
        }/>
        <Route path="/item/:id" element={
          <RequireAuth>
            <Template header={<ItemHeader />} body={<ItemBody />} />
          </RequireAuth>
        }/>
        <Route path="/user/:id" element={
          <RequireAuth>
            <Template header={<UserHeader />} body={<UserBody />} />
          </RequireAuth>
        }/>
        <Route path="/group/:id" element={
          <RequireAuth>
            <Template header={<GroupHeader />} body={<GroupBody />} />
          </RequireAuth>
        }/>
        <Route path="/group" element={
          <RequireAuth>
            <Template header={<GroupListHeader />} body={<GroupListBody />} />
          </RequireAuth>
        }/>
        <Route path="/auth" element={
          <Template header={<AuthPageHeader />} body={<AuthPageBody />} />
        }/>
        <Route path="/chat/:id" element={
          <RequireAuth>
            <Template header={<ChatHeader />} body={<ChatBody />} />
          </RequireAuth>
        }/>
      </Routes>
    </Router>
  );
}

store.dispatch(doWhoami())
store.dispatch(doConnect());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
