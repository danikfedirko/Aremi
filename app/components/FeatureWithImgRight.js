var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link

function FeatureWithImgRight(props){
    return (
      <div id="feature-2">
          <div className="container-fluid">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5 feature feature-left">
                  <div className="">
                    <h2 id="title" className="transparent">{props.title}</h2>
                    <div className="feature-description transparent">{props.p}</div>
                    <div className="btn-section transparent"><Link to={props.linkTo} className="btn-default">Узнать больше</Link></div>
                  </div>
                </div>
                  <div className="col-md-6 intro-pic-right transparent">
                      <img src={props.imgSrc} alt="image" className="img-responsive"/>
                  </div>
              </div>
          </div>
      </div>
    );
  }

module.exports = FeatureWithImgRight;
