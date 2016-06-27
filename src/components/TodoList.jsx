var React = require('react');
var TodoItem = require('./TodoItem')

var TodoList = React.createClass({
  handleDeleteTodo: function(todo) {
    this.props.deleteTodo(todo)
  },

  render: function(){
    var todos = this.props.todos

    // `this` is not available inside the map function
    var handleDeleteTodo = this.handleDeleteTodo
    return (
      <div>
        <ul>
          {todos.map(function(todo){
            return <TodoItem deleteTodo={handleDeleteTodo} key={todo.id} todo={todo}/>
          })}
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;
