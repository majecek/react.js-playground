var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = "Marek";
var message = "this is from root component";


ReactDOM.render(
    <Greeter name={firstName}/>, document.getElementById('app')
);
