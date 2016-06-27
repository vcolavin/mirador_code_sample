var React = require('react');

var TodoItem = React.createClass({
  handleClick: function() {
    this.props.deleteTodo(this.props.todo)
  },

  render: function(){
    var todo = this.props.todo
    return (
      <li>
        <span>{todo.message}</span>
        <button onClick={this.handleClick}>X</button>
      </li>
    );
  }
});

module.exports = TodoItem;
