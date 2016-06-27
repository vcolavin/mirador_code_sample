var React = require('react');
var uuid = require('uuid');

var TodoList = require('./TodoList');
var TodoAdder = require('./TodoAdder');

var App = React.createClass({

  getInitialState: function(){
    return {
      todos: [
        {
          message: "eat food",
          id: uuid.v4(),
          complete: false
        },
        {
          message: "go running",
          id: uuid.v4(),
          complete: false
        }
      ],
      displayComplete: true,
      displayIncomplete: true
    }
  },

  render: function(){
    todos = this.state.todos

    // TODO: break the toggle checkboxes into their own component
    // Maybe they should be a child of the TodoList component?
    return (
      <div>
        <h1>TODO LIST</h1>

        <TodoAdder addTodo={this.addTodo}/>

        <input
          type="checkbox"
          defaultChecked={this.state.displayIncomplete}
          onChange={this.toggleDisplayIncomplete}
        />
        <span>show incomplete</span>
        <br/>
        <input
          type="checkbox"
          defaultChecked={this.state.displayComplete}
          onChange={this.toggleDisplayComplete}
        />
        <span>show complete</span>

        <TodoList
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
          todos={todos}
          displayComplete={this.state.displayComplete}
          displayIncomplete={this.state.displayIncomplete}
        />
      </div>
    );
  },

  toggleDisplayComplete: function(){
    this.setState({
      displayComplete: !this.state.displayComplete
    })
  },

  toggleDisplayIncomplete: function(){
    this.setState({
      displayIncomplete: !this.state.displayIncomplete
    })
  },

  addTodo: function(newTodoMessage){
    this.setState({
      todos: this.state.todos.concat([{
        message: newTodoMessage,
        id: uuid.v4(),
        complete: false
      }])
    })
  },

  deleteTodo: function(todoToDelete){
    this.setState({
      todos: this.state.todos.filter (function(todo) {
        return todo.id !== todoToDelete.id
      })
    })
  },

  toggleTodo: function(todoToToggle){
    this.setState({
      todos: this.state.todos.map(function(todo) {
        if(todo.id === todoToToggle.id) {
          todo.complete = !todo.complete
        }
        return todo
      })
    })
  }
});

module.exports = App;
