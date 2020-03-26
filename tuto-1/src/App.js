import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {toDos} from './toDos.json';
import TodoForm from './components/TodoForm';



class App extends Component {
  //CREACION DEL CONSTRUCTOR PARA PROCESAR LOS DATOS
  constructor(){
    super();
    this.state = {
      toDos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
//METODO PARA ELIMINAR UN TASK
  removeTodo(index) {
    this.setState({
      toDos: this.state.toDos.filter((e, i) => {
        return i !== index
      })
    });
  }
//METODO PARA AÑADIR UN TASK
  handleAddTodo(toDo) {
    this.setState({
      toDos: [...this.state.toDos, toDo]
    })
  }

  render(){
    const toDos = this.state.toDos.map((toDo, i) =>{
      return (
        <div className="col-md-4">
          <div className="card mt-5">
          <div className="card-header">
            <h3>{toDo.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">
              {toDo.priority}
            </span>
          </div>
          <div className="card-body">
            <p>{toDo.description}</p>
            <p>{toDo.responsible}</p>
          </div>
          <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
       </div>

        </div>
      )
    })
    // RETURN DEL  COMPONENT
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    Tasks
                    <span className="badge badge-pill badge-light ml-2">
                      {this.state.toDos.length}
                    </span>
                </a>
        </nav>
        <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="container">
          <div className="row mt-4 mr-9">

            <div className="col-md-4 text-center">
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {toDos}
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-dark">
          esto es un footer
        </footer>
      </div>
    );
  }
}

export default App;
