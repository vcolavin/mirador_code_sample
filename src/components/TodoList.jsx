var React = require('react');
var TodoItem = require('./TodoItem')

var TodoList = React.createClass({

  render: function(){
    var todos = this.props.todos

    // `this` is not available inside the map function
    var handleDeleteTodo = this.handleDeleteTodo
    var toggleTodo = this.toggleTodo
    return (
      <div>
        <ul>
          {todos.map(function(todo){
            return <TodoItem toggleTodo={toggleTodo} deleteTodo={handleDeleteTodo} key={todo.id} todo={todo}/>
          })}
        </ul>
      </div>
    );
  },

  handleDeleteTodo: function(todo) {
    this.props.deleteTodo(todo)
  },

  toggleTodo: function(todo) {
    this.props.toggleTodo(todo)
  }
});

module.exports = TodoList;
