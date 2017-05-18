var React = require('react');
var Link = require('react-router').Link

var React = require('react');
var PropTypes = React.PropTypes;

var FeatureWithImgLeft = React.createClass({
shouldComponentUpdate: function() {
  return false
},
  render: function() {
    return (
      <div id="intro">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-6 intro-pic transparent">
                      <img src={this.props.imgSrc} alt="image" className="img-responsive"/>
                  </div>
                  <div className="col-md-6">
                    <div id="triger" className="feature">
                      <h2 id="title" className="title transparent">{this.props.title}</h2>
                      <div className="feature-description transparent">{this.props.p}</div>
                      <div className="btn-section transparent"><Link to={this.props.linkTo} className="btn-default">Узнать больше</Link></div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
})

module.exports = FeatureWithImgLeft;
