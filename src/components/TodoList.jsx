var React = require('react');

var TodoList = React.createClass({
  render: function(){
    return (
      <div>
        <h1> TODO LIST </h1>
        <ul>
          {this.props.todos.map(function(todo){
            return <li key={todo.id}>{todo.note}</li>
          })}
        </ul>
      </div>
    );
  },

  addNote: function(){console.log("add a note!")},
  deleteNote: function(){console.log("delete a note!")}
});

module.exports = TodoList;
