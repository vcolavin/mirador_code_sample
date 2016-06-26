var React = require('react');

var TodoList = require('./TodoList');

var App = React.createClass({
  getInitialState: function(){
    return {
      messages: [
        {note: "eat food"},
        {note: "go running"}
      ]
    }
  },

  render: function(){
    return (
      <div id="app">
        <TodoList messages={this.state.messages}/>
      </div>
    );
  }
});

module.exports = App;
