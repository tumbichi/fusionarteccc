/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import UsersPage from './pages/users';
import GlobalStyles from './global-styles';
import MainLayout from './containers/main-layout';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <MainLayout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
          </Switch>
          <Route exact path="/users">
            <UsersPage />
          </Route>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
