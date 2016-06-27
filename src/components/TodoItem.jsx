var React = require('react');

var TodoItem = React.createClass({
  render: function(){
    var todo = this.props.todo
    return (
      <li>
        <input onChange={this.handleCompleteToggle} type="checkbox"></input>
        <span>{todo.message}</span>
        <button onClick={this.handleClick}>X</button>
      </li>
    );
  },
  handleClick: function() {
    this.props.deleteTodo(this.props.todo)
  },

  handleCompleteToggle: function(e) {
    this.props.toggleTodo(this.props.todo)
  }
});

module.exports = TodoItem;
