var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link

function FeatureWithImgRight(props){
    return (
      <div id="intro">
          <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 wow slideInRight feature feature-left">
                  <div className="">
                    <h2>{props.title}</h2>
                    {props.p}
                    <div className="btn-section"><Link to={props.linkTo} className="btn-default">Узнать больше</Link></div>
                  </div>
                </div>
                  <div className="col-md-6 wow slideInLeft intro-pic-left">
                      <img src={props.imgSrc} alt="image" className="img-responsive"/>
                  </div>
              </div>
          </div>
      </div>
    );
  }

module.exports = FeatureWithImgRight;
