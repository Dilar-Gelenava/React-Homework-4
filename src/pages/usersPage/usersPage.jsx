import { loggedIn } from '../../HOC/loggedIn';
import { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState(null);

  const getUsers = () => {
    fetch(`${process.env.REACT_APP_AUTH_URL}/users?page=1`, {
      method: 'GET',
    })
      .then(function (response) {
        if (response.status !== 200) {
          throw response.status;
        }
        return response.json();
      })
      .then(function (responseData) {
        setUsers(responseData.data);
      })
      .catch(function (error) {
        if (error === 404) {
          console.log('Page Not found', error);
        } else {
          console.log('Server Error');
        }
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="d-flex justify-content-around flex-wrap m-4">
      {users &&
        users.map((user) => (
          <div
            className="bg-dark rounded p-3 m-1"
            style={{ width: '250px' }}
            key={user.id}>
            <img className="rounded" src={user.avatar} alt={user.email} />
            <p className="text-light p-1">{user.first_name}</p>
            <p className="text-light p-1">{user.last_name}</p>
            <p className="text-light p-1">{user.email}</p>
          </div>
        ))}
    </div>
  );
}

export default loggedIn(Users);
