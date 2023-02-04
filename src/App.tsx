import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [value, setValue] = useState<number>(0);
  return (
    <div className="App">
      <div className="container">
  <div className="row">
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
  </div>
</div>
<table className="table table2">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
<p>{value}</p>
<button type="button" className="btn btn-primary" onClick={() => setValue(value === 10 ? 10 : value + 1)}>+1</button>
<button type="button" className="btn btn-primary" onClick={() => setValue(value === 0 ? 0 : value - 1)}>-1</button>

    </div>
  );
};

export default App;
