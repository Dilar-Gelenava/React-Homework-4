import PropTypes from 'prop-types';
import React, { memo } from 'react';

function UserCard({ user }) {
  return (
    <div className="bg-dark rounded p-3 m-1" style={{ width: '250px' }}>
      <img className="rounded" src={user.avatar} alt={user.email} />
      <p className="text-light p-1">{user.first_name}</p>
      <p className="text-light p-1">{user.last_name}</p>
      <p className="text-light p-1">{user.email}</p>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.object,
};

export default memo(UserCard);
