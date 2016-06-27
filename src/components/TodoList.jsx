var React = require('react');
var TodoItem = require('./TodoItem')

var TodoList = React.createClass({
  render: function(){
    var todos = this.props.todos
    return (
      <div>
        <ul>
          {todos.map(function(todo){
            return <TodoItem key={todo.id} todo={todo}/>
          })}
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;
