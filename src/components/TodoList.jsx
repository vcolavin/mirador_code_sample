var React = require('react');

var TodoList = React.createClass({
  render: function(){
    var todos = this.props.todos
    return (
      <div>
        <ul>
          {todos.map(function(todo){
            return <li key={todo.id}>{todo.note}</li>
          })}
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;
