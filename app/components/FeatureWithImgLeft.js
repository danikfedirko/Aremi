var React = require('react');
var Link = require('react-router').Link
var PropTypes = React.PropTypes;

var FeatureWithImgLeft = React.createClass({
shouldComponentUpdate: function() {
  return false
},
componentDidMount: function() {
  if (this.props.linkTo==null){
    document.querySelectorAll('#works.btn-default').style.display = 'none'
  }
},
  render: function() {
    var showButton = this.props.showButton;
    return (
      <div id="intro">
        <div className="items">
          <div className="items__inner" id="js-scene">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-6 intro-pic transparent">
                        <img src={this.props.imgSrc} alt="image" className="img-responsive"/>
                   </div>
                  <div className="col-md-6">
                    <div className="feature">
                      <h2 id="title" className="title transparent">{this.props.title}</h2>
                      <div className="feature-description transparent">{this.props.p}</div>
                        { showButton ? (
                            <div className="btn-section transparent"><Link to={this.props.linkTo} className="btn-default">Узнать больше</Link></div>
                          ): (<div></div>)
                        }
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
})
FeatureWithImgLeft.propTypes={
  showButton: PropTypes.bool
}

module.exports = FeatureWithImgLeft;
