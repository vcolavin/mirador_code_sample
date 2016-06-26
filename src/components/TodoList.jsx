var React = require('react');

var TodoList = React.createClass({
  render: function(){
    return (
      <h1>{this.props.messages[0].note}</h1>
    );
  },

  addNote: function(){console.log("add a note!")},
  deleteNote: function(){console.log("delete a note!")}
});

module.exports = TodoList;
