var React = require('react');

var TodoAdder = React.createClass({
  render: function(){
    return (
      <div>
        <input type="text" defaultValue="new todo item!"></input>
        <button>add it!</button>
      </div>
    );
  }
});

module.exports = TodoAdder;
