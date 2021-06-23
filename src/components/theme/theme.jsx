import classNames from 'classnames';
import ThemeContext from '../../contexts/themeContext';

function Theme() {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => {
        return (
          <div className="d-flex align-items-center justify-content-center">
            <div className="bg-dark p-2 m-3 rounded" style={{ width: '150px' }}>
              <h5 className="text-light w-100 my-1">Select Theme:{theme}</h5>
              <button
                onClick={() => setTheme('dark')}
                className={classNames('btn', 'btn-dark', 'w-100', 'my-1', {
                  'border-5 border-start border-end': theme === 'dark',
                })}>
                DARK
              </button>
              <button
                onClick={() => setTheme('light')}
                className={classNames('btn', 'btn-dark', 'w-100', 'my-1', {
                  'border-5 border-start border-end': theme === 'light',
                })}>
                LIGHT
              </button>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Theme;
