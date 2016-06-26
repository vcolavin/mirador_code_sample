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
      <TodoList todos={todos}/>
    );
  }
});

module.exports = App;
