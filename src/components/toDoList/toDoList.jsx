import { list } from '../toDoList/list';
import { useState } from 'react';
import ThemeContext from '../../contexts/themeContext';

function ToDoList() {
  const [check, setCheck] = useState(false);

  return (
    <ThemeContext.Consumer>
      {([theme]) => {
        return (
          <div className="d-flex align-items-center justify-content-center">
            <table
              className={`table table-${theme} border border-light w-auto`}>
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Task</th>
                  <th scope="col">
                    Done
                    <button
                      onClick={() => setCheck(!check)}
                      className={`btn btn-${theme} border border-2 mx-2`}>
                      Check
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {list &&
                  list.map((item) => (
                    <tr key={item.id}>
                      <th scope="col">{item.id}</th>
                      <th scope="col">{item.task}</th>
                      <th
                        scope="col"
                        className={
                          (check && !item.done && 'bg-danger') || 'bg-success'
                        }>
                        {item.done && 'Done'}
                        {!item.done && 'Not Done'}
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
export default ToDoList;
