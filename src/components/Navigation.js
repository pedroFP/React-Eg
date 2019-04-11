import React, {Component} from 'react';
import {todos} from '../todos.json'

class Navigation extends Component {
  constructor() {
    super(); //Hereda la funcionalidad de todos los componentes de React
    this.state = {
      todos // todos: todos
    }
  }

  render() {
    return (
      <nav className="navbar bg-dark  navbar-expand-lg">
        <a href="" className="navbar-brand text-white">
          {this.props.titulo}
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navigation;
