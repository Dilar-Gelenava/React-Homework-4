import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import MainPage from './pages/mainPage';
import Navbar from './components/navbar/navbar';
import Auth from './pages/auth/auth';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/auth">
            <Auth />
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
