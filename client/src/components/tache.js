import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Tache extends Component {

    
  constructor(props) {
    super(props)

    this.onChangeTacheName = this.onChangeTacheName.bind(this);
    this.onChangeTacheDescription = this.onChangeTacheDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      tache: '',
      description: ''
    }
  }

  onChangeTacheName(e) {
    this.setState({name: e.target.value})
  }

  onChangeTacheDescription(e) {
    this.setState({description: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    console.log(`Tâche créée avec succès!`);
    console.log(`Nom de la tâche: ${this.state.name}`);
    console.log(`Description: ${this.state.description}`);

    const tacheObject = {
      name: this.state.name,
      edescription: this.state.description,
    };

    axios.post('http://localhost:4000/tache/creer-tache', tacheObject)
    .then(res => console.log(res.data));

    
    this.setState({name: '', description: ''})
  }


  render() {
    return (<div class="form-wrapper">
      <Form>
        <Form.Group controlId="Nom">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Créer la tâche
        </Button>
      </Form>
    </div>);
  }
}