var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

      return (
        <div>
          <h1>Hello {name}</h1>
          <p>{message}</p>
        </div>
      );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var updates = {};

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name= name;
    }
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message= message;
    }
    this.props.onNewData(updates);
  },

  render: function() {
      return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <div><input type="text" ref="name" placeholder="Enter name" /></div>
            <div><textarea placeholder="Enter message" ref="message" /></div>
            <div><button>Submit</button></div>
          </form>
        </div>
      );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'this is default message'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },

  handleNewData: function(updates) {
      this.setState(updates);
  },

  render: function() {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewData={this.handleNewData} />

      </div>
    );
  }
});

var firstName = "Marek";
var message = "this is from root component";


ReactDOM.render(
    <Greeter  />, document.getElementById('app')
);
