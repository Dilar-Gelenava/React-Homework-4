import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import Navbar from './components/navbar';
import MainPage from './pages/mainPage';
import AuthPage from './pages/authPage';
import UsersPage from './pages/usersPage';
import ResourcesPage from './pages/resourcesPage';

import ThemeContext from './contexts/themeContext';
import { useCallback } from 'react';
import useLocalStorage from './customHooks/useLocalStorage';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const memoizedCallback = useCallback(
    (t) => {
      setTheme(t);
    },
    [setTheme]
  );

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeContext.Provider value={[theme, memoizedCallback]}>
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
        </ThemeContext.Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
