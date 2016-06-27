var React = require('react');

var TodoAdder = React.createClass({
  getInitialState: function(){
    return {newTodoValue: "new todo!"}
  },

  handleChange: function(event) {
    this.setState({newTodoMessage: event.target.value});
  },

  render: function(){
    return (
      <form value={this.state.newTodoMessage} onSubmit={this.props.addTodo}>

        <input type="text" onChange={this.handleChange} defaultValue={this.props.newTodoMessage}></input>

        <input type="submit" value="add this todo!"></input>

      </form>
    );
  },
});

module.exports = TodoAdder;
