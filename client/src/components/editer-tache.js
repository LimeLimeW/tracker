import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditerTache extends Component {

  constructor(props) {
    super(props)

    this.onChangeTacheName = this.onChangeTacheName.bind(this);
    this.onChangeTacheDescription = this.onChangeTacheDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/taches/editer-tache/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          description: res.data.description,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeTacheName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeTacheDescription(e) {
    this.setState({ email: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const tacheObject = {
      name: this.state.name,
      description: this.state.description,
    };

    axios.put('http://localhost:4000/taches/update-tache/' + this.props.match.params.id, tacheObject)
      .then((res) => {
        console.log(res.data)
        console.log('Tâche mise à jour')
      }).catch((error) => {
        console.log(error)
      })
  
    this.props.history.push('/liste-taches')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeTacheName} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeTacheDescription} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Mettre à jour la tâche
        </Button>
      </Form>
    </div>);
  }
}