import Login from '../../components/auth/logIn';
import Register from '../../components/auth/register';
import { useState } from 'react';
import { logOut } from '../../services';
import { useEffect } from 'react';

function AuthPage() {
  const [authPage, setAuthPage] = useState('login');

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('auth.token'));
    if (token) {
      setAuthPage('logout');
    }
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <button
          className={`btn ${authPage === 'login' && 'btn-dark'} m-2`}
          onClick={() => {
            setAuthPage('login');
          }}>
          LOGIN
        </button>
        <button
          className={`btn ${authPage === 'register' && 'btn-dark'} m-2`}
          onClick={() => {
            setAuthPage('register');
          }}>
          REGISTER
        </button>
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <div className="m-3 p-3 bg-dark rounded-3">
          {authPage === 'login' && <Login />}
          {authPage === 'register' && <Register />}
          {authPage === 'logout' && (
            <button
              className="btn btn-primary"
              onClick={() => {
                logOut();
                setAuthPage('login');
              }}>
              Log Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default AuthPage;
