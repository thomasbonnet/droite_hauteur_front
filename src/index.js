import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {View, Text} from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
//import FetchExample from './essais';
import * as serviceWorker from './serviceWorker';

/* class FillTheForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render(){
    return (
      <div className="App">
      <Form>
        <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control type="text" placeholder="Date du jour" />
        <br />
        <Form.Label>Example select</Form.Label>
        <Form.Control type="text" placeholder="Hv" />
        <br />
        <Form.Label>Example select</Form.Label>
        <Form.Control type="text" placeholder="Latitude estimée" />
        <br />
        <Form.Label>Example select</Form.Label>
        <Form.Control type="text" placeholder="Longitude estimée" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => this.setState({value: 'X'})}> 
          Calculer
        </Button>
      </Form>
    </div>
    );
  }
}

class SimpleForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:''};
  }
  render(){
    return(
      <View>
        <Text>First part and </Text>
        <Text>second part</Text>
      </View>
    );
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.text = ''
    this.state = {value:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  textchange(text) {
    this.text = text;
    this.setState({value: text})
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value+ this.text);
    console.log(this.text);
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.value} onChange={() => this.setState({value: this.value})} />
        </label>
        <label>
          Date:
          <input type="text" value={this.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Results extends React.Component{
  render(){
    return(
      <View>
        <Text>First part and </Text>
        <Text>second part</Text>
      </View>
    );
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
 */


// ========================================

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
