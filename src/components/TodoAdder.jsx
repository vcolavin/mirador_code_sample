var React = require('react');

var TodoAdder = React.createClass({
  getInitialState: function(){
    return {newTodoMessage: "your new todo!"}
  },

  handleChange: function(e) {
    this.setState({newTodoMessage: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.addTodo(this.state.newTodoMessage)
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>

        <input type="text" onChange={this.handleChange} defaultValue={this.state.newTodoMessage}></input>

        <input type="submit" value="add this todo!"></input>

      </form>
    );
  },
});

module.exports = TodoAdder;
