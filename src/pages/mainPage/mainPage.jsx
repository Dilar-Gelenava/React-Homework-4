import Theme from '../../components/theme/theme';
import ToDoList from '../../components/toDoList/toDoList';
import React, { useCallback } from 'react';
import useLocalStorage from '../../customHooks/useLocalStorage';

function MainPage() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const memoizedCallback = useCallback(
    (t) => {
      setTheme(t);
    },
    [setTheme]
  );

  return (
    <div>
      <Theme theme={theme} changeTheme={memoizedCallback} />
      <ToDoList theme={theme} />
    </div>
  );
}

export default MainPage;
