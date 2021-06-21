import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import MainPage from './pages/mainPage';
import Navbar from './components/navbar';
import AuthPage from './pages/authPage';
import Users from './pages/usersPage';

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
            <Users />
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
