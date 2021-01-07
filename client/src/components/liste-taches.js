import React, { Component } from "react";
import axios from 'axios';
import TachesTableRow from './TachesTableRow.js';
import {Table} from "react"

export default class ListeTaches extends Component {

  constructor(props) {
    super(props)
    this.state = {
      taches: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/taches/')
      .then(res => {
        this.setState({
          taches: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.taches.map((res, i) => {
      return <TachesTableRow obj={res} key={i} />;
    });
  }



  render() {
    return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tâche</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>
    );
  }
}
