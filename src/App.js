import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//data
import {todos} from './todos.json'

//subcomponents
import Navigation from './components/Navigation';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map(function(todo, i) {
      return (
        <div className="col-md-4 mt-4" key={i}>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">{todo.title}</h5>
              <span className="badge badge-primary">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p className="card-text">{todo.description}</p>
              <p className="card-text">{todo.responsible}</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-danger" onClick={this.removeTodo.bind(this, i)} > Borrar </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      // THIS IS NOT HTML
      <div className="App">
        <Navigation titulo = "Tasks" />
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <Form onAddTodo={this.handleAddTodo}></Form>
            </div>
            <div className="col-md-8">
              <div className="row">{todos}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
