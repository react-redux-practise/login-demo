import React, {Component} from 'react';
import {Link} from 'react-router';

class DataList extends Component {


  render() {
    return (
        <div className="col-md-6 offset-md-3 m-t-1">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Link</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td><Link to="card/1">View</Link></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td><Link to="card/2">View</Link></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td><Link to="card/3">View</Link></td>
            </tr>
            </tbody>
          </table>
        </div>
    )

  }
}

export default DataList;