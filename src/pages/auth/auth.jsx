import Login from '../../components/auth/login';
import Register from '../../components/auth/register';
import { useState } from 'react';

function Auth() {
  const [authPage, setAuthPage] = useState('login');

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
        </div>
      </div>
    </div>
  );
}
export default Auth;
