var React = require('react');
var TodoItem = require('./TodoItem')

var TodoList = React.createClass({

  // TODO: This component does exceedingly little

  render: function(){
    var todos = this.props.todos

    return (
      <div>
        <ul>
          {todos.map(function(todo){
            return (

              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={this.toggleTodo}
                deleteTodo={this.handleDeleteTodo}
                displayComplete={this.props.displayComplete}
                displayIncomplete={this.props.displayIncomplete}
              />
            )
          }, this)}
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
