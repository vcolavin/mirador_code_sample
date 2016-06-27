var React = require('react');

var TodoAdder = React.createClass({
  render: function(){
    return (
      <form>
        <input type="text" defaultValue="new todo item!"></input>
        <input type="submit" onClick={this.props.addTodo} value="yeah!"></input>
      </form>
    );
  },
});

module.exports = TodoAdder;
