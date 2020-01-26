import React, { Component } from "react";

import List from './List';

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
  handleOnChange = e => {
    const { target: { value } } = e;

    // Updating our task state with the input value...
    this.setState({
      task: value
    });
  }
}
export default Todo;


/*
Our JSX is divided into two parts. 
The first one is a form with an input that is connected to our local state (this.state.task), 
and we will save the task when the user submits the form (onSubmit). 
The second part is the component list where we are going to display our Todo list (or tasks list), 
passing the items array and the markAsCompleted (to mark a task as a completed) and 
removeTask (to remove the task from the list) functions.
*/