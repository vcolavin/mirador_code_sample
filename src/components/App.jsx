var React = require('react');

var TodoList = require('./TodoList');

var App = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {note: "eat food", id: 1},
        {note: "go running", id: 2}
      ]
    }
  },

  render: function(){
    return (
      <div id="app">
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
});

module.exports = App;
