var React = require('react');
var uuid = require('uuid');

var TodoList = require('./TodoList');

var App = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {note: "eat food", id: uuid.v4()},
        {note: "go running", id: uuid.v4()}
      ]
    }
  },

  render: function(){
    todos = this.state.todos

    return (
      <div>
        <h1> TODO LIST </h1>
        <button onClick={this.addTodo}>add a note!</button>
        <TodoList todos={todos}/>
      </div>
    );
  },

  addTodo: function(){
    this.setState({
      todos: this.state.todos.concat([{
        note: "new todo!",
        id: uuid.v4()
      }])
    })
    console.log("adding note!")
  },
  deleteTodo: function(){console.log("deleting todo!")}
});

module.exports = App;
