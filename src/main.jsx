var React = require('react');
var ReactDOM = require('react-dom')

var App = require('./components/App');

if(typeof document !== "undefined")
{
    ReactDOM.render(<App />, document.getElementById('app')
);
}