import { Redirect } from 'react-router';

export const loggedIn = (Component) => {
  const LoggedIn = (props) => {
    const token = JSON.parse(localStorage.getItem('auth.token'));
    if (!token) return <Redirect to="/auth"></Redirect>;

    return <Component {...props}></Component>;
  };

  return LoggedIn;
};
