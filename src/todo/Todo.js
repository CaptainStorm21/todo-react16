import React, { Component } from "react";
import "./Todo.css";

// npm install uuid (randomId generator)
import uuidv4 from 'uuid/v4';

class Todo extends Component {
  /*
    Constructor: A constructor is a unique method that is executed before the object is initialized. 
    A constructor can use the super keyword to call the constructor of the super class (parent class). 
    This method is used to initialize our local state or to bind our methods. 
    */
  constructor() {
    super();

    // Initial state...
    this.state = {
      task: "",
      items: []
    };
  }

  /*
  The componentWillMount method is executed once before the component is mounted.
  */
 componentWillMount() {
    // Setting default tasks...
    this.setState({
      items: [
        {
          id: uuidv4(),
          task: 'Pay the rent',
          completed: false
        },
        {
          id: uuidv4(),
          task: 'Go to the gym',
          completed: false
        },
        {
          id: uuidv4(),
          task: 'Do my homework',
          completed: false
        }
      ]
    });
  }

  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>

        <form onSubmit={this.handleOnSubmit}>
          <input 
            value={this.state.task} 
            onChange={this.handleOnChange} 
          />
        </form>

        <List
          items={this.state.items}
          markAsCompleted={this.markAsCompleted}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}
export default Todo;
