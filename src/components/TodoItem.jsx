var React = require('react');

var TodoItem = React.createClass({
  render: function(){
    var todo = this.props.todo

    var className = ""

    if (
      (todo.complete && !this.props.displayComplete) || (!todo.complete && !this.props.displayIncomplete)
      ) {
      className = "hide"
    }

    return (
      <li className={className}>
        <input onChange={this.handleCompleteToggle} type="checkbox"></input>
        <span>{todo.message}</span>
        <button onClick={this.handleDelete}>X</button>
      </li>
    );
  },
  handleDelete: function() {
    this.props.deleteTodo(this.props.todo)
  },

  handleCompleteToggle: function(e) {
    this.props.toggleTodo(this.props.todo)
  }
});

module.exports = TodoItem;
