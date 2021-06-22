import { Redirect } from 'react-router';

export const loggedOut = (Component) => {
  const LoggedOut = (props) => {
    const token = JSON.parse(localStorage.getItem('auth.token'));
    if (token) return <Redirect to="/"></Redirect>;

    return <Component {...props}></Component>;
  };

  return LoggedOut;
};
