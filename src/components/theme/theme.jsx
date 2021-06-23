import classNames from 'classnames';
import PropTypes from 'prop-types';

function Theme({ theme, changeTheme }) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="bg-dark p-2 m-3 rounded" style={{ width: '150px' }}>
        <h5 className="text-light w-100 my-1">Select Theme:</h5>
        <button
          onClick={() => changeTheme('dark')}
          className={classNames('btn', 'btn-dark', 'w-100', 'my-1', {
            'border-5 border-start border-end': theme === 'dark',
          })}>
          DARK
        </button>
        <button
          onClick={() => changeTheme('light')}
          className={classNames('btn', 'btn-dark', 'w-100', 'my-1', {
            'border-5 border-start border-end': theme === 'light',
          })}>
          LIGHT
        </button>
      </div>
    </div>
  );
}

Theme.propTypes = {
  theme: PropTypes.string,
  changeTheme: PropTypes.func,
};

export default Theme;
