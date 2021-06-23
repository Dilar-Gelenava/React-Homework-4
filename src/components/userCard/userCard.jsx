import PropTypes from 'prop-types';
import React, { memo } from 'react';

function UserCard({ user, theme }) {
  return (
    <div className={`bg-${theme} rounded p-3 m-1`} style={{ width: '250px' }}>
      <img className="rounded w-100" src={user.avatar} alt={user.email} />
      <div className="bg-secondary mt-3 p-2 rounded">
        <p className="text-light p-1">{user.first_name}</p>
        <p className="text-light p-1">{user.last_name}</p>
        <p className="text-light p-1">{user.email}</p>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.object,
  theme: PropTypes.string,
};

export default memo(UserCard);
