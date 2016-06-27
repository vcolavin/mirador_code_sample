var React = require('react');

var TodoAdder = React.createClass({
  getInitialState: function() {
    return {}
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>

        <input type="text" onChange={this.handleChange}  placeholder="put in a new to do!"></input>

        <input type="submit" value="add this todo!"></input>

      </form>
    );
  },

  handleChange: function(e) {
    this.setState({newTodoMessage: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.newTodoMessage) {
      this.props.addTodo(this.state.newTodoMessage)
    }
  }
});

module.exports = TodoAdder;
