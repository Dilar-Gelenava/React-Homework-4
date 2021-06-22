import { loggedIn } from '../../HOC/loggedIn';
import { useState, useEffect } from 'react';

function ResourcesPage() {
  const [resources, setResources] = useState(null);

  const getResources = () => {
    fetch(`${process.env.REACT_APP_AUTH_URL}/unknown`, {
      method: 'GET',
    })
      .then(function (response) {
        if (response.status !== 200) {
          throw response.status;
        }
        return response.json();
      })
      .then(function (responseData) {
        setResources(responseData.data);
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
    getResources();
  }, []);

  return (
    <div className="d-flex justify-content-around flex-wrap m-4">
      <table className="table table-dark table-bordered border-secondary table-responsive w-auto">
        <thead className="table-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
            <th scope="col">Color</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        {resources &&
          resources.map((resource) => (
            <tbody>
              <tr>
                <th scope="row">{resource.id}</th>
                <td>{resource.name}</td>
                <td>{resource.year}</td>
                <td style={{ background: resource.color }}>{resource.color}</td>
                <td>{resource.pantone_value}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}
export default loggedIn(ResourcesPage);
