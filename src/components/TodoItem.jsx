var React = require('react');

var TodoItem = React.createClass({
  render: function(){
    var todo = this.props.todo
    return (
      <li>
        <span>{todo.note}</span>
        <button>X</button>
      </li>
    );
  }
});

module.exports = TodoItem;
