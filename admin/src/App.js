/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from './containers/main-layout';
import GlobalStyles from './global-styles';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import UsersPage from './pages/users';
import CoursesPage from './pages/courses';

import store from './store';

function App() {
  return (
    <Provider store={store}>
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
          <Route exact path="/courses">
            <CoursesPage />
          </Route>
        </MainLayout>
      </Router>
    </Provider>
  );
}

export default App;
