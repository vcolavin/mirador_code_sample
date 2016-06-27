var React = require('react');
var uuid = require('uuid');

var TodoList = require('./TodoList');
var TodoAdder = require('./TodoAdder');

var App = React.createClass({

  getInitialState: function(){
    return {
      todos: [
        {message: "eat food", id: uuid.v4()},
        {message: "go running", id: uuid.v4()}
      ]
    }
  },

  render: function(){
    todos = this.state.todos

    return (
      <div>
        <h1>TODO LIST</h1>
        <TodoAdder addTodo={this.addTodo}/>
        <TodoList deleteTodo={this.deleteTodo} todos={todos}/>
      </div>
    );
  },

  addTodo: function(newTodoMessage){
    this.setState({
      todos: this.state.todos.concat([{
        message: newTodoMessage,
        id: uuid.v4()
      }])
    })
  },

  deleteTodo: function(todoToDelete){
    this.setState({
      todos: this.state.todos.filter (function(todo) {
        return todo.id !== todoToDelete.id
      })
    })
  }
});

module.exports = App;
