var React = require('react');
var PropTypes = React.PropTypes;

var Main = React.createClass({
componentDidMount: function() {
  var scene = document.getElementById('js-scene');
  var parallax = new Parallax(scene);
},
  render: function() {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }

});

module.exports = Main;
