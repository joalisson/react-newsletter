var React = require('react');
var ReactDOM = require('react-dom');
var reqwest = require('reqwest');
var Boostrap = require('react-bootstrap');

var FormSubmit = React.createClass({

  getInitialState: function() {
    return {email: ''};
  },
  handleChange: function(event) {
    this.setState({email: event.target.value});
  },
  checkEmail: function() {
    var validEmailRegex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email = this.state.email;
    if (validEmailRegex.test(email)) {
      reqwest({
        method: 'POST',
        url: '/',
        data: { email },
      });
    return (<Boostrap.Alert bsStyle="warning">Message</Boostrap.Alert>);
    }
    return (<Boostrap.Alert bsStyle="warning">Message</Boostrap.Alert>);
  },

  render: function() {
    return(
    <div>
      <Boostrap.FormControl value={this.state.email}
      onChange={this.handleChange} />
      <Boostrap.Button type="button" onClick={this.checkEmail} disabled={!this.state.email}>Button</Boostrap.Button>
    </div>
    )}
});

ReactDOM.render(<FormSubmit />, document.getElementById('app'));
