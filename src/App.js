import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import Navbar from './components/navbar';
import MainPage from './pages/mainPage';
import AuthPage from './pages/authPage';
import UsersPage from './pages/usersPage';
import ResourcesPage from './pages/resourcesPage';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
          <Route path="/resources">
            <ResourcesPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
