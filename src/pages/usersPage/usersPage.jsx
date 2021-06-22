import { loggedIn } from '../../HOC/loggedIn';
import UserCard from '../../components/userCard/userCard';
import { useState, useEffect } from 'react';

function UsersPage() {
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
      {users && users.map((user) => <UserCard key={user.id} user={user} />)}
    </div>
  );
}

export default loggedIn(UsersPage);
